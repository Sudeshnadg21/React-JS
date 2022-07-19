import Reacg from 'react'
const Ex2=(props)=>{
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 text-center'>
                    <h5 className='text-secondary'>Ex-2 functional Component</h5>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <h5>x={props.x}</h5>
                    <h5>y={props.y}</h5>
                    <hr />
                    <ul className="list-group">
                        {
                            props.user.map((item,index)=>{
                                return(
                                    <li className="list-group-item" key={index}>{item}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Ex2