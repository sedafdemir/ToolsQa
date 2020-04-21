package testSteps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.support.ui.Select;
import pages.mainPage.OrderPage;
import utilities.Config;
import utilities.Driver;

import java.io.File;
import java.io.FileInputStream;

public class SmartBearOrder_Steps {

    OrderPage orderPage = new OrderPage();

    @Given("User gets url and login")
    public void user_gets_url_and_login() {
        Driver.getDriver().get(Config.getProperty("SmartBearURL"));
        orderPage.usernameInput.sendKeys("Tester");
        orderPage.passwordInput.sendKeys("test");
        orderPage.loginButton.click();
    }

    @Then("Fill up the form and submit")
    public void fill_up_the_form_and_submit() throws Exception{
        orderPage.orderButton.click();
        Select productDropdown = new Select(orderPage.productDropdown);
        productDropdown.selectByVisibleText("FamilyAlbum");
        orderPage.quantity.sendKeys(Keys.BACK_SPACE + "2");
        File file = new File("src/OrderData.xlsx");
        FileInputStream fis = new FileInputStream(file);
        XSSFWorkbook workbook = new XSSFWorkbook(fis);
        XSSFSheet sheet = workbook.getSheet("Sheet1");
        for(int i = 0; i<4; i++){  // It must be 5 instead of 4
            orderPage.getList().get(i).sendKeys(sheet.getRow(1).getCell(i).toString());
        }

 //       if (sheet.getRow(1).getCell(6).toString().equalsIgnoreCase("Visa")){
//            orderPage.visaCardType.click();
//        }else if (sheet.getRow(1).getCell(6).toString().equalsIgnoreCase("MasterCard")){
//            orderPage.masterCardType.click();
//        }else if (sheet.getRow(1).getCell(6).toString().equalsIgnoreCase("American Express")){
//            orderPage.americanExpressCardType.click();
//        }else{
//            Assert.assertTrue("INVALID CARD TYPE!",false);
//        }
        orderPage.zip.sendKeys("60034");

        orderPage.visaCardType.click();
      //  orderPage.creditCardNumberInput.sendKeys(sheet.getRow(1).getCell(7).toString());
        orderPage.creditCardNumberInput.sendKeys("5498761905429694");
//        orderPage.expirationDateInput.sendKeys(sheet.getRow(1).getCell(8).toString());
        orderPage.expirationDateInput.sendKeys("03/24");
        orderPage.processButton.click();





    }
}
