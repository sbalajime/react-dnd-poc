import React, {Component} from 'react';
import grid from '../components/Grid';

class RightPane extends Component {
    constructor(props){
        super(props);
        this.state ={
            machinePos:-1
        }
    }

    updateMachinePos = (pos) => this.setState({machinePos:pos})
    render(){
        const {num} = this.props;
        const {machinePos} = this.state;
        let arr = [];
        for(let i=0;i<num;i++){
            arr.push(i);
        }
        return(
            <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', height:'100%', width:'100%'}}>
                {
                    arr.map(index => grid(index, machinePos, this.updateMachinePos))
                }
            </div>
        )
    }


}
export default RightPane;