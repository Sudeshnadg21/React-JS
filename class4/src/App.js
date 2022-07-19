import React,{Component} from 'react'
import ReactDOM from 'react-dom/client'
import Counter from './component/counter';
class App extends Component{
  constructor(props){
    super(props);
  }
  mount(){
    //alert('mount clicked')
    const root1 = ReactDOM.createRoot(document.getElementById('renderHere'))
    root1.render(
      <React.StrictMode>
        <Counter num={0} root = {root1}/>
      </React.StrictMode>
    )
  }
  unMount(){
    //alert('un mount clicked')
    const root1 = ReactDOM.createRoot(document.getElementById('renderHere'));
    root1.unmount();
  }
  
  render(){
    return(
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <div className='display-3 text-center'>React Lifecycle</div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <button onClick={this.mount.bind(this)} className="btn btn-success fs-3">Mount</button>
            <button onClick={this.unMount.bind(this)} className="btn btn-warning fs-3 float-end">UnMount</button>
          </div>
        </div>
        <div id="renderHere"></div>
      </div>
    )
  }
}
export default App;