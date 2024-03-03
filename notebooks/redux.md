# Redux

#### Terminology
##### Reducer

= a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state: ``(state, action) => newState``. **A reducer can be thought of as an event listener which handles events based on the received action (event) type.**

Reducers must follow some specific rules:
- they should calculate the new state value based on the ==state== and ==action== arguments
- they are not allowed to modify the existing ==state==

The logic in the reducer typically follows the same series of steps:
- check to see if the reducer cares about this action
  - if so, make a copy of state, update the copy with new values, return it
- otherwise, return the existing state unchanged

Here's a small example of a reducer:

```
const initialState = { value: 0 }

function counterReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action
  if (action.type === 'counter/increment') {
    // If so, make a copy of `state`
    return {
      ...state,
      // and update the copy with the new value
      value: state.value + 1
    }
  }
  // otherwise return the existing state unchanged
  return state
}
```

#### Store

= where the current aplication state lives

The store is created by passing in a reducer, and has a method called `getState` that returns the current state value:

```
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: counterReducer })

console.log(store.getState())
// {value: 0}
```

#### Dispatch

= it is the method by which the state is updated, **The only way to update the state is to call ``store.dispatch()``** and pass in an action object.
The store will run its reducer function and save the new state value inside, and we can call ``getState()`` to retrieve the updated value.

```
store.dispatch({ type: 'counter/increment' })

console.log(store.getState())
// {value: 1}
```

**Dispatching an action is like triggering an event** in the application. Reducers act like event listeners, and when they hear an action they are interested in, they update the state in response.

We typically call action creators to dispatch the right action:

```
const increment = () => {
  return {
    type: 'counter/increment'
  }
}

store.dispatch(increment())

console.log(store.getState())
// {value: 2}
```

#### Selectors
= functions that know how to extract specific pieces of information from a store state value. This can help avoid repeating logic as an application grows bigger, as different parts of the app need to read the same data:

```
const selectCounterValue = state => state.value

const currentValue = selectCounterValue(store.getState())
console.log(currentValue)
// 2
```

#### SUMMARY FOR TERMINOLOGY
```
- Redux is a library for managing global application state
- Redux is typically used with the React-Redux library for integrating Redux and React together
- Redux Toolkit is the recommended way to write Redux logic
- Redux uses a "one-way data flow" app structure
- State describes the condition of the app at a point in time, and UI renders based on that state
- When something happens in the app:
- The UI dispatches an action
- The store runs the reducers, and the state is updated based on what occurred
- The store notifies the UI that the state has changed
- The UI re-renders based on the new state
- Redux uses several types of code
- Actions are plain objects with a type field, and describe "what happened" in the app
- Reducers are functions that calculate a new state value based on previous state + an action
- A Redux store runs the root reducer whenever an action is dispatched
```

