import type { CustomWorld } from '../support/CustomWorld';
import { HipotecarioComponent } from '../components/HipotecarioComponent';
import { MessageComponent } from '../components/MessageComponent';

export class HipotecarioFlow {
  private readonly hipotecario: HipotecarioComponent;
  private readonly message: MessageComponent;

  constructor(private readonly world: CustomWorld) {
    this.hipotecario = new HipotecarioComponent(world);
    this.message = new MessageComponent(world);
  }

  async navegarAFlujoHipotecario(): Promise<void> {
    await this.hipotecario.navegarAFormularioHipotecario();
  }

  async completarFormularioHipotecario(dni: string, celular: string, correo: string, estadoCivil: string): Promise<void> {
    await this.hipotecario.ingresarDni(dni);
    await this.hipotecario.ingresarCelular(celular);
    await this.hipotecario.ingresarCorreo(correo);
    await this.hipotecario.seleccionarEstadoCivil(estadoCivil);
    await this.hipotecario.hacerClicEnLogin();
  }

  async verificarSimuladorVisible(): Promise<void> {
    await this.hipotecario.verificarHeadingSimuladorVisible();
  }
}
