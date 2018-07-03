# Read Me
-------------------------------------------------------

Environment
-----------------------
Java Version : 1.8
Maven Version: 3.3.9
O S          : Windows 10 Home



Pre Conditions
-----------------------

1. To Execute this test automation pack the application in the below URL must be up and running in the execution machine.

https://github.com/buildit/acceptance-testing

2. Java and Maven should be installed properly in the execution machine

How to run the tests
-----------------------

1. Download the project and extract it
2. Open command prompt and navigate to the project root folder [WeatherForecast] where POM.xml file is present
3. Now execute the follwoing command

	mvn clean test
4. Now the project build will start and will execute the test cases


Test Report
-----------------------
The Cucumber Test report will be present in the follwoing location
	[WeatherForecast]\target\HTML-Report\index.html
