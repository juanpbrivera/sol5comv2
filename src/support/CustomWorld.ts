import { AutomatizacionWeb } from 'web-continuous-testing-framework-v1';
import { setWorldConstructor } from '@cucumber/cucumber';
import { ConsultaOfertasFlow } from '../flows/ConsultaOfertasFlow';
import { LoginFlow } from '../flows/LoginFlow';
import { HipotecarioFlow } from '../flows/HipotecarioFlow';


/**
 * World personalizado del proyecto usando COM.
 * Instancia los flows necesarios para los tests.
 */
export class CustomWorld extends AutomatizacionWeb {
  public loginFlow!: LoginFlow;
  public consultaOfertasFlow!: ConsultaOfertasFlow;
  public hipotecarioFlow!: HipotecarioFlow;

  public _dni?: string;
  public _celular?: string;
  public _correo?: string;
  public _estadoCivil?: string;
  
  async iniciar() {
    await super.iniciar();
    
    this.consultaOfertasFlow = new ConsultaOfertasFlow(this);
    this.loginFlow = new LoginFlow(this);
    this.hipotecarioFlow = new HipotecarioFlow(this);
  }
}

setWorldConstructor(CustomWorld);