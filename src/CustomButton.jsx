import { useState } from "react";

/////////////////////// component
function CustomButton({ children }) {
    //////////////////////////////// logic
    const [state, setState] = useState(children);

    const listOfItems = [
        <li>el1</li>,
        <li>el1</li>,
        <li>el1</li>,
        <li>el1</li>,
    ]

    function func1() {
        if (state === "Changed") {
            setState(children)
        } else {
            setState("Changed");
        }
    }
    //////////////////////////////////// logic

    /////////////////////////////////// ui JSX
    return (<button style={{
        height: 32,
        width: 150,
    }} onClick={func1}>{listOfItems}</button>);
    /////////////////////////////////// ui JSX
};

export default CustomButton;
/////////////////////////// component