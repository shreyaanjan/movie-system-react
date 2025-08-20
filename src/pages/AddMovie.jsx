import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";


const AddMovie = () => {
    const [input, setInput] = useState({ title: "", url: "", genre: "" })
    const [show, setShow] = useState(false)

    const navigate = useNavigate()

    const editorRef = useRef();

    const handleSave = () => {
        const markdown = editorRef.current.getInstance().getMarkdown();
        setShow(!show)
        console.log("Markdown:", markdown);
    };

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const addMovie = async () => {
            const value = { ...input, description, id: Date.now() }
            await axios.post("http://localhost:9000/movies", value)
        }

        addMovie()
        navigate("/display-movie")
    }

    return (
        <div className="py-5">
            {
                !show ?
                <div className="flex justify-center items-center h-[80vh] ">
                    <form className="max-w-sm w-[500px] mx-auto" onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
                            <input type="text" onChange={handleChange} id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="url" className="block mb-2 text-sm font-medium text-gray-900">Image URL</label>
                            <input type="text" onChange={handleChange} id="url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                            {input.url && (
                                <div className="w-32 pt-5">
                                    <img src={input.url} alt="" />
                                </div>
                            )}
                        </div>
                        <div className="mb-5">
                            <label htmlFor="genre" className="block mb-2 text-sm font-medium text-gray-900">Genre</label>
                            <select id="genre" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                <option value="">Choose a Genre</option>
                                <option value="Action">Action</option>
                                <option value="Romantic">Romantic</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Drama">Drama</option>
                                <option value="Thriller">Thriller</option>
                                <option value="Science Fiction">Science Fiction</option>
                            </select>
                        </div>
                        <div>
                            <button type="button" onClick={() => setShow(!show)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Add Description</button>

                        </div>
                        <button type="submit" className="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                            Submit
                        </button>
                    </form> 
                </div> :
                    <div className="flex justify-center items-center h-[80vh]">
                        <div className="w-5/12 ">
                            <Editor
                                ref={editorRef}
                                previewStyle="vertical"
                                height="400px"
                                initialEditType="wysiwyg"
                                useCommandShortcut={true}
                            />
                            <button onClick={handleSave} className="mt-3 px-4 py-2 bg-blue-500 text-white rounded">
                                Save Content
                            </button>
                        </div>
                    </div>

            }


        </div>
    )
}

export default AddMovie
