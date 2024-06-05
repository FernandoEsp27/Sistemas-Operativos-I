import React from "react";

const Taskbar = ({onStartMenuClick})=> {
    return (
        <div className="taskbar">
            <button onClick={onStartMenuClick}>inicio</button>
        </div>
    );
};

export default Taskbar