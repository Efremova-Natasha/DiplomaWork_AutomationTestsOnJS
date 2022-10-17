import { expect, Page } from "@playwright/test";
import { timeByDefault } from "../support/constants";
import { NavigationBar } from "./elements/navigationBar";
import { SearchLine } from "./elements/searchLine";

export class BasePage {
     public navigationBar: NavigationBar;
    public searchLine: SearchLine;
    
    constructor(protected readonly page: Page) {
        this.navigationBar = new NavigationBar(page)
        this.searchLine = new SearchLine(page);
    }

    public async getPageTitle() {
        return await this.page.title();
    }

    public async getHeaderText(){
        return this.page.locator(`//h1`).textContent();
    }

    public async waitForUrlToBe(url: string) {
        await expect(this.page).toHaveURL(url);
    }

    public async waitDefaultTime(timeout = timeByDefault) {
        await this.page.waitForTimeout(timeout);
    }

    public async backToPreviousPage(){
        await this.page.goBack();
    }
}