const counter = (state=0, action) => {
  console.log("reducer")
    switch(action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      default:
        return state;
    }
}

export default counter;