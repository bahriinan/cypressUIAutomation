import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";

describe('Login Functionality Test', function () {

    const loginPage = new LoginPage();
    const homePage = new HomePage();

    beforeEach(() => {

        loginPage.navigate();

    })

    it('Sign in & signOut', function () {

        homePage.checkMainPage();
        loginPage.login();
        homePage.successLogin();
        
    })

    it('Try to sign in when credentials are not valid', function () {

        homePage.checkMainPage();
        loginPage.failedLogin();
       
    })
    
    it('Try to sign in when username are not valid', function () {

        homePage.checkMainPage();
        loginPage.invalidUsername();

    })

})