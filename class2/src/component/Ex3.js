import React,{useState} from 'react'
// useState=>is built in hook method,used to declare the state and handler methode

function Ex3(props) {
    // datatype[state,handler]=useState(initial value)
    const[title , setTitle]=useState("Welcome to state in react");
    const[x,setX]=useState(123);
    const[view,setVeiw]=useState(false);
    const[color,setColor]=useState(['red','green','blue'])
    return ( 
    <div >
        <h1 > States in Functional Component </h1>
        <h3>{title}</h3>  
        <h3>x={x}</h3>
        <h3>{view? "true statement":"false statement"}</h3>
        <ol>
            {
                color.map((item,index)=>{
                    return(
                        <li key={index}>{item}</li>
                    )
                })
            }
        </ol>
        </div>
    )
}
export default Ex3