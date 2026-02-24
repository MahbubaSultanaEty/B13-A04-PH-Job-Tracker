
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

### 4. What is Event Delegation in JavaScript? Why is it useful?

### 5. What is the difference between preventDefault() and stopPropagation() methods?


