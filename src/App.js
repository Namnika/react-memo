import React, { useCallback, useMemo, useState } from 'react';
import './App.css';
import MemoChallenge from './MemoChallenge';

export const Child = React.memo(({ count }) => {
	console.log("Child Rendered");
	return (<div>Count: {count}</div>)

})

export const ExpensiveComputation = ({num}) => {
	const result = useMemo(() => {
		console.log("Calculation");
		let total = 0;

		for(let i=0; i< 1000000000; i++){
          total += i;
		}

		return total + num;
	}, [num])

	return (<div>Result: {result}</div>)
}

const Button = React.memo(({ onClick }) => {
  console.log("Button rendered");
  return <button onClick={onClick}>Click me</button>;
});


function App() {
	const [count, setCount] = useState(0);
	const [other, setOther] = useState(false);

	const setIncrement = useCallback(() => {
		setCount((c) => c + 1)
	}, [])

	return (
		<div className="App">
			<Child count={count} />

			<button onClick={() => setCount(count + 1)}>Increment</button>
			<button onClick={() => setOther(!other)}>Toggle Other</button>
			<br/>
			<br/>
			<ExpensiveComputation num={10}/>

			<Button onClick={setIncrement}/>
			<br/>
			<br/>
			<br/>
			<MemoChallenge />
		</div>
	);
}

export default App;
