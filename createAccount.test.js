// createAccount.test.js
const createAccount = require('./createAccount');

test('createAccount function should create a new account', async () => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => ({ success: true }),
    })
  );

  await expect(createAccount('testUser', 'testPassword', 'test@example.com')).resolves.not.toThrow();
});

test('createAccount function should handle server errors', async () => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: false,
    })
  );

  await expect(createAccount('testUser', 'testPassword', 'test@example.com')).rejects.toThrow('Error creating account');
});

test('createAccount function should handle duplicate username or email', async () => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => ({ success: false }),
    })
  );

  await expect(createAccount('testUser', 'testPassword', 'test@example.com')).rejects.toThrow('Username or Email is already in use');
});
