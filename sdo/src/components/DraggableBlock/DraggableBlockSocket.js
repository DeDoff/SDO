import * as React from "react";
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time
import './DraggableBlock.css'

//import io from 'socket.io-client';

// const socket = (()=>{
// var socket = require('socket.io-client')('http://localhost:23000', { origins: '*:*'});
//     socket.on('connect', function(){
//         console.log('connect');
//     });
//     socket.on('event', function(data){
//         console.log(data);
//     });
//     socket.on('disconnect', function(){
//         console.log('disconnect');
//     });
//     console.log(socket);
//     return socket;
// })();

// const server = require('http').createServer();
// const io = require('socket.io')(server);
// io.on('connection', client => {
//   client.on('event', data => { /* … */ });
//   client.on('disconnect', () => { /* … */ });
// });
// server.listen(23000);

const DraggableBlockSocket = (props) => {
    const [activeDrags, setActiveDrags] = React.useState(0);

    const [deltaX, setDeltaX] = React.useState(props.x || 0);
    const [deltaY, setDeltaY] = React.useState(props.y || 0);

    const handleDrag = (e, ui) => {
        setDeltaX(deltaX + ui.deltaX);
        setDeltaY(deltaY + ui.deltaY);
        //socket.emit('hello', 'world');
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

export { DraggableBlockSocket };