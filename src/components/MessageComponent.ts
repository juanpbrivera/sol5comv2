import { PageObject } from 'web-continuous-testing-framework-v1';
import type { CustomWorld  } from '../support/CustomWorld';

export class MessageComponent extends PageObject {
  private readonly selectorMensajeError = '.toast-message';

  constructor(world: CustomWorld ) {
    super(world);
  }

  private obtenerMensaje() {
    return this.porTexto('× Inicio Sesión.');
  }

  private obtenerMensajeErrorAutenticacion() {
    return this.porRol('alert');
  }

  async verificarMensajeError(textoEsperado: string): Promise<void> {
    await this.verificar(this.obtenerMensaje()).estaVisible();
    await this.verificar(this.obtenerMensaje()).contieneTexto(textoEsperado);
  }

  async verificarMensajeErrorCredenciales(): Promise<void> {
    await this.verificar(this.obtenerMensajeErrorAutenticacion()).estaVisible();
  }
}