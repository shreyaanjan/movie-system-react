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
        <div className="container mx-auto py-28">
            <div className="text-editor" dangerouslySetInnerHTML={{ __html: movieObj.desc }}></div>
        </div>
    )
}

export default Description