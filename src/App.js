import React from 'react'
import BookSingle from './pages/BookSingle'
import Catalog from './pages/Catalog'
import { Router } from '@reach/router'

function App() {
  return (
    <div className="App">
      <Router>
        <Catalog path="/"/>
        <BookSingle path="/book/:id" />
      </Router>

    </div>
  );
}

export default App;
