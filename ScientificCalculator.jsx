import React, { useState, useEffect } from "react";
import { evaluate } from "mathjs";

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

  useEffect(() => {
    const handleKeyPress = (e) => {
      const allowed = "0123456789+-*/().^";
      if (allowed.includes(e.key)) {
        setExpression((prev) => prev + e.key);
      } else if (e.key === "Enter") {
        calculate();
      } else if (e.key === "Backspace") {
        setExpression((prev) => prev.slice(0, -1));
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className="sci-calc-container">
      <h2 className="calc-title">Scientific Calculator</h2>
      <div className="display">
        <div className="input">{expression}</div>
        <div className="output">{result}</div>
      </div>
      <div className="button-grid">
        {["7", "8", "9", "/", "sin(", "cos("].map((btn) => (
          <button key={btn} onClick={() => handleInput(btn)}>{btn}</button>
        ))}
        {["4", "5", "6", "*", "tan(", "log("].map((btn) => (
          <button key={btn} onClick={() => handleInput(btn)}>{btn}</button>
        ))}
        {["1", "2", "3", "-", "sqrt(", "ln("].map((btn) => (
          <button key={btn} onClick={() => handleInput(btn)}>{btn}</button>
        ))}
        {["0", ".", "+", "(", ")", "^"].map((btn) => (
          <button key={btn} onClick={() => handleInput(btn)}>{btn}</button>
        ))}
        <button onClick={() => handleInput("pi")}>π</button>
        <button onClick={() => handleInput("e")}>e</button>
        <button onClick={clear}>C</button>
        <button onClick={() => setExpression(expression.slice(0, -1))}>⌫</button>
        <button onClick={calculate}>=</button>
      </div>
    </div>
  );
};

export default ScientificCalculator;
