// Function to handle login and validate response
function submitLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if both username and password fields are filled
    if (!username || !password) {
        document.getElementById('message').innerHTML = `
            <p><span style="color: red;">Please fill in both username and password.</span></p>`;
        return;
    }

    fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Application-Key': ''
        },
        body: JSON.stringify({ "UserName": username, "PassWord": password })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerHTML = `
            <p><span style="color: #932c16;">Status: ${data.status}</span></p>
            <p><span style="color: #932c16;">Message: ${data.message}</span><br></p>
            <p>-----------------------------<br></p>
            <p>Type: ${data.type}</p>
            <p>Username: ${data.username}</p>
            <p>TU Status: ${data.tu_status}</p>
            <p>Status ID: ${data.statusid}</p>
            <p>Display Name (TH): ${data.displayname_th}</p>
            <p>Display Name (EN): ${data.displayname_en}</p>
            <p>Email: ${data.email}</p>
            <p>Department: ${data.department}</p>
            <p>Faculty: ${data.faculty}</p>`;
    
})
.catch(error => console.error('Error:', error));
}

