import React, { useState } from 'react'

const Ex4 = (props) => {
    //datatype[state,handler]=useState(initial Value)
    const [title, setTitle] = useState("Welcome to state in react");
    const [x, setX] = useState(123);
    const [view, setVeiw] = useState(false);
    const [color, setColor] = useState(['red', 'green', 'blue'])
    const modifyTitle=function(){
        setTitle("React JS new state example")
    }
    const incByOne=()=>{
        setX(x+1)
    }
    const incBy10=()=>{
        setX(x+10)
    }
    return ( 
    <div > { /* jsx*/ } 
    <h1 > State in function Expression </h1> 
    <h3 > { title } </h3> 
    <h3> x = { x } </h3> 
    <h3> { view ? "true Statement" : "false Statement" } </h3> <ol > {
            color.map((item, index) => {
                return ( 
                <li key = { index } > { item } </li>
                )
            })
        } 
        </ol> 
        <hr />
        <button onclick={modifyTitle}>ChangeTitle</button>
        <button onClick={()=>incByOne()}>Increment X</button>
        <button onClick={()=>incBy10()}>Increment 10</button>
        <button onClick={()=>setX(x+50)}>Increment by 50</button>
        </div>
    )
}
export default Ex4