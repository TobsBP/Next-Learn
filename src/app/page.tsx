import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home Page",
  icons: "/new_icon.svg",
  description: "This is the home page of my Next.js application."
}

export default async function Home() {
  return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>
    <p className="text-lg text-gray-700">This is a simple Next.js application.</p>
  </div> 
  );
}
