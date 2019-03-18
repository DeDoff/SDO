import * as React from "react";
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time
import './BlockContainer.css'
import { DraggableBlock } from "../DraggableBlock/DraggableBlock";



const BlockContainer = (props) => {
    const blocks = props.blocks || [''];
    
    return <div className="box">
        <div style={{ height: '1000px', width: '1000px', padding: '10px' }}>
            
            {blocks.map( e=>{
                return <DraggableBlock blockText={e + ''} key={e}  />
            })}
        </div>
    </div>
}

export { BlockContainer }