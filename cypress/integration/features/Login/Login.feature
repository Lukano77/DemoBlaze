Feature: TestSuite DemoBlaze

Scenario: Test1
    Given in the main page of DemoBlaze
    When sign Up as a new user
    When enter a valid credentials and press on Sign Up button
    And press on Cancel button
    When press on Log In
    When enter a valid credentials and press on Login button
    And welcome user to the page
    And user is log out
    When press on Log In
    Then enter an invalid credentials and press on Login button

Scenario: Test2
    Given in the main page of DemoBlaze
    When press on Log In
    When enter a valid credentials and press on Login button
    Then welcome user to the page
    When press on Phone
    And select the first phone on the list
    When press on add to card button
    Then alert verification