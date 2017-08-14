// State argument is not application state, only the state
// this reducer is responsible for
export default function(state = {}, action) {
  console.log(action);
  switch (action.type) {
    default:
      return state;
  }
}
