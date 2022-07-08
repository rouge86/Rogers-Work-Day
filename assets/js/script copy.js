//Code based on: https://stackoverflow.com/questions/62462599/how-can-i-change-elements-style-based-on-the-time-of-day
//Local storage
var todoInput = document.querySelector(".user");
var todoTextarea = document.querySelector("#savedText");
var saveButton = document.querySelector("#save");
var msgDiv = document.querySelector("#msg");



renderLastRegistered();


//Local storage textarea, based on Week 4 APIs local storage activity 22
function renderLastRegistered() {
    var todo = localStorage.getItem("savedTodo");
  
    todoTextarea.innerHTML = todo;
  }

  saveButton.addEventListener("click", function(event) {
    event.preventDefault();
  
    var todo = document.querySelector(".user").value;
    console.log(todo);
    localStorage.setItem("savedTodo", todo);
      
      renderLastRegistered();
    }
  );
  
// loop through elements of table
var parentContainer = $('#parent');
$('#save').on("click", function () {
    console.log(this)
    var value = $(this).siblings('#09')
    console.log(value);

});

// from here you can extract sibiling


// how to save data to local storage, the value the description, to find the key



// save reference to important DOM elements
var timeDisplayEl = $('#time-display');
var todoDisplayEl = $('.todo');

// handle displaying the time
function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}

//Change textarea background color based on time
var checkTime = function () {
    
    //Get Current time
    var currentTime = moment().format('HH');
    console.log(currentTime);

    //get all elements with class "taskarea"
    var timeBlockElements = $(".textarea");

    //loop through taskarea classes
    for (var i = 0 ; i < timeBlockElements.length ; i++) {

        //Get element i's ID as a string
        var elementId = timeBlockElements[i].id;
        //console.log(elementId)

        //get element by ID
        var changeId = document.getElementById(timeBlockElements[i].id)

        //remove any old classes from element
        $(timeBlockElements[i].id).removeClass(".present .past .future");

        // apply new class if task is present/past/future
        if (elementId < currentTime) {
            $(changeId).addClass("past");
        } else if (elementId > currentTime) {
            $(changeId).addClass("future");
        } else {
            $(changeId).addClass("present");
        }
    }
}

// checkTime every 5 minutes
setInterval(checkTime(), (1000 * 60) * 1);


setInterval(displayTime, 1000);


//https://stackoverflow.com/questions/7892446/how-to-save-to-localstorage-from-textarea