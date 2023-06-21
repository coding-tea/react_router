//dependencies
import { Routes, Route, BrowserRouter } from 'react-router-dom';

//css
import './app.css';

//components
import Menu from './components/Menu';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu />} >
            <Route path='/page1' element={<Page1 />} />
            <Route path='/page2' element={<Page2 />} />
            <Route path='/page3' element={<Page3 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
