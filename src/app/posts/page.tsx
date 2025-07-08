interface Props {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface Response {
    posts: Props[];
}

// Server components
export default async function Posts() {
    const response = await fetch("https://dummyjson.com/posts")
    const data: Response = await response.json();

    return(
        <div className="mr-2 ml-2">
            <h1 className="text-center mt-5 mb-2 font-bold text-3xl">Posts</h1>
            <ul className="space-y-4">
                {data.posts.map((post) => (
                    <li key={post.id} className="p-4 border rounded-lg">
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                        <p className="text-gray-700">{post.body}</p>
                        <p className="text-sm text-gray-500">User ID: {post.userId}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}