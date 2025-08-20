import axios from "axios";
import { useEffect, useState } from "react";

const DisplayMovie = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetchMovie()
    }, [])

    const fetchMovie = async () => {
        let URL = "http://localhost:9000/movies";
        let { data } = await axios.get(URL)
        setMovies(data)
    }

    return (
        <div className="container mx-auto py-10">
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right">
                    <thead className="text-xs text-gray-700 uppercase bg-blue-400">
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
                                            <img src={movie.url} alt="" className="object-cover h-full"/>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        {movie.genre}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-4">
                                            <button className="border py-2 px-7">Edit</button>
                                            <button className="border py-2 px-7">Delete</button>
                                            <button className="border py-2 px-7">View More</button>
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