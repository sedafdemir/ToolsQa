package testSteps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.interactions.Actions;
import pages.mainPage.DragAndDrop;
import utilities.Config;
import utilities.Driver;

public class DragAndDrop_Steps {
    DragAndDrop dragAndDrop = new DragAndDrop();
    String mainHandle;
    Actions actions = new Actions(Driver.getDriver());

    @Given("User gets url")
    public void user_gets_url() {
      Driver.getDriver().get(Config.getProperty("Url"));
      mainHandle=Driver.getDriver().getWindowHandle();
    }



    @Then("Reaches to Basic Sites")
    public void reaches_to_Basic_Sites() {

        actions.moveToElement(dragAndDrop.demoSites).perform();
        dragAndDrop.basicDemoSites.click();

    }

    @Then("User Click droppable")
    public void user_Click_droppable() {
        for( String handle : Driver.getDriver().getWindowHandles()) {
            if (!handle.equals(mainHandle)) {
                Driver.getDriver().switchTo().window(handle);
                //System.out.println(handle);try this also in the loop
            }
        }
        dragAndDrop.droppable.click();

    }

    @Then("User drag and drop")
    public void user_drag_and_drop() throws InterruptedException{


      //  actions.clickAndHold(mainPage.draggableSquare).moveToElement(mainPage.droppableSquare).perform();
       // actions.release(mainPage.draggableSquare).perform();

        actions.dragAndDrop(dragAndDrop.draggableSquare, dragAndDrop.droppableSquare).perform();
        String expectedtext = "Dropped!";
        String actualtext = dragAndDrop.dropVerification.getText();
        Assert.assertEquals(actualtext,expectedtext);



    }
}
