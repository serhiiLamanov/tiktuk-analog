import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TrendingFeed from './routes/TrendingFeed'
import NoMatch from './routes/NoMatch'
import UserProfile from './routes/UserProfile';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route element={<App/>}> */}
          <Route path="/" element={<Navigate replace to="/TrendingFeed"/>}/>
          <Route path="/TrendingFeed" element={<TrendingFeed/>}/>
          <Route path="/users/:userId" element={<UserProfile/>}/>
          <Route path="*" element={<NoMatch />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
