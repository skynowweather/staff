// Include the EmailJS SDK in your HTML file (add this script tag in the head section)
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3.2.0/dist/email.min.js"></script>

<script>
    // Initialize EmailJS with your user ID
    emailjs.init('YOUR_USER_ID');

    async function sendEmail() {
        const recipient = document.getElementById('email-to').value;
        const subject = document.getElementById('email-subject').value;
        const body = document.getElementById('email-body').value;

        if (!recipient || !subject || !body) {
            alert("All fields must be filled out!");
            return;
        }

        const templateParams = {
            to_email: recipient,
            subject: subject,
            message: body
        };

        try {
            const response = await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams);
            if (response.status === 200) {
                alert("Email sent successfully!");
            }
        } catch (error) {
            console.error('Failed to send email', error);
            alert('Failed to send email.');
        }

        document.getElementById('compose-form').reset(); // Clear the form
    }
</script>
