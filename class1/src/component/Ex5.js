import React from 'react'
let x = true;
let y = 1234;
let txt = "welcome to local variable";
let names = ['mohan', 'raju', 'suma', 'naveen', 'jhon', 'ali'];
let data =[
    {
        title:'javascript',
        duration:'1 month'
    },
    {
        title:'react',
        duration:'1.3 month'
    },
    {
    title:'angular',
    duration:'1.4month'
    }
];

function Ex5(props) {
    return (
         <div>
        <h1> Local Variables in Function Component </h1> 
        <h3>x={x ? "say true":"say false"}</h3>
        <h3>y={y}</h3>
        <h3>{txt}</h3>
        <hr />
        <ol>
            {
                names.map((item,index) => {
                    return(
                      <li key={index}>{item}</li>  
                    )
                })
            }
        </ol>
        <hr />

        <div>
            {
               data.map((item,index)=>{
                return(
                    <article key={index}>
                        <h4>{item.title}</h4>
                        <h5>{item.duration}</h5>
                    </article>
                )
               })

               
            }
        </div>
        </div>
    )
}
export default Ex5