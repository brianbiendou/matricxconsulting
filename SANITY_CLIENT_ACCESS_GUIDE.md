# Guide : Donner accès au CMS Sanity au client et mises à jour instantanées en production

## 🎯 Objectif
- Le client peut modifier le contenu via une interface web
- Les modifications apparaissent instantanément en production
- Pas besoin d'accès technique (npm, terminal, etc.)

---

## 📝 ÉTAPE 1 : Déployer le Studio Sanity (Interface du client)

### Option A : Via le Dashboard Sanity (Recommandé)

1. **Allez sur** : https://www.sanity.io/manage
2. **Sélectionnez votre projet** : MatriCx Consulting
3. **Cliquez sur "Studio"** dans le menu
4. **Cliquez sur "Deploy Studio"**
5. **Choisissez un hostname** : `matricxconsulting` (sans espaces ni underscores)
6. **Confirmez le déploiement**

➡️ **Le studio sera accessible à** : `https://matricxconsulting.sanity.studio`

### Option B : Via la ligne de commande (Alternative)

```bash
# Depuis votre projet
npx sanity deploy
# Tapez un hostname simple : matricxconsulting
```

---

## 👥 ÉTAPE 2 : Ajouter le client comme utilisateur

1. **Allez sur** : https://www.sanity.io/manage/personal/project/ozf76xbs
2. **Cliquez sur "Project Members"** ou "API" → "Members"
3. **Cliquez sur "Invite members"**
4. **Entrez l'email du client** : exemple@client.com
5. **Choisissez le rôle** :
   - **Editor** : Peut créer/modifier du contenu (recommandé)
   - **Administrator** : Accès complet (si client de confiance)
6. **Envoyez l'invitation**

➡️ Le client recevra un email avec un lien pour créer son compte

---

## 🌐 ÉTAPE 3 : Donner l'accès au client

Une fois le studio déployé et le client invité :

### Envoyez au client :

```
Bonjour,

Voici l'accès à votre interface de gestion de contenu :

🔗 URL : https://matricxconsulting.sanity.studio
📧 Connectez-vous avec votre email

Vous pourrez :
- Modifier les chiffres clés de la page d'accueil
- Ajouter/modifier des articles de blog
- Gérer les témoignages
- Mettre à jour les projets marquants
- Gérer les apparitions médiatiques
- Et plus encore...

Les modifications seront visibles sur le site en quelques secondes.
```

---

## ⚡ ÉTAPE 4 : Mises à jour instantanées en production

### Problème actuel :
- En local : Les données se mettent à jour au rechargement ✅
- En production : Cache CDN garde les anciennes données pendant 5-15 minutes ❌

### Solutions pour des mises à jour instantanées :

#### **Solution 1 : Désactiver le CDN en production (Simple mais moins performant)**

Dans `src/lib/sanity.ts`, changez :
```typescript
useCdn: import.meta.env.PROD  // CDN actif en production
```

Par :
```typescript
useCdn: false  // Toujours des données fraîches, mais plus lent
```

**Avantages** : Données toujours à jour
**Inconvénients** : Site un peu plus lent

---

#### **Solution 2 : Utiliser les hooks SWR (Déjà créés, à intégrer)**

Les hooks `useSWRSanity.ts` sont déjà créés et permettent :
- Auto-refresh toutes les 5-30 secondes
- Mise à jour quand l'utilisateur revient sur l'onglet
- Cache intelligent

**Pour activer**, il faut remplacer les anciens hooks par les nouveaux dans vos composants.

**Avantages** : 
- Mise à jour rapide (5-30 secondes)
- Garde les performances
- Meilleure expérience utilisateur

---

#### **Solution 3 : Webhooks Sanity → Netlify (Production idéale)**

1. **Dans Sanity** : https://www.sanity.io/manage/personal/project/ozf76xbs/api/webhooks
2. **Créez un webhook** :
   - Name: "Rebuild Netlify on content change"
   - URL: `https://api.netlify.com/build_hooks/YOUR_BUILD_HOOK_ID`
   - Dataset: production
   - Trigger on: Create, Update, Delete
3. **Créez le Build Hook dans Netlify** :
   - Netlify Dashboard → Site settings → Build & deploy → Build hooks
   - Add build hook → "Sanity Content Update"
   - Copiez l'URL générée

**Avantages** :
- Site se reconstruit automatiquement quand le contenu change
- Données toujours à jour
- Performances optimales

**Inconvénients** :
- Rebuild prend 1-3 minutes
- Consomme des minutes de build Netlify

---

## 🎓 Instructions pour le client

### Comment modifier le contenu :

1. **Aller sur** : https://matricx.sanity.studio
2. **Se connecter** avec son email
3. **Cliquer sur le type de contenu** à modifier dans le menu de gauche :
   - Home Stats (Chiffres clés accueil)
   - Podcast Stats
   - Projects (Projets marquants)
   - Media Appearances
   - Blog Posts
   - Etc.
4. **Modifier les champs**
5. **Cliquer sur "Publish"** (bouton vert en bas à droite)
6. **Attendre 5-30 secondes** puis actualiser le site

---

## 🔒 Sécurité et bonnes pratiques

### Permissions recommandées :
- **Client** : Role "Editor" (peut modifier le contenu)
- **Vous** : Role "Administrator" (peut tout faire)

### Sauvegardes :
Sanity sauvegarde automatiquement toutes les versions. Vous pouvez :
- Voir l'historique des modifications
- Restaurer une version précédente
- Voir qui a modifié quoi et quand

---

## 📊 Récapitulatif

| Aspect | Local | Production (actuel) | Production (avec webhooks) |
|--------|-------|---------------------|---------------------------|
| Mise à jour | Immédiate | 5-15 minutes | 1-3 minutes |
| Performance | Normal | Rapide | Rapide |
| Complexité | Simple | Simple | Moyenne |

---

## ✅ Actions à faire maintenant

1. [ ] Déployer le studio Sanity via le dashboard web
2. [ ] Inviter le client comme "Editor"
3. [ ] Tester l'accès avec le client
4. [ ] Choisir une solution de mise à jour (recommandé : Webhooks)
5. [ ] Configurer les webhooks si choisi
6. [ ] Envoyer les instructions au client

---

## 🆘 Dépannage

**Le client ne reçoit pas l'email d'invitation**
→ Vérifiez les spams, renvoyez l'invitation

**Le studio ne se charge pas**
→ Vérifiez que le hostname est bien configuré

**Les modifications ne s'affichent pas**
→ Attendez 30 secondes puis forcez le refresh (Ctrl+Shift+R)

**Le client a oublié son mot de passe**
→ Il peut utiliser "Mot de passe oublié" sur la page de connexion

---

## 📞 Contact

Pour toute question technique :
- Dashboard Sanity : https://www.sanity.io/manage
- Documentation : https://www.sanity.io/docs
- Support : https://www.sanity.io/help
