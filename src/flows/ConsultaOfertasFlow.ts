import type { CustomWorld } from '../support/CustomWorld';
import { ConsultaOfertasComponent } from '../components/ConsultaOfertasComponent';

export class ConsultaOfertasFlow {
  private readonly consulta: ConsultaOfertasComponent;

  constructor(private readonly world: CustomWorld) {
    this.consulta = new ConsultaOfertasComponent(world);
  }

  async navegarAConsultaDeOfertas(): Promise<void> {
    await this.consulta.clickOpcionConsultaOfertas();
  }

  async consultarPorNumeroDocumento(numero: string): Promise<void> {
    await this.consulta.ingresarNumeroDocumento(numero);
  }

  async verificarSinOferta(): Promise<void> {
    await this.consulta.verificarMensajeSinOferta();
  }

  async verificarDetalleDNI(numero: string): Promise<void> {
    await this.consulta.verificarDetalleDNI(numero);
  }
}
