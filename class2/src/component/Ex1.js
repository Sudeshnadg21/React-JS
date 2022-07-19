import React, { Component } from 'react'

class Ex1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0,
            a:34,
            b:54,
            isMatch:true
        }
    }

    addOne(){
    //    alert('add one clicked')
    // this.state.num=this.state.num+1(this will not work)
    //state handler
    this.setState({
        num:this.state.num+1
    })
    }
    toggelView(){
        this.setState({
        isMatch: !this.state.isMatch})
    }
    render() {
        return ( 
        <div >
            <h3 > State in Class Component </h3> 
            <h4 > Num = { this.state.num } </h4>
            <button onClick={()=>this.addOne()}>Add+1</button>
            <hr/>
            <h4>Sum={this.state.a+this.state.b}</h4>
            <h4>Product={this.state.a*this.state.b}</h4>
            <hr/>
            <button onClick={()=>this.toggleView.bind(this)}>Toggle View</button>
            <div>{this.state.isMatch?(
                <div>
                    <h5>Login Here</h5>
                </div>
            ):(
                <div>
                    <h5>Register Here</h5>
                </div>
            )}</div>
             </div>
        )
    }
}
export default Ex1