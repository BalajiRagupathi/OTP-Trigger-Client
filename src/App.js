import React, { Suspense } from 'react';
import { Routes,Navigate,Route } from 'react-router-dom';
import './App.css';
const Header = React.lazy(() => import('./components/Header/Header'));
const Users = React.lazy(() => import('./pages/users/Users'));
const Loading = React.lazy(() => import('./components/common/Loading/Loading'));
const NotifiedUsers = React.lazy(() => import('./pages/notifedUsers/NotifiedUsers'));


const App = () => {
  return (
    <div className="container" >
      <Suspense fallback={<Loading/>}>
        <Header />
        <Routes>
          <Route path='/'  element={<Users/>} />
          <Route path='/notifiedUsers'  element={<NotifiedUsers/>} />
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
