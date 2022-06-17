import React from "react";
import s from "./Post.module.css";


const Post = (props: any) => {
    return <div className={s.item}>
        <img
            src='https://imgs.search.brave.com/qGrl1Mvzos8Ls0NsWGMC4zFkAlOMhJR5GMu3f5CVWAs/rs:fit:1000:1000:1/g:ce/aHR0cDovL3d3dy5h/dGxhbnRhY3V0bGVy/eS5jb20vaW1hZ2Vz/L1Byb2R1Y3QvbGFy/Z2Uvb3RoZXItd2Vh/cG9ucy1hY2Nlc3Nv/cmllc19oZWxtZXQt/b2YtZ3JlZWNlXzM2/ODcuanBn'/>
        post_1
        <div>
            <span>like</span>
        </div>

    </div>
}

export default Post;