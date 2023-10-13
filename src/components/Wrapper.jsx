import React, { useState } from "react";

function Wrapper() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleNumberClick = (number) => {
    setInput((prevInput) => prevInput + number);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value.toString();
    setInput(inputValue);
    handleResultupdate(inputValue);
  };

  const handleResultupdate = () => {
    const inputToString = input.toString();
    try {
      setResult(eval(inputToString));
    } catch (error) {
      setResult("Invalid input");
    }
  };

  const handleDelete = () => {
    setInput("");
    setResult("");
  };

  let prev = () => {
    let currentInput = String(input);
    let updatedInput = input.slice(0, -1);
    setInput(updatedInput);
  };

  return (
    <div className="calculator-grid">
      <div className="output">
        <p>{input}</p>
        <span>{result}</span>
      </div>
      <button className="span-two" onClick={handleDelete}>
        AC
      </button>
      <button onClick={prev}>DEL</button>
      <button className="operators" onClick={() => handleNumberClick("/")}>
        /
      </button>
      <button onClick={() => handleNumberClick("1")}>1</button>
      <button onClick={() => handleNumberClick("2")}>2</button>
      <button onClick={() => handleNumberClick("3")}>3</button>
      <button className="operators" onClick={() => handleNumberClick("*")}>
        *
      </button>
      <button onClick={() => handleNumberClick("4")}>4</button>
      <button onClick={() => handleNumberClick("5")}>5</button>
      <button onClick={() => handleNumberClick("6")}>6</button>
      <button className="operators" onClick={() => handleNumberClick("+")}>
        +
      </button>
      <button onClick={() => handleNumberClick("7")}>7</button>
      <button onClick={() => handleNumberClick("8")}>8</button>
      <button onClick={() => handleNumberClick("9")}>9</button>
      <button className="operators" onClick={() => handleNumberClick("-")}>
        -
      </button>
      <button onClick={() => handleNumberClick(".")}>.</button>
      <button onClick={() => handleNumberClick("0")}>0</button>
      <button className="span-two" onClick={handleResultupdate}>
        =
      </button>
    </div>
  );
}

export default Wrapper;
