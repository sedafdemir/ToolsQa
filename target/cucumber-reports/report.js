$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/sortable.feature");
formatter.feature({
  "name": "Reaching out to sortable menu and did",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User should be able to sort the elements",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sort"
    }
  ]
});
formatter.step({
  "name": "User gets url",
  "keyword": "Given "
});
formatter.match({
  "location": "DragAndDrop_Steps.user_gets_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Reaches to Basic Sites",
  "keyword": "Then "
});
formatter.match({
  "location": "DragAndDrop_Steps.reaches_to_Basic_Sites()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click sortable",
  "keyword": "Then "
});
formatter.match({
  "location": "Sortable_Steps.user_Click_sortable()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User sortss the elements",
  "keyword": "And "
});
formatter.match({
  "location": "Sortable_Steps.user_sortss_the_elements()"
});
formatter.result({
  "status": "passed"
});
});