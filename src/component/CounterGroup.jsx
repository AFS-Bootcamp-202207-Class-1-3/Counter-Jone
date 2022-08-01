import Counter from "./Counter";

function CounterGroup(props) {
  const { counterSize } = props;
  const counters = new Array(
    parseInt(counterSize) < 0 ? 0 : parseInt(counterSize)
  )
    .fill(1)
    .map((element, index) => <Counter key={index} />);

  return <div className="counter-group">{counters}</div>;
}

export default CounterGroup;
