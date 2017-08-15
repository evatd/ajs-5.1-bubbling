# ajs-5.1-bubbling
Advanced JavaScript | Lecture 5 Task 1

**Part A: Bubbling event**

View the page and:
- • click the child element...
- • ... then click the parent element...
- • ... then click the page heading: Exercise 1.
What do you see in the console?
Now amend your code so that you also console.log the event.target and event.currentTarget elements in each handler.
childElement.addEventListener('click', function (event) { console.log('I am the child');
});
Test your page again. What do you see in the console?
Now amend the code so that the event does not bubble up from the child element (with stop-
Propagation).
Test your page again. Notice how clicking on the parent still causes a bubble

**Part B: non-bubbling event**

Add event handlers to #child and #parent that listen for the mouseleave event, which does not bubble
In each handler, console.log a message stating which handler it is, as you did in part A of the exercise.
View the page and:
- • place your mouse over the child...
- • ... then move your mouse out of child so it is over parent... • ... then move your mouse out of parent
What do you see in the console?
