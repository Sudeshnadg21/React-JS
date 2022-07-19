import React,{component} from 'react'
class Ex3 extends component{
    consstructor(props){
        // super(props);
    }
    render(){
        <div className='container'>
            <div className='Row'>
                <div className='col-md-12 text-center'>
                    <h3 className='display-3'>Props in Class Component</h3>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-4'>
                    <h5>x={this.props.x}</h5>
                    <h5>y={this.props.y}</h5>
                    <h5>rem={this.props.y % this.props.x}</h5>
                </div>
                <div className='col-md-6'>
                    <ol className="list-group">
                        {
                            this.props.emp.map((item,index)=>{
                                return(
                                    <li className='list-group-item' key={index}>{item}</li>
                                )
                            })
                        }
                    </ol>
                </div>
            </div>
        </div>

    }
}
export default Ex3