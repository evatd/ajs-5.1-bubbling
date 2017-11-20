// Non bubbling event

// The elements to attach "click" handlers to
var docBody = document.body,
  parentElement = document.getElementById("parent"),
  childElement = document.getElementById("child");

// Add your listeners here...
childElement.addEventListener("mouseleave", function() {
  // Double quote alert - use escape mechanism \
  console.log("I'm the child!"); // Move your mouse out of child so over parent, see "I'm the child!"
  event.stopPropagation(); // No bubbling
});

parentElement.addEventListener("mouseleave", function() {
  console.log("I'm the parent!"); // Move your mouse out of parent so over parent see "I'm the parent!"
});
