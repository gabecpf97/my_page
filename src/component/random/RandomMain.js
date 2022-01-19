import React from "react";
import ItemInput from "./ItemInput";

const RandomMain = () => {

    return(
        <div className="random">
            <ul>
                <li>random item</li>
                <ItemInput />
                <li>random number</li>
                <li>random string</li>
            </ul>
        </div>
    )
}

export default RandomMain;