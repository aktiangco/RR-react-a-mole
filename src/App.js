// CSS
import './App.css';
// useState from React
import {useState} from 'react'
// Components
import MoleContainer from './components/MoleContainer'


const App = () => {
  let [score, setScore] = useState(0)
  // creating a for-loop for hills
  const createMoleHill = () => {
    let hills = []
    // basic loop and call it 9 times
    for (let i = 0; i < 9; i++) {
      hills.push(
        // Score setup and a key value of "i"
        <MoleContainer key={i} setScore={setScore} score={score}/>
      )
    }
    return (
      // to append hills inside a div
      <div>
        { hills }
      </div>
    )
  }
  return (
    <div className="App">
      <h1>React a Mole</h1>
      {/* to return the method */}
      {score}
      {createMoleHill()}
    </div>
  );
}

export default App;
