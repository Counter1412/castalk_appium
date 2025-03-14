const LoginPage = require("../pages/loginPage");

describe("Login Tests", () => {
  it('Should log in successfully', async () => {
    await LoginPage.login('longpham6442@gmail.com', 'Lts@12345');
    await expect(LoginPage.homeButton).toBeDisplayed();
  });
});