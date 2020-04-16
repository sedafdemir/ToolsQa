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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027ui-widget-header ui-droppable ui-state-highlight\u0027]//p\"}\n  (Session info: chrome\u003d80.0.3987.163)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-4BK9TQN\u0027, ip: \u0027192.168.0.56\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.163, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\KD1114\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:57149}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 0043fda05603d51315b908b93cb1be88\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027ui-widget-header ui-droppable ui-state-highlight\u0027]//p}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.getText(Unknown Source)\r\n\tat testSteps.MainPageStepDef.user_drag_and_drop(MainPageStepDef.java:54)\r\n\tat ✽.User drag and drop(src/test/resources/features/toolsqa.feature:7)\r\n",
  "status": "failed"
});
});