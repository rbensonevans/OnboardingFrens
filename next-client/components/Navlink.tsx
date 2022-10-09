import Link from "next/link";

export function NavLink({ href, children }: any) {
  return (
    <Link href={href}>
      <p className="inline-block rounded-lg py-1 px-2 text-sm text-gray-700 hover:bg-slate-100 hover:text-gray-900">
        {children}
      </p>
    </Link>
  );
}
