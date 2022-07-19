import React from "react";

class Ex2 extends React.Component { 
    constructor(props) { 
        super(props);
    }
    state={
        x:1234,
        y:343,
        isVeiw:false,
        colors:['red','green','blue']
    }
    render() {
        return ( 
        <div >
            <h1> Example 2 State in Class Component </h1>
            <h4>x={this.state.x}</h4>
            <h4>y={this.state.y}</h4>
            <h4>isView = { this.state.isView ? 'true' : 'false' }</h4>
            <ul>
                {
                    this.state.colors.map((item,index)=>{
                        return(
                            <li key={index}>{item}</li>
                        )
                    })
                }
            </ul>
            </div>
        )
    }
}
export default Ex2