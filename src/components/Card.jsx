import { Link } from "react-router-dom";
import BackupImg from "../assests/images/backup.png"
export const Card = ({ movies }) => {
    const img = movies.poster_path ? `https://image.tmdb.org/t/p/w500/${movies.poster_path}` : BackupImg;

    return (
        movies.overview ? (
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3 ">
                <Link to={`/movie/${movies.id}`}>
                    <img className="rounded-t-lg" src={img} alt={movies.poster_path} />
                </Link>
                <div className="p-5">
                    <Link to={`/movie/${movies.id}`}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movies.title}</h5>
                    </Link>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movies.overview}</p>
                </div>
            </div>
        ) : null
    );
};
