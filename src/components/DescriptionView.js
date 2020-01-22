import React from 'react';

const prelineStyle = {
  whiteSpace: "pre-line",
};

const DescriptionView = (props) => {
  return (
    <div style={prelineStyle}>Description: {props.value}</div>
  );
};

export default DescriptionView;
