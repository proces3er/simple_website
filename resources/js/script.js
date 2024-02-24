// document.getElementById('loadMore').addEventListener('click', function() {
//     alert('Button clicked!');
// });

document.getElementById('loadMore').addEventListener('click', function() {
    const content = document.getElementById('additionalContent');
    content.style.display = 'block'; 
    content.innerHTML = `
        <div class="primary-background">
            <h1>Financial Cybersecurity Best Practices</h1>
        </div>
        <div class="neutral-background">
            <p>Welcome to our guide on safeguarding your financial information in the digital age. Adopting a proactive and informed approach to online security is crucial for protecting your personal and financial data. Here are some actionable tips to enhance your financial cybersecurity:</p>
        </div>
        <div>
            <h3 class="background-black">Use Up-to-Date Security Software</h3>
            <p>Ensure your security software, operating system, and web browsers are always up-to-date to protect against the latest threats. Automate updates for your security software to maintain continuous protection.</p>
            
            <h3 class="background-black">Be Cautious with Personal Information</h3>
            <p>Treat your personal information like cash. Only share your personal details, such as Social Security numbers and bank account information, when absolutely necessary and with trusted entities.</p>
            
            <h3 class="background-black">Verify Companies Before Engaging</h3>
            <p>Conduct a quick background check on companies offering online deals by searching for reviews or complaints. This can prevent you from falling victim to scams and ensure you're dealing with reputable businesses.</p>
            
            <h3 class="background-black">Use Encrypted Websites for Transactions</h3>
            <p>For all online shopping and banking, use only sites that encrypt your data. Look for "https" in the web address and a padlock icon to ensure your information is secure.</p>
            
            <h3 class="background-black">Practice Strong Password Management</h3>
            <p>Create complex and unique passwords for each account and avoid using easily guessable information. Consider using a password manager to securely store and manage your passwords.</p>
            
            <h3 class="background-black">Enable Multifactor Authentication (MFA)</h3>
            <p>Add an extra layer of security by enabling MFA, which requires two or more verification methods to access your accounts, significantly reducing the risk of unauthorized access.</p>
            
            <h3 class="background-black">Stay Alert to Phishing Attempts</h3>
            <p>Be skeptical of unsolicited requests for personal or financial information. Verify the authenticity of such requests through direct contact with the organization.</p>
            
            <h3 class="background-black">Regularly Monitor Account Statements</h3>
            <p>Check your bank and credit card statements regularly for any unauthorized transactions, and report any suspicious activity to your financial institution immediately.</p>
        </div>
        <div class="neutral-background">
            <p>By following these tips, you can significantly enhance your defenses against cyber threats and protect your financial wellbeing in the digital realm.</p>
        </div>
    `;
});
