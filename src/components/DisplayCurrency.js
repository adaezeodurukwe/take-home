import { number, string } from 'prop-types';
import React from 'react';

const DisplayCurrency = ({ figure, currentCurrency }) => {

  return (
    <>
      {(currentCurrency === "USD" || currentCurrency === "CAD") &&
        <span>
          &#36; <span className="figure">{figure}</span>
        </span>
      }
      {currentCurrency === "NGN" &&
        <span>
          &#8358; <span className="figure">{figure}</span>
        </span>
      }
      {currentCurrency === "GBP" &&
        <span>
          &#163; <span className="figure">{figure}</span>
        </span>
      }
      {currentCurrency === "EUR" &&
        <span>
          &#8364; <span className="figure">{figure}</span>
        </span>
      }
    </>
  );
};

DisplayCurrency.propTypes = {
  figure: number,
  currentCurrency: string.isRequired
};

DisplayCurrency.defaultProps = {
  figure: 0
};

export default DisplayCurrency;
