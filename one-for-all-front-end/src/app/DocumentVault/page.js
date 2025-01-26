import Image from "next/image";
import Link from 'next/link'; 

export default function DocumentVault() {
  return (
    <div className="min-h-screen bg-gray-50 font-[family-name:var(--font-geist-sans)]">
      {/* Navigation Menu */}
      <nav className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white flex justify-between items-center shadow-lg z-10">
        <div className="text-xl font-bold">Document Vault</div>
        <div className="flex gap-6 items-center">
        <Link href="/" className="hover:font-bold">
          Home
        </Link>
        <Link href="/ResourceHub" className="hover:font-bold">
          Resource Hub
        </Link>
        <Link href="/DocumentVault" className="font-bold">
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

      {/* Document Vault Section - Positioned at the Top */}
      <section className="w-full px-6 py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center rounded-b-xl mb-20 mt-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Your Safe Space for Important Documents</h1>
          <p className="text-xl mb-1">
            The Document Vault is designed to keep all of your essential files, records, and forms securely stored in one convenient location.
            Whether it’s legal documents, health information, or personal files, this vault ensures your important materials are organized, accessible, and protected.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex flex-col items-center mt-12 px-6">
        {/* Document 1 Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="w-60 text-center bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:border hover:border-pink-500">
            <div className="h-36 bg-gray-200 rounded-lg mb-6"></div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Passport</h3>
            <p className="text-gray-600 mb-4">File Type: PDF</p>
            <Link href="/document-1" className="text-blue-600 mt-4 inline-block hover:underline">
              View Document
            </Link>
          </div>
        

        {/* Document 2 Section */}
          <div className="w-60 text-center bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:border hover:border-pink-500">
            <div className="h-36 bg-gray-200 rounded-lg mb-6"></div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Resume</h3>
            <p className="text-gray-600 mb-4">File Type: Word</p>
            <Link href="/document-2" className="text-blue-600 mt-4 inline-block hover:underline">
              View Document
            </Link>
          </div>

        {/* Document 3 Section */}
          <div className="w-60 text-center bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:border hover:border-pink-500">
            <div className="h-36 bg-gray-200 rounded-lg mb-6"></div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Finances</h3>
            <p className="text-gray-600 mb-4">File Type: Excel</p>
            <Link href="/document-3" className="text-blue-600 mt-4 inline-block hover:underline">
              View Document
            </Link>
          </div>
        </section>

        {/* Upload Button Section */}
        <section className="w-full max-w-4xl px-6 mt-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-10">
              Upload a Document
            </h2>
            <p className="text-gray-600 mb-8">
              Upload your document to the vault by selecting a file from your computer.
            </p>
            {/* File Upload Section with Outline */}
            <div className="p-8 border-2 border-gray-300 rounded-lg shadow-md">
              <input
                type="file"
                className="file:border file:border-blue-500 file:bg-blue-500 file:text-white file:px-6 file:py-3 rounded-md cursor-pointer"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
