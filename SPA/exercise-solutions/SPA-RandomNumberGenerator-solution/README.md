
# Random Numbers
2. Create a RandomList component that shows a button, and a list of random numbers. 
- When you click the button, add another random number to the list. 
- Store the array of numbers with useState. 
- The initial state should be an empty array.

`Note` :  This won't work, because pushing onto an array doesn't replace the original array,
and React won't re-render unless the state value looks new. 
Test it:


        numbers.push(Math.random());
        setNumbers(numbers);
 
