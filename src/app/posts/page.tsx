import { Button } from "@/components/button";
import Link from "next/link";

export interface Props {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface Response {
    posts: Props[];
}

export const revalidate = 60; // Revalidate every 60 seconds

// Server components
export default async function Posts() {
    const response = await fetch("https://dummyjson.com/posts")
    const data: Response = await response.json();

    // Server action
    async function handlePost() {
        'use server'

        const response = await fetch("https://dummyjson.com/posts")
        const data: Response = await response.json();

        console.log(data.posts);
    }
    
    // Server action with form in a API
    async function handleSearch(formData: FormData) {
        'use server'

        const userId = formData.get("userId");

        const response = await fetch(`https://dummyjson.com/posts/user/${userId}`)
        const data: Response = await response.json();

        console.log(data);
    }

    return(
        <div className="mr-2 ml-2">
            {/* Client action */}
            <Button />

            <br />

            {/* Server action */}
            <button onClick={handlePost} type="submit">
                <span>By server</span>
            </button>

            <br />

            {/* Form is from client but we called user server in the fuction */}
            <form action={handleSearch} className="flex gap-4 my-4">
                <input name="userId" placeholder="Your search" type="text" className="border border-amber-100 p-2" />
                <button className="bg-blue-500 text-white p-2" type="submit">Search</button>
            </form>

            <h1 className="text-center mt-5 mb-2 font-bold text-3xl">Posts</h1>
            <ul className="space-y-4">
                {data.posts.map((post) => (
                    <li key={post.id} className="p-4 border rounded-lg">
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                        <p className="text-gray-700">{post.body}</p>
                        <p className="text-sm text-gray-500">User ID: {post.userId}</p>
                        <Link href={`/posts/${post.id}`} className="text-blue-500 hover:underline">
                            Show details
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}