// Configuration publique - Ces valeurs seront visibles dans le code client
export const config = {
  brevo: {
    // L'API key est exposée côté client - c'est normal pour Brevo
    // Limitez les permissions de cette clé dans Brevo (contacts uniquement)
    apiKey: import.meta.env.VITE_BREVO_API_KEY || '',
    listId: parseInt(import.meta.env.VITE_BREVO_LIST_ID || '3')
  },
  calendly: {
    url: import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/enablermoney/new-meeting'
  },
  site: {
    baseUrl: import.meta.env.VITE_BASE_URL || 'https://matricxconsulting.com'
  }
}
