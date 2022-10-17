import { test, expect } from '@playwright/test';
import { DeliveryPage } from '../pages/deliveryPage';
import { HomePage } from '../pages/homePage';
import { MenuCategoryPage } from '../pages/menuCategoryPage';
import { PageFactory } from '../pages/pageFactory';
import { LOCATIONS, LOCATIONS_FOR_URL, MENU_CATEGORY, MENU_CATEGORY_URL, NAVIGATION_ITEMS, PAGES } from '../support/elements';

let homePage: HomePage;

test.describe('Tests on the "Home" page', async () => {
  test.beforeEach(async ({ page }) => {
    homePage = PageFactory.getPage(page, PAGES.HOME) as HomePage;
    await homePage.openPage();
  });

  test('Open page using navigation bar', async ({ page }) => {
    const deliveryPage = PageFactory.getPage(page, PAGES.DELIVERY, LOCATIONS_FOR_URL.HRODNO) as DeliveryPage;
    await homePage.navigationBar.clickOnNavElement(NAVIGATION_ITEMS.DELIVERY);
    const pageTitleText = await deliveryPage.getPageTitle();
    expect(pageTitleText).toContain(NAVIGATION_ITEMS.DELIVERY);
  });

  test('Open location modal window on the navigation bar', async () => {
    await homePage.navigationBar.clickOnLocationElement();
    const isVisible = await homePage.navigationBar.getModalWindowWithCities()
    expect(isVisible).toBeTruthy();
  });

  test('Close location modal window on the navigation bar', async () => {
    await homePage.navigationBar.clickOnLocationElement();
    await homePage.navigationBar.clickOnLocationElement();
    await homePage.waitDefaultTime();
    const isVisible = await homePage.navigationBar.getModalWindowWithCities()
    expect(isVisible).toBeFalsy();
  });

  test('Change location of user', async () => {
    const url = "https://carte.by/brest/dostavka/";
    const pageTitleRight = "Доставка еды в Бресте";
    await homePage.navigationBar.clickOnLocationElement();
    await homePage.navigationBar.clickOnTheCityInTheModalWindow(LOCATIONS.BREST);
    await homePage.waitForUrlToBe(url);
    const pageTitleText = await homePage.getPageTitle();
    const locationElementText = await homePage.navigationBar.getLocationElementText()
    expect(pageTitleText).toContain(pageTitleRight);
    expect(locationElementText?.trim()).toBe(LOCATIONS.BREST);
  });

  test('Change menu category', async ({page}) => {
    const menuCategoryPage = PageFactory.getPage(page, PAGES.CATEGORY, LOCATIONS_FOR_URL.HRODNO, MENU_CATEGORY_URL.BURGERS) as MenuCategoryPage;
    const pageTitleRight = "Доставка бургеров";
    await homePage.clickOnMenuCategoryItem(MENU_CATEGORY.BURGERS);
    const pageTitleText = await menuCategoryPage.getPageTitle();
    expect(pageTitleText).toContain(pageTitleRight);
  });

  test('Open search result drop down', async () => {
    const requestBody = "Суши";
    await homePage.searchLine.clickOnSearchLineElement();
    await homePage.searchLine.enterRequestInTheSearchLine(requestBody);
    await homePage.waitDefaultTime();
    const isVisible = await homePage.searchLine.getSearchResultDropDown();
    expect(isVisible).toBeTruthy();
  });

  test('Find item using search line', async () => {
    const requestBody = "Суши";
    await homePage.searchLine.clickOnSearchLineElement();
    await homePage.searchLine.enterRequestInTheSearchLine(requestBody);
    await homePage.waitDefaultTime();
    const firstElementText = await homePage.searchLine.getTextOfFirstElementInTheSearchResultDropDown();
    await homePage.searchLine.chooseElementInTheSearchResultListAndClickOn();
    const pageHeaderText = await homePage.getHeaderText();
    expect(pageHeaderText).toContain(firstElementText);
  });
});
