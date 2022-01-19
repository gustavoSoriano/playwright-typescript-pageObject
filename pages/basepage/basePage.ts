import Hooks from "../../support/hooks";
import global from "../../types/globalthis";

export default class basePage extends Hooks{
    
    click()
    {
        global.page.locator('').click();
    }
    
}