import Gold from "./components/Gold.jsx";
import {useMemo, useState} from "react";

const heavyResourceCalculation = (x) => {
    console.log("Quantum stuff....")
    for (let i = 0; i < 1000000000; i++) {}
    return x + 1
}
const lowResourceCalculation = (x) => {
    console.log("1+1 stuff....")
    for (let i = 0; i < 1000000000; i++) {}
    return x + 2
}

function App() {

    const [stateThatWillChangeOften, setStateThatWillChangeOften] = useState(100)
    const [state, setState] = useState(0)

    console.time("Start timer for useMemo cache value")
    const heavyCalculationValue = useMemo(() => heavyResourceCalculation(state), [state]);
    console.timeEnd("Start timer for useMemo cache value")

    console.time("Start timer for non cache value")
    const lowCalculationValue = lowResourceCalculation(state)
    console.timeEnd("Start timer for non cache value")

    const clickHandlerForChangeOften = () => {
        setStateThatWillChangeOften(stateThatWillChangeOften + 1)
    }
    const clickHandlerForKept = () => {
        setState(state + 1)
    }

    return (
        <>
            <Gold/>

            <button onClick={clickHandlerForChangeOften}>Submit</button>
            <p>stateThatWillChangeOften :{lowCalculationValue}</p>

            <button onClick={clickHandlerForKept}>Submit</button>
            <p>stateThatWillBeKept :{heavyCalculationValue}</p>
        </>
    )
}

export default App
