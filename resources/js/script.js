// document.getElementById('loadMore').addEventListener('click', function() {
//     alert('Button clicked!');
// });

document.getElementById('loadMore').addEventListener('click', function() {
    const content = document.getElementById('additionalContent');
    content.style.display = 'block'; 
    content.innerHTML = `
        <h2>More Financial Cybersecurity Tips</h2>
        <p>Ensuring the security of your financial information online is crucial in today's digital age. Here are some expert tips to safeguard your financial data:</p>
        <ul>
            <li>Use strong, unique passwords for your accounts and change them regularly.</li>
            <li>Enable two-factor authentication (2FA) wherever possible for added security.</li>
            <li>Be wary of phishing emails and messages that request personal information.</li>
            <li>Regularly monitor your bank statements for any unauthorized transactions.</li>
            <li>Use a secure connection when performing financial transactions online.</li>
        </ul>
        <p>Stay informed and proactive about your cybersecurity to protect your financial wellbeing.</p>
    `;
});
