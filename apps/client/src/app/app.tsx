import { BrowserRouter } from 'react-router-dom';
import { Navigation, RouterContainer } from '@containers';
import { AppWrapper } from './app.style';
import './app.style.css';
import { Suspense } from 'react';
import { AuthProvider } from './contexts/useAuth.context';

export function App() {
  
  return (
    <AppWrapper>
      <Suspense fallback={<span>Loading...</span>}>
        <AuthProvider>
          <BrowserRouter>
            <Navigation />
            <RouterContainer />
          </BrowserRouter>
        </AuthProvider>
      </Suspense>
    </AppWrapper>
  );
}

export default App;
