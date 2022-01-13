@Regression @MillionMore
Feature: A Million More
  - The Million More page of Volvo lists the different features of Volvo Cars
  - This page also has weblinks for viewing and purchasing the different Volvo cars

  Background: User is opening Volvo - A million More Campaign page
    Given I open the url "https://www.volvocars.com/intl/v/car-safety/a-million-more" and accept cookies

  @SafetyFeatures
  Scenario: User is verifying the list of safety features
    Then below options should be available in the "Safety Section" :
      | Safety header             |
      | Safety video              |
      | Speed section header      |
      | Speed cap                 |
      | Highway pilot             |
      | Driver monitoring cameras |
      | Care key                  |
      | Learn more URL            |
      | Conditions message        |

  @Testimonials
  Scenario: User is verifying the list of testimonials
    Then below options should be available in the "Testimonial Section" :
      | Testimonial header      |
      | Testimonial description |
      | Amy Video               |
      | Amy                     |
      | Amy Description         |

  @Innovation
  Scenario: User is verifying the Innovation
    Then below options should be available in the "Innovation Section" :
      | Innovation header      |
      | Innovation description |
      | Learn more URL         |
      | Innovation image       |

  @Models
  Scenario: User is verifying the list of Models
    Then below options should be available in the "Models Section" :
      | Models Header   |
      | XC90 SUV Header |
      | XC90            |
      | XC90 Learn      |
      | XC90 Shop       |
    And below options should be available in the "Models Section" :
      | Learn More       |
      | Mild Hybrid Cars |

  @TopPanel
  Scenario: User is verifying the Top Panel
    Then below options should be available in the "Top Panel Section" :
      | Volvo logo   |
      | Our Cars URL |
      | Menu         |
