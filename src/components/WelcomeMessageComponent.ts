import { PageObject } from '@automation/web-automation-framework';
import type { CustomWorld  } from '../support/CustomWorld';

export class WelcomeMessageComponent extends PageObject {
  private get mensajeBienvenida() {
    return this.$('.texto-bienvenidos');
  }

  constructor(world: CustomWorld ) {
    super(world);
  }

  async verificarMensajeBienvenida(): Promise<void> {
    await this.verificar(this.mensajeBienvenida).estaVisible();
  }
}