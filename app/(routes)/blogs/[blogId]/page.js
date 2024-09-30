import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/_firebase/firebase";

async function fetchBlog(id) {
  const blogRef = doc(db, "blogs", id);
  const blogSnap = await getDoc(blogRef);

  if (!blogSnap.exists()) {
    return null;
  }

  return blogSnap.data();
}

export default async function BlogDetails({ params }) {
  const { blogId } = params;
  const blog = await fetchBlog(blogId);

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl font-semibold text-red-500">Blog not found</h2>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">{blog.title}</h1>
          <p className="text-gray-700 leading-relaxed mb-6">{blog.content}</p>
        </div>
      </div>
    </div>
  );
}
