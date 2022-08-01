function CounterSizeGenerator(props) {
  const { updateCounterSize } = props;

  const handleChange = (event) => {
    const size = event.target.value === "" ? 0 : event.target.value;
    updateCounterSize(size);
  };

  return (
    <div>
      <span>Size: </span>
      <input type="number" onChange={handleChange}></input>
    </div>
  );
}

export default CounterSizeGenerator;
