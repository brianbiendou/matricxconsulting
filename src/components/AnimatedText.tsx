import React, { useState, useEffect } from 'react'

interface AnimatedTextProps {
  baseText: string
  animatedWords: string[]
  className?: string
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ baseText, animatedWords = [], className = '' }) => {
  // Modifier l'ordre des mots pour finir par: concurrentiel, stratégique, business
  const orderedWords = ['concurrentiel', 'stratégique', 'business'];
  
  // Utilisons les mots animés fournis s'ils existent, sinon nos valeurs par défaut
  const words = animatedWords.length > 0 ? animatedWords : orderedWords;
  
  const [currentWord, setCurrentWord] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'showing' | 'deleting' | 'pausing'>('typing');

  useEffect(() => {
    // Réinitialiser l'animation quand les mots changent
    setCurrentWord('');
    setWordIndex(0);
    setPhase('typing');
  }, [animatedWords]);

  useEffect(() => {
    if (words.length === 0) return;

    let timer: ReturnType<typeof setTimeout>;

    switch (phase) {
      case 'typing':
        // Apparition du mot complet
        timer = setTimeout(() => {
          setCurrentWord(words[wordIndex]);
          setPhase('showing');
        }, 300);
        break;
      
      case 'showing':
        // Afficher le mot pendant 2 secondes
        timer = setTimeout(() => {
          setPhase('deleting');
        }, 2000);
        break;
      
      case 'deleting':
        // Supprimer le mot complet
        timer = setTimeout(() => {
          setCurrentWord('');
          setPhase('pausing');
        }, 300);
        break;
      
      case 'pausing':
        // Pause avant de passer au mot suivant
        timer = setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % words.length);
          setPhase('typing');
        }, 500);
        break;
    }

    return () => clearTimeout(timer);
  }, [phase, wordIndex, words]);

  // Effet pour le curseur clignotant
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      {baseText}
      <span 
        className="inline-block min-w-[2rem]"
        style={{ 
          background: 'linear-gradient(90deg, #F59E0B, #2563EB)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontWeight: 'bold'
        }}
      >
        {currentWord}
        <span 
          className={`inline-block w-1 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            height: '1.2em',
            backgroundColor: '#F59E0B',
            transform: 'translateY(0.1em)',
            transition: 'opacity 0.1s'
          }}
        />
      </span>
    </span>
  )
}

export default AnimatedText