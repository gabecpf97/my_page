import React, { useState } from "react";
import ItemInput from "./ItemInput";
import RandomOutput from "./RandomOutput";

const RandomMain = () => {
    const [itemToggle, setItemToggle] = useState(false);
    const [outputToggle, setOutputToggle] = useState(false);

    const handleItem = () => {
        setItemToggle(!itemToggle);
    }

    const handleOutput = () => {
        setOutputToggle(!outputToggle);
    }

    return(
        <div className="random">
            <ul>
                <li>
                    <button onClick={() => handleItem()}>
                        {!itemToggle ? 'Random item' : 'cancel'}
                    </button>
                    {itemToggle &&
                        <ItemInput />
                    }
                </li>
                <li>
                    <button onClick={() => handleOutput()}>
                        {outputToggle ? 'cancel' : 'Radnom String / Numbers'}
                    </button>
                    {outputToggle && 
                        <RandomOutput />
                    }
                </li>
            </ul>
        </div>
    )
}

export default RandomMain;