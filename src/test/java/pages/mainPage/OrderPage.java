package pages.mainPage;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

import java.util.ArrayList;
import java.util.List;

public class OrderPage {

    public OrderPage() {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(id = "ctl00_MainContent_username")
    public WebElement usernameInput;

    @FindBy(id = "ctl00_MainContent_password")
    public WebElement passwordInput;

    @FindBy(id = "ctl00_MainContent_login_button")
    public WebElement loginButton;

    @FindBy(xpath = "//ul[@id='ctl00_menu']//li[3]//a")
    public WebElement orderButton;

    @FindBy(id = "ctl00_MainContent_fmwOrder_ddlProduct")
    public WebElement productDropdown;

    @FindBy(id = "ctl00_MainContent_fmwOrder_txtQuantity")
    public WebElement quantity;

    @FindBy(id = "ctl00_MainContent_fmwOrder_txtName")
    public WebElement customerName;

    @FindBy(id = "ctl00_MainContent_fmwOrder_TextBox2")
    public WebElement street;

    @FindBy(id = "ctl00_MainContent_fmwOrder_TextBox3")
    public WebElement city;

    @FindBy(id = "ctl00_MainContent_fmwOrder_TextBox4")
    public WebElement state;

    @FindBy(id = "ctl00_MainContent_fmwOrder_TextBox5")
    public WebElement zip;

    @FindBy(id = "ctl00_MainContent_fmwOrder_cardList_0")
    public WebElement visaCardType;

    @FindBy(id = "ctl00_MainContent_fmwOrder_cardList_1")
    public WebElement masterCardType;

    @FindBy(id = "ctl00_MainContent_fmwOrder_cardList_2")
    public WebElement americanExpressCardType;

    @FindBy(id = "ctl00_MainContent_fmwOrder_TextBox6")
    public WebElement creditCardNumberInput;

    @FindBy(id = "ctl00_MainContent_fmwOrder_TextBox1")
    public WebElement expirationDateInput;

    @FindBy(id = "ctl00_MainContent_fmwOrder_InsertButton")
    public WebElement processButton;

    public List<WebElement> list = new ArrayList<>();

    public List<WebElement> getList() {
        list.add(customerName);
        list.add(street);
        list.add(city);
        list.add(state);
        list.add(zip);
        list.add(americanExpressCardType);
        list.add(visaCardType);
        list.add(masterCardType);
        list.add(creditCardNumberInput);
        list.add(expirationDateInput);
        return  list;
    }

}
