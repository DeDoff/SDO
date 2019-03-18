import * as React from "react";
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time
import './DraggableBlock.css'

const DraggableBlock = (props) => {
    const [state, setState] = React.useState({
        activeDrags: 0,
        deltaPosition: {
            x: 0, y: 0
        },
        controlledPosition: {
            x: -400, y: 200
        }
    });

    const onStart = () => {
        setState({ activeDrags: ++state.activeDrags });
    };

    const onStop = () => {
        setState({ activeDrags: --state.activeDrags });
    };

    const dragHandlers = { onStart: onStart, onStop: onStop };

    return <Draggable bounds="parent" {...dragHandlers}>
            <div className="box">{props.blockText || ''}</div>
        </Draggable>
    
}

export { DraggableBlock };