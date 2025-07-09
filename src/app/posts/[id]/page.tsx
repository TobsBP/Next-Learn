import { Props } from "../page";

export default async function DetailPost({params}: {params: Promise<{id: string}>}) {
    // Page dinamically fetches the post ID from the URL parameters
    
    const { id } = await params;

    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate a delay

    const response = await fetch(`https://dummyjson.com/posts/${id}`,
        {
            cache: "force-cache", // Force cache to use the cached version
            next: {
                revalidate: 60, // Revalidate every 60 seconds
            },
        }
    )
    const data: Props = await response.json();
    
    return (
        <div>
            <h1>Detais from post: {id}</h1>
            <h2>{data.title}</h2>
            <p>{data.body}</p> 
        </div>
    )
}