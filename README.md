# React State Management 

### Setup initial project 
- 3 layered components (Gold, Silver, Bronze)
- MockData state with pets objects (id, name, age, etc)
####  Scope: 
- Practice react state management tools by calling the state on the layered components



### Native State management  

1. useState()

   - `import {useState} from "react"; `
     - // import on our top level component 
   - `const [pets, setPets] = useState(*petsArray*);` 
     - // declare and initialize useState hook with initial value
   - `<Gold pets={pets}/>`
     - // pass down the state through propName and propValue on a component
   - ```
     const Gold = (props) => {
     return ...
                  {props.pets}
     ```
     - // props argument on function comp and access the pets array or
   - ```
     const Silver = ({pets}) => {
     return ...
                     {pets}
     ```
     - or destructure the prop directly on the argument
     <hr />

2. useReducer()
   - `import {useReducer} from "react";`
     - // import on our top level component  
     - // useReducer gives us a more concrete way of handling complex state
     - // it give us setActions that we can perform on our state, 
     that will convert our state to a new state, depending on the action we give it
       <br/><br/>
     - useReducer takes in 2 params  `useReducer(reducer, petsArray);`
       1. reducer
          - that is a function call, we perform on our state to get a new state
       2. initial value 
          - pets (usually object)
            <br/><br/>
     - useReducer returns 2 values `const [state, dispatch] =`
       1. state
          - that is out current state or the initial value
       2. dispatch
          - function call to update our state, calls reducer with certain params
         <br/><br/>
     - reducer function takes in 2 params `function reducer(state, action) {` 
        - and returns our ***new updated state by reference (so we need to create a new obj to return for it to work correctly)*** // logic usually with a switch statement
         1. state
            - our current state
         2. action
            - that is the param of our dispatch function || similar to setState(action) from useState hook is our case an object `{species: "Cat"}`
     - Example 
       - ```
         function reducer(state, action) {
             switch (action.species) {
                 case "Cat" :
                     return state.filter((pet) => pet.species === "Cat")
                 default :
                     return [...state]
         ```
       - `const [state, dispatch] = useReducer(reducer, petsArray);`
       - or
       - ```
         const [state, dispatch] = useReducer((state, action)=>{.....},
                                               petsArray);
         ```
     - to call on components => prop drilling as before with useState || 
     - exception is that if we use dispatch, it needs to me a pure function ( meaning it should always have a state and defined action )
       - ```
         <Gold pets={state} whichSpecies={dispatch}/>
         .........
         const Gold = ({pets, whichSpecies}) => {
         .........
                        pets.map((pet) => {
         .........
         ```
     - if we need dispatcher || Example
       - ` onClick={()=> whichSpecies({species: "none"})}`
       - P.S. most often used keys are action.type or action.payload for the json obj we pass on param
       