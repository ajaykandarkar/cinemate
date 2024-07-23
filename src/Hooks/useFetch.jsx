
import { useState,useEffect } from "react";
import axios from "axios";

export const useFetch = (apiPath,queryTerm="") => {

   const [movies, setMovies] = useState([]);

   const url =`${process.env.REACT_APP_BASE_URL}/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`

   console.log("Url : ",url);
    const fetchMovies = async () => {
        try {
          const response = await axios.get(url);
          setMovies(response.data.results);
           
        } catch (error) {
          console.log("An error occurred while fetching the data:", error);
        }
       };

    useEffect(() => {
        fetchMovies();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])
 
    console.log("movies : ",movies);

  return {movies}

}
