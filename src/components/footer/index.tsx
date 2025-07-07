import style from "./style.module.css";

export function Footer() {
  return (
    <footer className={style.container}>
      <div className="container mx-auto text-center">
        <p className="text-sm">© 2023 My App. All rights reserved.</p>
        <p className="text-xs mt-2">Built with Next.js and Tailwind CSS</p>
      </div>
    </footer>
  );
}