# 📚 Guide d'utilisation de Sanity CMS - MatriCx Consulting

## 🚀 Démarrage rapide

### Lancer Sanity Studio (Interface Admin)
```bash
npm run sanity
```

Puis ouvrez votre navigateur : **http://localhost:3333**

### Lancer le site web
```bash
npm run dev
```

Site web accessible sur : **http://localhost:5173**

---

## 📋 Qu'est-ce que Sanity CMS ?

Sanity est un système de gestion de contenu (CMS) qui vous permet de modifier le contenu de votre site **sans toucher au code**.

**Avantages :**
- ✅ Interface simple et intuitive
- ✅ Modifications en temps réel
- ✅ Support multilingue (FR/EN)
- ✅ Gestion des images optimisée
- ✅ Gratuit jusqu'à 100k requêtes/mois

---

## 🎨 Types de contenu disponibles

### 1. **Page d'Accueil** (`homePage`)
Modifiez tout le contenu de la page d'accueil :
- Titre et sous-titre Hero
- Introduction des services
- Section valeurs
- Statistiques

### 2. **Page À Propos** (`aboutPage`)
- Description de l'entreprise
- Mission et vision
- Équipe (membres + photos)
- Partenaires

### 3. **Page Services** (`servicesPage`)
- Les 4 services (Advisory, Survey, Technology, Training)
- Descriptions détaillées
- Caractéristiques et bénéfices
- Images/icônes

### 4. **Articles de Blog** (`blogPost`)
- Titre (FR/EN)
- Image principale
- Contenu riche (texte formaté, images)
- Catégories, tags
- Articles mis en avant

### 5. **Témoignages** (`testimonial`)
- Nom, poste, entreprise
- Photo
- Témoignage (FR/EN)
- Note (1-5 étoiles)
- Ordre d'affichage

### 6. **Études de Cas** (`caseStudy`)
- Nom du client + logo
- Secteur d'activité
- Problématique / Solution
- Résultats chiffrés (KPIs)
- Témoignage
- Images

---

## 📝 Comment ajouter un article de blog ?

### Étape 1 : Ouvrir Sanity Studio
```bash
npm run sanity
```

### Étape 2 : Créer un article
1. Cliquez sur **"Articles de Blog"** dans le menu
2. Cliquez sur **"Créer"** (bouton + en haut à droite)

### Étape 3 : Remplir les champs

**Champs obligatoires :**
- **Titre** (FR + EN)
- **Slug** : Cliquez sur "Generate" à partir du titre
  - Ex: `experience-client-2024` → URL sera `/blog/experience-client-2024`
- **Catégorie** : CX, Stratégie, Digital, Formation, ou Études
- **Contenu** (FR + EN) : Écrivez votre article
  - Utilisez la barre d'outils pour formater (gras, listes, titres)
  - Insérez des images avec le bouton image

**Champs optionnels :**
- **Image principale** : Photo de couverture
- **Résumé** : Court texte d'introduction
- **Auteur** : Par défaut "MatriCx Consulting"
- **Tags** : Mots-clés pour le SEO
- **Article mis en avant** : Cochez pour afficher en haut

### Étape 4 : Publier
1. Cliquez sur **"Publish"** (en haut à droite)
2. ✅ L'article apparaît **immédiatement** sur votre site !

---

## 💬 Comment ajouter un témoignage ?

1. Cliquez sur **"Témoignages"**
2. Cliquez **"Créer"**
3. Remplissez :
   - Nom, poste, entreprise
   - Photo (cliquez sur "Upload")
   - Témoignage en français et anglais
   - Note (1 à 5 étoiles)
   - Cochez "Afficher sur la page d'accueil"
4. Cliquez **"Publish"**

Le témoignage apparaîtra automatiquement dans le carousel de la page d'accueil ! 🎉

---

## 📊 Comment ajouter une étude de cas ?

1. Cliquez sur **"Études de Cas"**
2. Cliquez **"Créer"**
3. Remplissez :
   - **Nom du client**
   - **Logo** : Upload du logo
   - **Secteur** : Banque, Télécom, Retail, etc.
   - **Problématique** : Quel était le défi ?
   - **Solution** : Comment MatriCx a aidé
   - **Résultats** : Ajoutez des KPIs
     - Cliquez "+ Add item"
     - Exemple : 
       - Métrique: "NPS"
       - Valeur: "+25 points"
       - Description: "Augmentation de la satisfaction client"
   - **Témoignage client** (optionnel)
   - **Images du projet**
4. Cochez "Mettre en avant" pour afficher sur l'accueil
5. Cliquez **"Publish"**

---

## 🏠 Comment modifier la page d'accueil ?

1. Cliquez sur **"Page d'Accueil"**
2. Vous verrez UN SEUL document (pas de création, juste édition)
3. Modifiez :
   - **Section Hero** : Titre, sous-titre, image
   - **Services** : Introduction
   - **Valeurs** : Ajoutez/modifiez les valeurs
     - Cliquez "+ Add item" pour ajouter une valeur
     - Icône : Utilisez les noms Lucide (ex: `Target`, `Users`, `TrendingUp`)
   - **Statistiques** : Maximum 4 chiffres-clés
4. Cliquez **"Publish"**

---

## 🎨 Comment modifier les services ?

1. Cliquez sur **"Page Services"**
2. Modifiez chaque service :
   - **Slug** : Ne changez PAS (advisory, survey, technology, training)
   - **Nom** : MatriCx Advisory, etc.
   - **Slogan** : Phrase d'accroche
   - **Description** : Texte détaillé
   - **Icône/Image** : Upload d'une nouvelle image
   - **Caractéristiques** : Points clés du service
   - **Bénéfices** : Avantages pour le client
   - **Couleur** : Code couleur hex (ex: `#F59E0B` pour jaune)
3. Cliquez **"Publish"**

---

## 🌍 Support multilingue (FR/EN)

**Tous les contenus ont 2 versions :**
- 🇫🇷 Français
- 🇬🇧 English

**Important :** Remplissez TOUJOURS les deux langues pour une expérience optimale !

Le site détecte automatiquement la langue du navigateur et affiche le bon contenu.

---

## 🖼️ Gestion des images

### Upload d'images
1. Cliquez sur le champ image
2. Cliquez **"Select" ou glissez-déposez**
3. L'image est automatiquement optimisée

### Bonnes pratiques
- ✅ **Format** : JPG ou PNG
- ✅ **Taille** : Maximum 2 Mo (Sanity optimise automatiquement)
- ✅ **Dimensions recommandées** :
  - Articles de blog : 1200x630px
  - Photos équipe : 400x400px (carré)
  - Logos partenaires : 200x100px
- ✅ **Texte alternatif** : Toujours remplir pour le SEO

---

## 📱 Prévisualisation en temps réel

Pendant que vous modifiez dans Sanity :
1. Gardez votre site ouvert (`npm run dev`)
2. Rafraîchissez la page web (F5)
3. Vos modifications apparaissent ! ✨

---

## 🚀 Déploiement en production

Une fois vos modifications terminées :

```bash
npm run build
```

Puis déployez sur Hostinger comme d'habitude.

**Note :** Les modifications Sanity sont instantanées, pas besoin de redéployer pour chaque changement de contenu !

---

## 🔒 Sécurité

- **Ne partagez JAMAIS** votre token Sanity
- Le fichier `.env.local` est ignoré par Git (jamais commité)
- Chaque utilisateur peut avoir son propre compte Sanity

---

## 📞 Besoin d'aide ?

### Problèmes courants

**"Le site ne charge pas mes modifications"**
→ Rafraîchissez la page (F5) ou videz le cache (Ctrl+Shift+R)

**"Je ne vois pas l'interface Sanity"**
→ Vérifiez que `npm run sanity` tourne bien

**"Erreur 401 lors du fetch"**
→ Vérifiez que le token Sanity est bien dans `.env.local`

**"Les images ne s'affichent pas"**
→ Vérifiez que vous avez bien cliqué "Publish" après upload

### Ressources
- [Documentation Sanity](https://www.sanity.io/docs)
- [Tutoriels vidéo](https://www.sanity.io/docs/getting-started)

---

## ✅ Checklist avant de commencer

- [ ] Sanity Studio installé (`npm install`)
- [ ] Token Sanity configuré dans `.env.local`
- [ ] Compte Sanity créé sur sanity.io
- [ ] `npm run sanity` fonctionne
- [ ] Interface accessible sur localhost:3333

---

**Félicitations ! Vous pouvez maintenant gérer tout le contenu de MatriCx Consulting sans toucher au code !** 🎉

---

## 📋 Commandes utiles

```bash
# Démarrer Sanity Studio
npm run sanity

# Démarrer le site web
npm run dev

# Builder le site
npm run build

# Déployer Sanity Studio sur sanity.io (optionnel)
npm run sanity:deploy
```
