import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import ShoppingPage from "../pages/shoppingPage";
import ItemPage from "../pages/itemPage";
import ShoppingCartPage from "../pages/shoppingCartPage";

describe('Login Functionality Test', function () {

    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const shoppingPage = new ShoppingPage();
    const itemPage = new ItemPage();
    const shoppingCartPage = new ShoppingCartPage();

    beforeEach(() => {

        loginPage.navigate();
        loginPage.navigate();
        homePage.checkMainPage();
        loginPage.login();

    })

    it.only('User can add and remove item in/from cart', function () {

        homePage.openCameraAndPhoto();
        shoppingPage.getCameraFirstItem();
        itemPage.itemtoCart();
        shoppingCartPage.checkShopItem();
        homePage.openComputerPage();
        shoppingPage.getComputerItem();
        itemPage.itemtoCart();
        shoppingCartPage.checkTotalShop();
        shoppingCartPage.deleteItem();
        shoppingCartPage.checkShopItem();
        
    })

})