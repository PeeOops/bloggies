import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useCallback, useEffect, useMemo, useState } from "react";
import Navigation from "../Navigation";
import TopBackground from "../../assets/images/background.jpg"
import { useParams } from "react-router-dom";
import api from "../../axios";
import ModalMessage from "../Utils/ModalMessage";


const EditPost = () => {

    // State declarations
    const {id} = useParams();
    const [postData, setPostData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [message, setMessage] = useState("");
    const [tags, setTags] = useState([]);
    const [form, setForm] = useState({
        "title" : "",
        "subtitle" : "",
        "featured_image" : null,
        "body" : "",
        "category_id" : null,
        "tag_ids" : [],
        "type" : ""
    })

    // Fetch current post data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [postAPI, categoriesAPI, tagsAPI] = await Promise.all([
                    api.get(`/post/${id}`),
                    api.get(`/categories`),
                    api.get(`/tags`)
                ])
                const post = postAPI.data.post;
                setPostData(post);
                setCategories(categoriesAPI.data);
                setTags(tagsAPI.data);
                setForm({
                    title: post.title,
                    subtitle: post.subtitle,
                    featured_image: post.featured_image_url,
                    body: post.body,
                    category_id: post.category_id,
                    tag_ids: post.tags.map((tag) => tag.id),
                    type: post.type,
                });


            } catch (error) {
                
            }
        }

        fetchData();
    },[id])

    // Handle change form
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

    // Submit edit form
    const handleClickSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();

            formData.append("_method", "PATCH");
            formData.append("title", form.title);
            formData.append("subtitle", form.subtitle);
            formData.append("body", form.body);
            formData.append("type", form.type);
            formData.append("category_id", form.category_id);

            // Append tags array properly
            form.tag_ids.forEach((tagId, index) => {
                formData.append(`tag_ids[${index}]`, tagId);
            });


            if (form.featured_image && typeof form.featured_image !== 'string') {
                formData.append("featured_image", form.featured_image);
            }

            const response = await api.post(`/post/${id}/update`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            setMessage("Post updated successfully");

        } catch (error) {
            console.log("Fetch data failed", error);
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
            {
                message && <ModalMessage message={message} setMessage={setMessage} />
            }

            {/* Header */}
            <div className="relative overflow-hidden">

                {/* Background Image with Opacity */}
                <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-90 z-[-1]"
                style={{ backgroundImage: `url(${TopBackground})` }}
                ></div>

                {/* Navigation Component */}
                <Navigation />

            </div>

            <div className="flex flex-col gap-4 bg-emerald-950 py-8 px-4 md:px-24">
                <div className="bg-white text-emerald-950 px-4 py-2 shadow-gray-400 shadow-md">
                    <h1 className="text-xl mb-6">Edit Post</h1>
                    {/* Add post form */}
                    <form onSubmit={handleClickSubmit} className="flex flex-col md:grid md:grid-cols-[3fr_1fr] gap-4">
                        <div className="flex flex-col gap-4">
                            {/* Title */}
                            <div className="flex flex-col gap-2">
                                <label>Title</label>    
                                <input name="title" type="text" placeholder="Title" className="text-gray-600 border-2 border-black p-1" onChange={handleChangeForm} value={form.title} required />
                            </div>
                            {/* Subtitle */}
                            <div className="flex flex-col gap-2">
                                <label>Subtitle</label>
                                <input name="subtitle" type="text" placeholder="Subtitle" onChange={handleChangeForm} value={form.subtitle} className="text-gray-600 border-2 border-black p-1"  />
                            </div>
                            {/* Featured image */}
                            <div className="flex flex-col gap-2">
                                <label>Featured image</label>
                                <div className="flex flex-row gap-2 items-center">
                                    {
                                        form.featured_image ? (
                                            typeof form.featured_image === "string" ? (
                                            <span className="text-sm">
                                                File: <span className="text-sm">{form.featured_image}</span>
                                            </span>
                                            ) : (
                                            <span className="text-sm">
                                                File: <span className="text-sm">{form.featured_image.name}</span>
                                            </span>
                                            )
                                        ) : (
                                            <span className="text-sm">No Upload</span>
                                        )
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
                                <div className="max-w-full overflow-auto">
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
                                <select id="category" name="category_id" value={form.category_id || ""} onChange={handleChangeForm} className="border-2 p-1">
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
                                <select name="type" id="type" value={form.type || ""} onChange={handleChangeForm} className="border-2 p-1">
                                    <option value="" hidden>Choose Type</option>
                                    <option value="News">News</option>
                                    <option value="Blog">Blog</option>
                                </select>
                            </div>
                            {/* Tags */}
                            <div className="flex flex-col gap-2">
                                <label>Tags:</label>
                                {tags.map(tag => (
                                    <div key={tag.id} className="flex flex-row gap-2">
                                    <input
                                        id={`tag-${tag.id}`}
                                        type="checkbox"
                                        name="tag_ids"
                                        value={tag.id}
                                        checked={form.tag_ids.includes(tag.id)}
                                        onChange={handleChangeForm}
                                    />
                                    <label htmlFor={`tag-${tag.id}`}>{tag.name}</label>
                                    </div>
                                ))}
                            </div>
                            
                        </div>
                        {/* Button */}
                        <div className="flex flex-row gap-2">
                            <button type="submit" className="cursor-pointer bg-emerald-950 py-1 px-2 text-white rounded-sm">Save</button>
                            <button type="reset" className="cursor-pointer bg-red-600 py-1 px-2 text-white rounded-sm">Cancel</button>
                        </div>
                            

                    </form>
                </div>
            </div>

        </>
        
    )
}

export default EditPost;