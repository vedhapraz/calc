import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './style.css';




const App = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('0');

  const buttons = [
    'Rad', 'Deg', 'x!', '(', ')', '%', 'AC',
    'Inv', 'sin', 'ln', '7', '8', '9', '÷',
    'π', 'cos', 'log', '4', '5', '6', '×',
    'e', 'tan', '√', '1', '2', '3', '−',
    'Ans', 'EXP', 'xʸ', '0', '.', '=', '+'
  ];

  const handleClick = (value) => {
    if (value === 'AC') {
      setInput('');
      setOutput('0');
    } else if (value === '=') {
      try {
        const result = evaluate(input);
        setOutput(result.toString());
      } catch (error) {
        setOutput('Error');
      }
    } else {
      setInput(prev => prev + value);
    }
  };

  return (
    <div className="calculator">
<h1 className="calc-title">Scientific Calculator</h1>
      <div className="display">
        <div className="input">{input || '0'}</div>
        <div className="output">{output}</div>
      </div>
      <div className="buttons">
        {buttons.map((btn, idx) => (
          <button
            key={idx}
            className={`btn ${btn === '=' ? 'equals' : ''}`}
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
