import React,{Component} from 'react';
import Machine from './Machine';
import itemTypes from '../constants/itemTypes';
import { useDrop } from 'react-dnd'

const Grid = ({isPresent, children, updatePos, pos}) => {
    const [{ isOver }, drop] = useDrop({
		accept: itemTypes.MACHINE,
		drop: (data) => {console.log('data', data);updatePos(pos)},
		collect: monitor =>({
			isOver: !!monitor.isOver(),
		}),
	})
 return <div 
    ref={drop} 
    onClick={() => updatePos(pos)} 
    style={{
        width:300, 
        height:300, 
        border:'1px solid black', position: 'relative'
    }}>{ isOver && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'yellow',
          }}
        />
      )}
      {isPresent ? children : null}</div>
}
function renderGrid(pos, machinePos, updatePos) {
    const isMachineHere = pos === machinePos;
    const piece = isMachineHere ? <Machine /> : null;
	
    return  <div>
        <Grid key={pos} isPresent={isMachineHere} updatePos={updatePos} pos={pos} >{piece}</Grid>
        </div>
  }
export default renderGrid;