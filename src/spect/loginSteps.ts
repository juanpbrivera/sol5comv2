import { Given, When, Then } from '@cucumber/cucumber';
import type { CustomWorld } from '../support/CustomWorld';

Given('que navego a la página de login', async function (this: CustomWorld) {
  await this.loginFlow.navegarALogin();
});

When('ingreso el usuario {string}', async function (this: CustomWorld, usuario: string) {
  await this.loginFlow.ingresarUsuario(usuario);
});

When('ingreso la contraseña {string}', async function (this: CustomWorld, contrasena: string) {
  await this.loginFlow.ingresarContrasena(contrasena);
});

When('hago clic en ingresar', async function (this: CustomWorld) {
  await this.loginFlow.hacerClicEnIngresar();
});

When('ingreso como {string} usando JSON', async function (this: CustomWorld, rol: 'vendedor' | 'aprobador') {
  await this.loginFlow.iniciarSesionJsonComo(rol);
});

When('ingreso como {string} usando CSV', async function (this: CustomWorld, rol: 'vendedor' | 'aprobador') {
  await this.loginFlow.iniciarSesionCSVComo(rol);
});

Then('debo ver el mensaje de bienvenida', async function (this: CustomWorld) {
  await this.loginFlow.verificarLoginExitoso();
});

Then('debo ver un mensaje de error de credenciales', async function (this: CustomWorld) {
  await this.loginFlow.verificarErrorCredenciales();
});

Then('debo ver el mensaje de error {string}', async function (this: CustomWorld, textoEsperado: string) {
  await this.loginFlow.verificarMensajeError(textoEsperado);
});