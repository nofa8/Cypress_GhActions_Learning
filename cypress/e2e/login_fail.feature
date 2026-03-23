Feature: User Login
As a registered user,
I make a mistake while logging in,
So that i can access review the error message.
 Scenario: Unsuccessful login with invalid password
 Given I am on the login page
 When I fill "email" with "example@example.com"
 And I fill "password" with "safePassword1233"
 And I click the "submit" button
 Then I should see the "errors" message