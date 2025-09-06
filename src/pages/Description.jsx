import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Description = () => {
    const [movieObj, setMovieObj] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            let { data } = await axios.get(`http://localhost:9000/movies/${id}`)
            setMovieObj(data)
        }
        fetchData()
    }, [id])

    return (
        <div className="min-h-screen bg-[#0F172A] py-7 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto flex flex-col md:flex-row md:gap-6">
                <div className="w-full md:w-3/12 flex justify-center md:justify-start">
                    {movieObj.url && (
                        <div className="w-40 sm:w-48 lg:w-56 pt-4">
                            <img src={movieObj.url} alt="movie" className="w-full h-auto rounded-md" />
                        </div>
                    )}
                </div>
                <div className="w-full md:w-9/12 mt-6 md:mt-0">
                    <div
                        className="text-editor pl-4 sm:pl-6 lg:pl-8"
                        dangerouslySetInnerHTML={{ __html: movieObj.desc }}
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default Description