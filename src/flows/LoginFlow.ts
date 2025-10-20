import type { CustomWorld  } from '../support/CustomWorld';
import { LoginFormComponent } from '../components/LoginFormComponent';
import { MessageComponent } from '../components/MessageComponent';
import { WelcomeMessageComponent } from '../components/WelcomeMessageComponent';

export class LoginFlow {
  private readonly loginForm: LoginFormComponent;
  private readonly message: MessageComponent;
  private readonly welcome: WelcomeMessageComponent;

  constructor(private readonly world: CustomWorld ) {
    this.loginForm = new LoginFormComponent(world);
    this.message = new MessageComponent(world);
    this.welcome = new WelcomeMessageComponent(world);
  }

  async navegarALogin(): Promise<void> {
    await this.loginForm.navegarALogin();
  }

  async iniciarSesionBasico(usuario: string, contrasena: string): Promise<void> {
    await this.loginForm.ingresarUsuario(usuario);
    await this.loginForm.ingresarContrasena(contrasena);
    await this.loginForm.hacerClicEnIngresar();
  }

  async iniciarSesionJsonComo(rol: 'vendedor' | 'aprobador'): Promise<void> {
    const config = this.world.obtenerConfiguracion();

    const credencial = config.dataPrueba?.credenciales?.[rol];

    if (!credencial?.usuario || !credencial?.password) {
      throw new Error(
        `Credencial '${rol}' no encontrada o incompleta en ${config.env}.json\n` +
        `Verifica la estructura: dataPrueba.credenciales.${rol}.usuario y .password`
      );
    }

    await this.loginForm.ingresarUsuario(credencial.usuario);
    await this.loginForm.ingresarContrasena(credencial.password);
    await this.loginForm.hacerClicEnIngresar();
  }

  async iniciarSesionCSVComo(rol: 'vendedor' | 'aprobador'): Promise<void> {
    const config = this.world.obtenerConfiguracion();
    
    const credencial = await this.loginForm['obtenerDataCSV']<any>('credenciales', {rol, ambiente: config.env});

    await this.loginForm.ingresarUsuario(credencial.usuario);
    await this.loginForm.ingresarContrasena(credencial.password);
    await this.loginForm.hacerClicEnIngresar();
  }

  async verificarLoginExitoso(): Promise<void> {
    await this.welcome.verificarMensajeBienvenida();
  }

  async verificarMensajeError(textoEsperado: string): Promise<void> {
    await this.message.verificarMensajeError(textoEsperado);
  }

  async verificarErrorCredenciales(): Promise<void> {
    await this.message.verificarMensajeErrorCredenciales();
  }

  async ingresarUsuario(usuario: string): Promise<void> {
    await this.loginForm.ingresarUsuario(usuario);
  }

  async ingresarContrasena(contrasena: string): Promise<void> {
    await this.loginForm.ingresarContrasena(contrasena);
  }

  async hacerClicEnIngresar(): Promise<void> {
    await this.loginForm.hacerClicEnIngresar();
  }
}