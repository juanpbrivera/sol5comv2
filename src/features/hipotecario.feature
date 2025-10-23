Feature: Simulación de Crédito Hipotecario
  Como usuario interesado en obtener un crédito hipotecario
  Quiero ingresar mis datos personales en el formulario
  Para poder acceder a la simulación de mi crédito

  @prompt
  Scenario: Happy Path - Completar formulario y continuar a la simulación
    Given que el usuario accede a la página "https://www.reinventabanbif.pe/Hipotecario"
    When el usuario ingresa su DNI con el valor "99999999"
    And completa su número de celular con "999999999"
    And escribe su correo electrónico "test@agente.com"
    And selecciona su estado civil como "Casado"
    And hace clic en el botón "Continuar"
    Then el sistema muestra la sección "Simula tu Crédito Hipotecario"
