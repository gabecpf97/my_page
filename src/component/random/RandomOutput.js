import React, { useState } from "react";

const RandomOutput = () => {
    const [isString, setIsString] = useState(true);
    const [outLength, setOutLength] = useState();
    const [result, setResult] = useState();

    const onTypeChange = (e) => {
        setIsString(e.target.value === 'string' ? true : false );
    }

    const onLengthChange = (e) => {
        setOutLength(e.target.value);
    }

    const handleRandom = (e) => {
        e.preventDefault();
        if (isString) {
            let str = "";
            for (let i = 0; i < outLength; i++) {
                const ranNum = Math.floor(Math.random() * (123 - 33)) + 33;
                str += String.fromCharCode(ranNum);
            }
            setResult(str);
        } else {
            setResult(Math.floor(Math.random() * (10 ** outLength)));
        }
    }

    return (
        <div className="random_output">
            <form onSubmit={(e) => handleRandom(e)}>
                <label>Length of output</label>
                <input type="number" required={true} onChange={(e) => onLengthChange(e)} />
                <div className="type_select">
                    <input type="radio" value="string" name="type"
                        checked={isString} onChange={(e) => onTypeChange(e)}/> String
                    <input type="radio" value="number" name="type" 
                        checked={!isString} onChange={(e) => onTypeChange(e)}/> Number
                </div>
                <input type="submit" value="Randomize" />
            </form>
            {result && <h2>Result: {result}</h2>}
        </div>
    )
}

export default RandomOutput;