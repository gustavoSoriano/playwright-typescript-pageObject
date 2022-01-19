import { binding, before, after } from "cucumber-tsflow";
import { chromium } from "@playwright/test";
import global from "../types/globalthis";
import { HookScenarioResult, Status } from "cucumber";

@binding()
class Hooks {
    private _worldObj: any;
    
    @before()
    public async beforeAllScenarios(): Promise<void> {
        global.browser = await chromium.launch({ headless: true });
        global.context = await global.browser.newContext();
        global.page = await global.context.newPage();
    }

    @after()
    public async closeBrowserAfterAllScenarios(): Promise<void> {
        global.browser.close();
    }

    @after()
    public async screeshopAfterAllScenarios(
        scenario: HookScenarioResult
    ): Promise<void> {
        if (scenario.result.status === Status.PASSED) {
            const screenshot = await global.page.screenshot({
                path: "screenshot.png",
            });
            this._worldObj.attach(screenshot, "image/png")
        }
    }
}

export = Hooks;
