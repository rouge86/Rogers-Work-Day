//Code based on: https://stackoverflow.com/questions/62462599/how-can-i-change-elements-style-based-on-the-time-of-day
//Local storage
//var todoInput = document.querySelector(".user");
var todoInput = document.querySelector(".user");
var todoTextarea = document.querySelector("#savedText");
var todoTextarea2 = document.querySelector("#savedText2");
var todoTextarea3 = document.querySelector("#savedText3");
var todoTextarea4 = document.querySelector("#savedText4");
var todoTextarea5 = document.querySelector("#savedText5");
var todoTextarea6 = document.querySelector("#savedText6");
var todoTextarea7 = document.querySelector("#savedText7");
var todoTextarea8 = document.querySelector("#savedText8");
var todoTextarea9 = document.querySelector("#savedText9");

var saveButton = document.querySelector("#save");
var saveButton2 = document.querySelector("#save2");
var saveButton3 = document.querySelector("#save3");
var saveButton4 = document.querySelector("#save4");
var saveButton5 = document.querySelector("#save5");
var saveButton6 = document.querySelector("#save6");
var saveButton7 = document.querySelector("#save7");
var saveButton8 = document.querySelector("#save8");
var saveButton9 = document.querySelector("#save9");

var msgDiv = document.querySelector("#msg");



renderLastRegistered();
renderLastRegistered2();
renderLastRegistered3();
renderLastRegistered4();
renderLastRegistered5();
renderLastRegistered6();
renderLastRegistered7();
renderLastRegistered8();
renderLastRegistered9();


//Local storage textarea, based on Week 4 APIs local storage activity 22
function renderLastRegistered() {
    var todo = localStorage.getItem("savedTodo");
    todoTextarea.innerHTML = todo;
  
}
  saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    var todo = document.querySelector(".user").value;
    localStorage.setItem("savedTodo", todo);

  })

  function renderLastRegistered2() {
    var todo = localStorage.getItem("savedTodo2");
    todoTextarea2.textContent = todo;
  
}
  saveButton2.addEventListener("click", function(event) {
    event.preventDefault();
    var todo = document.querySelector(".user2").value;
    localStorage.setItem("savedTodo2", todo);

  })

  function renderLastRegistered3() {
    var todo = localStorage.getItem("savedTodo3");
    todoTextarea3.textContent = todo;
  
}
  saveButton3.addEventListener("click", function(event) {
    event.preventDefault();
    var todo = document.querySelector(".user3").value;
    localStorage.setItem("savedTodo3", todo);

  })
 
  function renderLastRegistered4() {
    var todo = localStorage.getItem("savedTodo4");
    todoTextarea4.textContent = todo;
  
}
  saveButton4.addEventListener("click", function(event) {
    event.preventDefault();
    var todo = document.querySelector(".user4").value;
    localStorage.setItem("savedTodo4", todo);

  })

  function renderLastRegistered5() {
    var todo = localStorage.getItem("savedTodo5");
    todoTextarea5.textContent = todo;
  
}
  saveButton5.addEventListener("click", function(event) {
    event.preventDefault();
    var todo = document.querySelector(".user5").value;
    localStorage.setItem("savedTodo5", todo);

  })

  function renderLastRegistered6() {
    var todo = localStorage.getItem("savedTodo6");
    todoTextarea6.textContent = todo;
  
}
  saveButton6.addEventListener("click", function(event) {
    event.preventDefault();
    var todo = document.querySelector(".user6").value;
    localStorage.setItem("savedTodo6", todo);

  })

  function renderLastRegistered7() {
    var todo = localStorage.getItem("savedTodo7");
    todoTextarea7.textContent = todo;
  
}
  saveButton7.addEventListener("click", function(event) {
    event.preventDefault();
    var todo = document.querySelector(".user7").value;
    localStorage.setItem("savedTodo7", todo);

  })

  function renderLastRegistered8() {
    var todo = localStorage.getItem("savedTodo8");
    todoTextarea8.textContent = todo;
  
}
  saveButton8.addEventListener("click", function(event) {
    event.preventDefault();
    var todo = document.querySelector(".user8").value;
    localStorage.setItem("savedTodo8", todo);

  })

  function renderLastRegistered9() {
    var todo = localStorage.getItem("savedTodo9");
    todoTextarea9.textContent = todo;
  
}
  saveButton9.addEventListener("click", function(event) {
    event.preventDefault();
    var todo = document.querySelector(".user9").value;
    localStorage.setItem("savedTodo9", todo);

  })


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

/* 
//Below From Activity 26 
// The following function renders items in a todo list as <li> elements
function renderTodos() {

  // Render add data-set attribute to each timeblock
  for (var i = 0; i < todos.Length; i++) {
    input[i].setAttribute("style", "background: purple;");
    input[i].setAttribute("data-set", i)

  // Get stored todos from localStorage
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  console.log(storedTodos)
    input[i].innerHTML = storedTodos;

  // If todos were retrieved from localStorage, update the todos array to it
  if (storedTodos !== null) {
    todos = storedTodos;

  }

  // This is a helper function that will render todos to the DOM
  //renderTodos();
}
}


function storeTodos() {
  // Stringify and set key in localStorage to todos array
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Add submit event to form
saveButton.addEventListener("click", function(event) {
  event.preventDefault();

  var todoText = todoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  todos.push(todoText);
  todoInput.value = "";

  // Store updated todos in localStorage, re-render the list
  storeTodos();
});

renderTodos();
 */

/* 
// Add click event to todoList element
todoList.addEventListener("click", function(event) {
  var element = event.target;

  // Checks if element is a button
  if (element.matches("button") === true) {
    // Get its data-index value and remove the todo element from the list
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);

    // Store updated todos in localStorage, re-render the list
    storeTodos();
    renderTodos();
  }
}); */

// Calls init to retrieve data and render it to the page on load
//init()

//^ From Activity 26^ */






