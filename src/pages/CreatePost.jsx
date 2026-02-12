import{faHeading,FaUser,FaLink,FaCloudUploadAlt,FaTimes,FaRegPaperPlane}from 'react-icons/fa';
import Navbar from '../component/Navbar';
import '.CreatePost.css';
const CreatePost=()=>
{
    return(
        <div className='create-post-page'>
            <Navbar/>
            <div className="create-post-container">
                <header className="form-header">
                    <p>Share your thoughts and stories with the world</p>
                </header>
                <div className="post-form-card">
                    <form>
                        <div className="form-group">
                            <label>post Title</label>
                            <div className="input-wrapper">
                                <FaHeading className="input-icon"/>
                                <input
                                type="text"
                                name="title"
                                className="form-control"
                                placeholder="enter a catchy title"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Author name</label>
                            <div className="input-wrapper">
                                <FaUser className="input-icon"/>
                                <input 
                                 type="text"
                                name="author"
                                className="form-control"
                                placeholder="your name"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea
                            name="description"
                            className="form-control"
                            placeholder="whats on your mind write your story here"></textarea>
                        </div>
                        <div className="form-group">
                            <label>cover Image</label>
                            <div className="image-source-tabs">
                                <button type="button" className="tab-btn active">Image URL</button>
                                <button type="button" className="tab-btn">Upload file</button>
                            </div>
                            <div className="input-wrapper">
                                <FaLink className="input-icon"/>
                                 <input 
                                 type="url"
                                name="imageUrl"
                                className="form-control"
                                placeholder="paste your image url here"/>
                            </div>
                            <div className="image-upload-area">
                                <FaCloudUploadAlt className="upload-icon"/>
                                <p>Click to upload image from your device</p>
                            </div>
                            <div className="image-preview-container">
                                <img
                                src=""
                                alt="preview"
                                className="image-preview"/>
                                <button type="button" className="remove-image-btn">
                                    <FaTimes/>
                                </button>
                            </div>
                        </div>
                        <div className="form-actions-row">
                            <button type="submit" className="submit-btn">
                                <FaRegPaperPlane/>publish Post
                            </button>
                       <button type="button" className="cancel-btn">Clear form</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}