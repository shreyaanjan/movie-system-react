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
        <div className="container mx-auto py-28">
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right">
                    <thead className="text-xs text-white uppercase bg-[#0F172A]">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Image URL
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Genre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            movies.map((movie, idx) => {
                                return <tr key={movie.id} className="bg-white border-b border-gray-200">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {idx + 1}
                                    </th>
                                    <td className="px-6 py-4">
                                        {movie.title}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="w-32 h-24 overflow-hidden">
                                            <img src={movie.url} alt="" className="object-cover h-full" />
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        {movie.genre}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-4">
                                            <button onClick={() => navigate(`/edit-movie/${movie.id}`)} className="border py-2 px-7">Edit</button>
                                            <button onClick={() => handleDelete(movie.id)} className="border py-2 px-7">Delete</button>
                                            <button onClick={() => {
                                                navigate(`/description/${movie.id}`)
                                            }
                                            } className="border py-2 px-7">View More</button>
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