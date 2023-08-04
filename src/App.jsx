import Gold from "./components/Gold.jsx";
import {useRef} from "react";

function App() {

    let ref = useRef(0)

    return (
        <>
            <Gold/>
            <button onClick={() => console.log(ref.current = ref.current + 1)}>Click</button>
        </>
    )
}

export default App
