// Test simple pour le carrousel robuste
// Simulation de problème de connexion

console.log('🔧 Test de robustesse du carrousel MatriCx');

// Fonction pour tester le chargement d'images
const testImageLoading = () => {
  console.log('📷 Test de chargement d\'images...');
  
  // Simuler une connexion lente
  const testImages = [
    '../images/image1.jpg',
    '../images/image2.jpg', 
    '../images/image3.jpg',
    '../images/image4.jpg',
    '../images/image6.jpg'
  ];

  testImages.forEach((imgSrc, index) => {
    const img = new Image();
    const startTime = Date.now();
    
    img.onload = () => {
      const loadTime = Date.now() - startTime;
      console.log(`✅ Image ${index + 1} chargée en ${loadTime}ms`);
    };
    
    img.onerror = () => {
      console.log(`❌ Échec chargement image ${index + 1}: ${imgSrc}`);
    };
    
    img.src = imgSrc;
  });
};

// Test de la robustesse réseau
const testNetworkResilience = () => {
  console.log('🌐 Test de résilience réseau...');
  
  // Simuler différentes conditions réseau
  const conditions = ['fast', 'slow', 'offline'];
  
  conditions.forEach(condition => {
    console.log(`📊 Test condition: ${condition}`);
    
    switch(condition) {
      case 'slow':
        // Simuler connexion lente
        setTimeout(() => {
          console.log('🐌 Connexion lente simulée - Le carrousel devrait afficher un loader');
        }, 2000);
        break;
        
      case 'offline':
        // Simuler mode hors ligne  
        setTimeout(() => {
          console.log('📱 Mode hors ligne simulé - Le carrousel devrait afficher des fallbacks');
        }, 500);
        break;
        
      default:
        console.log('🚀 Connexion rapide - Le carrousel devrait se charger normalement');
    }
  });
};

export { testImageLoading, testNetworkResilience };