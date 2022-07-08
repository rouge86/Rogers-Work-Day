# Roger Work Day Calendar Challenge 05
The task is to create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

I used Moment.js library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

## Table of Contents
- [Description](#description)
- [Acceptance](#acceptance)
- [Credits](#credits)
- [License](#license)

## Screenshot
![alt text](https://github.com/rouge86/Rogers-Work-Day/blob/2164a6e76d379f0491b20455158deea7d42261ac/Rogers%20Work%20Day.png?raw=true)

## Link to live page
(https://rouge86.github.io/Rogers-Work-Day/)


## Description
- The motivation is to develop 3rd Party Web API skills like jQuery, Bootsrap, moment.js.
- The moment.js portion of the code is based on this stackoverflow resource https://stackoverflow.com/questions/62462599/how-can-i-change-elements-style-based-on-the-time-of-day
- Through this challenge I learned the value of review course material. If I had enough time, I would have tried to loop the locally stored array into each table row instead of hardcoding it in as I have. I will attempt to rebuild this when I am more confident with jQuery and loop functions
- I used moment.js to show the current time in the jumbotron
- I learned how to manipulate bootstrap using custom-divs

## Acceptance
*Acceptance Criteria*
```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar  ✔️
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours  ✔️
WHEN I view the timeblocks for that day 
THEN each timeblock is color coded to indicate whether it is in the past, present, or future  ✔️
WHEN I click into a timeblock
THEN I can enter an event  ✔️
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage  ✔️
WHEN I refresh the page
THEN the saved events persist  ✔️
```

## Credits

### Background color change with moment.js & css inspired by this'
https://stackoverflow.com/questions/62462599/how-can-i-change-elements-style-based-on-the-time-of-day

## License

none
