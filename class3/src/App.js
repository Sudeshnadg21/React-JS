//import logo from './logo.svg';
import './App.css';
// import Ex1 from './component/Ex1'
// import Ex2 from './component/Ex2'
// import Ex3 from './component/Ex3'
// import Ex4 from './component/Ex4'
// const users=['Ranu','Sonu','Ali','John','Salman']

function App(props) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 text-center'>
          <h3 className='display-3 text-danger'>{props.title}</h3>
        </div>
      </div>
      {/* <Ex1 x={456} y={89} emp={users}/>
      <Ex2 x={134} y={56} emp={users}/> */}
      {/* <Ex3 x={343} y={86} emp={users}/>
       */}
       {/* <Ex4/> */}
    </div>
  );
}

export default App;
