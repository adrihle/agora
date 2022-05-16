import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './containers';
import { AuthPqge, HomePage } from './pages';
import { AppWrapper } from './app.style';
import './app.style.css';
import { useApp } from './app.hook';

export function App() {
  useApp();
  
  return (
    <AppWrapper>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/auth' element={<AuthPqge />} />
        </Routes>
      </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
