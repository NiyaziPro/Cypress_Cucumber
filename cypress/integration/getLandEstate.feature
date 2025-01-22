Feature: Login Test
    @manager
    Scenario: Manager Login
        Given I go to the login page
        When I enter the data
            | username          | password |
            | nmanager@mail.com | Xyz9876@ |
        And I click the login button
        Then I should be redirected to the manager page
        
    @customer
    Scenario: Customer Login
        Given I go to the login page
        When I enter the data
            | username    | password |
            | nc@mail.com | Abcd123@ |
        And I click the login button
        Then I should be redirected to the manager page