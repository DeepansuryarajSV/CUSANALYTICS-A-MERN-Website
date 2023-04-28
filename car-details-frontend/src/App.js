import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about'
import Analysis from './components/analysis';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={apiResponse: ""};
//   }

//   callAPI(){
//     fetch("http://localhost:5000/details")
//       .then(res => res.text())
//       .then(res => this.setState({apiResponse: res}));
//   }
// }

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/analysis" element={<Analysis/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;