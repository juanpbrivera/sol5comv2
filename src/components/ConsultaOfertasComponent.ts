import { PageObject } from '@juanpbrivera/web-continuous-testing-framework-v1';
import type { CustomWorld } from '../support/CustomWorld';

export class ConsultaOfertasComponent extends PageObject {
  constructor(world: CustomWorld) {
    super(world);
  }

  // Opción del menú "Consulta de Ofertas" (capturada por codegen como locator('a').filter({ hasText: 'Consulta de Ofertas' }))
  private obtenerOpcionConsultaOfertas() {
    return this.porTexto('Consulta de Ofertas');
  }

  async clickOpcionConsultaOfertas(): Promise<void> {
    // await this.obtenerOpcionConsultaOfertas().click();
    await this.click(this.obtenerOpcionConsultaOfertas());
  }

  // Campo "Número documento" (codegen: getByRole('textbox', { name: 'Número documento' }))
  private obtenerCampoNumeroDocumento() {
    return this.porRol('textbox', { name: 'Número documento' });
  }

  async ingresarNumeroDocumento(numero: string): Promise<void> {

    await this.seleccionar(this.porRol('combobox'), '1');

    // await this.obtenerCampoNumeroDocumento().click();
    // Usamos el locator devuelto por porRol para rellenar
    // await this.obtenerCampoNumeroDocumento().fill(numero);
    await this.click(this.porRol('textbox', { name: 'Número documento' }));
    // await this.escribir(this.porRol('textbox', { name: 'Número documento' }), '10425054126');
    await this.escribir(this.porRol('textbox', { name: 'Número documento' }), numero);
  }

  // Mensaje "SIN OFERTA" (codegen: getByRole('heading', { name: 'SIN OFERTA' }))
  private obtenerMensajeSinOferta() {
    return this.porRol('heading', { name: 'SIN OFERTA' });
  }

  async verificarMensajeSinOferta(): Promise<void> {
    await this.verificar(this.obtenerMensajeSinOferta()).estaVisible();
    await this.verificar('.modal-title');
    await this.verificar('/html/body/app-root/div/div/app-home/app-modal/div/div/div[2]/h2');
  }

  // Detalle "DNI: 99999999" (codegen mostró 'DNI:' como getByText)
  private obtenerDetalleDNI(texto: string) {
    return this.porTexto(texto);
  }

  async verificarDetalleDNI(numero: string): Promise<void> {
    const texto = `DNI: ${numero}`;
    await this.verificar(this.obtenerDetalleDNI(texto)).estaVisible();
    await this.verificar(this.obtenerDetalleDNI(texto)).contieneTexto(numero);
    await this.verificar('.modal-paragraph').estaVisible;
    await this.verificar('.modal-paragraph').estaHabilitado;
    await this.verificar('.modal-paragraph').tieneTexto('DNI: 99999999');
    await this.verificar('.modal-paragraph').contieneTexto(': 99999999');
    await this.verificar('.modal-paragraph').contieneTexto('DNI: ');
  }
}
