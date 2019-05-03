import React from 'react';
import './App.css';
import MainContent from './components/MainContent/MainContent';
import SideNav from './components/SideNav/SideNav';
import SideNavIcons from './components/SideNav/SideNavIcons/SideNavIcons';

function App() {
  return (
    <React.Fragment>
      <SideNavIcons />
      <SideNav />
      <MainContent />
    </React.Fragment>
  );
}

export default App;
