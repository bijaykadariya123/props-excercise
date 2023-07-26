import logo from './logo.svg';
import './App.css';

const Practice=(props)=>{
  return(
    <div>
  <h3>{props.title}</h3>
      {props.children}
  </div>
 
  )
}
const PracticeAuthor=(props)=>{
  return(
    <>
      <h3>{props.title}</h3>
      <h3>{props.Author}</h3>
    </>
  )
}


function App() {
  return (
    <div className="App">
      <Practice title="John Wick"/>
      <Practice title="Fast X"/>
      <div className="styling">
          <Practice title="Extraction">
          Author Name: <PracticeAuthor Author="Chrish Hemsworth"/>
          </Practice>
      </div>
    </div>
  );
}

export default App;
