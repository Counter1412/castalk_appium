const SignUpPage = require("../pages/signUpPage");

describe("Sign Up Tests", () => {
  it('Should sign up and stop at input pin code screen', async () => {
    await SignUpPage.signUp('longpham6442+02@gmail.com', 'Lts@12345');
  });
});