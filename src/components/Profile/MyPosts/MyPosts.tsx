import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props: any) => {
    return (
        <div className={s.content}>
            <div>
                My Posts
            </div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default MyPosts;