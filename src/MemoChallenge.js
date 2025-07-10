import React, { useState } from "react";

export const Child1 = React.memo(({ text }) => {
  console.log("Child1 rendered from Memo challenge");
  return <div>Child1 component rendered with text: {text}</div>;
});

export const Child2 = ({ count }) => {
  console.log("Child2 rendered from Memo challenge");
  return <div>Child2 component rendered with Result: {count}</div>;
};

const MemoChallenge = () => {
  const [count, setCount1] = useState(0);

  return (
    <div>
      <Child1 text="this is  pre-defined text" />
      <Child2 count={count} />
      <button onClick={() => setCount1(count + 1)}>Increase</button>
    </div>
  );
};

export default MemoChallenge;
