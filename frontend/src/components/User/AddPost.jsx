import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useCallback, useEffect, useMemo, useState } from "react";
import api from "../../axios";
import ModalMessage from "../Utils/ModalMessage";

const AddPost = ({userData}) => {

    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);
    const [form, setForm] = useState({
        "title" : "",
        "subtitle" : "",
        "featured_image" : null,
        "body" : "",
        "category_id" : null,
        "tag_ids" : [],
        "type" : "",
        "author_id" : userData.id
        
    })
    const [message, setMessage] = useState("");

    useEffect(() => {
        // Fetch categories
        const fetchCategories = async () => {
            try {
                const response = await api.get("/categories");
                setCategories(response.data);
            } catch (error) {
                console.log("Error fetching categories", error);
            }
        }

        // Fetch tags
        const fetchTags = async () => {
            try {
                const response = await api.get("/tags");
                setTags(response.data);
            } catch (error) {
                console.log("Error fetching tags", error);
            }
        }

        fetchCategories();
        fetchTags();
    },[])


    // Handle form change
    const handleChangeForm = (e) => {
        if(e.target.type === "file"){
            setForm({
                ...form,
                [e.target.name] : e.target.files[0]
            })
        }else if (e.target.type === "checkbox" && e.target.name === "tag_ids") {
            const tagId = parseInt(e.target.value); // convert string to number

            setForm((prevForm) => ({
            ...prevForm,
            tag_ids: e.target.checked
                ? [...prevForm.tag_ids, tagId]
                : prevForm.tag_ids.filter((id) => id !== tagId)
            }));
        }else{
            setForm({
                ...form,
                [e.target.name] : e.target.value
            })
        }
        
    }

    // Submit form
    const handleClickSubmit = async (e) => {
        e.preventDefault();

        if (!form.body.trim()) {
            setMessage("Post content is required!");
        }

        
        try {
            const formData = new FormData();

            formData.append("title", form.title);
            formData.append("subtitle", form.subtitle);
            formData.append("body", form.body);
            formData.append("type", form.type);
            formData.append("category_id", form.category_id);
            formData.append("author_id", form.author_id);

            // Append tags array properly
            form.tag_ids.forEach(tagId => formData.append("tag_ids[]", tagId));

            if (form.featured_image) {
            formData.append("featured_image", form.featured_image);
            }

            const response = await api.post("/post/store", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            });

            setMessage("Post added successfully");
        } catch (error) {
            console.error("Post data failed", error);
        }


    }

    // SimpleMDE markdown configuration
    const handleMarkdownChange = useCallback((value) => {
        setForm(prev => ({ ...prev, body: value }));
    }, []);

    const simpleMdeOptions = useMemo(() => ({
        spellChecker: false,
        lineWrapping: true,
    }), []);

    return(
        <>
            {/* Modal message */}
            {
                message ?
                <ModalMessage message={message} setMessage={setMessage}/> : ""
            }

            {/* Add post form */}
            <form onSubmit={handleClickSubmit} className="flex flex-col md:grid md:grid-cols-[3fr_1fr] gap-4">
                <div className="flex flex-col gap-4">
                    {/* Title */}
                    <div className="flex flex-col gap-2">
                        <label>Title</label>
                        <input name="title" type="text" placeholder="Title" value={form.title} onChange={handleChangeForm} className="text-gray-600 border-2 border-black p-1" required />
                    </div>
                    {/* Subtitle */}
                    <div className="flex flex-col gap-2">
                        <label>Subtitle</label>
                        <input name="subtitle" type="text" value={form.subtitle} onChange={handleChangeForm} placeholder="Subtitle" className="text-gray-600 border-2 border-black p-1"  />
                    </div>
                    {/* Featured image */}
                    <div className="flex flex-col gap-2">
                        <label>Featured image</label>
                        <div className="flex flex-row gap-2 items-center">
                            {
                                form.featured_image ? <span className="text-sm">File: <span className="text-sm">{form.featured_image.name}</span></span> : <span className="text-sm">No Upload</span>
                            }
                            
                        </div>    
                        <input name="featured_image" type="file" onChange={handleChangeForm} id="file" className="hidden" />
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
                                value={form.body}
                                onChange={handleMarkdownChange}
                                options={simpleMdeOptions}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    {/* Category */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="category">Category:</label>
                        <select id="category" name="category_id" onChange={handleChangeForm} className="border-2 p-1">
                            <option value="" hidden>Choose Category</option>
                            {
                                categories.map((category) => (
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    {/* Type : News or Blog */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="type">Type:</label>
                        <select name="type" id="type" onChange={handleChangeForm} className="border-2 p-1">
                            <option value="" hidden>Choose Type</option>
                            <option value="News">News</option>
                            <option value="Blog">Blog</option>
                        </select>
                    </div>
                    {/* Tags */}
                    <div className="flex flex-col gap-2">
                        <label>Tags:</label>
                        {
                            tags.map((tag) => (
                                <div key={tag.id} className="flex flex-row gap-2">
                                    <input id={`tag-${tag.id}`} name="tag_ids" type="checkbox" value={tag.id}
                                    checked={form.tag_ids.includes(tag.id)}
                                    onChange={handleChangeForm} />
                                    <label htmlFor={`tag-${tag.id}`}>{tag.name}</label>
                                </div>
                            ))
                        }
                        
                    </div>
                    {/* Author */}
                    <div className="flex flex-col gap-2">
                        <label for="category">Author:</label>
                        <input type="text" value={userData.username} className="border-2 p-1"  disabled />
                    </div>

                    
                </div>
                {/* Button */}
                <div className="flex flex-row gap-2">
                    <button type="submit" className="cursor-pointer bg-emerald-950 py-1 px-2 text-white rounded-sm">Save</button>
                    <button type="reset" className="cursor-pointer bg-red-600 py-1 px-2 text-white rounded-sm">Cancel</button>
                </div>
                    

            </form>
        </>
        
    )
}

export default AddPost;