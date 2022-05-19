import { BrowserRouter } from 'react-router-dom';
import { AuthContainer, Navigation } from '@containers';
import { AppWrapper } from './app.style';
import './app.style.css';
import { Suspense } from 'react';

export function App() {
  // const { isAunthenticated } = useApp();
  
  return (
    <AppWrapper>
      <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <Navigation />
        <AuthContainer />
      </BrowserRouter>
      </Suspense>
    </AppWrapper>
  );
}

export default App;
