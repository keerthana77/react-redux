export const increment = (number) => {
    console.log("action")
    return {
      type: 'INCREMENT', 
      payload: number
    }
}
  
export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const signin = () => {
    return {
        type: 'SIGN-IN'
    }
}