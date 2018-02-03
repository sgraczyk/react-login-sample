const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const login = (email, password) =>
  sleep(1000).then(() => { // simulate server latency
    if (email !== 'test@test.pl' || password !== 'Password1') {
      throw new Error({
        error: {
          id: 'login.invalidCredentials',
        },
      });
    } else {
      return {
        email,
      };
    }
  });

const userService = {
  login,
};

export default userService;
