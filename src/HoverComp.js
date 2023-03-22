export default function HoverComp(props) {
  return (
    <div>
      <button onMouseOver={props.increment}>
        Clicked button {props.counter} times
      </button>
      <h1>hii i m Hover comp</h1>
    </div>
  );
}
