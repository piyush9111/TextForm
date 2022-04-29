import React, {useState} from 'react';
import PropTypes from 'prop-types'

const TextForm = (props) => {

    //This is how to use a State.
    const[text, setText] = useState("Enter Your Text");


    const handleUpClick = () => {
        console.log("Upper Case Button Clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("OnChange Button Clicked");
        setText(event.target.text);
    }
    
    return (
        <>
            <h1>{props.text}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleUpClick}>To Uppercase</button>
        </>
    )
}

TextForm.propTypes = {
    text : PropTypes.string
}

export default TextForm;