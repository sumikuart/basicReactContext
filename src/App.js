import React from 'react';
import Navbar from './components/nav.component';
import Booklist from './components/booklist.component';
import ThemContextProvider from './context/them.context';
import AuthContextProvider from './context/login.context';
import Toggle from './components/themeChanger.component';

function App() {
  return (
    <div className="App">
      
      <ThemContextProvider>
        <AuthContextProvider>
          <Navbar />
          <Booklist />
          <Toggle />
        </AuthContextProvider>
      </ThemContextProvider>

    </div>
  );
}

export default App;
