import Counter from "./Counter";
import HoverComp from "./HoverComp";
import "./styles.css";
import ClickCounter from "./ClickCounter";
import Counter1ForChildren from "./Counter1ForChildren";

// Counter Comp-1)HOVER COMP
//              2)CLICK COMP
// counter comp me sirf states and funtions jo pass krne hai vo likho and with props.render() return them and then JSX return karao another respective components me jisme logic share karvana hai with props.counter and props.increment se.
// Counter Comp- props.render - A prop whose value is a function
// Hover Comp And Click Comp- props.increment and props.counter se JSX me use hoga.

export default function App() {
  return (
    <div className="App">
      <Counter
        render={(counter, increment) => (
          <HoverComp counter={counter} increment={increment} />
        )}
      />
      <hr className="br" />
      <Counter
        render={(counter, increment) => (
          <ClickCounter name="Ram" counter={counter} increment={increment} />
        )}
      />
      <hr className="br" />
      {/* Now instead of {props.render} you can pass  {props.children} and do the same thing of sharing logic between components */}

      <Counter1ForChildren>
        {(counter, increment) => (
          <ClickCounter
            name="withChildren"
            counter={counter}
            increment={increment}
          />
        )}
      </Counter1ForChildren>
    </div>
  );
}
