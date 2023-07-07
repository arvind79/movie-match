import axios from "axios"

const BASE_URL = "https://api.themoviedb.org/3"

const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN

const headers = {
  Authorization: "bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWI3MTMxZDE3M2ZmNjE4ZGMxODQ2N2VmZjQ0MWZjYSIsInN1YiI6IjY0YTVhOTNmNWE5OTE1MDBlM2M4OGVjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._8Fu5wQwECCLbddk9xkg5tV0xCKgVxSmj_i0Tu27Nbc",
}

export const fetchDataFromApi = async (url, params) => {
  try {
    const {data} = await axios.get(BASE_URL + url, {
      headers,
      params
    })
    return data
  }
  catch(err) {
    console.log(err)
    return err
  }
}
