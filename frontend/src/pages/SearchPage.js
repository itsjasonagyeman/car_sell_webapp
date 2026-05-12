import React from 'react'
import './SearchPage.css'
import Filter from '../components/search_page_components/Filter'
import SearchResults from '../components/search_page_components/SearchResults'

export default function SearchPage() {
  return (
    <div className='searchMainBody'>
        <Filter/>
        <SearchResults/>
    </div>
  )
}
