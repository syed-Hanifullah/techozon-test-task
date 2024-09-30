import Link from "next/link";
import "../app/_styles/global.css"

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Blog</h1>
        <Link href="/blogs" className="text-blue-600 underline">
          Go to Blogs
        </Link>
      </div>
    </div>
  );
}
