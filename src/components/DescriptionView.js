import React from 'react';

// Bit of CSS needed to make sure we keep the linebreaks as they were in the original file

const prelineStyle = {
  whiteSpace: "pre-line",
};

const DescriptionView = (props) => {
  return (
    <div style={prelineStyle}>Description: {props.value}</div>
  );
};

export default DescriptionView;
