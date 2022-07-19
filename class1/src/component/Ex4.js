import React, { component } from 'react'

const x=123;
const title='welcome to react';
let a = 444;
const colors=['blue','green','red'];
class Ex4 extends component {
    constructor(props) {
        super(props);
        this.p=34;
    }
    render() {
        return ( 
        <div >
            <h1 > Variable in class Components </h1> 
            <h3>x = {x}</h3>
            <h3>{title}</h3>
            <h3>a={a}</h3>
            <hr />
            <div>
                {
                    colors.map((item,index)=>{
                        return(
                            <p key={index}>{index}{item}</p>
                        )
                    })
                }
            </div>
            <hr/>
            <h3>p={this.p}</h3>
            </div>
        )
    }
}
export default Ex4