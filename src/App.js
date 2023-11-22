
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './pages/Form';
import Certificate from './pages/certificate/Certificate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/certificate' element={<Certificate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
