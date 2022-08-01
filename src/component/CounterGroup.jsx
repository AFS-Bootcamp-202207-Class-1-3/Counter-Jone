import Counter from "./Counter";

function CounterGroup(props) {
  const { counterSize, updateSum } = props;
  const counters = new Array(
    parseInt(counterSize) < 0 ? 0 : parseInt(counterSize)
  )
    .fill(1)
    .map((element, index) => <Counter updateSum={updateSum} key={index} />);

  return <div className="counter-group">{counters}</div>;
}

export default CounterGroup;
