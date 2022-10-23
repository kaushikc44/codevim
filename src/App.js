
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
  const [themestate,setthemestate] = useState("okaidia");
  const [clickblob,changestateblob] = useState(false);
  const [textingchan,settextingchan] = useState("");
  console.log(clickblob);
  // console.log(initialstate);
  
  return (
    <>
    <Navbar setTabCount={setTabCount} tabCount={tabCount} changestateblob={changestateblob}/>
    <div className="flex ">
    <Sidebar  tabCount={tabCount} themestate={themestate} clickblob={clickblob} changestateblob={changestateblob} settextingchan={settextingchan} textingchan={textingchan}/>

    </div>
    <Footer setthemestate={setthemestate}/>
    
    </>
  )
}

export default App;
