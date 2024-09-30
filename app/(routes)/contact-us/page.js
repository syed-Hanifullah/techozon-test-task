import Link from "next/link";

export default async function ContactUsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <Link href={`/blogs`} className="text-blue-600 underline">
        View Blogs
      </Link>
    </div>
  );
}
