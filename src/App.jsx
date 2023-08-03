import Gold from "./components/Gold.jsx";
import {useMemo, useState} from "react";
import petsArray from "./data/MockData.jsx";

function App() {

    const [count, setCount] = useState(0);
    const [reverseCount, setReverseCount] = useState(100);

    const getPets = () => {
      return petsArray[count]
    }

    return (
        <>
            <Gold getPets={getPets}/>
            <button onClick={()=>setCount(count + 1)}>Get more pets :)</button>
            <br/><hr/>
            <button onClick={()=>setReverseCount(reverseCount - 1)}>Unrelated Button that rerenders</button>
        </>
    )
}

export default App
