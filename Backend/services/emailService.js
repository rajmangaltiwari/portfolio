const nodemailer = require('nodemailer');

// Create email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Test connection on startup
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Email service error:', error.message);
  } else {
    console.log('✅ Email service is ready');
  }
});

// Send email notification when new contact is received
exports.sendContactNotification = async (contactData) => {
  try {
    const { name, email, message } = contactData;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.NOTIFY_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Message</h2>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          
          <h3 style="color: #666; margin-top: 20px;">Message:</h3>
          <p style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #007bff;">
            ${message}
          </p>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #999; font-size: 12px;">
            This is an automated email. Please reply directly to ${email} to contact the sender.
          </p>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('📧 Email sent successfully:', info.response);
    return true;
  } catch (error) {
    console.error('❌ Error sending email:', error.message);
    return false;
  }
};

// Send confirmation email to the person who submitted the form
exports.sendConfirmationEmail = async (recipientEmail, name) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipientEmail,
      subject: 'Message Received - Portfolio Contact',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank You, ${name}!</h2>
          <p>Thank you for reaching out.</p>
          
          <p>I have received your message and will get back to you as soon as possible.</p>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #999; font-size: 12px;">
            Best regards,<br>
            Rajmangal Tiwari
          </p>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('📧 Confirmation email sent to:', recipientEmail);
    return true;
  } catch (error) {
    console.error('❌ Error sending confirmation email:', error.message);
    return false;
  }
};
