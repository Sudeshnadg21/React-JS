import React from 'react';

function Ex1(props){
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 text-center'>
                    <h3 className='text-secondary'>Ex-1 Functional Component</h3>
                </div>
            </div>
            <div className='row'>
                <div className="col-md-12">
                    <h5>x={props.x}</h5>
                    <h5>y={props.y}</h5>
                    <h5>add={props.x+ props.y}</h5>
                    <hr />
                    <ol className="list-group">
                        {
                            props.user.map((item,index) => {
                                 return (
                                    <li className='list-group-item' key={index}>{item}</li>
                                 )                          
                            })
                        }
                    </ol>
                </div>
            </div>
        </div>
    )
}
export default Ex1