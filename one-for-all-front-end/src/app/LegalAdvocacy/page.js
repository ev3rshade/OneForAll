import Image from "next/image";
import Link from 'next/link'; 

export default function LegalAdvocacy() {
  return (
    <div className="min-h-screen bg-gray-50 font-[family-name:var(--font-geist-sans)]">
      {/* Navigation Menu */}
      <nav className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white flex justify-between items-center shadow-lg z-10">
        <div className="text-xl font-bold">Legal Advocacy</div>
        <div className="flex gap-6 items-center">
        <Link href="/" className="hover:font-bold">
          Home
        </Link>
        <Link href="/ResourceHub" className="hover:font-bold">
          Resource Hub
        </Link>
        <Link href="/DocumentVault" className="hover:font-bold">
          Document Vault
        </Link>
        <Link href="/LegalAdvocacy" className="font-bold">
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

      {/* Legal Advocacy - Positioned at the Top */}
      <section className="w-full px-6 py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center rounded-b-xl mb-30 mt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">Legal Advocacy for Justice</h1>
          <p className="text-xl mb-4">Whether you’re exploring your options, seeking immediate help, or looking for long-term solutions, this page is your starting point. You are not alone, and there is a path forward. Together, we can empower you to reclaim control, make informed decisions, and connect with resources that will help you find safety and healing.</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex flex-col items-center mt-24 px-6">

        {/* Team Section */}
        <section className="w-full max-w-4xl px-6 mb-16">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Meet Our Advocacy Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Team Members */}
            <div className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:border hover:border-pink-500 transition-all duration-300">
            <div className="h-36 bg-gray-200 rounded-lg mb-6"></div>
              <h3 className="text-xl font-semibold text-gray-800">Jane Doe</h3>
              <p className="text-gray-600">Senior Legal Advocate</p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:border hover:border-pink-500 transition-all duration-300">
            <div className="h-36 bg-gray-200 rounded-lg mb-6"></div>
              <h3 className="text-xl font-semibold text-gray-800">Penelope Smith</h3>
              <p className="text-gray-600">Legal Advisor</p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:border hover:border-pink-500 transition-all duration-300">
            <div className="h-36 bg-gray-200 rounded-lg mb-6"></div>
              <h3 className="text-xl font-semibold text-gray-800">Sarah Lee</h3>
              <p className="text-gray-600">Paralegal</p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="w-full max-w-4xl px-6 mb-16">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Get in Touch with Us
          </h2>
          <form className="bg-white p-8 rounded-xl shadow-md">
            <div className="grid grid-cols-1 gap-4 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-600">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-600">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-600">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="6"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}