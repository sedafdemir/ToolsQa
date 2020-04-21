$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/smartbear.feature");
formatter.feature({
  "name": "Fill up the form by using Apche POI",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "I should be able to fill up the order form",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@poi"
    }
  ]
});
formatter.step({
  "name": "User gets url and login",
  "keyword": "Given "
});
formatter.match({
  "location": "SmartBearOrder_Steps.user_gets_url_and_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Fill up the form and submit",
  "keyword": "Then "
});
formatter.match({
  "location": "SmartBearOrder_Steps.fill_up_the_form_and_submit()"
});
formatter.result({
  "status": "passed"
});
});