'use client'
import { useState } from 'react'
import React from 'react'
import SearchManufacturer from './SearchManufacturer'

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('');
    const handleSearch = () =>{}

  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className="searchbar__items">
            <SearchManufacturer
                manufacturer='q'
                setManufacturer={()=>{}}
            />
        </div>
    </form>
  )
}

export default SearchBar