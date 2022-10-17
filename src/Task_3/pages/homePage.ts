import { Page } from "@playwright/test";
import { BASE_URL } from "../support/constants";
import { MENU_CATEGORY } from "../support/elements";
import { BasePage } from "./basePage";

export class HomePage extends BasePage {
    protected url: string;

    constructor(page: Page) {
        super(page);

        this.url = BASE_URL;
    }

    public async openPage(){
        await this.page.goto(this.url);
    }

    public getMenuCategoryItem(element:MENU_CATEGORY){
        return this.page.locator(`//div [@class="dtabs"] //a [contains(text(), "${element}")]`);
    }
    
    public async clickOnMenuCategoryItem (element: MENU_CATEGORY) {
        await this.getMenuCategoryItem(element).click();
    };
}