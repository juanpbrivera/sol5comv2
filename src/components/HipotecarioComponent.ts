import { PageObject } from '@juanpbrivera/web-continuous-testing-framework-v1';
import type { CustomWorld } from '../support/CustomWorld';

export class HipotecarioComponent extends PageObject {
  private readonly selectorCampoDni = '#dni';
  // private readonly selectorCampoDni = this.porRol('form').first().getByRole('textbox').nth(0);
  // private readonly selectorCampoDni = this.porRol('textbox', { name: 'dni' });
  // private readonly selectorCampoDni = this.porEtiqueta('dni');
  private readonly selectorCampoCelular = '#cel';
  // private readonly selectorCampoCelular = this.porPlaceholder('Celular');
  // private readonly selectorCampoCorreo = '#mail';
  private readonly selectorCampoCorreo = '#mail';
  private readonly selectorComboEstadoCivil = '#cboEstadoCivil';
  // private readonly selectorComboEstadoCivil = this.porRol('combobox', { name: /estado civil/i });
  // private readonly selectorBotonLogin = '#btnLogin';
  private readonly btnContinuar = this.porRol('link', { name: 'Continuar' });

  private readonly cabecera = this.porRol('heading', { name: 'Simula tu Crédito Hipotecario' });




  constructor(world: CustomWorld) {
    super(world);
  }

  async navegarAFormularioHipotecario(): Promise<void> {
    await this.navegar('/Hipotecario');
  }

  async ingresarDni(dni: string): Promise<void> {
    // this.page.getByRole('textbox', { name: /dni/i }).fill('9999999');
    await this.escribir(this.selectorCampoDni, dni);
  }

  async ingresarCelular(celular: string): Promise<void> {
    await this.escribir(this.selectorCampoCelular, celular);
  }

  async ingresarCorreo(correo: string): Promise<void> {
    await this.escribir(this.selectorCampoCorreo, correo);
  }

  async seleccionarEstadoCivil(valor: string): Promise<void> {
    await this.seleccionar(this.selectorComboEstadoCivil, valor);
  }

  async hacerClicEnLogin(): Promise<void> {
    await this.click(this.btnContinuar);
  }

  obtenerHeadingSimulador() {
    return this.cabecera;
  }

  async verificarHeadingSimuladorVisible(): Promise<void> {
    await this.verificar(this.cabecera).estaVisible();
  }
}
