Feature: TestSuite DemoBlaze
@Simple
Scenario: Inicio de Sesion Exitoso
    Given in the main page of DemoBlaze
    When sign Up as a new user
    Then enter a valid credentials and press on Sign Up button
    And press on Cancel button
    When press on Log In
    Then enter a valid credentials and press on Login button
    And welcome user to the page
    And user is log out
    When press on Log In
    Then enter an valid credentials and press on Login button