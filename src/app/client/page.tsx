'use client';

import { useEffect, useState } from "react";

export default function Client() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data.posts))
        }, []);

    return (
        <div className="container mx-auto p-4">
            <button className="border-1 rounded-2xl bg-black text-white hover:bg-gray-800" onClick={()=> alert("Teste!!")} type="submit">
                <span className="text-2xl font-bold m-3">Submit</span>
            </button>

            <h1 className="text-2xl font-bold mb-4 ml-5">Posts</h1>
            <ul className="list-disc pl-5" >
                {posts.map((post: any) => (
                    <div className="mb-4 p-4 border rounded bg-amber-200" key={post.id}>
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                        <p className="text-justify">{post.body}</p>
                    </div>
                ))}
            </ul>
      
        </div>
    );
}