import React from "react";

const listItems = () => {
  const numbers = [1, 2, 3, 4, 5];
  console.log(numbers);
  return numbers.map((number) => <li>{number}</li>);
};
export default listItems;
