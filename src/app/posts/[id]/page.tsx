import { Props } from "../page";

export default async function DetailPost({params}: {params: Promise<{id: string}>}) {
    // Page dinamically fetches the post ID from the URL parameters
    
    const { id } = await params;

    const response = await fetch(`https://dummyjson.com/posts/${id}`)
    const data: Props = await response.json();
    
    return (
        <div>
            <h1>Detais from post: {id}</h1>
            <h2>{data.title}</h2>
            <p>{data.body}</p> 
        </div>
    )
}