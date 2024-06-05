import React from "react";

const Window = ({ title, content, onclose})=> {
    return (
        <div className="window">
            <div className="window-heater">
                <span>{title}</span>
                <button onClick={onclose}> X </button>
            </div>
            <div className="window-content">               
            {contect}</div>
        </div>
    );
};

export default Window