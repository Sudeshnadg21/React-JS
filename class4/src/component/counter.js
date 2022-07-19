import React,{Component} from 'react'
import ReactDOM from 'react-dom/client'

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {view : false};
    }
    addOne(){
       const root=ReactDOM.createRoot(document.getElementById('renderHere'))
       root.render(
        <React.StrictMode>
            <Counter num={this.props.num+1} root1={this.props.root}/>
        </React.StrictMode>
       )     
    }

    // componentWillMount(){
    //     console.log('component will mount called');
    // }

    // componentDidMount(){
    //     console.log('component did mount called')
    // }
    componentWillReceiveProps(nP,nC){
        console.log('component will receive props');
        console.log('newProps =',nP);
        if(nP.num>=10){
            this.setState({
                view:true
            })
        }
    }
    shouldComponentUpdate(nP,nS){
        console.log('shouldComponentupdate?')
         console.log('newProps =',nP);
         console.log('newState =',nS);
    }
       componentWillUpdate(nP,nS){
        console.log('component will update');
        console.log('newProps=',nP);
        console.log('newState=',nS)
       }


    

    render(){
        console.log('component rendered')
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <h3 className='display-3 text-warning'>Counter</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1 className='display-1'>
                            {this.state.view?"Welcome to React Lifecycle" :"Need More Counts"}</h1>
                            <div>
                                {
                                    this.state.view ? null:(
                            <button  onClick={this.addOne.bind(this)}className='btn btn-success'>Add+1</button>
                                )
                                }
                                </div>
                    </div>
                </div>
               
            </div>
        )
    }
    componentDidUpdate(oP,oS){
        console.log('componentDidUpdate');
        console.log('oldProps=',oP);
        console.log('oldState=',oS);
    }
    componentWillUnmount(){
        console.log('component unmounted successfully')
    }
}
export default Counter;