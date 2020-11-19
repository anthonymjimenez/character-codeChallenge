import React, {useState} from "react";

export default function Search({chars}) {
   const [search, setSearch] = useState([])
   const [searchTerm, setTerm] = useState(null)
    
   const handleSearch = (e) => {
       setTerm(e.target.value)

       chars.map(elm => {
           if(elm.name == searchTerm) {
               setSearch(search => search.push(searchTerm))
           }
       })
   }
  return (
      <>
      <input type='text' value={searchTerm} onChange={(e) => handleSearch(e) } />
      {search}
    </>
      )
}
