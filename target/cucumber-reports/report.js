$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/dropdown.feature");
formatter.feature({
  "name": "Testing All functionalities in dropdown box",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User should be able to useall functionalities in dropdown",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@dropdown"
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
  "name": "User Click automation form link",
  "keyword": "Then "
});
formatter.match({
  "location": "DropDawn_Steps.user_Click_automation_form_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see default chosen",
  "keyword": "Then "
});
formatter.match({
  "location": "DropDawn_Steps.user_see_default_chosen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User collect all options",
  "keyword": "Then "
});
formatter.match({
  "location": "DropDawn_Steps.user_collect_all_options()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User chose specific one With text",
  "keyword": "Then "
});
formatter.match({
  "location": "DropDawn_Steps.user_chose_specific_one_With_text()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027controls\u0027]//select//option[i]\"}\n  (Session info: chrome\u003d80.0.3987.163)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-4BK9TQN\u0027, ip: \u0027192.168.0.56\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.163, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\KD1114\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:59764}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 0996961112920dfbbbb7a339b0f91c21\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027controls\u0027]//select//option[i]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat testSteps.DropDawn_Steps.user_chose_specific_one_With_text(DropDawn_Steps.java:61)\r\n\tat ✽.User chose specific one With text(src/test/resources/features/dropdown.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User chose specific one with index",
  "keyword": "Then "
});
formatter.match({
  "location": "DropDawn_Steps.user_chose_specific_one_with_index()"
});
formatter.result({
  "status": "skipped"
});
});