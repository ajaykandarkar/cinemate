import { Card } from "../components";
import { useFetch } from "../Hooks/useFetch";

export const MovieList = ({apiPath}) => {

   const {movies} = useFetch(apiPath);

    return (
        <main >
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap w-full">
                    {
                        movies.map((data)=>(
                            <Card key={data.id}  movies={data}/>
                        ))
                    }
                </div>
            </section>
        </main>
    );
};
