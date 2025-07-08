export function Nav() {
  return (
    <nav className="flex items-center justify-between p-4 bg-black text-white">
      <div className="text-lg font-bold">MyApp</div>
      <ul className="flex space-x-4">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/posts" className="hover:underline">Posts</a></li>
        <li><a href="/client" className="hover:underline">Client</a></li>
        <li><a href="/contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
}