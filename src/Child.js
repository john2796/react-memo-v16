import React from "react";

const Child = ({ seconds }) => {
  console.log("I am rendering console.log");

  return <p>I am updating every {seconds} seconds.</p>;
};

export default React.memo(Child);

// React.memo will check if the props is the same if it is don't render it
// it will reuse previous
// React.memo is for performance improvement
