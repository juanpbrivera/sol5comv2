@smoke @consulta-ofertas @error
Feature: Consulta de Ofertas
  Como VendedorBanco
  Quiero consultar ofertas por número de documento
  Para verificar si existen ofertas disponibles para el cliente

  Background:
    Given que navego a la página de login
    When ingreso el usuario "VendedorBanco"
    When ingreso como "vendedor" usando CSV
    Then debo ver el mensaje de bienvenida

  @sin-oferta
  Scenario: Consulta sin oferta para DNI inexistente
    Given que realizo click a la opcion de "Consulta de Ofertas"
    And ingreso el número de documento "99999999"
    Then debo ver el mensaje "SIN OFERTA"
    And debo ver el detalle el texto "DNI: 99999999"
