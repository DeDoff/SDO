import * as React from "react";
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time
import './DraggableBlock.css'

const DraggableBlock = (props) => {
    const [activeDrags, setActiveDrags] = React.useState(0);

    const [deltaX, setDeltaX] = React.useState(props.x || 0);
    const [deltaY, setDeltaY] = React.useState(props.y || 0);

    const handleDrag = (e, ui) => {
        setDeltaX(deltaX + ui.deltaX);
        setDeltaY(deltaY + ui.deltaY);
    };

    const onStart = () => {
        let x = activeDrags +1;
        setActiveDrags(x);
    };

    const onStop = () => {
        let x = activeDrags -1;
        setActiveDrags(x);
    };

    const dragHandlers = { onStart: onStart, onStop: onStop };

    return <Draggable bounds="parent" onDrag={handleDrag} {...dragHandlers}>
                <div className="box">{props.blockText || ''}
                    <div>x: {deltaX.toFixed(0)}, y: {deltaY.toFixed(0)}</div>
                </div>
                
        </Draggable>
    
}

export { DraggableBlock };