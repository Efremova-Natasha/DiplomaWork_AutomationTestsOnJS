import { Page } from "@playwright/test"
import { LOCATIONS_FOR_URL, MENU_CATEGORY_URL, PAGES } from "../support/elements"
import { DeliveryPage } from "./deliveryPage"
import { HomePage } from "./homePage"
import { MenuCategoryPage } from "./menuCategoryPage"

export class PageFactory {
    static getPage(page: Page, pageName: PAGES, city: LOCATIONS_FOR_URL = LOCATIONS_FOR_URL.HRODNO, category: MENU_CATEGORY_URL = MENU_CATEGORY_URL.DELIVERY) {
        switch (pageName) {
            case PAGES.HOME:
                return new HomePage(page)
            case PAGES.DELIVERY:
                return new DeliveryPage(page, city)
            case PAGES.CATEGORY:
                return new MenuCategoryPage(page, city, category)
            default:
                return new HomePage(page)
        }
    }
}