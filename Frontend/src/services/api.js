const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export const contactAPI = {
  // Submit a new contact message
  submitContact: async (contactData) => {
    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contactData)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      return data
    } catch (error) {
      throw error
    }
  },
}
