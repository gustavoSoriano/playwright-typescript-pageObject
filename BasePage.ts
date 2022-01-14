import {
    Page,
    test,
    BrowserType,
    Browser,
    BrowserContext,
} from "@playwright/test";

interface IBasePageProps {
    headless: boolean;
    navigator: BrowserType;
}

export default class BasePage {
    page: Page;
    browser: Browser;
    context: BrowserContext;

    constructor({ headless, navigator }: IBasePageProps) {
        test.beforeEach(async () => {
            this.browser = await navigator.launch({ headless });
            this.context = await this.browser.newContext({});
            this.page = await this.context.newPage();
        });

        test.afterAll(async () => await this.browser.close());
    }
}
