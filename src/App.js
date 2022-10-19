
import './App.css';
import Navbar from  './components/navbar';
import Footer from './components/footercom';
import Sidebar from './components/sidebarcom';
import TextArea from './components/textareafield';
import Texting from './components/texta';
import { useState } from 'react';

function App() {

  // document.body.style.backgroundColor = '#171717';
  const [tabCount, setTabCount] = useState(1);
  // console.log(initialstate);
  
  return (
    <>
    <Navbar setTabCount={setTabCount} tabCount={tabCount} />
    <div className="flex ">
    <Sidebar  tabCount={tabCount}/>
    <Texting />
    </div>
    <Footer />
    
    </>
  )
}

export default App;
