import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

const AddMovie = () => {
    const [input, setInput] = useState({ title: "", url: "", genre: "" })
    const [show, setShow] = useState(false)
    const [desc, setDesc] = useState(null)
    const navigate = useNavigate();

    const editorRef = useRef();

    const handleSave = () => {
        const htmlValue = editorRef.current.getInstance().getHTML();
        setDesc(htmlValue)
        setShow(!show)
    };

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value })
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        const addMovie = async () => {
            const value = { ...input, desc, id: Date.now().toString()}
            await axios.post("http://localhost:9000/movies", value)
        }

        addMovie()
        navigate("/display-movie")
    };

    return (
        <div className="bg-[#0F172A] add-movie-sect min-h-screen flex justify-center items-center p-4">
            {
                !show ?
                    <div className="w-full lg:w-1/2 flex item-center justify-center">
                        <div className="w-full bg-white rounded-md max-w-md p-8 overflow-y-auto">
                            <div className="container mx-auto">
                                <h2 className="mb-5 text-3xl font-semibold">Add A Movie</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-5">
                                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
                                        <input type="text" value={input.title} onChange={handleChange} id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="url" className="block mb-2 text-sm font-medium text-gray-900">Image URL</label>
                                        <input type="text" value={input.url} onChange={handleChange} id="url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                        {input.url && (
                                            <div className="w-32 pt-5">
                                                <img src={input.url} alt="movie" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="genre" className="block mb-2 text-sm font-medium text-gray-900">Genre</label>
                                        <select id="genre" value={input.genre} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                            <option value="">Choose a Genre</option>
                                            <option value="Action">Action</option>
                                            <option value="Romantic">Romantic</option>
                                            <option value="Comedy">Comedy</option>
                                            <option value="Drama">Drama</option>
                                            <option value="Thriller">Thriller</option>
                                            <option value="Science Fiction">Science Fiction</option>
                                        </select>
                                    </div>
                                    <div className="flex items-center justify-center gap-5">
                                        <div>
                                            <button type="button" onClick={() => setShow(!show)} className="text-white py-3 px-5 form-btn font-medium text-sm  items-center justify-center">Add Description</button>
                                        </div>
                                        <div>
                                            <button type="submit" className="text-white py-3 px-5 form-btn font-medium text-sm items-center justify-center">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="min-h-screen flex justify-center items-center">
                        <div>
                            <Editor
                                ref={editorRef}
                                previewStyle="vertical"
                                height="400px"
                                initialEditType="wysiwyg"
                                useCommandShortcut={true}
                            />
                            <button type="button" onClick={handleSave} className="mt-3 px-5 py-3 text-white home-btn">
                                Save Content
                            </button>
                        </div>
                    </div>
            }
        </div>
    )
}

export default AddMovie
