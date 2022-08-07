import { useState } from "react";
 
const Button = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={increment}>Click to increment</button>
      <p>{count}</p>
    </div>
  );
};

export default Button;