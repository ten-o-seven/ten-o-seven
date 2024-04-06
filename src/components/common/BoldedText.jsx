import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {Node} message
 * @return {Node} Pacific Paradise User Research Section
 */
export default function BoldedText({message, bolded, style}) {
  const boldedKeys = Object.keys(bolded);
  const boldedValues = Object.values(bolded);
  const messageSplit = message.split(/{|}/);

  const boldedIndex = boldedKeys.map((key)=>{
    return messageSplit.findIndex((e)=>e===key);
  });
  boldedIndex.forEach((value, i)=>{
    messageSplit.splice(value, 1, boldedValues[i]);
  });

  return (
    <div style={style}>
      {messageSplit.map((message, index)=>{
        if (boldedIndex.includes(index)) message = <strong>{message}</strong>;
        return <p key={message} style={{display: 'inline'}}>{message}</p>;
      })}
    </div>
  );
}

BoldedText.propTypes = {
  message: PropTypes.string.isRequired,
  bolded: PropTypes.string.isRequired,
  style: PropTypes.object,
};

BoldedText.defaultProps = {
  style: {},
};

