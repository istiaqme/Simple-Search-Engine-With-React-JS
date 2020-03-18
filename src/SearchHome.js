import React, { useState } from 'react';
import './App.css';
import { Button, FormGroup, Input} from 'reactstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
function App() {
  const [keyword, setKeyword] = useState("");
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          খোঁজ -The Search
        </p>
          <FormGroup>
            <Input type="text" name="searchText" id="searchText" value={keyword} onChange={e => setKeyword(e.target.value)}/>
          </FormGroup>
          <FormGroup>
          <Link to={'/result/'+ keyword} className="search-button"> Search Now </Link>
          </FormGroup>
      </header>
    </div>
  );
}

export default App;
