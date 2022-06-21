import React from 'react'
import Navbar from './UI/Navbar';
import QuerySearch from './UI/QuerySearch';
import QueryResult from './UI/QueryResult';
import './Query.css'


const Query = () => {
  return (
    <div>
        <Navbar />
        
            <div className="d-flex flex-column w-100">
                <QuerySearch />
            </div>
        
    </div>
  )
}

export default Query