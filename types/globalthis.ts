import { Page, BrowserType, Browser, BrowserContext } from "@playwright/test";

declare module global {
    let browserName: BrowserType;
    let page: Page;
    let browser: Browser;
    let context: BrowserContext;
}

export = global;
