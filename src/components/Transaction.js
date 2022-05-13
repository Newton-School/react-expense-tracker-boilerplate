import React from 'react';

export const Transaction = ({ transaction }) => {
  return (
    <li className={'minus' /* : 'plus'*/}>
      {transaction} <button className="delete-btn">x</button>
    </li>
  );
};
