# Configuration Brevo (Sendinblue) pour la Newsletter

## Étape 1 : Créer un compte Brevo

1. **Allez sur** : https://www.brevo.com/
2. **Créez un compte gratuit** (jusqu'à 300 emails/jour)
3. **Confirmez votre email**

## Étape 2 : Obtenir votre API Key

1. **Connectez-vous à Brevo**
2. **Cliquez sur votre nom** (en haut à droite) → **SMTP & API**
3. **Onglet "API Keys"**
4. **Cliquez sur "Generate a new API key"**
5. **Donnez un nom** : "MatriCx Website Newsletter"
6. **Copiez la clé** (format: `xkeysib-xxxxx`)

## Étape 3 : Créer une liste de contacts

1. **Allez dans "Contacts"** → **"Lists"**
2. **Cliquez sur "Create a list"**
3. **Nom** : "Newsletter Website"
4. **Notez l'ID de la liste** (visible dans l'URL ou les détails)

## Étape 4 : Configurer le code

### Option A : Variables d'environnement (recommandé)

1. **Créez un fichier `.env.local`** à la racine du projet :

```env
VITE_BREVO_API_KEY=xkeysib-votre-clé-api-ici
VITE_BREVO_LIST_ID=2
```

2. **Modifiez `NewsletterPopup.tsx`** :

```typescript
const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY;
const BREVO_LIST_ID = parseInt(import.meta.env.VITE_BREVO_LIST_ID);
```

### Option B : Backend sécurisé (production recommandée)

Pour plus de sécurité, créez une API backend qui gère l'appel à Brevo.

## Étape 5 : Tester

1. **Lancez le site** : `npm run dev`
2. **Attendez 5 secondes** → la popup apparaît
3. **Entrez un email de test**
4. **Vérifiez dans Brevo** → Contacts → votre liste

## Étape 6 : Personnaliser

Dans `src/components/NewsletterPopup.tsx`, vous pouvez modifier :

- **Délai d'affichage** : `delay={5000}` (5 secondes)
- **Texte de la popup**
- **Couleurs** (actuellement jaune MatriCx)
- **Comportement** (stockage localStorage)

## Fonctionnalités incluses

✅ Popup après 5 secondes de navigation
✅ Validation email
✅ Envoi à Brevo via API
✅ Message de succès
✅ Gestion des doublons
✅ Stockage local (ne s'affiche qu'une fois)
✅ Design responsive
✅ Animation fluide
✅ Respect RGPD (note de confidentialité)

## API Brevo - Endpoints utilisés

- **POST** `/v3/contacts` : Créer/ajouter un contact
- **Headers** :
  - `api-key` : Votre clé API
  - `content-type` : application/json

## Limites du plan gratuit Brevo

- 300 emails/jour
- Contacts illimités
- Logo Brevo dans les emails
- Support par email

## Pour production

1. ✅ Utilisez `.env.local` (ne commit pas ce fichier)
2. ✅ Ajoutez `.env.local` dans `.gitignore`
3. ✅ Configurez les variables d'environnement sur Hostinger
4. ✅ Testez en production

## Variables d'environnement Hostinger

Dans le panel Hostinger, si disponible, ajoutez :
- `VITE_BREVO_API_KEY`
- `VITE_BREVO_LIST_ID`
