import store, { action } from "../../config/redux/store";
export const Counter = () => (
  <div>
    <button onClick={() => action("INCREMENT_ASYNC")}>
      Increment after 1 second
    </button>{" "}
    <button onClick={() => action("INCREMENT")}>Increment</button>{" "}
    <button onClick={() => action("DECREMENT")}>Decrement</button>
    <button onClick={() => action("FETCH_USERS")}>Fetch users</button>
    <hr />
    {/* <div>Clicked: {value} times</div> */}
  </div>
);
