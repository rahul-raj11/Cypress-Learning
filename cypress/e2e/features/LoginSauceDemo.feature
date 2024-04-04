Feature: Login feature

    Feature This feature is required for a user to log in.

    Background: Login to web application
    Given A user opens the login page

    Scenario: Success Login
    When A user enter the username "standard_user"
    And A user enter the password "secret_sauce"
    And A user clicks on login button
    Then A user is logged in and url contain "/inventory.html"


    Scenario: Failed Login Using Locked User
    When A user enter the username "locked_out_user"
    And A user enter the password "secret_sauce"
    And A user clicks on login button
    Then A user gets error message "Epic sadface: Sorry, this user has been locked out."


    Scenario: Failed Login Using Incorrect Credential
    When A user enter incorrect credetials
    |username       |password       |
    |incorrect_user |secret_sauce   |
    #|standard_user  |incorrect_pass |
    And A user clicks on login button
    Then A user gets error message "Epic sadface: Username and password do not match any user in this service"