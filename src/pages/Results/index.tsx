import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './../Home/style.css';

interface Props {}

// To make this scalabe use
// [k, m, b, t]
// reference like:
// (10 * (conversions.indexOf(unitIdentifier) + 3))
const conversions: Record<string, number> = {
  k: 1000,
  m: 1000000,
  b: 1000000000,
  t: 1000000000000,
};

// Return a string of a number formatted with commas (US)
const displayNumberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const Results: React.FC<Props> = () => {
  const { sourceNumber } = useParams<{ sourceNumber: string }>();
  const unitIdentifier = sourceNumber.slice(-1);
  const numberValue = parseFloat(
    sourceNumber.slice(0, sourceNumber.length - 1)
  );
  const results = numberValue * conversions[unitIdentifier];

  return (
    <div className="Results">
      <header className="Header">
        <h1>Results</h1>
      </header>
      <section className="Body">
        <h3>${displayNumberWithCommas(results)}</h3>
        <div className="Break"></div>
        <Link to="/" className="Button">
          &larr; Back
        </Link>
      </section>
    </div>
  );
};
