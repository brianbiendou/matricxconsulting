# Stratégie d'intégration Sanity CMS

## 🎯 Philosophie : Hybride Intelligent

### **Type 1 : AJOUTS (Additive Logic)**
Les données Sanity s'ajoutent aux données existantes sans les remplacer.

#### ✅ **Témoignages** (IMPLÉMENTÉ)
```javascript
// AVANT : Remplacement
const testimonials = sanityData.length > 0 ? sanityData : defaultData

// APRÈS : Addition
const testimonials = [...sanityData, ...defaultData]
```

#### 📝 **Blog Posts** (À IMPLÉMENTER)
```javascript
// Articles Sanity + Articles hardcodés
const allPosts = [...sanityPosts, ...defaultPosts]
```

#### 🤝 **Partenaires** (À IMPLÉMENTER)
```javascript
// Logos Sanity + Logos existants
const allPartners = [...sanityPartners, ...defaultPartners]
```

#### 📊 **Études de cas** (À IMPLÉMENTER)
```javascript
// Nouvelles études Sanity uniquement (pas d'existant)
const caseStudies = sanityCaseStudies
```

---

### **Type 2 : REMPLACEMENTS (Override Logic)**
Les données Sanity remplacent les données hardcodées si elles existent.

#### 🏠 **Page d'accueil** (À IMPLÉMENTER)
```javascript
// Titre : Sanity OU titre par défaut
const heroTitle = sanityHomePage?.heroTitle || "Titre par défaut"

// Statistiques : Sanity OU stats par défaut
const stats = sanityHomePage?.stats || defaultStats
```

#### ℹ️ **Page À propos** (À IMPLÉMENTER)
```javascript
// Description : Sanity OU description par défaut
const aboutDescription = sanityAboutPage?.description || defaultDescription
```

#### ⚙️ **Page Services** (À IMPLÉMENTER)
```javascript
// Services : Sanity OU services par défaut
const services = sanityServicesPage?.services || defaultServices
```

---

## 🔧 Implémentation par Hook

### **useSanityTestimonials.ts** ✅ FAIT
- Type : **AJOUT**
- Logique : `[...sanityData, ...defaultData]`
- Status : Fonctionnel

### **useSanityBlogPosts.ts** 📝 À FAIRE
- Type : **AJOUT**
- Logique : Combine articles Sanity + articles hardcodés
- Ordre : Sanity en premier, puis défaut

### **useSanityHomePage.ts** 🏠 À FAIRE
- Type : **REMPLACEMENT**
- Logique : `sanityData?.field || defaultValue`
- Champs : heroTitle, heroSubtitle, stats, valuesSection

### **useSanityAboutPage.ts** ℹ️ À FAIRE
- Type : **REMPLACEMENT**  
- Logique : `sanityData?.field || defaultValue`
- Champs : description, mission, équipe

### **useSanityServicesPage.ts** ⚙️ À FAIRE
- Type : **REMPLACEMENT**
- Logique : `sanityData?.field || defaultValue`
- Champs : description, services

---

## 🚀 Plan d'implémentation

### **Phase 1 : Blog (AJOUT)** 📝
1. Modifier `useSanityBlogPosts.ts` pour logique additive
2. Tester avec articles existants + nouveaux Sanity
3. Vérifier que testimonials reste fonctionnel

### **Phase 2 : Pages principales (REMPLACEMENT)** 🏠
1. Implémenter logique override pour Home/About/Services
2. Garder fallbacks robustes
3. Tests de non-régression

### **Phase 3 : Contenus avancés (AJOUT)** 🤝
1. Partenaires additifs
2. Études de cas (nouveau)
3. Autres contenus

---

## ⚠️ Règles de sécurité

### **Protection contre les régressions**
- ✅ Toujours garder des fallbacks
- ✅ Tester que les sections existantes fonctionnent
- ✅ Logique défensive (vérifier null/undefined)

### **Ordre de priorité**
1. **AJOUTS** : Sanity PUIS défaut
2. **REMPLACEMENTS** : Sanity OU défaut

### **Tests obligatoires**
- [ ] Témoignages restent fonctionnels
- [ ] Pas de régression sur autres sections
- [ ] Fallbacks marchent si Sanity échoue

---

## 📋 Checklist par implémentation

### Avant chaque modification :
- [ ] Identifier : AJOUT ou REMPLACEMENT ?
- [ ] Backup du code existant
- [ ] Tester la section actuelle

### Après chaque modification :
- [ ] Vérifier la nouvelle logique
- [ ] Tester les témoignages (pas de régression)
- [ ] Tester le fallback (couper Sanity)
- [ ] Console clean (pas d'erreurs)

---

## 🎉 Status actuel

- ✅ **Témoignages** : ADDITIVE - Fonctionne parfaitement
- ⏳ **Blog Posts** : En attente d'implémentation ADDITIVE
- ⏳ **Pages principales** : En attente d'implémentation OVERRIDE
- ⏳ **Autres contenus** : En attente

**Prochaine étape recommandée** : Blog Posts (logique additive)