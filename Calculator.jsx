import React, { useState } from "react";
import { evaluate } from "mathjs";
import "./Calculator.css";

const ScientificCalculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleInput = (value) => {
    setExpression((prev) => prev + value);
  };

  const clear = () => {
    setExpression("");
    setResult("");
  };

  const calculate = () => {
    try {
      const evaluated = evaluate(expression);
      setResult(evaluated.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="sci-calc-container">
      <h2 className="calc-title">Scientific Calculator</h2>
      <div className="display">
        <div className="input">{expression}</div>
        <div className="output">{result}</div>
      </div>
      <div className="button-grid">
        {["7", "8", "9", "/", "sin(", "cos("].map((btn) => (
          <button onClick={() => handleInput(btn)}>{btn}</button>
        ))}
        {["4", "5", "6", "*", "tan(", "log("].map((btn) => (
          <button onClick={() => handleInput(btn)}>{btn}</button>
        ))}
        {["1", "2", "3", "-", "√(", "ln("].map((btn) => (
          <button onClick={() => handleInput(btn)}>{btn}</button>
        ))}
        {["0", ".", "+", "(", ")", "^"].map((btn) => (
          <button onClick={() => handleInput(btn)}>{btn}</button>
        ))}
        <button onClick={() => handleInput("pi")}>π</button>
        <button onClick={() => handleInput("e")}>e</button>
        <button onClick={clear}>C</button>
        <button onClick={calculate}>=</button>
      </div>
    </div>
  );
};

export default ScientificCalculator;
