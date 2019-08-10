import {useDispatch} from "react-redux";
import * as React from "react";
import {openWindow} from "../../store/actions/uploadActions";

const CreateDrawerContent = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Create</h1>
            <button onClick={() => dispatch(openWindow())}> Upload book</button>

            <button> Create collection</button>

        </div>
    )
};

export default CreateDrawerContent;
