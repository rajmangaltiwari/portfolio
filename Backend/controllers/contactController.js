const Contact = require('../models/Contact');
const { sendContactNotification } = require('../services/emailService');

// Create contact
exports.createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false,
        error: 'All fields (name, email, message) are required' 
      });
    }

    console.log('Creating contact:', { name, email });

    const newContact = new Contact({ name, email, message });
    const savedContact = await newContact.save();
    
    console.log('Contact saved successfully:', savedContact._id);

    // Send email notification to portfolio owner
    try {
      await sendContactNotification({
        name: savedContact.name,
        email: savedContact.email,
        message: savedContact.message
      });
    } catch (emailError) {
      console.error('⚠️ Email failed but contact saved:', emailError.message);
    }

    return res.status(201).json({ 
      success: true, 
      message: 'Message sent successfully',
      data: savedContact 
    });
  } catch (error) {
    console.error('Error creating contact:', error);
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ 
        success: false,
        error: messages.join(', ')
      });
    }
    
    
    return res.status(500).json({ 
      success: false,
      error: error.message || 'Error saving contact'
    });
  }
};
