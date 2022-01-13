@Video @OnlyChrome
Feature: Video playback

    As users, we are going to load the campaign url, 
    We need to ensure videos can be played

    Background:
        Given I open the url "https://www.volvocars.com/intl/v/car-safety/a-million-more" and accept cookies

    Scenario: Playing a video on page
        When I play video
        Then verify video is playing
        When I pause video
        Then verify video is paused    