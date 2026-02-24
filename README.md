
## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

## Ans:
 getElementById finds an element by its id and returns only one single HTMLElement. The id should be unique.
 getElementsByClassName finds elements by class name and returns as HTMLCollection which is an array like object. 
 querySelector selects the first macthing HTMLElement.
 querySelectorAll selects all the matching element and retruns a NodeList.  Also, you have to define that whether the slector is an id or a class name by using (#) before the id and (.) before the class name.



### 2. How do you create and insert a new element into the DOM?

## Ans: 
step 01: Make an empty section or div in the HTMl file. 
step 02: store that section or div in a variable using getElementById() method. 
step 03: add empty innerHTMl "" to that variable.
step 04: create a new HTML element using createElement() method.
step 05: add innerHTML to that newly created element.
step 06: insert this new element in the empty section or div using appendChild() method.


### 3. What is Event Bubbling? And how does it work?

## Ans:
Event bubbling is a proccess in the DOM where an event on a child element "bubbles up" to its parents up to (document).
Event starts from the top of the DOM tree. Moves downward towards the target element. Event reaches the target element and moves upwards from the target element to its parent to grandparent up to document.


### 4. What is Event Delegation in JavaScript? Why is it useful?

## Ans:
Event delegation is a smart strategy where you attach a single event listener to a parent element rather than multiple listeners to individual children. This is the most real-world use case of event bubbling. (event.target) tells you which child was actually clicked.
It is useful because it handles many children by using only one listener which saves memory. Also it handles new children automatically that have not been created yet.


### 5. What is the difference between preventDefault() and stopPropagation() methods?

## Ans;
preventDefault() method let's the event being handled, doesn't stop event bubbling but stops the browser's default behavior. For Example, stops a form from submitting when a submit button is clicked, allowing for a client-side validation with an alert.

stopPropagation() method prevents the event from propagating or bubbling. Means, It deals with the flow of event through the DOM , not the browser's default action. 

