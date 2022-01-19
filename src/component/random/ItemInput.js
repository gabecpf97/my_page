import React, { useState } from "react";
import uniqid from "uniqid";

const ItemInput = () => {
    const [input, setInput] = useState('');
    const [items, setItems] = useState([]);
    const [output, setOutput] = useState();

    const onInputChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setItems(items.concat(input));
        setInput('');
    }

    const handleRandom = () => {
        setOutput(Math.floor(Math.random() * items.length));
    }

    return(
        <div className="input">
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="field">
                    <label>Add Item here: </label>
                    <input type="text" required={true} 
                        value={input} onChange={(e) => onInputChange(e)}/>
                </div>
                <input type="submit" value="add" />
            </form>
            {items && items.map(item => {
                return (
                    <li key={uniqid()}>{item}</li>
                )
            })}
            <button onClick={() => handleRandom()}>Randomize</button>
            {output > -1 && <h2>Chosen Item: {items[output]}</h2>}
        </div>
    )
}

export default ItemInput;