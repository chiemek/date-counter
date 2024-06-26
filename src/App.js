import { useState } from "react";
import "./App.css";
// function App() {
//   return (
//     <div className="App">
//       <Steps />
//       {/* <Counter /> */}
//       {/* <Message /> */}
//     </div>
//   );
// }

// const Steps = () => {
//   const [steps, setSteps] = useState(1);

//   const handlePrev = () => {
//     steps > 1 && setSteps((s) => s - 1);
//   };
//   const handleNext = () => {
//     setSteps((s) => s + 1);
//   };
//   return (
//     <>
//       <div className="container">
//         <button onClick={handlePrev}> - </button>
//         <p> Steps : {steps} </p>
//         <button onClick={handleNext}> + </button>
//       </div>

//       <Counter step={steps} />
//     </>
//   );
// };
// const Counter = ({ step }) => {
//   const [counter, setCounter] = useState(0);

//   const handlePrev = () => {
//     // step < counter ? setCounter(step) : setCounter((step) => step - 1);
//     setCounter((s) => s - step);
//   };
//   const handleNext = () => {
//     // step > counter ? setCounter(step) : setCounter((step) => step + 1);
//     setCounter((s) => s + step);
//   };
//   return (
//     <>
//       <div className="container">
//         <button onClick={handlePrev}> - </button>
//         <p> Counter : {counter} </p>
//         <button onClick={handleNext}> + </button>
//       </div>
//       <Message count={counter} />
//     </>
//   );
// };
// const Message = ({ count }) => {
//   let day = new Date();
//   day > count
//     ? day.setDate(day.getDate() + count)
//     : day.setDate(day.getDate() - count);
//   return (
//     <p>{`${
//       count === 0
//         ? "Today is "
//         : `${
//             count >= 1
//               ? `Next ${count} days is `
//               : `${Math.abs(count)} days ago was `
//           }`
//     }${day.toDateString()}`}</p>
//   );
// };

// export default App;

// second one

const App = () => {
  return (
    <div className="App">
      <Steps />
    </div>
  );
};

const Steps = () => {
  const [step, setStep] = useState(1);
  const handleReset = () => {
    setStep(1);
  };
  return (
    <>
      <div className="container">
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        />
        <span>{step}</span>
      </div>
      <Counts steps={step} />
      {step > 1 && <button onClick={handleReset}>Reset</button>}
    </>
  );
};

const Counts = ({ steps }) => {
  const [count, setCount] = useState(0);

  const handlePrev = () => {
    setCount((s) => s - steps);
  };
  const handleNext = () => {
    setCount((s) => s + steps);
  };

  return (
    <>
      <div className="container">
        <button onClick={handlePrev}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        />
        <button onClick={handleNext}>+</button>
      </div>
      <Message count={count} />
    </>
  );
};

const Message = ({ count }) => {
  let date = new Date();
  date > count
    ? date.setDate(date.getDate() + count)
    : date.setDate(date.getDate() - count);

  return (
    <div>
      {count === 0
        ? `Today's Date is ${date.toDateString()}`
        : count >= 1
        ? `Next ${count} days is ${date.toDateString()}`
        : `${Math.abs(count)} days ago is ${date.toDateString()}`}
    </div>
  );
};

export default App;
