import React from "react";

const StartMenu = ({onOpenApp}) =>{
    return(
        <div className="start-menu">
           <ul>
              <li onClick={()=> onOpenApp ('NotePad')}> NotePad</li>
              <li onClick={()=> onOpenApp ('Calculator')}> NotePad</li>
            </ul> 
        </div>
    );
};

export default StartMenu; 
