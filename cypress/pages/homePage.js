export default class HomePage {

    navigationLogo = "#nav-logo-sprites";
    signInButton = "#nav-link-accountList";
    userArea = "#nav-link-accountList-nav-line-1";
    signOutArea = "#nav-link-accountList > .nav-line-2";
    singOutText = "#nav-item-signout > .nav-text";
    hamburgerMenuIcon = "#nav-hamburger-menu";
    electronicsText = ".hmenu-visible > :nth-child(7) > .hmenu-item";
    cameraAndPhotoText = "Camera & Photo";
    computerText= ".hmenu-visible > :nth-child(8) > .hmenu-item";
    computerPeripText = "Computer Accessories & Peripherals";
    seeAllButtonText = ":nth-child(12) > .hmenu-compressed-btn";
    mensFashionText = '[style=""] > :nth-child(6) > .hmenu-item';
    clothingText = ".hmenu-visible > :nth-child(3) > .hmenu-item";

    checkMainPage() {

        cy.get(this.navigationLogo).should('be.visible');
        cy.get(this.signInButton).click();

    }

    successLogin() {
        
        cy.get(this.userArea).should('be.visible');
        cy.get(this.signOutArea).trigger('mouseover');
        cy.get(this.singOutText).should('be.visible').click();

    }

    openMensClothing() {

        cy.get(this.hamburgerMenuIcon).should('be.visible').wait(1000).click();
        cy.get(this.seeAllButtonText).should('be.visible').wait(1000).click();
        cy.get(this.mensFashionText).wait(1000).click();
        cy.get(this.clothingText).eq(1).should('be.visible').wait(1000).click();

    }

    openCameraAndPhoto() {

        cy.get(this.hamburgerMenuIcon).should('be.visible').wait(1000).click();
        cy.get(this.electronicsText).should('be.visible').wait(1000).click();
        cy.contains(this.cameraAndPhotoText).should('be.visible').click();

    }

    openComputerPage() {

        cy.get(this.hamburgerMenuIcon).should('be.visible').wait(1000).click();
        cy.get(this.computerText).should('be.visible').wait(1000).click();
        cy.contains(this.computerPeripText).should('be.visible').wait(1000).click();

    }

}