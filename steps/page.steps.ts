import { binding, given, then, when } from "cucumber-tsflow";
import HomePage from "../pages/home/HomePage";

const home = new HomePage();

@binding()
export class PageSteps {
    @given(/Acesso à Home/)
    public async givenAnAccountWithStartingBalance() {
        await home.Redicrect();
    }

    @when("Clicar no botão logar")
    public async deposit() {
        await home.ValidateHome();
    }

    @then("Realize o login com sucesso")
    public async accountBalanceShouldEqual() {
        await home.ValidateTitle();
    }
}
