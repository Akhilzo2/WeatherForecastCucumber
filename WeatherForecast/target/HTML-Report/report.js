$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("WeatherForecast.feature");
formatter.feature({
  "id": "5-day-weather-forecast-testing",
  "description": "",
  "name": "5 Day Weather Forecast Testing",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 4460570149,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "Opening 5 Day Weather Forecast application",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "The Weather Forecast application is launched",
  "keyword": "Given ",
  "line": 4
});
formatter.match({
  "location": "StepDef.the_Weather_Forecast_application_is_launched()"
});
formatter.result({
  "duration": 3832092634,
  "status": "passed"
});
formatter.scenario({
  "id": "5-day-weather-forecast-testing;verifying-the-application-title-and-header",
  "description": "",
  "name": "Verifying the application title and header",
  "keyword": "Scenario",
  "line": 6,
  "type": "scenario"
});
formatter.step({
  "name": "I verify that page title is \"5 Weather Forecast\"",
  "keyword": "Then ",
  "line": 7
});
formatter.step({
  "name": "I verify the header \"Five Day Weather Forecast for\" is displayed",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "arguments": [
    {
      "val": "5 Weather Forecast",
      "offset": 29
    }
  ],
  "location": "StepDef.i_verify_that_page_title_is(String)"
});
formatter.result({
  "duration": 35042042,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Five Day Weather Forecast for",
      "offset": 21
    }
  ],
  "location": "StepDef.i_verify_the_header_is_displayed(String)"
});
formatter.result({
  "duration": 158425006,
  "status": "passed"
});
formatter.after({
  "duration": 2051197449,
  "status": "passed"
});
formatter.scenarioOutline({
  "id": "5-day-weather-forecast-testing;verifying-5-day-weather-forecast-data-using-different-city-names",
  "description": "",
  "name": "Verifying 5 Day weather forecast data using different city names",
  "keyword": "Scenario Outline",
  "line": 10,
  "type": "scenario_outline"
});
formatter.step({
  "name": "I enter the city name as \"\u003cCityName\u003e\" and press enter",
  "keyword": "Then ",
  "line": 11
});
formatter.step({
  "name": "I verify that five day weather forecast is displayed",
  "keyword": "Then ",
  "line": 12
});
formatter.step({
  "name": "I click on day \"1\"",
  "keyword": "When ",
  "line": 13
});
formatter.step({
  "name": "The three hourly forecast is \"Displayed\" for day \"1\"",
  "keyword": "Then ",
  "line": 14
});
formatter.step({
  "name": "I verify the day \"1\" summary weather condition is same as the first three hour data",
  "keyword": "Then ",
  "line": 15
});
formatter.step({
  "name": "I verify the day \"1\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then ",
  "line": 16
});
formatter.step({
  "name": "I verify the day \"1\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then ",
  "line": 17
});
formatter.step({
  "name": "I verify the day \"1\" rainfall summary is the aggregate three hour data",
  "keyword": "Then ",
  "line": 18
});
formatter.step({
  "name": "I click on day \"1\"",
  "keyword": "When ",
  "line": 19
});
formatter.step({
  "name": "The three hourly forecast is \"Not Displayed\" for day \"1\"",
  "keyword": "Then ",
  "line": 20
});
formatter.step({
  "name": "I click on day \"2\"",
  "keyword": "When ",
  "line": 21
});
formatter.step({
  "name": "The three hourly forecast is \"Displayed\" for day \"2\"",
  "keyword": "Then ",
  "line": 22
});
formatter.step({
  "name": "I verify the day \"2\" summary weather condition is same as the first three hour data",
  "keyword": "Then ",
  "line": 23
});
formatter.step({
  "name": "I verify the day \"2\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then ",
  "line": 24
});
formatter.step({
  "name": "I verify the day \"2\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then ",
  "line": 25
});
formatter.step({
  "name": "I verify the day \"2\" rainfall summary is the aggregate three hour data",
  "keyword": "Then ",
  "line": 26
});
formatter.step({
  "name": "I click on day \"2\"",
  "keyword": "When ",
  "line": 27
});
formatter.step({
  "name": "The three hourly forecast is \"Not Displayed\" for day \"2\"",
  "keyword": "Then ",
  "line": 28
});
formatter.step({
  "name": "I click on day \"3\"",
  "keyword": "When ",
  "line": 29
});
formatter.step({
  "name": "The three hourly forecast is \"Displayed\" for day \"3\"",
  "keyword": "Then ",
  "line": 30
});
formatter.step({
  "name": "I verify the day \"3\" summary weather condition is same as the first three hour data",
  "keyword": "Then ",
  "line": 31
});
formatter.step({
  "name": "I verify the day \"3\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then ",
  "line": 32
});
formatter.step({
  "name": "I verify the day \"3\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then ",
  "line": 33
});
formatter.step({
  "name": "I verify the day \"3\" rainfall summary is the aggregate three hour data",
  "keyword": "Then ",
  "line": 34
});
formatter.step({
  "name": "I click on day \"3\"",
  "keyword": "When ",
  "line": 35
});
formatter.step({
  "name": "The three hourly forecast is \"Not Displayed\" for day \"3\"",
  "keyword": "Then ",
  "line": 36
});
formatter.step({
  "name": "I click on day \"4\"",
  "keyword": "When ",
  "line": 37
});
formatter.step({
  "name": "The three hourly forecast is \"Displayed\" for day \"4\"",
  "keyword": "Then ",
  "line": 38
});
formatter.step({
  "name": "I verify the day \"4\" summary weather condition is same as the first three hour data",
  "keyword": "Then ",
  "line": 39
});
formatter.step({
  "name": "I verify the day \"4\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then ",
  "line": 40
});
formatter.step({
  "name": "I verify the day \"4\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then ",
  "line": 41
});
formatter.step({
  "name": "I verify the day \"4\" rainfall summary is the aggregate three hour data",
  "keyword": "Then ",
  "line": 42
});
formatter.step({
  "name": "I click on day \"4\"",
  "keyword": "When ",
  "line": 43
});
formatter.step({
  "name": "The three hourly forecast is \"Not Displayed\" for day \"4\"",
  "keyword": "Then ",
  "line": 44
});
formatter.step({
  "name": "I click on day \"5\"",
  "keyword": "When ",
  "line": 45
});
formatter.step({
  "name": "The three hourly forecast is \"Displayed\" for day \"5\"",
  "keyword": "Then ",
  "line": 46
});
formatter.step({
  "name": "I verify the day \"5\" summary weather condition is same as the first three hour data",
  "keyword": "Then ",
  "line": 47
});
formatter.step({
  "name": "I verify the day \"5\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then ",
  "line": 48
});
formatter.step({
  "name": "I verify the day \"5\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then ",
  "line": 49
});
formatter.step({
  "name": "I verify the day \"5\" rainfall summary is the aggregate three hour data",
  "keyword": "Then ",
  "line": 50
});
formatter.step({
  "name": "I click on day \"5\"",
  "keyword": "When ",
  "line": 51
});
formatter.step({
  "name": "The three hourly forecast is \"Not Displayed\" for day \"5\"",
  "keyword": "Then ",
  "line": 52
});
formatter.examples({
  "id": "5-day-weather-forecast-testing;verifying-5-day-weather-forecast-data-using-different-city-names;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 54,
  "rows": [
    {
      "id": "5-day-weather-forecast-testing;verifying-5-day-weather-forecast-data-using-different-city-names;;1",
      "cells": [
        "CityName"
      ],
      "line": 55
    },
    {
      "id": "5-day-weather-forecast-testing;verifying-5-day-weather-forecast-data-using-different-city-names;;2",
      "cells": [
        "aberdeen"
      ],
      "line": 56
    },
    {
      "id": "5-day-weather-forecast-testing;verifying-5-day-weather-forecast-data-using-different-city-names;;3",
      "cells": [
        "dundee"
      ],
      "line": 57
    },
    {
      "id": "5-day-weather-forecast-testing;verifying-5-day-weather-forecast-data-using-different-city-names;;4",
      "cells": [
        "edinburgh"
      ],
      "line": 58
    },
    {
      "id": "5-day-weather-forecast-testing;verifying-5-day-weather-forecast-data-using-different-city-names;;5",
      "cells": [
        "glasgow"
      ],
      "line": 59
    },
    {
      "id": "5-day-weather-forecast-testing;verifying-5-day-weather-forecast-data-using-different-city-names;;6",
      "cells": [
        "perth"
      ],
      "line": 60
    },
    {
      "id": "5-day-weather-forecast-testing;verifying-5-day-weather-forecast-data-using-different-city-names;;7",
      "cells": [
        "stirling"
      ],
      "line": 61
    }
  ]
});
formatter.before({
  "duration": 2523320040,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "Opening 5 Day Weather Forecast application",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "The Weather Forecast application is launched",
  "keyword": "Given ",
  "line": 4
});
formatter.match({
  "location": "StepDef.the_Weather_Forecast_application_is_launched()"
});
formatter.result({
  "duration": 4036071384,
  "status": "passed"
});
formatter.scenario({
  "id": "5-day-weather-forecast-testing;verifying-5-day-weather-forecast-data-using-different-city-names;;2",
  "description": "",
  "name": "Verifying 5 Day weather forecast data using different city names",
  "keyword": "Scenario Outline",
  "line": 56,
  "type": "scenario"
});
formatter.step({
  "name": "I enter the city name as \"aberdeen\" and press enter",
  "keyword": "Then ",
  "line": 11,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I verify that five day weather forecast is displayed",
  "keyword": "Then ",
  "line": 12
});
formatter.step({
  "name": "I click on day \"1\"",
  "keyword": "When ",
  "line": 13
});
formatter.step({
  "name": "The three hourly forecast is \"Displayed\" for day \"1\"",
  "keyword": "Then ",
  "line": 14
});
formatter.step({
  "name": "I verify the day \"1\" summary weather condition is same as the first three hour data",
  "keyword": "Then ",
  "line": 15
});
formatter.step({
  "name": "I verify the day \"1\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then ",
  "line": 16
});
formatter.step({
  "name": "I verify the day \"1\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then ",
  "line": 17
});
formatter.step({
  "name": "I verify the day \"1\" rainfall summary is the aggregate three hour data",
  "keyword": "Then ",
  "line": 18
});
formatter.step({
  "name": "I click on day \"1\"",
  "keyword": "When ",
  "line": 19
});
formatter.step({
  "name": "The three hourly forecast is \"Not Displayed\" for day \"1\"",
  "keyword": "Then ",
  "line": 20
});
formatter.step({
  "name": "I click on day \"2\"",
  "keyword": "When ",
  "line": 21
});
formatter.step({
  "name": "The three hourly forecast is \"Displayed\" for day \"2\"",
  "keyword": "Then ",
  "line": 22
});
formatter.step({
  "name": "I verify the day \"2\" summary weather condition is same as the first three hour data",
  "keyword": "Then ",
  "line": 23
});
formatter.step({
  "name": "I verify the day \"2\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then ",
  "line": 24
});
formatter.step({
  "name": "I verify the day \"2\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then ",
  "line": 25
});
formatter.step({
  "name": "I verify the day \"2\" rainfall summary is the aggregate three hour data",
  "keyword": "Then ",
  "line": 26
});
formatter.step({
  "name": "I click on day \"2\"",
  "keyword": "When ",
  "line": 27
});
formatter.step({
  "name": "The three hourly forecast is \"Not Displayed\" for day \"2\"",
  "keyword": "Then ",
  "line": 28
});
formatter.step({
  "name": "I click on day \"3\"",
  "keyword": "When ",
  "line": 29
});
formatter.step({
  "name": "The three hourly forecast is \"Displayed\" for day \"3\"",
  "keyword": "Then ",
  "line": 30
});
formatter.step({
  "name": "I verify the day \"3\" summary weather condition is same as the first three hour data",
  "keyword": "Then ",
  "line": 31
});
formatter.step({
  "name": "I verify the day \"3\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then ",
  "line": 32
});
formatter.step({
  "name": "I verify the day \"3\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then ",
  "line": 33
});
formatter.step({
  "name": "I verify the day \"3\" rainfall summary is the aggregate three hour data",
  "keyword": "Then ",
  "line": 34
});
formatter.step({
  "name": "I click on day \"3\"",
  "keyword": "When ",
  "line": 35
});
formatter.step({
  "name": "The three hourly forecast is \"Not Displayed\" for day \"3\"",
  "keyword": "Then ",
  "line": 36
});
formatter.step({
  "name": "I click on day \"4\"",
  "keyword": "When ",
  "line": 37
});
formatter.step({
  "name": "The three hourly forecast is \"Displayed\" for day \"4\"",
  "keyword": "Then ",
  "line": 38
});
formatter.step({
  "name": "I verify the day \"4\" summary weather condition is same as the first three hour data",
  "keyword": "Then ",
  "line": 39
});
formatter.step({
  "name": "I verify the day \"4\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then ",
  "line": 40
});
formatter.step({
  "name": "I verify the day \"4\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then ",
  "line": 41
});
formatter.step({
  "name": "I verify the day \"4\" rainfall summary is the aggregate three hour data",
  "keyword": "Then ",
  "line": 42
});
formatter.step({
  "name": "I click on day \"4\"",
  "keyword": "When ",
  "line": 43
});
formatter.step({
  "name": "The three hourly forecast is \"Not Displayed\" for day \"4\"",
  "keyword": "Then ",
  "line": 44
});
formatter.step({
  "name": "I click on day \"5\"",
  "keyword": "When ",
  "line": 45
});
formatter.step({
  "name": "The three hourly forecast is \"Displayed\" for day \"5\"",
  "keyword": "Then ",
  "line": 46
});
formatter.step({
  "name": "I verify the day \"5\" summary weather condition is same as the first three hour data",
  "keyword": "Then ",
  "line": 47
});
formatter.step({
  "name": "I verify the day \"5\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then ",
  "line": 48
});
formatter.step({
  "name": "I verify the day \"5\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then ",
  "line": 49
});
formatter.step({
  "name": "I verify the day \"5\" rainfall summary is the aggregate three hour data",
  "keyword": "Then ",
  "line": 50
});
formatter.step({
  "name": "I click on day \"5\"",
  "keyword": "When ",
  "line": 51
});
formatter.step({
  "name": "The three hourly forecast is \"Not Displayed\" for day \"5\"",
  "keyword": "Then ",
  "line": 52
});
formatter.match({
  "arguments": [
    {
      "val": "aberdeen",
      "offset": 26
    }
  ],
  "location": "StepDef.i_enter_the_city_name_as_and_press_enter(String)"
});
formatter.result({
  "duration": 3205529030,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_verify_that_five_day_weather_forecast_is_displayed()"
});
formatter.result({
  "duration": 37474615,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 937327053,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 50
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 654519382,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 105515409,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 241536579,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 580406276,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 256592540,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 842724595,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 54
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 637428678,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 938053748,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 50
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 656566094,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 93111453,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 237729842,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 1386003359,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 609641036,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 902196098,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 54
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 649944343,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 936535385,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "3",
      "offset": 50
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 658107255,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 96071236,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 240573354,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 1251843096,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 563911175,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 874273377,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "3",
      "offset": 54
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 640740692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 939442162,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "4",
      "offset": 50
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 661234605,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 95866621,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 225317337,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 1179727117,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 588089855,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 864518579,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "4",
      "offset": 54
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 635055379,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 946877808,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "5",
      "offset": 50
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 672259836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 99408899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 209749556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 1233085839,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 575468177,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 846220706,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "5",
      "offset": 54
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 638628435,
  "status": "passed"
});
formatter.after({
  "duration": 1552547960,
  "status": "passed"
});
formatter.before({
  "duration": 2664567139,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "Opening 5 Day Weather Forecast application",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "The Weather Forecast application is launched",
  "keyword": "Given ",
  "line": 4
});
formatter.match({
  "location": "StepDef.the_Weather_Forecast_application_is_launched()"
});
formatter.result({
  "duration": 3565071037,
  "status": "passed"
});
formatter.scenario({
  "id": "5-day-weather-forecast-testing;verifying-5-day-weather-forecast-data-using-different-city-names;;3",
  "description": "",
  "name": "Verifying 5 Day weather forecast data using different city names",
  "keyword": "Scenario Outline",
  "line": 57,
  "type": "scenario"
});
formatter.step({
  "name": "I enter the city name as \"dundee\" and press enter",
  "keyword": "Then ",
  "line": 11,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I verify that five day weather forecast is displayed",
  "keyword": "Then ",
  "line": 12
});
formatter.step({
  "name": "I click on day \"1\"",
  "keyword": "When ",
  "line": 13
});
formatter.step({
  "name": "The three hourly forecast is \"Displayed\" for day \"1\"",
  "keyword": "Then ",
  "line": 14
});
formatter.step({
  "name": "I verify the day \"1\" summary weather condition is same as the first three hour data",
  "keyword": "Then ",
  "line": 15
});
formatter.step({
  "name": "I verify the day \"1\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then ",
  "line": 16
});
formatter.step({
  "name": "I verify the day \"1\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then ",
  "line": 17
});
formatter.step({
  "name": "I verify the day \"1\" rainfall summary is the aggregate three hour data",
  "keyword": "Then ",
  "line": 18
});
formatter.step({
  "name": "I click on day \"1\"",
  "keyword": "When ",
  "line": 19
});
formatter.step({
  "name": "The three hourly forecast is \"Not Displayed\" for day \"1\"",
  "keyword": "Then ",
  "line": 20
});
formatter.step({
  "name": "I click on day \"2\"",
  "keyword": "When ",
  "line": 21
});
formatter.step({
  "name": "The three hourly forecast is \"Displayed\" for day \"2\"",
  "keyword": "Then ",
  "line": 22
});
formatter.step({
  "name": "I verify the day \"2\" summary weather condition is same as the first three hour data",
  "keyword": "Then ",
  "line": 23
});
formatter.step({
  "name": "I verify the day \"2\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then ",
  "line": 24
});
formatter.step({
  "name": "I verify the day \"2\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then ",
  "line": 25
});
formatter.step({
  "name": "I verify the day \"2\" rainfall summary is the aggregate three hour data",
  "keyword": "Then ",
  "line": 26
});
formatter.step({
  "name": "I click on day \"2\"",
  "keyword": "When ",
  "line": 27
});
formatter.step({
  "name": "The three hourly forecast is \"Not Displayed\" for day \"2\"",
  "keyword": "Then ",
  "line": 28
});
formatter.step({
  "name": "I click on day \"3\"",
  "keyword": "When ",
  "line": 29
});
formatter.step({
  "name": "The three hourly forecast is \"Displayed\" for day \"3\"",
  "keyword": "Then ",
  "line": 30
});
formatter.step({
  "name": "I verify the day \"3\" summary weather condition is same as the first three hour data",
  "keyword": "Then ",
  "line": 31
});
formatter.step({
  "name": "I verify the day \"3\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then ",
  "line": 32
});
formatter.step({
  "name": "I verify the day \"3\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then ",
  "line": 33
});
formatter.step({
  "name": "I verify the day \"3\" rainfall summary is the aggregate three hour data",
  "keyword": "Then ",
  "line": 34
});
formatter.step({
  "name": "I click on day \"3\"",
  "keyword": "When ",
  "line": 35
});
formatter.step({
  "name": "The three hourly forecast is \"Not Displayed\" for day \"3\"",
  "keyword": "Then ",
  "line": 36
});
formatter.step({
  "name": "I click on day \"4\"",
  "keyword": "When ",
  "line": 37
});
formatter.step({
  "name": "The three hourly forecast is \"Displayed\" for day \"4\"",
  "keyword": "Then ",
  "line": 38
});
formatter.step({
  "name": "I verify the day \"4\" summary weather condition is same as the first three hour data",
  "keyword": "Then ",
  "line": 39
});
formatter.step({
  "name": "I verify the day \"4\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then ",
  "line": 40
});
formatter.step({
  "name": "I verify the day \"4\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then ",
  "line": 41
});
formatter.step({
  "name": "I verify the day \"4\" rainfall summary is the aggregate three hour data",
  "keyword": "Then ",
  "line": 42
});
formatter.step({
  "name": "I click on day \"4\"",
  "keyword": "When ",
  "line": 43
});
formatter.step({
  "name": "The three hourly forecast is \"Not Displayed\" for day \"4\"",
  "keyword": "Then ",
  "line": 44
});
formatter.step({
  "name": "I click on day \"5\"",
  "keyword": "When ",
  "line": 45
});
formatter.step({
  "name": "The three hourly forecast is \"Displayed\" for day \"5\"",
  "keyword": "Then ",
  "line": 46
});
formatter.step({
  "name": "I verify the day \"5\" summary weather condition is same as the first three hour data",
  "keyword": "Then ",
  "line": 47
});
formatter.step({
  "name": "I verify the day \"5\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then ",
  "line": 48
});
formatter.step({
  "name": "I verify the day \"5\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then ",
  "line": 49
});
formatter.step({
  "name": "I verify the day \"5\" rainfall summary is the aggregate three hour data",
  "keyword": "Then ",
  "line": 50
});
formatter.step({
  "name": "I click on day \"5\"",
  "keyword": "When ",
  "line": 51
});
formatter.step({
  "name": "The three hourly forecast is \"Not Displayed\" for day \"5\"",
  "keyword": "Then ",
  "line": 52
});
formatter.match({
  "arguments": [
    {
      "val": "dundee",
      "offset": 26
    }
  ],
  "location": "StepDef.i_enter_the_city_name_as_and_press_enter(String)"
});
formatter.result({
  "duration": 2760948430,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_verify_that_five_day_weather_forecast_is_displayed()"
});
formatter.result({
  "duration": 33959127,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 933046114,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 50
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 660821957,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 89683167,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 206737337,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 559281423,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 253122647,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 847917466,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 54
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 642587920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 955483577,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 50
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 661107504,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 101135295,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 236434332,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 1320652189,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 615487646,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 885375552,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 54
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 634795480,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 909405473,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "3",
      "offset": 50
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 651178299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 97664263,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 215165279,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 1221700965,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 561857054,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 892026370,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "3",
      "offset": 54
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 643667417,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 911765661,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "4",
      "offset": 50
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 670512921,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 99424288,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 224511989,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 1200597770,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 597413767,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 857674544,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "4",
      "offset": 54
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 634484854,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 872318997,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "5",
      "offset": 50
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 668924453,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 100649693,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 208498502,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 1240357340,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 580006737,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 841369810,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "5",
      "offset": 54
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 641196087,
  "status": "passed"
});
formatter.after({
  "duration": 1576303732,
  "status": "passed"
});
formatter.before({
  "duration": 2545200655,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "Opening 5 Day Weather Forecast application",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "The Weather Forecast application is launched",
  "keyword": "Given ",
  "line": 4
});
formatter.match({
  "location": "StepDef.the_Weather_Forecast_application_is_launched()"
});
formatter.result({
  "duration": 3772200504,
  "status": "passed"
});
formatter.scenario({
  "id": "5-day-weather-forecast-testing;verifying-5-day-weather-forecast-data-using-different-city-names;;4",
  "description": "",
  "name": "Verifying 5 Day weather forecast data using different city names",
  "keyword": "Scenario Outline",
  "line": 58,
  "type": "scenario"
});
formatter.step({
  "name": "I enter the city name as \"edinburgh\" and press enter",
  "keyword": "Then ",
  "line": 11,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I verify that five day weather forecast is displayed",
  "keyword": "Then ",
  "line": 12
});
formatter.step({
  "name": "I click on day \"1\"",
  "keyword": "When ",
  "line": 13
});
formatter.step({
  "name": "The three hourly forecast is \"Displayed\" for day \"1\"",
  "keyword": "Then ",
  "line": 14
});
formatter.step({
  "name": "I verify the day \"1\" summary weather condition is same as the first three hour data",
  "keyword": "Then ",
  "line": 15
});
formatter.step({
  "name": "I verify the day \"1\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then ",
  "line": 16
});
formatter.step({
  "name": "I verify the day \"1\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then ",
  "line": 17
});
formatter.step({
  "name": "I verify the day \"1\" rainfall summary is the aggregate three hour data",
  "keyword": "Then ",
  "line": 18
});
formatter.step({
  "name": "I click on day \"1\"",
  "keyword": "When ",
  "line": 19
});
formatter.step({
  "name": "The three hourly forecast is \"Not Displayed\" for day \"1\"",
  "keyword": "Then ",
  "line": 20
});
formatter.step({
  "name": "I click on day \"2\"",
  "keyword": "When ",
  "line": 21
});
formatter.step({
  "name": "The three hourly forecast is \"Displayed\" for day \"2\"",
  "keyword": "Then ",
  "line": 22
});
formatter.step({
  "name": "I verify the day \"2\" summary weather condition is same as the first three hour data",
  "keyword": "Then ",
  "line": 23
});
formatter.step({
  "name": "I verify the day \"2\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then ",
  "line": 24
});
formatter.step({
  "name": "I verify the day \"2\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then ",
  "line": 25
});
formatter.step({
  "name": "I verify the day \"2\" rainfall summary is the aggregate three hour data",
  "keyword": "Then ",
  "line": 26
});
formatter.step({
  "name": "I click on day \"2\"",
  "keyword": "When ",
  "line": 27
});
formatter.step({
  "name": "The three hourly forecast is \"Not Displayed\" for day \"2\"",
  "keyword": "Then ",
  "line": 28
});
formatter.step({
  "name": "I click on day \"3\"",
  "keyword": "When ",
  "line": 29
});
formatter.step({
  "name": "The three hourly forecast is \"Displayed\" for day \"3\"",
  "keyword": "Then ",
  "line": 30
});
formatter.step({
  "name": "I verify the day \"3\" summary weather condition is same as the first three hour data",
  "keyword": "Then ",
  "line": 31
});
formatter.step({
  "name": "I verify the day \"3\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then ",
  "line": 32
});
formatter.step({
  "name": "I verify the day \"3\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then ",
  "line": 33
});
formatter.step({
  "name": "I verify the day \"3\" rainfall summary is the aggregate three hour data",
  "keyword": "Then ",
  "line": 34
});
formatter.step({
  "name": "I click on day \"3\"",
  "keyword": "When ",
  "line": 35
});
formatter.step({
  "name": "The three hourly forecast is \"Not Displayed\" for day \"3\"",
  "keyword": "Then ",
  "line": 36
});
formatter.step({
  "name": "I click on day \"4\"",
  "keyword": "When ",
  "line": 37
});
formatter.step({
  "name": "The three hourly forecast is \"Displayed\" for day \"4\"",
  "keyword": "Then ",
  "line": 38
});
formatter.step({
  "name": "I verify the day \"4\" summary weather condition is same as the first three hour data",
  "keyword": "Then ",
  "line": 39
});
formatter.step({
  "name": "I verify the day \"4\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then ",
  "line": 40
});
formatter.step({
  "name": "I verify the day \"4\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then ",
  "line": 41
});
formatter.step({
  "name": "I verify the day \"4\" rainfall summary is the aggregate three hour data",
  "keyword": "Then ",
  "line": 42
});
formatter.step({
  "name": "I click on day \"4\"",
  "keyword": "When ",
  "line": 43
});
formatter.step({
  "name": "The three hourly forecast is \"Not Displayed\" for day \"4\"",
  "keyword": "Then ",
  "line": 44
});
formatter.step({
  "name": "I click on day \"5\"",
  "keyword": "When ",
  "line": 45
});
formatter.step({
  "name": "The three hourly forecast is \"Displayed\" for day \"5\"",
  "keyword": "Then ",
  "line": 46
});
formatter.step({
  "name": "I verify the day \"5\" summary weather condition is same as the first three hour data",
  "keyword": "Then ",
  "line": 47
});
formatter.step({
  "name": "I verify the day \"5\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then ",
  "line": 48
});
formatter.step({
  "name": "I verify the day \"5\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then ",
  "line": 49
});
formatter.step({
  "name": "I verify the day \"5\" rainfall summary is the aggregate three hour data",
  "keyword": "Then ",
  "line": 50
});
formatter.step({
  "name": "I click on day \"5\"",
  "keyword": "When ",
  "line": 51
});
formatter.step({
  "name": "The three hourly forecast is \"Not Displayed\" for day \"5\"",
  "keyword": "Then ",
  "line": 52
});
formatter.match({
  "arguments": [
    {
      "val": "edinburgh",
      "offset": 26
    }
  ],
  "location": "StepDef.i_enter_the_city_name_as_and_press_enter(String)"
});
formatter.result({
  "duration": 3298731106,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_verify_that_five_day_weather_forecast_is_displayed()"
});
formatter.result({
  "duration": 35655316,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 917351801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 50
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 676563575,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 86721675,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 204813735,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 545792270,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 259951292,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 844513117,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 54
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 635030302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 919745618,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 50
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 672366988,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 80675580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 214673977,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 1356271598,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 583392277,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 883670814,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 54
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 635345488,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 909680761,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "3",
      "offset": 50
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 648864847,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 79951736,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 200958552,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 1168913339,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 617143939,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 867470950,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "3",
      "offset": 54
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 638601077,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 921882953,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "4",
      "offset": 50
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 663089241,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 107737668,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 205523330,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 1198295147,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 612594548,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 880664865,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "4",
      "offset": 54
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 632490007,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 950996312,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "5",
      "offset": 50
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 673634000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 88510198,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 212309228,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 1212908822,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 564829375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 828517299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "5",
      "offset": 54
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 631014391,
  "status": "passed"
});
formatter.after({
  "duration": 1503865157,
  "status": "passed"
});
formatter.before({
  "duration": 2670537429,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "Opening 5 Day Weather Forecast application",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "The Weather Forecast application is launched",
  "keyword": "Given ",
  "line": 4
});
formatter.match({
  "location": "StepDef.the_Weather_Forecast_application_is_launched()"
});
formatter.result({
  "duration": 3528261560,
  "status": "passed"
});
formatter.scenario({
  "id": "5-day-weather-forecast-testing;verifying-5-day-weather-forecast-data-using-different-city-names;;5",
  "description": "",
  "name": "Verifying 5 Day weather forecast data using different city names",
  "keyword": "Scenario Outline",
  "line": 59,
  "type": "scenario"
});
formatter.step({
  "name": "I enter the city name as \"glasgow\" and press enter",
  "keyword": "Then ",
  "line": 11,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I verify that five day weather forecast is displayed",
  "keyword": "Then ",
  "line": 12
});
formatter.step({
  "name": "I click on day \"1\"",
  "keyword": "When ",
  "line": 13
});
formatter.step({
  "name": "The three hourly forecast is \"Displayed\" for day \"1\"",
  "keyword": "Then ",
  "line": 14
});
formatter.step({
  "name": "I verify the day \"1\" summary weather condition is same as the first three hour data",
  "keyword": "Then ",
  "line": 15
});
formatter.step({
  "name": "I verify the day \"1\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then ",
  "line": 16
});
formatter.step({
  "name": "I verify the day \"1\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then ",
  "line": 17
});
formatter.step({
  "name": "I verify the day \"1\" rainfall summary is the aggregate three hour data",
  "keyword": "Then ",
  "line": 18
});
formatter.step({
  "name": "I click on day \"1\"",
  "keyword": "When ",
  "line": 19
});
formatter.step({
  "name": "The three hourly forecast is \"Not Displayed\" for day \"1\"",
  "keyword": "Then ",
  "line": 20
});
formatter.step({
  "name": "I click on day \"2\"",
  "keyword": "When ",
  "line": 21
});
formatter.step({
  "name": "The three hourly forecast is \"Displayed\" for day \"2\"",
  "keyword": "Then ",
  "line": 22
});
formatter.step({
  "name": "I verify the day \"2\" summary weather condition is same as the first three hour data",
  "keyword": "Then ",
  "line": 23
});
formatter.step({
  "name": "I verify the day \"2\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then ",
  "line": 24
});
formatter.step({
  "name": "I verify the day \"2\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then ",
  "line": 25
});
formatter.step({
  "name": "I verify the day \"2\" rainfall summary is the aggregate three hour data",
  "keyword": "Then ",
  "line": 26
});
formatter.step({
  "name": "I click on day \"2\"",
  "keyword": "When ",
  "line": 27
});
formatter.step({
  "name": "The three hourly forecast is \"Not Displayed\" for day \"2\"",
  "keyword": "Then ",
  "line": 28
});
formatter.step({
  "name": "I click on day \"3\"",
  "keyword": "When ",
  "line": 29
});
formatter.step({
  "name": "The three hourly forecast is \"Displayed\" for day \"3\"",
  "keyword": "Then ",
  "line": 30
});
formatter.step({
  "name": "I verify the day \"3\" summary weather condition is same as the first three hour data",
  "keyword": "Then ",
  "line": 31
});
formatter.step({
  "name": "I verify the day \"3\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then ",
  "line": 32
});
formatter.step({
  "name": "I verify the day \"3\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then ",
  "line": 33
});
formatter.step({
  "name": "I verify the day \"3\" rainfall summary is the aggregate three hour data",
  "keyword": "Then ",
  "line": 34
});
formatter.step({
  "name": "I click on day \"3\"",
  "keyword": "When ",
  "line": 35
});
formatter.step({
  "name": "The three hourly forecast is \"Not Displayed\" for day \"3\"",
  "keyword": "Then ",
  "line": 36
});
formatter.step({
  "name": "I click on day \"4\"",
  "keyword": "When ",
  "line": 37
});
formatter.step({
  "name": "The three hourly forecast is \"Displayed\" for day \"4\"",
  "keyword": "Then ",
  "line": 38
});
formatter.step({
  "name": "I verify the day \"4\" summary weather condition is same as the first three hour data",
  "keyword": "Then ",
  "line": 39
});
formatter.step({
  "name": "I verify the day \"4\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then ",
  "line": 40
});
formatter.step({
  "name": "I verify the day \"4\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then ",
  "line": 41
});
formatter.step({
  "name": "I verify the day \"4\" rainfall summary is the aggregate three hour data",
  "keyword": "Then ",
  "line": 42
});
formatter.step({
  "name": "I click on day \"4\"",
  "keyword": "When ",
  "line": 43
});
formatter.step({
  "name": "The three hourly forecast is \"Not Displayed\" for day \"4\"",
  "keyword": "Then ",
  "line": 44
});
formatter.step({
  "name": "I click on day \"5\"",
  "keyword": "When ",
  "line": 45
});
formatter.step({
  "name": "The three hourly forecast is \"Displayed\" for day \"5\"",
  "keyword": "Then ",
  "line": 46
});
formatter.step({
  "name": "I verify the day \"5\" summary weather condition is same as the first three hour data",
  "keyword": "Then ",
  "line": 47
});
formatter.step({
  "name": "I verify the day \"5\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then ",
  "line": 48
});
formatter.step({
  "name": "I verify the day \"5\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then ",
  "line": 49
});
formatter.step({
  "name": "I verify the day \"5\" rainfall summary is the aggregate three hour data",
  "keyword": "Then ",
  "line": 50
});
formatter.step({
  "name": "I click on day \"5\"",
  "keyword": "When ",
  "line": 51
});
formatter.step({
  "name": "The three hourly forecast is \"Not Displayed\" for day \"5\"",
  "keyword": "Then ",
  "line": 52
});
formatter.match({
  "arguments": [
    {
      "val": "glasgow",
      "offset": 26
    }
  ],
  "location": "StepDef.i_enter_the_city_name_as_and_press_enter(String)"
});
formatter.result({
  "duration": 2883712421,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_verify_that_five_day_weather_forecast_is_displayed()"
});
formatter.result({
  "duration": 27457066,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 915304519,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 50
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 654514822,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 106670140,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 211217762,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 548276709,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 305056480,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 840904155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 54
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 640345713,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 925531242,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 50
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 677757633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 88802585,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 217398367,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 1335790224,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 645473038,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 854557456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 54
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 645988278,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 917692635,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "3",
      "offset": 50
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 667234533,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 83627383,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 207218380,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 1185528700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 615832469,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 851875241,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "3",
      "offset": 54
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 629371208,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 911854575,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "4",
      "offset": 50
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 661255693,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 100482126,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 209650954,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 1176264633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 658766694,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 856020532,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "4",
      "offset": 54
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 629369497,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 911893901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "5",
      "offset": 50
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 669944104,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 75694164,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 217345931,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 1152877623,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 577070323,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 854436054,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "5",
      "offset": 54
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 640794268,
  "status": "passed"
});
formatter.after({
  "duration": 1604574126,
  "status": "passed"
});
formatter.before({
  "duration": 2492417589,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "Opening 5 Day Weather Forecast application",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "The Weather Forecast application is launched",
  "keyword": "Given ",
  "line": 4
});
formatter.match({
  "location": "StepDef.the_Weather_Forecast_application_is_launched()"
});
formatter.result({
  "duration": 4104095078,
  "status": "passed"
});
formatter.scenario({
  "id": "5-day-weather-forecast-testing;verifying-5-day-weather-forecast-data-using-different-city-names;;6",
  "description": "",
  "name": "Verifying 5 Day weather forecast data using different city names",
  "keyword": "Scenario Outline",
  "line": 60,
  "type": "scenario"
});
formatter.step({
  "name": "I enter the city name as \"perth\" and press enter",
  "keyword": "Then ",
  "line": 11,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I verify that five day weather forecast is displayed",
  "keyword": "Then ",
  "line": 12
});
formatter.step({
  "name": "I click on day \"1\"",
  "keyword": "When ",
  "line": 13
});
formatter.step({
  "name": "The three hourly forecast is \"Displayed\" for day \"1\"",
  "keyword": "Then ",
  "line": 14
});
formatter.step({
  "name": "I verify the day \"1\" summary weather condition is same as the first three hour data",
  "keyword": "Then ",
  "line": 15
});
formatter.step({
  "name": "I verify the day \"1\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then ",
  "line": 16
});
formatter.step({
  "name": "I verify the day \"1\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then ",
  "line": 17
});
formatter.step({
  "name": "I verify the day \"1\" rainfall summary is the aggregate three hour data",
  "keyword": "Then ",
  "line": 18
});
formatter.step({
  "name": "I click on day \"1\"",
  "keyword": "When ",
  "line": 19
});
formatter.step({
  "name": "The three hourly forecast is \"Not Displayed\" for day \"1\"",
  "keyword": "Then ",
  "line": 20
});
formatter.step({
  "name": "I click on day \"2\"",
  "keyword": "When ",
  "line": 21
});
formatter.step({
  "name": "The three hourly forecast is \"Displayed\" for day \"2\"",
  "keyword": "Then ",
  "line": 22
});
formatter.step({
  "name": "I verify the day \"2\" summary weather condition is same as the first three hour data",
  "keyword": "Then ",
  "line": 23
});
formatter.step({
  "name": "I verify the day \"2\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then ",
  "line": 24
});
formatter.step({
  "name": "I verify the day \"2\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then ",
  "line": 25
});
formatter.step({
  "name": "I verify the day \"2\" rainfall summary is the aggregate three hour data",
  "keyword": "Then ",
  "line": 26
});
formatter.step({
  "name": "I click on day \"2\"",
  "keyword": "When ",
  "line": 27
});
formatter.step({
  "name": "The three hourly forecast is \"Not Displayed\" for day \"2\"",
  "keyword": "Then ",
  "line": 28
});
formatter.step({
  "name": "I click on day \"3\"",
  "keyword": "When ",
  "line": 29
});
formatter.step({
  "name": "The three hourly forecast is \"Displayed\" for day \"3\"",
  "keyword": "Then ",
  "line": 30
});
formatter.step({
  "name": "I verify the day \"3\" summary weather condition is same as the first three hour data",
  "keyword": "Then ",
  "line": 31
});
formatter.step({
  "name": "I verify the day \"3\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then ",
  "line": 32
});
formatter.step({
  "name": "I verify the day \"3\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then ",
  "line": 33
});
formatter.step({
  "name": "I verify the day \"3\" rainfall summary is the aggregate three hour data",
  "keyword": "Then ",
  "line": 34
});
formatter.step({
  "name": "I click on day \"3\"",
  "keyword": "When ",
  "line": 35
});
formatter.step({
  "name": "The three hourly forecast is \"Not Displayed\" for day \"3\"",
  "keyword": "Then ",
  "line": 36
});
formatter.step({
  "name": "I click on day \"4\"",
  "keyword": "When ",
  "line": 37
});
formatter.step({
  "name": "The three hourly forecast is \"Displayed\" for day \"4\"",
  "keyword": "Then ",
  "line": 38
});
formatter.step({
  "name": "I verify the day \"4\" summary weather condition is same as the first three hour data",
  "keyword": "Then ",
  "line": 39
});
formatter.step({
  "name": "I verify the day \"4\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then ",
  "line": 40
});
formatter.step({
  "name": "I verify the day \"4\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then ",
  "line": 41
});
formatter.step({
  "name": "I verify the day \"4\" rainfall summary is the aggregate three hour data",
  "keyword": "Then ",
  "line": 42
});
formatter.step({
  "name": "I click on day \"4\"",
  "keyword": "When ",
  "line": 43
});
formatter.step({
  "name": "The three hourly forecast is \"Not Displayed\" for day \"4\"",
  "keyword": "Then ",
  "line": 44
});
formatter.step({
  "name": "I click on day \"5\"",
  "keyword": "When ",
  "line": 45
});
formatter.step({
  "name": "The three hourly forecast is \"Displayed\" for day \"5\"",
  "keyword": "Then ",
  "line": 46
});
formatter.step({
  "name": "I verify the day \"5\" summary weather condition is same as the first three hour data",
  "keyword": "Then ",
  "line": 47
});
formatter.step({
  "name": "I verify the day \"5\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then ",
  "line": 48
});
formatter.step({
  "name": "I verify the day \"5\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then ",
  "line": 49
});
formatter.step({
  "name": "I verify the day \"5\" rainfall summary is the aggregate three hour data",
  "keyword": "Then ",
  "line": 50
});
formatter.step({
  "name": "I click on day \"5\"",
  "keyword": "When ",
  "line": 51
});
formatter.step({
  "name": "The three hourly forecast is \"Not Displayed\" for day \"5\"",
  "keyword": "Then ",
  "line": 52
});
formatter.match({
  "arguments": [
    {
      "val": "perth",
      "offset": 26
    }
  ],
  "location": "StepDef.i_enter_the_city_name_as_and_press_enter(String)"
});
formatter.result({
  "duration": 2541196145,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_verify_that_five_day_weather_forecast_is_displayed()"
});
formatter.result({
  "duration": 37938560,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 953076651,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 50
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 653483772,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 89464304,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 223593789,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 560283975,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 249355807,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 856372195,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 54
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 641984906,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 937157207,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 50
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 664467966,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 103064027,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 221557907,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 1288984857,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 573529186,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 893947123,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 54
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 634153139,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 924845015,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "3",
      "offset": 50
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 656391118,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 84499985,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 200423933,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 1220504628,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 610361461,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 873538134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "3",
      "offset": 54
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 632586331,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 908419448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "4",
      "offset": 50
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 662343740,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 109689197,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 223020984,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 1223518555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 633019497,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 853505885,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "4",
      "offset": 54
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 631965648,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 904120270,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "5",
      "offset": 50
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 658474307,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 98755159,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 239253904,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 1170885956,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 569857529,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 842714906,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "5",
      "offset": 54
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 629128406,
  "status": "passed"
});
formatter.after({
  "duration": 1586382836,
  "status": "passed"
});
formatter.before({
  "duration": 2521906548,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "Opening 5 Day Weather Forecast application",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "The Weather Forecast application is launched",
  "keyword": "Given ",
  "line": 4
});
formatter.match({
  "location": "StepDef.the_Weather_Forecast_application_is_launched()"
});
formatter.result({
  "duration": 3934990234,
  "status": "passed"
});
formatter.scenario({
  "id": "5-day-weather-forecast-testing;verifying-5-day-weather-forecast-data-using-different-city-names;;7",
  "description": "",
  "name": "Verifying 5 Day weather forecast data using different city names",
  "keyword": "Scenario Outline",
  "line": 61,
  "type": "scenario"
});
formatter.step({
  "name": "I enter the city name as \"stirling\" and press enter",
  "keyword": "Then ",
  "line": 11,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I verify that five day weather forecast is displayed",
  "keyword": "Then ",
  "line": 12
});
formatter.step({
  "name": "I click on day \"1\"",
  "keyword": "When ",
  "line": 13
});
formatter.step({
  "name": "The three hourly forecast is \"Displayed\" for day \"1\"",
  "keyword": "Then ",
  "line": 14
});
formatter.step({
  "name": "I verify the day \"1\" summary weather condition is same as the first three hour data",
  "keyword": "Then ",
  "line": 15
});
formatter.step({
  "name": "I verify the day \"1\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then ",
  "line": 16
});
formatter.step({
  "name": "I verify the day \"1\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then ",
  "line": 17
});
formatter.step({
  "name": "I verify the day \"1\" rainfall summary is the aggregate three hour data",
  "keyword": "Then ",
  "line": 18
});
formatter.step({
  "name": "I click on day \"1\"",
  "keyword": "When ",
  "line": 19
});
formatter.step({
  "name": "The three hourly forecast is \"Not Displayed\" for day \"1\"",
  "keyword": "Then ",
  "line": 20
});
formatter.step({
  "name": "I click on day \"2\"",
  "keyword": "When ",
  "line": 21
});
formatter.step({
  "name": "The three hourly forecast is \"Displayed\" for day \"2\"",
  "keyword": "Then ",
  "line": 22
});
formatter.step({
  "name": "I verify the day \"2\" summary weather condition is same as the first three hour data",
  "keyword": "Then ",
  "line": 23
});
formatter.step({
  "name": "I verify the day \"2\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then ",
  "line": 24
});
formatter.step({
  "name": "I verify the day \"2\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then ",
  "line": 25
});
formatter.step({
  "name": "I verify the day \"2\" rainfall summary is the aggregate three hour data",
  "keyword": "Then ",
  "line": 26
});
formatter.step({
  "name": "I click on day \"2\"",
  "keyword": "When ",
  "line": 27
});
formatter.step({
  "name": "The three hourly forecast is \"Not Displayed\" for day \"2\"",
  "keyword": "Then ",
  "line": 28
});
formatter.step({
  "name": "I click on day \"3\"",
  "keyword": "When ",
  "line": 29
});
formatter.step({
  "name": "The three hourly forecast is \"Displayed\" for day \"3\"",
  "keyword": "Then ",
  "line": 30
});
formatter.step({
  "name": "I verify the day \"3\" summary weather condition is same as the first three hour data",
  "keyword": "Then ",
  "line": 31
});
formatter.step({
  "name": "I verify the day \"3\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then ",
  "line": 32
});
formatter.step({
  "name": "I verify the day \"3\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then ",
  "line": 33
});
formatter.step({
  "name": "I verify the day \"3\" rainfall summary is the aggregate three hour data",
  "keyword": "Then ",
  "line": 34
});
formatter.step({
  "name": "I click on day \"3\"",
  "keyword": "When ",
  "line": 35
});
formatter.step({
  "name": "The three hourly forecast is \"Not Displayed\" for day \"3\"",
  "keyword": "Then ",
  "line": 36
});
formatter.step({
  "name": "I click on day \"4\"",
  "keyword": "When ",
  "line": 37
});
formatter.step({
  "name": "The three hourly forecast is \"Displayed\" for day \"4\"",
  "keyword": "Then ",
  "line": 38
});
formatter.step({
  "name": "I verify the day \"4\" summary weather condition is same as the first three hour data",
  "keyword": "Then ",
  "line": 39
});
formatter.step({
  "name": "I verify the day \"4\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then ",
  "line": 40
});
formatter.step({
  "name": "I verify the day \"4\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then ",
  "line": 41
});
formatter.step({
  "name": "I verify the day \"4\" rainfall summary is the aggregate three hour data",
  "keyword": "Then ",
  "line": 42
});
formatter.step({
  "name": "I click on day \"4\"",
  "keyword": "When ",
  "line": 43
});
formatter.step({
  "name": "The three hourly forecast is \"Not Displayed\" for day \"4\"",
  "keyword": "Then ",
  "line": 44
});
formatter.step({
  "name": "I click on day \"5\"",
  "keyword": "When ",
  "line": 45
});
formatter.step({
  "name": "The three hourly forecast is \"Displayed\" for day \"5\"",
  "keyword": "Then ",
  "line": 46
});
formatter.step({
  "name": "I verify the day \"5\" summary weather condition is same as the first three hour data",
  "keyword": "Then ",
  "line": 47
});
formatter.step({
  "name": "I verify the day \"5\" summary wind speed and direction is same as the first three hour data",
  "keyword": "Then ",
  "line": 48
});
formatter.step({
  "name": "I verify the day \"5\" maximum and minimum temperature summary is displayed correctly",
  "keyword": "Then ",
  "line": 49
});
formatter.step({
  "name": "I verify the day \"5\" rainfall summary is the aggregate three hour data",
  "keyword": "Then ",
  "line": 50
});
formatter.step({
  "name": "I click on day \"5\"",
  "keyword": "When ",
  "line": 51
});
formatter.step({
  "name": "The three hourly forecast is \"Not Displayed\" for day \"5\"",
  "keyword": "Then ",
  "line": 52
});
formatter.match({
  "arguments": [
    {
      "val": "stirling",
      "offset": 26
    }
  ],
  "location": "StepDef.i_enter_the_city_name_as_and_press_enter(String)"
});
formatter.result({
  "duration": 3146619504,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_verify_that_five_day_weather_forecast_is_displayed()"
});
formatter.result({
  "duration": 32675015,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 911337054,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 50
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 655485457,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 90231465,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 197773068,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 541535268,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 250537896,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 830073849,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "1",
      "offset": 54
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 637913140,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 936960002,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 50
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 661356575,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 74632905,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 205165969,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 1280332353,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 598539430,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 876869527,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "2",
      "offset": 54
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 634531590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 992957622,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "3",
      "offset": 50
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 683232061,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 108276276,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 235552609,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 1161498779,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 645683352,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 846577499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "3",
      "offset": 54
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 635782074,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 896786644,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "4",
      "offset": 50
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 657692327,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 99799889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 224767330,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 1239633496,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 564662948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 852491934,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "4",
      "offset": 54
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 626523707,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 930830124,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Displayed",
      "offset": 30
    },
    {
      "val": "5",
      "offset": 50
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 655786394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_weather_condition_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 96886272,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_summary_wind_speed_and_direction_is_same_as_the_first_three_hour_data(String)"
});
formatter.result({
  "duration": 201543327,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_maximum_and_minimum_temperature_summary_is_displayed_correctly(String)"
});
formatter.result({
  "duration": 1146752304,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDef.i_verify_the_day_rainfall_summary_is_the_aggregate_three_hour_data(String)"
});
formatter.result({
  "duration": 616327191,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_day(String)"
});
formatter.result({
  "duration": 869384863,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not Displayed",
      "offset": 30
    },
    {
      "val": "5",
      "offset": 54
    }
  ],
  "location": "StepDef.the_three_hourly_forecast_is(String,String)"
});
formatter.result({
  "duration": 641190387,
  "status": "passed"
});
formatter.after({
  "duration": 1545838437,
  "status": "passed"
});
});