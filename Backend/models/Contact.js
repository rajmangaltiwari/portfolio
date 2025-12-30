const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Name is required'],
    trim: true,
    minlength: 2
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'],
    lowercase: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please provide a valid email']
  },
  message: { 
    type: String, 
    required: [true, 'Message is required'],
    minlength: 5
  },
  createdAt: { 
    type: Date, 
    default: Date.now
  }
});

module.exports = mongoose.model('Contact', contactSchema);
