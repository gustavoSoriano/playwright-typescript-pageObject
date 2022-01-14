import { expect } from "@playwright/test";
import BasePage from "../../BasePage";
import Elements from "./Elements";

export default class HomePage extends BasePage {
    url: string = "https://playwright.dev/";

    async Redicrect() {
        await this.page.goto(this.url);
    }

    async ValidateTitle() {
        await this.page.locator(Elements.PAGE_TITLE).click();
        await expect(this.page).toHaveTitle(/Getting started/);
    }
}
