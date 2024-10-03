<script>
    // JavaScript to handle switching between inbox, sent, and compose views
    function showInbox() {
        document.getElementById('inbox-section').style.display = 'block';
        document.getElementById('sent-section').style.display = 'none';
        document.getElementById('compose-section').style.display = 'none';
    }

    function showSent() {
        document.getElementById('inbox-section').style.display = 'none';
        document.getElementById('sent-section').style.display = 'block';
        document.getElementById('compose-section').style.display = 'none';
    }

    function composeEmail() {
        document.getElementById('inbox-section').style.display = 'none';
        document.getElementById('sent-section').style.display = 'none';
        document.getElementById('compose-section').style.display = 'block';
    }

    function sendEmail() {
        const recipient = document.getElementById('email-to').value;
        const subject = document.getElementById('email-subject').value;
        const body = document.getElementById('email-body').value;

        // Check that all fields are filled
        if (!recipient || !subject || !body) {
            alert("All fields must be filled out!");
            return;
        }

        // Simulate sending the email by logging the details (this would be replaced by backend logic)
        console.log(`Sending email to: ${recipient}, Subject: ${subject}, Body: ${body}`);

        // Simulate adding the sent email to the Sent section
        const sentSection = document.getElementById('sent');
        const sentEmailItem = document.createElement('div');
        sentEmailItem.classList.add('email-item');
        sentEmailItem.innerHTML = `
            <strong>Subject:</strong> ${subject}<br>
            <strong>To:</strong> ${recipient}<br>
            <strong>Body:</strong> ${body}<br><br>
        `;
        sentSection.appendChild(sentEmailItem);

        // Clear the form after sending
        document.getElementById('compose-form').reset();

        alert("Email sent successfully!");
        showSent(); // Go to Sent Mail section after sending
    }

    // Fetch inbox emails and simulate display (you'll need a backend API in real-world)
    (function() {
        const mockEmails = [
            { subject: 'Meeting at 3 PM', sender: 'john@example.com', time: '10:30 AM' },
            { subject: 'Invoice for your purchase', sender: 'shop@example.com', time: '9:00 AM' },
            { subject: 'Weekend plans', sender: 'friend@example.com', time: 'Yesterday' },
        ];

        const inboxElement = document.getElementById('inbox');
        mockEmails.forEach(email => {
            const emailItem = document.createElement('div');
            emailItem.classList.add('email-item');
            emailItem.innerHTML = `<strong>${email.subject}</strong> <br> From: ${email.sender} <br> Received: ${email.time}`;
            inboxElement.appendChild(emailItem);
        });
    })();
</script>
