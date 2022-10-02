import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import ShoppingPage from "../pages/shoppingPage";

describe('ItemTest for Sorting', function () {

    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const shoppingPage = new ShoppingPage();

    beforeEach(() => {

        loginPage.navigate();
        loginPage.navigate();
        homePage.checkMainPage();
        loginPage.login();

    })


    it('Sort Item Low To High', function () {

        homePage.openMensClothing();
        shoppingPage.goToJeans();
        shoppingPage.sortByChoice("lowtoHigh");
        shoppingPage.assertSort("lowestPriceItemText");
        
    })

})