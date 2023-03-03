import { useState } from 'react';
import { algorithm } from './matchingAlgorithm';

const App = () => {
  const [result, setResult] = useState([]);

  function submit() {
    const inputValue = document.getElementById("myInput").value;
    algorithm(inputValue, setResult)
  }

  return (
    <div className="App" style={{ padding: '10px' }}>
      <div><b>Enter image name, for example 2.jpg</b></div>
      <input id="myInput" type="text" />
      <button onClick={submit}>Submit</button>
      <ul>
        {result.map(item => (
          <li key={item.id}>
            <b>Image:</b> {item.id} <b>Similarity Score:</b> {item.similarityScore}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
