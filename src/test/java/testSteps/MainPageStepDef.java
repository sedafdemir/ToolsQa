package testSteps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.mainPage.MainPage;
import utilities.Config;
import utilities.Driver;

import java.util.concurrent.TimeUnit;

public class MainPageStepDef {
    MainPage mainPage = new MainPage();
    String mainHandle;
    Actions actions = new Actions(Driver.getDriver());

    @Given("User gets url")
    public void user_gets_url() {
      Driver.getDriver().get(Config.getProperty("Url"));
      mainHandle=Driver.getDriver().getWindowHandle();
    }



    @Then("Reaches to Basic Sites")
    public void reaches_to_Basic_Sites() {

        actions.moveToElement(mainPage.demoSites).perform();
        mainPage.basicDemoSites.click();

    }

    @Then("User Click droppable")
    public void user_Click_droppable() {
        for( String handle : Driver.getDriver().getWindowHandles()) {
            if (!handle.equals(mainHandle)) {
                Driver.getDriver().switchTo().window(handle);
                //System.out.println(handle);try this also in the loop
            }
        }
        mainPage.droppable.click();

    }

    @Then("User drag and drop")
    public void user_drag_and_drop() throws InterruptedException{

     
      //  actions.clickAndHold(mainPage.draggableSquare).moveToElement(mainPage.droppableSquare).perform();
       // actions.release(mainPage.draggableSquare).perform();

        actions.dragAndDrop(mainPage.draggableSquare,mainPage.droppableSquare).perform();
        String expectedtext = "Dropped!";
        String actualtext = mainPage.dropVerification.getText();
        Assert.assertEquals(actualtext,expectedtext);



    }
}
