import Image from "next/image";
import Link from 'next/link'; 

export default function ResourceHub() {
  return (
    <div className="min-h-screen bg-gray-50 font-[family-name:var(--font-geist-sans)]">
      {/* Navigation Menu */}
      <nav className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white flex justify-between items-center shadow-lg z-10">
        <div className="text-xl font-bold">Resource Hub</div>
        <div className="flex gap-6 items-center">
        <Link href="/" className="hover:font-bold">
          Home
        </Link>
        <Link href="/ResourceHub" className="font-bold">
          Resource Hub
        </Link>
        <Link href="/DocumentVault" className="hover:font-bold">
          Document Vault
        </Link>
        <Link href="/LegalAdvocacy" className="hover:font-bold">
          Legal Advocacy
        </Link>
        <Link href="/ReflectionTools" className="hover:font-bold">
          Reflection Tools
        </Link>
        <Link href="/EmergencyAndCrisis" className="hover:font-bold">
          Emergency and Crisis
        </Link>
        <Link href="/login" className="">
        <Image
          className="dark:invert"
          src="/iconLogin.png"
          alt="Next.js logo"
          width={50}
          height={8}
          priority
        />
        </Link>
        </div>
      </nav>

      
    </div>
  );
}