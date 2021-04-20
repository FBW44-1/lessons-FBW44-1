import React,{useState} from 'react'

export default function RandomList() {
            const [numbers, setNumbers] = useState([]);
          
            const addNumber = () => {
              // The "updater" method (passing a function that receives the old state and returns the new one) is
              // the safest choice when the new state depends on the old state. It guarantees that the old state
              // won't be stale.
              setNumbers(nums => [...nums, Math.random()]);
          
              // In this example, this would work too. 
              // setNumbers([...numbers, Math.random()]);
          
             
            };
          
            return (
              <div>
                <h1>Random Numbers</h1>
                <button onClick={addNumber}>Add a Number</button>
                <ul>
                  {numbers.map((number, index) => (
                    <li key={index}>{number}</li>
                  ))}
                </ul>
              </div>
            );
}
