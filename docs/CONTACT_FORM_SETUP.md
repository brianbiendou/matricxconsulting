# Guide : Configuration des variables d'environnement pour Netlify

## 📋 Variables à configurer dans Netlify

Si vous déployez sur **Netlify**, vous devez ajouter ces variables dans le dashboard :

### Étapes :
1. Allez sur votre dashboard Netlify
2. Site settings → Environment variables
3. Ajoutez ces variables :

```
BREVO_API_KEY=votre_cle_api_brevo_ici
BREVO_LIST_ID=3
```

⚠️ **Important** : Ces variables sont pour les **fonctions Netlify** (backend), pas pour le frontend.

> 🔐 **Note** : Ne jamais commiter de vraies clés API. Récupérez votre clé sur [app.brevo.com](https://app.brevo.com) → SMTP & API → Clés API

---

## 🎯 Ce qui a été configuré :

### ✅ Fonction Netlify créée
**Fichier** : `netlify/functions/send-contact.js`

**Ce qu'elle fait** :
1. Reçoit les données du formulaire de contact
2. Envoie un email de **notification** à `consultingmatricx@gmail.com` (Template #3)
3. Envoie un email de **confirmation** à l'utilisateur (Template #2)
4. (Optionnel) Ajoute le contact dans Brevo CRM

### ✅ Formulaire mis à jour
**Fichier** : `src/pages/Contact.tsx`

**Changements** :
- Envoie les données à `/.netlify/functions/send-contact`
- Gère les erreurs proprement
- Affiche un message de succès après l'envoi

---

## 🚀 Pour tester en local :

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Lancer en mode dev avec les fonctions
netlify dev
```

Votre site sera sur `http://localhost:8888` avec les fonctions actives.

---

## 📧 Templates Brevo utilisés :

- **Template #3** : "Contact From Notification" → Vous recevez ce mail
- **Template #2** : "Contact rempli" → L'utilisateur reçoit ce mail

---

## ✅ Checklist avant déploiement :

- [ ] Variables BREVO configurées dans Netlify
- [ ] Templates #2 et #3 activés dans Brevo
- [ ] Email `consultingmatricx@gmail.com` vérifié dans Brevo
- [ ] Test du formulaire en local avec `netlify dev`
- [ ] Déploiement sur Netlify

---

## 🆘 Dépannage :

**Erreur : "BREVO_API_KEY is not defined"**
→ Vérifiez que les variables sont bien dans Netlify dashboard

**Email non reçu**
→ Vérifiez les templates sont "Actifs" dans Brevo
→ Vérifiez l'email expéditeur est vérifié

**Formulaire ne s'envoie pas**
→ Ouvrez la console du navigateur (F12) pour voir les erreurs
→ Vérifiez que vous êtes sur Netlify (les fonctions ne marchent pas sur Hostinger)
