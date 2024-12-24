import React, { useState } from 'react';

const CountCharacters = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState([]);

  
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  
  const countCharacters = (str) => {
    
    const cleanedStr = str.replace(/\s+/g, '');
    
    const charCount = {};
    const order = [];

    
    for (let char of cleanedStr) {
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
        order.push(char);  
      }
    }

    
    const output = order.map(char => [char, charCount[char]]);
    return output;
  };

  
  const handleCount = () => {
    const counts = countCharacters(input);
    setResult(counts);
  };

  return (
    <div>
      <h1>Character Count</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter text"
      />
      <button onClick={handleCount}>Count Characters</button>
      <div>
        {result.length > 0 && (
          <ul>
            {result.map(([char, count], index) => (
              <li key={index}>
                '{char}': {count}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CountCharacters;