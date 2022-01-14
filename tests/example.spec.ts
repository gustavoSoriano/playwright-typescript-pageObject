import { test, chromium } from "@playwright/test";
import HomePage from "../pages/home/HomePage";

const home = new HomePage({ headless: true, navigator: chromium });

test("basic test", async () => {
    await home.Redicrect();
    await home.ValidateTitle();
});
