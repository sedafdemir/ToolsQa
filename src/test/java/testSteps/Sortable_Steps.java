package testSteps;

import cucumber.api.java.en.Then;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import pages.mainPage.DragAndDrop;
import pages.mainPage.Sortable;
import runners.CukesRunner;
import utilities.Driver;

import java.awt.*;
import java.util.ArrayList;

public class Sortable_Steps {

    Sortable sortable = new Sortable();
    String mainHandle;
    Actions actions = new Actions(Driver.getDriver());

    @Then("User Click sortable")
    public void user_Click_sortable() throws  InterruptedException {

        for( String handle : Driver.getDriver().getWindowHandles()) {
            if (!handle.equals(mainHandle)) {
                Driver.getDriver().switchTo().window(handle);
                //System.out.println(handle);try this also in the loop
            }
        }
        sortable.sortableLink.click();

    }

    @Then("User sortss the elements")
    public void user_sortss_the_elements() {



      for(int i = 31 ; i < sortable.sortableList.size(); i++){
          actions.clickAndHold(sortable.sortableList.get(i)).moveToElement(sortable.sortableList.get(i-1)).perform();
          actions.release(sortable.sortableList.get(i)).perform();
      }



    }



}
