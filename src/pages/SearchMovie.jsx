
import { Card } from "../components"
import { useFetch } from "../Hooks/useFetch"
import { useSearchParams } from "react-router-dom"

export const SearchMovie = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const {movies} = useFetch(apiPath,queryTerm)

 const checkMovies =() =>{
   if(!(Array.isArray(movies) && movies.length>2))
    {
     return "Movie is not found"
    }
    else
    {
      return `Result of "${queryTerm}"`
    }
 }
 
  return (
  <>
    <main >
       <section>
        <p className="font-light capitalize text-4xl dark:text-white">{checkMovies()}</p>
       </section>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap w-full">
                    {
                        movies.map((movies)=>(
                            <Card key={movies.id}  movies={movies}/>
                        ))
                    }
                </div>
            </section>
        </main>
  
  </>
  )
}
