import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <p>
        Page Not Found!{" "}
        <Link
          className="text-blue-800 hover:text-blue-900 text-base"
          href={"/"}
        >
          Back Home
        </Link>
      </p>
    </div>
  );
}
