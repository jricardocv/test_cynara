import './App.css';
import {Routes, Route} from 'react-router-dom';
import SubmitPage from './Pages/SubmitPage';
import ContentPage from './Pages/ContentPage';

function App() {


  return (
    <div className="App">
      <div className="App-body">
        <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
        <Routes>
          <Route exact path='/' element={<ContentPage/>}/>
          <Route exact path="/Pages/SubmitPage" element={<SubmitPage/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
