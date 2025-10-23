import { useMemo, useState } from "react";

const Numbers = () => {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  // Expensive calculation
  const double = useMemo(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]); // Only recalculates when 'count' changes

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333"
  };

  return (
    <div style={theme}>
      <h2>{double}</h2>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <button onClick={() => setDark(d => !d)}>Toggle Theme</button>
    </div>
  );
};

export default Numbers;