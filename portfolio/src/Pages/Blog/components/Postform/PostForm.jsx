import React from "react";
import './PostForm.css'
const PostForm = ({ formData, handleChange, handleSubmit }) => {
    return (
        <section>
            <form onSubmit={handleSubmit} className="project-PostForm">
                <div>
                    <div className="project-form-group">
                        <label>Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            placeholder="Title of your blog"
                        />
                    </div>
                    <div className="project-form-group">
                        <label>Summary:</label>
                        <input
                            type="text"
                            name="summary"
                            value={formData.summary}
                            onChange={handleChange}
                            minLength={100}
                            maxLength={150}
                            required
                            placeholder="Summary of your blog"
                        />
                    </div>
                    <div className="project-form-group">
                        <label>Content:</label>
                        <textarea
                            name="content"
                            value={formData.content}
                            onChange={handleChange}
                            required
                            placeholder="Describe.."
                            minLength={300}
                        />
                    </div>
                    <div className="subbtn"><button type="submit">Submit</button></div>
                </div>
            </form>
        </section>
    );
};

export default PostForm;