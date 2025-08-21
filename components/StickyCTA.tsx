import Link from "next/link";
export default function StickyCTA(){
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden">
      <div className="mx-auto max-w-screen-md px-4 py-3">
        <div className="rounded-full shadow-lg bg-white border flex items-center justify-between px-4 py-2">
          <span className="text-sm font-medium">Ready to see it live?</span>
          <Link href="/#contact" className="btn btn-primary btn-sm">Book a demo</Link>
        </div>
      </div>
    </div>
  );
}