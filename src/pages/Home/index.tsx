import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

interface Props {}

const units = ['k', 'm', 'b', 't'];

const isNumeric = (value: string) => {
  return /^-?\d+\.?\d*$/.test(value);
};

export const HomePage: React.FC<Props> = () => {
  const [sourceNumber, setSourceNumber] = useState<string>();
  const [showError, setShowError] = useState<boolean>(false);
  const [disableConvert, setDisableConvert] = useState<boolean>(true);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    const shouldDisable = !isValidInput(value);

    setDisableConvert(shouldDisable);
    setSourceNumber(value);
    showError && validateInput(evt);
  };

  const isValidInput = (value: string) => {    
    const unitIdentifier = value.slice(-1);
    const numberValue = value.slice(0, value.length - 1);

    return isNumeric(numberValue) && units.includes(unitIdentifier);
  }

  const validateInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setShowError(!isValidInput(evt.target.value));
  }

  return (
    <div className="Home">
      <header className="Header">
        <h1>Enter a dollar amount (US) with units to convert to an integer</h1>
        <h3>(eg: 12k, 15m)</h3>
      </header>
      <section className="Body">
        <input name="sourceNumber" onChange={handleChange} onBlur={validateInput}></input>
        <div className="Break"></div>
        <Link
          className={`Button ${disableConvert && 'Button--Disabled'}`}
          to={`/results/${sourceNumber}`}
        >
          Convert
        </Link>
        {showError && <p className="ErrorMessage">Check your input. Do not include '$'. Available units are 'k', 'm', 'b' and 't'.</p>}
      </section>
    </div>
  );
};
