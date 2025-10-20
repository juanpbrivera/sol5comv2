import { AutomatizacionWeb } from 'web-continuous-testing-framework-v1';
import { setWorldConstructor } from '@cucumber/cucumber';
import { LoginFlow } from '../flows/LoginFlow';

/**
 * World personalizado del proyecto usando COM.
 * Instancia los flows necesarios para los tests.
 */
export class CustomWorld extends AutomatizacionWeb {
  public loginFlow!: LoginFlow;
  
  async iniciar() {
    await super.iniciar();
    
    this.loginFlow = new LoginFlow(this);
  }
}

setWorldConstructor(CustomWorld);