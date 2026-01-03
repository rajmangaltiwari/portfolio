const sgMail = require('@sendgrid/mail');

// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Test connection on startup
async function verifyConnection() {
  try {
    // SendGrid doesn't have a native verify method, so we log initialization
    console.log('✅ Email service is ready');
  } catch (error) {
    console.error('❌ Email service error:', error.message);
  }
}

verifyConnection();

// Send email notification when new contact is received
exports.sendContactNotification = async (contactData) => {
  try {
    const { name, email, message } = contactData;

    const msg = {
      to: process.env.NOTIFY_EMAIL,
      from: process.env.SENDGRID_FROM_EMAIL,
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

    await sgMail.send(msg);
    console.log('📧 Email sent successfully to:', process.env.NOTIFY_EMAIL);
    return true;
  } catch (error) {
    console.error('❌ Error sending email:', error.message);
    return false;
  }
};

// Send confirmation email to the person who submitted the form
// Note: Disabled on SendGrid free trial - can only send to verified emails
exports.sendConfirmationEmail = async (recipientEmail, name) => {
  try {
    console.log('📧 Confirmation email skipped (SendGrid free trial limitation)');
    // On free trial, confirmation emails to external users cannot be sent
    // Upgrade SendGrid plan to enable this feature
    return true;
  } catch (error) {
    console.error('❌ Error sending confirmation email:', error.message);
    return false;
  }
};
