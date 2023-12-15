// createAccount.js

async function createAccount(username, password, email) {
    const response = await fetch('/createAccount', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        email,
      }),
    });
  
    if (!response.ok) {
      throw new Error('Error creating account');
    }
  
    const data = await response.json();
  
    if (!data.success) {
      throw new Error('Username or Email is already in use');
    }
  }
  
  // Export the function
  module.exports = createAccount;
  