import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigation } from './containers';
import { AppWrapper } from './app.style';
import './app.style.css';
import { useApp } from './app.hook';
import { Guard } from './components/guard';
import { routes } from './routes/pages.routes';
import { Suspense } from 'react';

export function App() {
  const { isAunthenticated } = useApp();
  
  return (
    <AppWrapper>
      <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          {routes.map(({path, component: Component}) => {
            return (
              <Route 
                key={path} 
                path={path} 
                element={<Guard auth={isAunthenticated} component={Component} path={path} />}  
              />
            )
          })}
        </Routes>
      </BrowserRouter>
      </Suspense>
    </AppWrapper>
  );
}

export default App;
