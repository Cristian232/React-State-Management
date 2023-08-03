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
       <hr/>
    
3. useMemo()
    - `import {useMemo} from "react";`
      - We use it to keep expensive, resource intensive functions from needlessly running. 
      - useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
          - Ex. Component rerenders and performs all of its logic calculation again (in case of thousands of values, should be avoided)
          <br/><br/>
      - useMemo takes in 2 params `useMemo(calculateValue, dependencies)`
        1. calculateValue
           - Any kind of function (likely one that performs a heavy resource calculation)
        2. dependencies
           - Array of dependencies like useEffect 
           <br/><br/>
      - useMemo returns 1 value 
        1. The result of first param function, ex calculateValue
           <br/><br/>
      - Example
        - ``` 
          const heavyResourceCalculation = (x) => {
                for (let i = 0; i < 1000000000; i++) {}
          ......
          const heavyCalculationValue = 
                useMemo(() => heavyResourceCalculation(state), [state]);
          ......
          const lowCalculationValue = lowResourceCalculation(state)
          ......
          ```
      - In this example, at first, both will calculate but on rerender always lowCalc will run and based on dependency heavyCalc will skip running again and keep previous value
      <hr/>

4. useCallback()
    - `import {useCallback} from "react";`
        - Lets you cache a function definition between re-renders. You should only rely on useCallback as a performance optimization.
              <br/><br/>
        - useCallback takes in 2 params `useCallback(function, dependencies)`
            1. function
                - Any kind of function you want to cache
            2. dependencies
                - Array of dependencies like useEffect
                  <br/><br/>
        - useCallback returns 1 value
            1. The function, (not call!) your function back to you during the initial render. On next renders, React will give you the same function again if the dependencies have not changed since the last render. 
               <br/><br/>
        - Example
            - ```  
              ..... Without callback
              const getPets = () => {
              return petsArray[count]
              }
              
              ..... With callback
              const getPets = useCallback(() => {
              return petsArray[count]
              },[count])
              
              .....
              <Gold getPets={getPets}/>
              <button onClick={...}>Get more pets :)</button>
              <button onClick={...}>Unrelated Button</button>
              .....
              
              const Gold = ({getPets}) => { 
              ...
              useEffect(() => {
              setPets([...pets,getPets()])
              }, [getPets]);
              ...
              ```
        - In this example, we have 2 states and 1 function on App, function pass as prop to Gold. <br/> 
        - Function always gets recreated, and after it gets called from use effect on render based on dependency. <br/>
        - We use hook to memoize the initial function and use it even though another one gets created. This manages to recreate and use the initial function based on just one of the states, not always on both.
      <hr/>