// import logo from './logo.svg';
// import './App.css';

//Components

import Home from "./components/Home";

import DataProvider from "./context/DataProvider";


function App() {
  return (

    <DataProvider>
      <Home/>
    </DataProvider>

  );
}

export default App;
