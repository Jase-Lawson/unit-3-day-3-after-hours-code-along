import './App.css';
import Display from './Components/Display'

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Display />
    </div>
  );
}

export default App;


// Display(parent) Component - storing a list of friends
// Child Component - showing each object in the friends array
// Child Component2 - form with input fields, state for new friends , submit button
