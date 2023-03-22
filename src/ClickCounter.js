export default function ClickCounter(props) {
  return (
    <div>
      <button onMouseOver={props.increment}>
        Clicked button {props.counter} times
      </button>
      <h1>hii i m Click comp</h1>
      <h1>my name is {props.name}</h1>
    </div>
  );
}
