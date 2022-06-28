import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderView from './components/HeaderView';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import SearchView from './components/SearchView';
import MovieView from './components/MovieView';
import NotFoundView from './components/NotFoundView';
import FooterView from './components/FooterView';

function App() {

  // [variable , function_change_value_variable]
  // creating a hook for searchText variabl, initial value = empty strign
  const [searchText, setSearchText] = useState('')
  // creating a hook for searchResults variable, init value = empty array
  const [searchResults, setSearchResults] = useState([])

  
  // monitoring searchText and every time its value changes fetch data from the API
  useEffect( () => {
    // call the the API - themoviedb
    // example link for movi searches = https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&language=en-US&query=star%20wars&page=1&include_adult=false
    // making an API request
    if (!(searchText.trim().length === 0 )) { // preventin API request if searchText inculdes only spaces or is empty
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_THEMOVIEDB_API_KEY}&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
          // writing data from the api into searchResults
          setSearchResults(data.results)
        })
    }
  },[searchText])

  return (
    <div>
      {/* passing the value searchText and the function to update it */}
      <HeaderView searchText={searchText} setSearchText={setSearchText}/>
      {/* Route  v6*/}
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="about" element={<AboutView />} />
        <Route path="search" element={<SearchView  searchText={searchText} searchResults={searchResults} />} />
        {/* specific movie id link */}
        <Route path="movies/:id" element={<MovieView />} />
        {/* 404 view - page not found */}
        <Route path="*" element={<NotFoundView />} />
      </Routes>
      {/* Footer */}
      <FooterView />
    </div>
  );
}

export default App;
