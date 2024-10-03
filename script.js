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

// Fetch inbox emails (mock data for now)
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

async function sendEmail() {
    const recipient = document.getElementById('email-to').value;
    const subject = document.getElementById('email-subject').value;
    const body = document.getElementById('email-body').value;

    if (!recipient || !subject || !body) {
        alert("All fields must be filled out!");
        return;
    }

    try {
        const response = await fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                to: recipient,
                subject: subject,
                text: body
            })
        });

        if (response.ok) {
            alert("Email sent successfully!");
        } else {
            alert("Failed to send email.");
        }

        document.getElementById('compose-form').reset(); // Clear form
        showSent(); // Switch to Sent section
    } catch (error) {
        console.error('Error:', error);
        alert('Error sending email');
    }
}
