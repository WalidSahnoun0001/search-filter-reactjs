import { useState } from 'react';
import data from './names.json'

function App() {

  const [name, setName] = useState("")

  return (
    <div className="App">
      <div className='display'>
        <input type="text" name="screen" placeholder='Enter a name...' onChange={(e)=> setName(e.target.value)}/>
      </div>
      <div>
        <ul>
          {
            data.filter((value) => {
              if(name === "") {
                return value
              } else if(value.name.trim().toLowerCase().includes(name.trim().toLowerCase())) {
                return value
              }
            }).map((name)=> (
              <li key={name.id}>{name.name}</li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
