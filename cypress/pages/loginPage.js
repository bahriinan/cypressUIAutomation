import HomePage from "./homePage";

export default class LoginPage {

    signInText = ".a-padding-extra-large > .a-spacing-small";
    emailTextArea = "#ap_email";
    userContinueButton = ".a-button-inner > #continue";
    validEmailArea = ".a-spacing-base > span";
    passwordText = ".a-span5 > .a-form-label";
    passwordTextArea = "#ap_password"; 
    passwordSignInButton = "#signInSubmit";
    warningPageArea = "#auth-warning-message-box > .a-box-inner";
    errorPageArea = "#auth-error-message-box > .a-box-inner";


    passtoPwdScreen() {

        cy.get(this.signInText).should('be.visible');
        cy.fixture('dataList').then((data)=> {

            cy.get(this.emailTextArea).type(data.email);

        });
        cy.get(this.userContinueButton).click();
        cy.get(this.passwordText).should('be.visible');

    }

    login() {

        this.passtoPwdScreen();
        cy.fixture('dataList').then((data)=> {

            cy.get(this.passwordTextArea).type(data.password);

        });
        cy.get(this.passwordSignInButton).click();

    }

    navigate() {

        cy.fixture('dataList').then((data)=> {

            cy.visit(data.url);

        });
        
    }

    failedLogin() {

        this.passtoPwdScreen();
        cy.fixture('dataList').then((data)=> {

            cy.get(this.passwordTextArea).type(data.invalidPassword);

        });
        cy.get(this.passwordSignInButton).click();
        cy.get(this.errorPageArea).should('be.visible');

    }

    invalidUsername() {

        cy.get(this.signInText).should('be.visible');
        cy.fixture('dataList').then((data)=> {

            cy.get(this.emailTextArea).type(data.invalidEmail);

        });
        cy.get(this.userContinueButton).click();
        cy.get(this.errorPageArea).should('be.visible');

    }

}