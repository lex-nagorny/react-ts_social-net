import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";


const Profile = (props: any) => {
    return <div className={s.content}>
        <div>
            <img
                src='https://imgs.search.brave.com/QHpyXRbPKies7I_n2pwhz1DtwjWdlDwKY2y0-tsOWgs/rs:fit:1200:900:1/g:ce/aHR0cHM6Ly9odW1h/bmVuZXJneS5pby93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMC8x/MC9HbG9iYWwtQnJh/aW4uanBn'/>
        </div>
        <div>
            ava+description
        </div>
       <MyPosts/>
    </div>
}

export default Profile;