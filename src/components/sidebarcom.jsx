import React, { useState } from "react";
import { FaBeer,FaPython } from 'react-icons/fa';
import {DiCode, DiJavascript1,DiRust} from 'react-icons/di';
import {GiBrokenHeart} from 'react-icons/gi';
import {AiOutlineFileText,AiFillHeart} from 'react-icons/ai';
import {SiCsharp} from 'react-icons/si';
import CodeMirror from '@uiw/react-codemirror';
import {okaidia} from '@uiw/codemirror-theme-okaidia';
import {sublime} from '@uiw/codemirror-theme-sublime';
import FileSaver, { saveAs } from 'file-saver';
// const writeFileP = require("write-file-p");

function Sidebar(props) {
    const { tabCount } = props;
    const {clickblob,changestateblob} = props;
    const {textingchan,settextingchan} = props;
    let ouputext = '';
    const [textin,setextin] = useState("");
    const texting = document.querySelector('#textinput');

const [iconstate,seticonstate] = useState(<FaBeer className="w-5 h-5 absolute ml-3 pointer-events-none"/>);
const {themestate} = props;
console.log(themestate);
const themefunc = () =>{
    if(themestate === "okaidia"){
        console.log("true");
        return okaidia
    }
    else if (themestate === "sublime"){
        return sublime
    }
}

let counter = 0;
const [compo, setCompo] = useState(<CodeMirror  options={{mode:'javascript', lineNumbers:true}} value="console.log('hello world')"
height="80vh"
width="170vh" 
theme={themefunc()}
onChange={(editor,data,value) => {{setextin(textin + editor)}}} />);
let arrary = [{counter:{key1:iconstate,key2:compo}}]

if(clickblob == true){
    var blob = new Blob([textin], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, "hello world.txt");
    changestateblob(false);
}
// const onChange = () => {
//     settextingchan(textingchan + textin);
// }
// console.log("Chaning the text...")
// console.log(textingchan);


// writeFileP(`output.txt`, textin, (err, data) => {
//     console.log(err || data)});
// const [compo , setCompo] = useState(<CodeMirror />);

let varible;

const changingfunc = (e) => {
    const value = e.target.value;
    //console.log(value);
    let array = value.split(".");
    console.log(array[1]);
    if(array[1] == "txt"){
        seticonstate(<AiOutlineFileText className="w-5 h-5 absolute ml-3 pointer-events-none"/>)
    }
    else if(array[1] === "py" || array[1] === "python"){
        seticonstate(<FaPython className="w-5 h-5 absolute ml-3 pointer-events-none" />)
    }
    else if(array[1] === "js" || array[1] === "javascript"){
        seticonstate(<DiJavascript1 className="w-5 h-5 absolute ml-3 pointer-events-none" />)
    }
    else if (array[1] === undefined ){
        seticonstate(<GiBrokenHeart className="w-5 h-5 absolute ml-3 pointer-events-none" />)
    }
    else if (array[1] === "rs" || array[1] === "rust"){
        seticonstate(<DiRust className="w-5 h-5 absolute ml-3 pointer-events-none" />)
    }
    else if ( array[1] === "c#"){
        seticonstate(<SiCsharp className="w-5 h-5 absolute ml-3 pointer-events-none" />)
    }
    else{
        seticonstate(<AiFillHeart className="w-5 h-5 absolute ml-3 pointer-events-none" />)
    }
    
}


    
    return (
        <aside className="w-64" aria-label="Sidebar">
   <div className="overflow-y-auto  py-5 px-3 bg-[#2A4867] rounded min-h-[80vh] min-w-[190vh] mr-2 ml-1">
    <ul id="unorder" >
    {[...Array(tabCount)].map((i) => {
        
        
        return(
            
            <li className=" flex p-2" key={i}>
                <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
                <input type="text" id="textinput" onChange={changingfunc}  className="pr-3 pl-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="untitled" />
                {/* {arrary.map((value) => 
                {
                    
                    let values = Object.values(value)
                    // console.log(values);
                    return values.map((value) => {return value});
                    })}; */}

                {/* TO ITER THROUGH THE ARRAY AND BE ABLE TO FETCH TEH OBJECT */}
                {arrary.map((value) => {
                    let values = Object.values(value)
                    return values.map((innervalue) => {
                        let undervalue = Object.values(innervalue)
                        return undervalue.map((insidevalue) => {return insidevalue})
                    })
                })}
                
                
                </div>
                
            </li>
            )
        } 
    )}
    </ul>
   </div>
</aside>
    )
}

export default Sidebar;