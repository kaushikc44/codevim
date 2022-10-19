import React, { useState } from "react";
import { FaBeer,FaPython } from 'react-icons/fa';
import {DiJavascript1,DiRust} from 'react-icons/di';
import {GiBrokenHeart} from 'react-icons/gi';
import {AiOutlineFileText,AiFillHeart} from 'react-icons/ai';
import {SiCsharp} from 'react-icons/si';


function Sidebar(props) {
    const { tabCount } = props;
    const texting = document.querySelector('#textinput');

const [iconstate,seticonstate] = useState(<FaBeer className="w-5 h-5 absolute ml-3 pointer-events-none"/>);

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
   <div className="overflow-y-auto  py-5 px-3 bg-[#2A4867] rounded min-h-[80vh] mr-2 ml-1">
    <ul id="unorder" >
    {[...Array(tabCount)].map((i) => {
        return(
            <li className=" p-2" key={i}>
                <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
                {iconstate}   
                <input type="text" id="textinput" onChange={changingfunc}  className="pr-3 pl-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="untitled" />
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