import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const DisplayMovie = () => {
    const [movies, setMovies] = useState([])
    const navigate = useNavigate()
    
    useEffect(() => {
        fetchMovie()
    }, [])

    const fetchMovie = async () => {
        let URL = "http://localhost:9000/movies";
        let { data } = await axios.get(URL)
        setMovies(data)
    }

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:9000/movies/${id}`)
        fetchMovie()
    }

    return (
        <div className="container mx-auto py-5 add-movie-sect px-2 sm:px-4">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Movie Details</h2>
            <div className="relative overflow-x-auto">
                <table className="w-full text-xs sm:text-sm text-left rtl:text-right min-w-[600px]">
                    <thead className="text-xs sm:text-sm text-white uppercase bg-[#0F172A]">
                        <tr>
                            <th scope="col" className="px-3 sm:px-6 py-3">
                                Number
                            </th>
                            <th scope="col" className="px-3 sm:px-6 py-3">
                                Title
                            </th>
                            <th scope="col" className="px-3 sm:px-6 py-3">
                                Image URL
                            </th>
                            <th scope="col" className="px-3 sm:px-6 py-3">
                                Genre
                            </th>
                            <th scope="col" className="px-3 sm:px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            movies.map((movie, idx) => {
                                return <tr key={movie.id} className="bg-white border-b border-gray-200">
                                    <th scope="row" className="px-3 sm:px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {idx + 1}
                                    </th>
                                    <td className="px-3 sm:px-6 py-4">
                                        {movie.title}
                                    </td>
                                    <td className="px-3 sm:px-6 py-4">
                                        <div className="w-24 sm:w-32 h-20 sm:h-24 overflow-hidden rounded-md">
                                            <img src={movie.url} alt="movie" className="object-cover h-full w-full" />
                                        </div>
                                    </td>
                                    <td className="px-3 sm:px-6 py-4">
                                        {movie.genre}
                                    </td>
                                    <td className="px-3 sm:px-6 py-4">
                                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                                            <button onClick={() => navigate(`/edit-movie/${movie.id}`)} className="text-green-600 text-lg"><i className="bi bi-pencil-square"></i></button>
                                            <button onClick={() => handleDelete(movie.id)} className="text-red-600 text-lg"><i className="bi bi-trash3-fill"></i></button>
                                            <button onClick={() => {
                                                navigate(`/description/${movie.id}`)
                                            }
                                            } className="text-white py-2 px-3 sm:py-3 sm:px-5 form-btn font-medium text-xs sm:text-sm">View More</button>
                                        </div>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DisplayMovie