
import React, { useState, useEffect } from 'react';
import './App.js';
import './App.css';
import axios from 'axios';

function write() {
  const [model, setModel] = useState('');

  useEffect(
    () => {
      axios.get('/write')
      .then(function (response){
        setModel(model);
      });
    }, []
  );

  return (
    <div className="write">
      <header className="write-header">
        test : {model}
      </header>
    </div>
  );
}

export default write;