Feature: Fill up the form by using Apche POI
  @poi
  Scenario: I should be able to fill up the order form
    Given User gets url and login
    Then Fill up the form and submit
