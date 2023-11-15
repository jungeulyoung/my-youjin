import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUpButton from './components/SignUpButton';
import SignUp from './pages/SignUp';
import SignUpWithPhone from './components/SignUpWithPhone';
import FindLocation from './pages/FindLocation';
import FindLocationButton from './components/FindLocationButton';


function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <Routes>
              <Route path="/" element={
                <>
                  <SignUpButton />
                  <FindLocationButton />
                </>
              } />
          
            </Routes>
          </p>
        </header>
      </div>
  )
}

export default App;
