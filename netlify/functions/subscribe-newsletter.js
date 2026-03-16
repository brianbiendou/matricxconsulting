// Netlify Function pour gérer l'inscription newsletter
// Cette fonction cache la clé API Brevo

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
    // Récupérer l'email depuis le body
    const { email } = JSON.parse(event.body);

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Email invalide' })
      };
    }

    // Appeler Brevo API avec la clé cachée
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        listIds: [parseInt(process.env.BREVO_LIST_ID)],
        updateEnabled: false,
        attributes: {
          SOURCE: 'Website Popup',
          SIGNUP_DATE: new Date().toISOString()
        }
      })
    });

    const data = await response.json();

    if (response.ok) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ success: true, message: 'Inscription réussie' })
      };
    } else if (data.code === 'duplicate_parameter') {
      return {
        statusCode: 409,
        headers,
        body: JSON.stringify({ error: 'Cet email est déjà inscrit' })
      };
    } else {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Erreur lors de l\'inscription' })
      };
    }
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Erreur serveur' })
    };
  }
};
