import { useState, useEffect } from "react";

export default function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
        <p>{time.toLocaleTimeString()}</p>
        <p>
            {new Date().toLocaleString()}
        </p>
        <p>
            {new Date().toLocaleDateString()}
        </p>
        <p>
            {new Date().toLocaleTimeString()}
        </p>
        <p>
            {new Date().toString()}
        </p>
    </>
  );
}
