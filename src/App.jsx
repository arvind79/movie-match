import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/pageNotFound/PageNotFound";

import { fetchDataFromApi } from "./utils/api"
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice'

function App() {
  const dispatch = useDispatch()
  const { url } = useSelector((state) => state.home)
  console.log(url)

  useEffect(() => {
    fetchApiConfig()
  }, [])

  const fetchApiConfig = () => {
    
    fetchDataFromApi('/configuration')
      .then((res) => {
        console.log(res)

        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
        }

        dispatch(getApiConfiguration(url))
      })

    // const options = {
    //   method: 'GET',
    //   headers: {
    //     accept: 'application/json',
    //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWI3MTMxZDE3M2ZmNjE4ZGMxODQ2N2VmZjQ0MWZjYSIsInN1YiI6IjY0YTVhOTNmNWE5OTE1MDBlM2M4OGVjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._8Fu5wQwECCLbddk9xkg5tV0xCKgVxSmj_i0Tu27Nbc'
    //   }
    // };
    
    // fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
    //   .then(response => response.json())
    //   .then(response => console.log(response))
    //   .catch(err => console.error(err));
  }

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App