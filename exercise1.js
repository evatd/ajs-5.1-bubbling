// The elements to attach "click" handlers to
var docBody = document.body,
  parentElement = document.getElementById("parent"),
  childElement = document.getElementById("child");

// Add your listeners here...
parentElement.addEventListener("click", function() {
  // Double quote alert - use escape mechanism \
  console.log("I'm the parent!"); // Prints 'I'm the parent!'
});

childElement.addEventListener("click", function() {
  console.log("I'm the child!"); //Prints 'I'm the child!', 'I'm the parent!', due to bubbling up from child element (event bubbling/propagation)
});

// Second part: (current)Target of each element, parent and child
parentElement.addEventListener("click", function() {
  // Via '.target' property of the event object (e/event), get a reference to the element that fired the event
  console.log(event.target); // Prints <p> Parent Element</p>

  // Via '.currentTarget' property, get a reference to the element whose handler is currently being executed
  console.log(event.currentTarget); // Prints <div id = "parent"> containing Parent Element and Child Element</div>
});

childElement.addEventListener("click", function() {
  // Via '.target' property of the event object (e/event), get a reference to the element that fired the event
  console.log(event.target); // Prints <div id = "child">Child Element</div> referring to childElement
  // And, bubbles up to parentElement, printing <div id = "child">Child Element</div> referring to line 20 (child now is the source of bubbling)

  // Via '.currentTarget' property, get a reference to the element whose handler is currently being executed
  console.log(event.currentTarget); // Prints <div id = "child">Child Element</div> referring to childElement
  // And, bubbles up to parentElement, printing <div id = "parent"> containing Parent Element and Child Element</div> referring to line 22 (as both child and parent's handler is being executed)

  // Third part: now amend the code so that the event does not bubble up from the child element
  event.stopPropagation(); // click on parentElement, get the same (current)target results
  // click on childElement and see <div id = "child">Child Element</div> for (current)Target, it didn't bubble up to parentElement
});
