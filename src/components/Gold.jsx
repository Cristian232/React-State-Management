import Silver from "./Silver.jsx";
import {useEffect, useState} from "react";

const Gold = () => {

    return (
        <div style={{color:"gold"}}>
            <h1>Gold</h1>
            <Silver />
        </div>
    );
};

export default Gold;