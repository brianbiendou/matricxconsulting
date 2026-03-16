// Netlify Function pour gérer l'envoi d'emails de contact via Brevo
// Cette fonction envoie un email de notification ET un email de confirmation

exports.handler = async (event, context) => {
  // Autoriser uniquement POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  // CORS - Autoriser votre domaine ET localhost pour le dev
  const allowedOrigins = [
    'https://matricxconsulting.com',
    'https://www.matricxconsulting.com',
    'https://matricxconsulting.netlify.app',
    'http://localhost:3000',
    'http://localhost:5173',
    'http://localhost:8888'
  ];
  
  const origin = event.headers.origin || event.headers.Origin;
  const allowOrigin = allowedOrigins.includes(origin) ? origin : 'https://matricxconsulting.com';
  
  const headers = {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Gérer les requêtes OPTIONS (preflight)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    // Récupérer les données du formulaire
    const { name, email, company, phone, message } = JSON.parse(event.body);

    // Validation
    if (!name || !email || !phone || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Tous les champs obligatoires doivent être remplis' })
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Email invalide' })
      };
    }

    // 1. Envoyer l'email de NOTIFICATION (à consultingmatricx@gmail.com)
    const notificationResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        sender: {
          name: 'MatriCx Website',
          email: 'consultingmatricx@gmail.com'
        },
        to: [
          {
            email: 'consultingmatricx@gmail.com',
            name: 'MatriCx Consulting'
          }
        ],
        templateId: 3, // ID du template "Contact From Notification"
        params: {
          name: name,
          email: email,
          company: company || 'Non renseigné',
          phone: phone,
          message: message
        }
      })
    });

    if (!notificationResponse.ok) {
      const errorData = await notificationResponse.json();
      console.error('Brevo notification error:', errorData);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Erreur lors de l\'envoi de la notification' })
      };
    }

    // 2. Envoyer l'email de CONFIRMATION (à l'utilisateur)
    const confirmationResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        sender: {
          name: 'MatriCx Consulting',
          email: 'consultingmatricx@gmail.com'
        },
        to: [
          {
            email: email,
            name: name
          }
        ],
        templateId: 2, // ID du template "Contact rempli"
        params: {
          name: name,
          email: email
        }
      })
    });

    if (!confirmationResponse.ok) {
      const errorData = await confirmationResponse.json();
      console.error('Brevo confirmation error:', errorData);
      // On continue quand même car la notification principale a été envoyée
    }

    // 3. (Optionnel) Ajouter le contact dans Brevo CRM
    try {
      await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': process.env.BREVO_API_KEY,
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          attributes: {
            PRENOM: name.split(' ')[0],
            NOM: name.split(' ').slice(1).join(' ') || name,
            SMS: phone,
            COMPANY: company || '',
            SOURCE: 'Contact Form'
          },
          updateEnabled: true
        })
      });
    } catch (crmError) {
      // Si l'ajout au CRM échoue, ce n'est pas grave
      console.log('CRM add skipped:', crmError);
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: 'Message envoyé avec succès' 
      })
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Erreur serveur' })
    };
  }
};