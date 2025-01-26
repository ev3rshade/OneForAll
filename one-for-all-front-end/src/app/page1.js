import Image from "next/image";
import Link from 'next/link';

export default function ResourceHub() {
    return (
        <div className="min-h-screen bg-gray-50 font-[family-name:var(--font-geist-sans)]">
        {/* Navigation Menu */}
        <nav className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white flex justify-between items-center shadow-lg z-10">
        <div className="text-xl font-bold">Home</div>
        <div className="flex gap-6 items-center">
        <Link href="/" className="font-bold">
            Home
        </Link>
        <Link href="/ResourceHub" className="hover:font-bold">
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

        <main className="flex flex-col gap-0 row-start-2 items-center mt-40">
        <main className="flex flex-col gap-2 row-start-4 items-center">
        <Image
            className="dark:invert"
            src="/womenFinal.png"
            alt="Next.js logo"
            width={350}
            height={350}
            priority
        />        
        </main>


        <main className="bg-gray-50 min-h-screen px-4 py-12 flex flex-col items-center">
        {/* Hero Section */}
        <section className="text-center max-w-4xl">
            <h1 className="text-5xl font-bold text-pink-600 mb-4">
            You Are Not Alone
            </h1>
            <p className="text-gray-700 text-lg mb-6">
            We provide a safe space, resources, and guidance for women in abusive households. 
            No matter where you are in your journey, we’re here to help you take the next step.
            </p>
            <Link href="/EmergencyAndCrisis">
            <button className="bg-pink-600 text-white py-3 px-6 rounded-lg shadow hover:bg-pink-700 transition-all">
                Get Immediate Help
            </button>
            </Link>
        </section>

        {/* Resources Section */}
        <section className="mt-16 max-w-5xl w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Explore Our Support Tools
        </h2>
  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:border hover:border-pink-500">
      <h3 className="text-xl font-semibold text-pink-600 mb-4">Legal Advocacy</h3>
      <p className="text-gray-600 mb-4">
        Learn about your legal rights, access legal assistance, and take steps to ensure your safety.
      </p>
      <Link href="/LegalAdvocacy" className="text-pink-500 hover:underline">
        Learn More
      </Link>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:border hover:border-pink-500">
      <h3 className="text-xl font-semibold text-pink-600 mb-4">Emergency Contacts</h3>
      <p className="text-gray-600 mb-4">
        Access 24/7 hotlines, shelters, and resources to find immediate support.
      </p>
      <Link href="/EmergencyAndCrisis" className="text-pink-500 hover:underline">
        View Resources
      </Link>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:border hover:border-pink-500">
      <h3 className="text-xl font-semibold text-pink-600 mb-4">Reflection Tools</h3>
      <p className="text-gray-600 mb-4">
        Empower yourself by exploring self-reflection exercises to identify and process your situation.
      </p>
      <Link href="/ReflectionTools" className="text-pink-500 hover:underline">
        Explore Tools
      </Link>
    </div>
  </div>
</section>

{/* Inspirational Quote */}
<section className="mt-16 text-center max-w-4xl">
  <blockquote className="text-xl italic text-gray-700">
    “The strongest people are not those who show strength in front of us, but those who win battles we know nothing about.”
  </blockquote>
  <p className="mt-4 text-pink-600 font-bold">– Anonymous</p>
</section>
</main>
</main>
</div>
);
}