import Link from "next/link";

// This function fetches static data at build time (SSG)
async function fetchBlogs() {
  // Simulate fetching data from an external source
  const blogs = [
    { id: "1", title: "Blog 1", description: "This is blog 1" },
    { id: "2", title: "Blog 2", description: "This is blog 2" },
  ];

  return blogs;
}

export default async function BlogsPage() {
  const blogs = await fetchBlogs();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center underline">Blogs</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">
                <Link href={`/blogs/${blog.id}`} className="text-blue-600 hover:text-blue-800">
                  {blog.title}
                </Link>
              </h2>
              <p className="text-gray-600">{blog.description}</p>
            </div>
            <div className="p-4 bg-gray-100">
              <Link href={`/blogs/${blog.id}`} className="text-blue-600 font-semibold hover:text-blue-800">
                Read more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
