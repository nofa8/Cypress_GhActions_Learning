Feature: User Login
As a registered user,
I want to authenticate,
So that i can access my dashboard.
 Scenario: Successful login with valid credentials
 Given I am on the login page
 When I fill "email" with "example@example.com"
 And I fill "password" with "safePassword123"
 And I click the "submit" button
 Then I should see the "welcome" message