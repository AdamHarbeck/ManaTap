import React, {useEffect, useState} from "react";

// Forum topics will load from local storage.
const Forum = () => {
    const [forum, setForum] = useState({
        posts: [{title: `First Post`, text: `This is the first post`}, {title: `Second Post`, text: `This is the second post`}]
    });
    const futurePost = {title: `newPost`, text: `This is the newest post`}


    function addPost(){
        setForum({
            posts: [...forum.posts, futurePost]
        });
        console.log(forum.posts);
    }


    return(
        <div styles={styles.container} id={`forumDiv`}>
            <h1>Forum</h1>
            <h2>{forum.posts[1].title}</h2>
            <p>{forum.posts[1].text}</p>
            <button onClick={addPost}>New Post</button>
        </div>
    )
}
export default Forum;

const styles = {
    container:{

    }
}