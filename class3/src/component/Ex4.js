import React, { Component } from "react";
// import PropsTypes from 'props-types'
class Ex4 extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="Container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="display-3 text-secondary">
                            Default Props in Class Component
                        </h3>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                       <h5>a.{this.props.a}</h5>
                       <h5>b.{this.props.b}</h5> 
                       <h5>title.{this.props.title}</h5>
                       <h5>{this.props.isVeiw ?"say true":"say false"}</h5>
                       <hr />
                       <ul className="list-group">
                        {
                            this.props.colors.map((item,index)=>{
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
}
// default props with in component
Ex4.defaultProps={
    a:34,
    b:44,
    title:"welcome to react",
    isVeiw:"flase",
    colors:['blue','green','red']
}
// declare and assign date type type to default props
Ex4.propsTypes={
    a:PropsTypes.number,
    b:PropsTyes.number,
    titles:PropsTypes.string,
    isVeiw:PropsTypes.bool,
    colors:PropsTypes.array
}
export default Ex4