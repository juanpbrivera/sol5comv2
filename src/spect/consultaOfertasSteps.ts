import { Given, When, Then } from '@cucumber/cucumber';
import type { CustomWorld } from '../support/CustomWorld';

Given('que realizo click a la opcion de {string}', async function (this: CustomWorld, opcion: string) {
  // Actualmente esperamos la opción "Consulta de Ofertas"
  if (opcion === 'Consulta de Ofertas') {
    await this.consultaOfertasFlow.navegarAConsultaDeOfertas();
    return;
  }

  // Si en el futuro hay otras opciones, lanzar error para mantener pasos exactos y evitar ambigüedad
  throw new Error(`Opción no soportada en step: ${opcion}`);
});

When('ingreso el número de documento {string}', async function (this: CustomWorld, numero: string) {
  await this.consultaOfertasFlow.consultarPorNumeroDocumento(numero);
});

Then('debo ver el mensaje {string}', async function (this: CustomWorld, mensaje: string) {
  // En este feature esperamos "SIN OFERTA"
  if (mensaje === 'SIN OFERTA') {
    await this.consultaOfertasFlow.verificarSinOferta();
    return;
  }

  throw new Error(`Mensaje de verificación no soportado en este step: ${mensaje}`);
});

Then('debo ver el detalle el texto {string}', async function (this: CustomWorld, texto: string) {
  // Se espera un texto como "DNI: 99999999"
  const match = texto.match(/^DNI:\s*(.*)$/);
  if (match) {
    const numero = match[1].trim();
    await this.consultaOfertasFlow.verificarDetalleDNI(numero);
    return;
  }

  // Si no coincide con el patrón, intentar verificar el texto tal cual
  await this.consultaOfertasFlow.verificarDetalleDNI(texto);
});
