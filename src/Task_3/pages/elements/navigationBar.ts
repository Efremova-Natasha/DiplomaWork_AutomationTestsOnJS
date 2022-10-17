import { Page } from "@playwright/test";
import { NAVIGATION_ITEMS, LOCATIONS } from "../../support/elements";

export class NavigationBar {
    constructor(protected readonly page: Page) { }

    public async getNavElement(element: NAVIGATION_ITEMS) {
        return this.page.locator(`//* [contains(text(), "${element}")]`);
    };

    public async getLocationElement() {
        return this.page.locator(`//div [@class="header__nav header__nav--city"] //div`);
    };

    public async getLocationElementText() {
        return this.page.locator(`//div [@class="header__nav header__nav--city"] //div`).textContent();
    };

    public async clickOnLocationElement () {
        await (await this.getLocationElement()).click();
    };

    public async getModalWindowWithCities (){
        return this.page.locator("//div [@class='tippy-box']").isVisible()
    };

    public async getCityPositionInTheModalWindow (city:LOCATIONS){
        return this.page.locator(`//div [@class='tdrop__option'] [contains(text(), "${city}")]`);
    };

    public async clickOnTheCityInTheModalWindow (city:LOCATIONS){
        await (await this.getCityPositionInTheModalWindow(city)).click();
    };

    public async clickOnNavElement (element: NAVIGATION_ITEMS) {
        await (await this.getNavElement(element)).click();
    };

}