package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"html:target/cucumber-reports"},
        features = "src/test/resources/features/",
        glue = "testSteps",
        dryRun = false,
        tags = "@dropdown"
)

public class CukesRunner {



}
