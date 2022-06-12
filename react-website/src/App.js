import React, { useState } from 'react';
import './Data.js';
import Data from './Data.js';
import List from './List.js';

const App = ()=>{

  const[people,setPeople] = useState(Data);
  return(
    <main>
    <div className="col">
      <div className="row1">
    <h3>{people.length} Birthdays Today</h3>
    </div>
    <div  className="row2">
    <List people={people} />
    </div>
    <div className="row3">
    <button onClick={()=>{setPeople([])}}>Clear All</button>
    </div>
    </div>
    </main>
  );
}
export default App;