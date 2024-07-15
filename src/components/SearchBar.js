import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import useTriggerOutsideClick from '../utils/useTriggerOutsideClick';



const SearchBar = ({setSearchQuery,setShowSuggestion,searchSuggestion}) => {
  

    const [isSearchBoxOpen,setIsSearchBoxOpen]=useState(false);
    const [query,setQuery]=useState("");
    
    const handleSearchClick = (e) =>{
        console.log(e.target.innerText);  
        setSearchQuery(e.target.innerText);
        setShowSuggestion(false)
          }
        // let navigate = useNavigate();
          //const history=createBrowserRouter();
          const wrapperRef = useRef(null);
          useTriggerOutsideClick(wrapperRef, () => {
            setIsSearchBoxOpen(false);
          });
  return (
    <div className='my-2'>
        <div className='flex items-center shadow-lg md:shadow-none'>
            <input
             onKeyDown={(e)=>{
                if(e.keyCode===13){
                 
                    //history.push(`results/search_query=${e.target.innerText}`);
                    //navigate(`results/search_query=${e.target.value}`)

                    // <Link to={`results/search_query=${e.target.value}`}>
                    //   <Result/>
                    // </Link>
                   
                }

            }}
            
            onChange={(e)=>{
                //setSearchQuery(e.target.value);
               
                setQuery(e.target.value);
            }}
            type="text"
            value={query}
            placeholder="Search"
            onFocus={()=>setIsSearchBoxOpen(true)}
            onBlur={()=>setIsSearchBoxOpen(false)}
            className="px-5 w-[37rem] p-2 border border-gray-500 from-black rounded-l-full" 
            />
            <button className="border border-gray-500  bg-gray-200 p-2 rounded-r-full">
           <i className="fa fa-search"></i>
         </button>
        </div>

        {isSearchBoxOpen && searchSuggestion.length >0  && (
            <div
            ref={wrapperRef}
             className="border-2 rounded-xl py-2 w-[35rem] border-gray-100 absolute bg-white font-medium shadow-sm">

            <ul>
             {searchSuggestion?.map((item, index) => (
               <li
                 key={index}
               
                 onMouseDown={(e)=>handleSearchClick(e)}
                 className="py-2 shadow-sm hover:bg-gray-300 cursor-pointer"
               >
              
                 <Link
                    className="flex px-5 py-1 gap-2 items-center hover:bg-gray-100"
                    to={`results/?search_query=${item}`}
                  >
                     <i className="fa fa-search p-2"></i> {item}
                  </Link>
               
               </li>
             ))}
           </ul>    

             </div>
        )}
    </div>
  )
}

export default SearchBar