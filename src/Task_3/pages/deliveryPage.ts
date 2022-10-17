import { Page } from "@playwright/test";
import { BASE_URL } from "../support/constants";
import { LOCATIONS_FOR_URL } from "../support/elements";
import { HomePage } from "./homePage";

export class DeliveryPage extends HomePage {
    protected url: string;
    readonly city: LOCATIONS_FOR_URL;

    constructor(page: Page, city: LOCATIONS_FOR_URL) {
        super(page);
        this.city = city;
        this.url = `${BASE_URL}/${city}/dostavka/`;
    }
}