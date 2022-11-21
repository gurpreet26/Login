
import './App.css';
import { Login } from './components/account/Login';
import DataProvider from './context/DataProvider';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Header from './components/header/Header';
import { useState } from 'react';

const PrivateRoute = ({ isAuthenticated, ...props }) => {

  return isAuthenticated ? 
    <>
      <Header />
      <Outlet />
    </> 
    : <Navigate replace to='/login' />
};
function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (
    <DataProvider>
      <BrowserRouter>
      <div style={{ marginTop: 64 }}>
        <Routes>
           <Route path='/login' element={<Login isUserAuthenticated={isUserAuthenticated} />}/>
          
           <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/' element={<Home />} />
            </Route>
        </Routes>
        </div>
      </BrowserRouter>

    </DataProvider>
  );
}

export default App;
