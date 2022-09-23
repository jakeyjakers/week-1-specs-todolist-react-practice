import React, {useState} from "react";

const Task = ({task}) => {

    const [complete, setComplete] = useState(false)
    return (

        <h3 className={complete ? 'complete' : null} onClick={() => setComplete(!complete)}>{task}</h3>
    )
}

export default Task