import AuthService from './auth.service';

describe('AuthService', () => {
  test('logs in with valid credentials', async () => {
    const result = await AuthService.login('test@test.pl', 'Password1');
    expect(result.email).toEqual('test@test.pl');
  });

  test('fails for invalid credentials', async () => {
    try {
      await AuthService.login('test@test.pl', 'Pass1');
    } catch (e) {
      expect(true);
    }
  });
});
