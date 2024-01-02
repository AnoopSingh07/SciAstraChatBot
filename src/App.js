import React from 'react';
import './App.css';
import ChatbotBox from './Components/ChatbotBox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src="https://www.sciastra.com/blog/wp-content/uploads/2023/01/new_logo_sci1.png" className="App-logo" alt="logo" />
        <div class="text">
        <h1 id="sci_h1">SciAstra</h1>
        <p id="for_love">For the love of science</p>
        </div>
      </header>
      <ChatbotBox />
    </div>
  );
}

export default App;
