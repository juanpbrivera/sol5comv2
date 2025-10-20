import { PageObject } from '@automation/web-automation-framework';
import type { CustomWorld  } from '../support/CustomWorld';

export class LoginFormComponent extends PageObject {
  private readonly selectorUsuario = ".form-group:has(> label:has-text('Usuario')) input[type='text']";
  private readonly selectorContrasena = "//label[normalize-space()='Contraseña']/following::input[@type='password'][1]";

  constructor(world: CustomWorld ) {
    super(world);
  }

  async navegarALogin(): Promise<void> {
    await this.navegar('/login');
  }

  async ingresarUsuario(usuario: string): Promise<void> {
    await this.escribir(this.selectorUsuario, usuario);
  }

  async ingresarContrasena(contrasena: string): Promise<void> {
    await this.escribir(this.selectorContrasena, contrasena);
  }

  async hacerClicEnIngresar(): Promise<void> {
    await this.porRol('button', { name: 'Ingresar' }).click();
  }
}