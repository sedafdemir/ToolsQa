package testSteps;

import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import pages.mainPage.DropDown;
import utilities.Driver;

import java.util.List;

public class DropDawn_Steps {
      DropDown dropDown = new DropDown();
      String mainHandle;

     int numberOfChoise=0;


    @Then("User Click automation form link")
    public void user_Click_automation_form_link() {
        for( String handle : Driver.getDriver().getWindowHandles()) {
            if (!handle.equals(mainHandle)) {
                Driver.getDriver().switchTo().window(handle);
                //System.out.println(handle);try this also in the loop
            }
        }
        dropDown.automationFormLink.click();

    }

    @Then("User see default chosen")
    public void user_see_default_chosen() {
        Select select = new Select(dropDown.dropdown);

       String firstSelected = select.getFirstSelectedOption().getText();
        System.out.println("This is first selected element: "+firstSelected);



    }

    @Then("User collect all options")
    public void user_collect_all_options() {
        Select select = new Select(dropDown.dropdown);
        List<WebElement>  allOptions  = select.getOptions();
        numberOfChoise = allOptions.size();
        for(WebElement option : allOptions){
            System.out.println(option.getText());
        }
        Assert.assertEquals(7,numberOfChoise);


    }

    @Then("User chose specific one With text")
    public void user_chose_specific_one_With_text() throws InterruptedException {
        Select select = new Select(dropDown.dropdown);

        select.selectByVisibleText("Asia");


    }

    @Then("User chose specific one with index")
    public void user_chose_specific_one_with_index() throws InterruptedException{
        Select select = new Select(dropDown.dropdown);
        for(int i = 0; i<numberOfChoise; i++){
            select.selectByIndex(i);
            Thread.sleep(1000);

        }
    }





}
