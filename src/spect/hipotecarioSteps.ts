import { Given, When, Then } from '@cucumber/cucumber';
import type { CustomWorld } from '../support/CustomWorld';

Given('que el usuario accede a la página {string}', async function (this: CustomWorld, url: string) {
  // Solo soportamos la URL del flujo hipotecario
  if (url === 'https://www.reinventabanbif.pe/Hipotecario') {
    await this.hipotecarioFlow.navegarAFlujoHipotecario();
    return;
  }
  throw new Error(`URL no soportada en step: ${url}`);
});

When('el usuario ingresa su DNI con el valor {string}', function (this: CustomWorld, dni: string) {
  this._dni = dni;
});

When('completa su número de celular con {string}', function (this: CustomWorld, celular: string) {
  this._celular = celular;
});

When('escribe su correo electrónico {string}', function (this: CustomWorld, correo: string) {
  this._correo = correo;
});

When('selecciona su estado civil como {string}', function (this: CustomWorld, estadoCivil: string) {
  this._estadoCivil = estadoCivil;
});

When('hace clic en el botón {string}', async function (this: CustomWorld, boton: string) {
  // Solo soportamos el botón "Continuar"
  if (boton === 'Continuar') {
    if (!this._dni || !this._celular || !this._correo || !this._estadoCivil) {
      throw new Error('Faltan datos requeridos para completar el formulario hipotecario');
    }
    await this.hipotecarioFlow.completarFormularioHipotecario(
      this._dni,
      this._celular,
      this._correo,
      this._estadoCivil
    );
    return;
  }
  throw new Error(`Botón no soportado en step: ${boton}`);
});

Then('el sistema muestra la sección {string}', async function (this: CustomWorld, seccion: string) {
  // Solo soportamos la sección "Simula tu Crédito Hipotecario"
  if (seccion === 'Simula tu Crédito Hipotecario') {
    await this.hipotecarioFlow.verificarSimuladorVisible();
    return;
  }
  throw new Error(`Sección no soportada en step: ${seccion}`);
});
