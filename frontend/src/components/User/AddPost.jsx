import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const AddPost = () => {

    

    return(
        <form className="flex flex-col md:grid md:grid-cols-[3fr_1fr] gap-4">
            
            <div className="flex flex-col gap-4">
                {/* Title */}
                <div className="flex flex-col gap-2">
                    <label>Title</label>
                    <input type="text" placeholder="Title" className="text-gray-600 border-2 border-black p-1" />
                </div>
                {/* Subtitle */}
                <div className="flex flex-col gap-2">
                    <label>Subtitle</label>
                    <input type="text" placeholder="Subtitle" className="text-gray-600 border-2 border-black p-1" />
                </div>
                {/* Featured image */}
                <div className="flex flex-col gap-2">
                    <label>Featured image</label>
                    <span className="ml-4 text-sm">No Upload</span>
                    <input type="file" id="file" className="hidden" />
                    <label
                        htmlFor="file"
                        className="text-sm inline-block bg-emerald-950 text-white px-4 py-2 rounded cursor-pointer hover:bg-white hover:text-emerald-950 hover:border-1 hover:border-emerald-950"
                    >
                        Choose File
                    </label>
                </div>
                {/* Content */}
                <div className="flex flex-col gap-2">
                    <label>Post</label>
                    <div className="max-w-xl overflow-auto">
                        <SimpleMDE
                            value=""
                            onChange=""
                            options={{
                            spellChecker: false,
                            lineWrapping: true,
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                {/* Category */}
                <div className="flex flex-col gap-2">
                    <label for="category">Category:</label>
                    <select id="category" name="category" className="border-2 p-1">
                        <option value="" hidden>Choose Category</option>
                        <option value="tech">Tech</option>
                        <option value="news">News</option>
                        <option value="sports">Sports</option>
                    </select>
                </div>
                {/* Tags */}
                <div className="flex flex-col gap-2">
                    <label for="category">Tags:</label>
                    <div className="flex flex-row gap-2">
                        <input type="checkbox" value="MMO" />
                        <p>MMO</p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <input type="checkbox" value="Action" />
                        <p>Action</p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <input type="checkbox" value="Adventure" />
                        <p>Adventure</p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <input type="checkbox" value="Virtual Reality" />
                        <p>Virtual Reality</p>
                    </div>
                </div>
                {/* Author */}
                <div className="flex flex-col gap-2">
                    <label for="category">Author:</label>
                    <input type="text" placeholder="mintymantis" className="border-2 p-1"  disabled />
                </div>

                
            </div>
            {/* Button */}
            <div className="flex flex-row gap-2">
                <button type="submit" className="cursor-pointer bg-emerald-950 py-1 px-2 text-white rounded-sm">Save</button>
                <button type="reset" className="cursor-pointer bg-red-600 py-1 px-2 text-white rounded-sm">Cancel</button>
            </div>
                

        </form>
    )
}

export default AddPost;