import Link from "next/link";

function Logo() {
  return (
    <div>
      <Link
        href="/"
        className="text-2xl font-semibold uppercase text-indigo-100 md:text-indigo-950 dark:text-indigo-100"
      >
        Ryan Bakker
      </Link>
    </div>
  );
}

export default Logo;
