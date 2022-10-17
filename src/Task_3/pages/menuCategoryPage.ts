import { Page } from "@playwright/test";
import { BASE_URL } from "../support/constants";
import { LOCATIONS_FOR_URL, MENU_CATEGORY_URL } from "../support/elements";
import { HomePage } from "./homePage";

export class MenuCategoryPage extends HomePage {
    protected url: string;
    readonly city: LOCATIONS_FOR_URL;
    readonly category: MENU_CATEGORY_URL;

    constructor(page: Page, city: LOCATIONS_FOR_URL, category: MENU_CATEGORY_URL) {
        super(page);
        this.city = city;
        this.category = category;
        this.url = `${BASE_URL}/${city}/${category}/`;
    }
}