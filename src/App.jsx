import './app.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element='' >
            <Route path='page1' element='' />
            <Route path='page2' element='' />
            <Route path='page3' element='' />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
