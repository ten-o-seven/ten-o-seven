import React from 'react';
import PropTypes from 'prop-types';

const treatString = (typeObj, messageSplit) => {
  const typeKeys = Object.keys(typeObj);
  const typeValues = Object.values(typeObj);

  const typeIndex = typeKeys.map((key)=>{
    return messageSplit.findIndex((e)=>e===key);
  });
  typeIndex.forEach((value, i)=>{
    messageSplit.splice(value, 1, typeValues[i]);
  });

  return typeIndex;
};

/**
 * @param {Node} message
 * @return {Node} Pacific Paradise User Research Section
 */
export default function BoldedText({message, bolded, italics, style}) {
  const messageSplit = message.split(/{|}/);
  const boldedIndex = treatString(bolded, messageSplit);
  const italicsIndex = treatString(italics, messageSplit);

  return (
    <div style={style}>
      {messageSplit.map((message, index)=>{
        if (boldedIndex.includes(index)) message = <strong>{message}</strong>;
        if (italicsIndex.includes(index)) message = <em>{message}</em>;

        return <p key={message} style={{display: 'inline'}}>{message}</p>;
      })}
    </div>
  );
}

BoldedText.propTypes = {
  message: PropTypes.string.isRequired,
  bolded: PropTypes.object,
  italics: PropTypes.object,
  style: PropTypes.object,
};

BoldedText.defaultProps = {
  style: {},
  bolded: {},
  italics: {},
};

