import { Page } from "@playwright/test";

export class SearchLine {
    constructor(protected readonly page: Page) { }

    public async getSearchLineElement() {
        return this.page.locator(`//input [@class="header__search-input"]`);
    };

    public async clickOnSearchLineElement() {
        await (await this.getSearchLineElement()).click();
    };

    public async enterRequestInTheSearchLine(request: string) {
        await this.clickOnSearchLineElement();
        await (await this.getSearchLineElement()).fill(request)
    };


    public async getTextOfFirstElementInTheSearchResultDropDown() {
        return this.page.locator(`//div [@data-item="0"] //div [@class="search__title"]`).textContent();
    }

    public async chooseElementInTheSearchResultListAndClickOn() {
        await this.getSearchLineElement()
            .then(async () => {
                await this.page.keyboard.press('ArrowDown')
            })
            .then(async () => {
                await this.page.keyboard.press('Enter')
            });
    }

    public async getSearchResultDropDown (){
        return this.page.locator("//div [@class='tippy-content']").isVisible()
    };
}