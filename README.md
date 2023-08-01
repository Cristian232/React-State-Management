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