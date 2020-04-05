import React, {Component} from 'react';
import { useDrag } from 'react-dnd';
import itemTypes from '../constants/itemTypes';

const Machine = ({text}) => {
    const [{isDragging}, drag] = useDrag({
        item: { type: itemTypes.MACHINE },
            collect: monitor => ({
                isDragging: !!monitor.isDragging(),
            }),
      })
    return <div ref={drag} style={{width:100, height:100,fontSize:30, border:'1px solid #000', alignItems:'center'}}>M</div>
}


export default Machine;