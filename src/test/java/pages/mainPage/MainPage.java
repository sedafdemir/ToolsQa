package pages.mainPage;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class MainPage {

    public MainPage(){
      PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "//img[@class='cp-close-img lazyloading']")
     public WebElement crazyAddClose;
    @FindBy(xpath = "(//span[contains(text(),'DEMO SITES')])[1]")
    public WebElement demoSites;
    @FindBy(xpath = "(//span[contains(text(),'Basic Demo Site')])[1]")
    public WebElement basicDemoSites;
    @FindBy(xpath = "(//a[contains(text(),'Droppable')])[1]")
    public WebElement droppable;
    @FindBy(xpath = "//a[.='Droppable']")
    public WebElement draggableSquare;
    @FindBy(xpath = "//div[@id='droppable']")
    public WebElement droppableSquare;
    @FindBy (xpath = "//div[@class='ui-widget-header ui-droppable ui-state-highlight']//p")
    public WebElement dropVerification;


}
