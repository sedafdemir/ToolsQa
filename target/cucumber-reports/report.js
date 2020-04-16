$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/toolsqa.feature");
formatter.feature({
  "name": "Reaching out to drag and drop menu and did",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User should be able to drag and drop",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@drag"
    }
  ]
});
formatter.step({
  "name": "User gets url",
  "keyword": "Given "
});
formatter.match({
  "location": "MainPageStepDef.user_gets_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Reaches to Basic Sites",
  "keyword": "Then "
});
formatter.match({
  "location": "MainPageStepDef.reaches_to_Basic_Sites()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click droppable",
  "keyword": "Then "
});
formatter.match({
  "location": "MainPageStepDef.user_Click_droppable()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User drag and drop",
  "keyword": "And "
});
formatter.match({
  "location": "MainPageStepDef.user_drag_and_drop()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cDrop[ here]\u003e but was:\u003cDrop[ped!]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat testSteps.MainPageStepDef.user_drag_and_drop(MainPageStepDef.java:56)\r\n\tat ✽.User drag and drop(src/test/resources/features/toolsqa.feature:7)\r\n",
  "status": "failed"
});
});