const reload  = require('../../helper').reload;
const constants = require('../../constants');

const init = async () => {
  await reload();
  await element(by.id('logInButton')).tap(); 
}

describe('LogInScreen', () => {
  before(async () => {
    await init();
  });
  
  /***
    *** 
    ****   EXISTENCE OF ELEMENTS
    *** 
  ***/


  it('existing "LOG IN Title"', async () => {
    await expect(element(by.id('logInText'))).toExist();
  });

  it('existing "Internationalization button"', async () => {
    await expect(element(by.id('i18nButton'))).toBeVisible();
  });

  it('existing "Home button"', async () => {
    await expect(element(by.id('homeButton'))).toBeVisible();
  });

  it('existing, "Log In button" ', async () => {
    await expect(element(by.id('logInButton'))).toBeVisible();
  });


  it('existing, "Login TextInput" ', async () => {
    await expect(element(by.id('emailInput'))).toExist();
  });

  it('existing, "Password TextInput" ', async () => {
    await expect(element(by.id('passwordInput'))).toExist();
  });
});