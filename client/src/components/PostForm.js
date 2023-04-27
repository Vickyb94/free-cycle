import React from 'react';

const PostForm = () => {
  return (
    <div>
      <h3>Do you want to give out something?</h3>
      <form className="flex-row justify-center justify-space-between-md align-center">
        <div className="col-12 col-lg-9">
          <textarea
            name="postText"
            placeholder="Here is an item I want to give out..."
            value="postText"  className="form-input w-100">
          </textarea>
          <textarea
            name="uploadImage"
            placeholder="Here is an item I want to give out..."
            value="uploadImage"
            className="form-input w-100">
          </textarea>
          <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Post
              </button>
            </div>
        </div>
      </form>
    </div>
  )
}

export default PostForm;