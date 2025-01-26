import Image from "next/image";
import Link from 'next/link'; 

export default function EmergencyAndCrisis() {
  return (
    <div className="min-h-screen bg-gray-50 font-[family-name:var(--font-geist-sans)]">
      {/* Navigation Menu */}
      <nav className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white flex justify-between items-center shadow-lg z-10">
        <div className="text-xl font-bold">Emergency and Crisis</div>
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
        <Link href="/LegalAdvocacy" className="hover:font-bold">
          Legal Advocacy
        </Link>
        <Link href="/ReflectionTools" className="hover:font-bold">
          Reflection Tools
        </Link>
        <Link href="/EmergencyAndCrisis" className="font-bold">
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

      <section className="w-full px-6 py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center rounded-b-xl mb-20 mt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Emergency & Crisis Hotlines</h1>
          <p className="text-xl mb-8">In moments of crisis, knowing where to turn is crucial. Our Emergency Hotline provides immediate, confidential support to help you navigate through challenging situations, offering a lifeline to those in urgent need of assistance.</p>
          <p className="italic mb-8">“You don’t have to face it alone – help is just a call away.”</p>
          <button className="px-8 py-3 bg-yellow-400 text-gray-800 font-semibold rounded-lg hover:bg-yellow-500 transition-all duration-300">
            Call for Emergency Support
          </button>
          </div>
      </section>

      <main className="flex flex-col items-center mt-24 px-6">
        {/* Emergency Tools Section */}
        <section className="w-full max-w-6xl px-6 mb-16">

          <div className="space-y-8">
            {/* Hotline Cards */}
            <div className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:border hover:border-pink-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">National Suicide Prevention Lifeline</h3>
              <p className="text-xl text-gray-600">Call: <a href="tel:8002738255" className="text-blue-600 hover:underline">1-800-273-TALK (8255)</a> or call <a href="tel:8002738255" className="text-blue-600 hover:underline">988</a></p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:border hover:border-pink-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Crisis Text Line</h3>
              <p className="text-xl text-gray-600">Text: <a href="sms:741741" className="text-blue-600 hover:underline">741741</a> for free, 24/7 support</p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:border hover:border-pink-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Domestic Violence Hotline</h3>
              <p className="text-xl text-gray-600">Call: <a href="tel:18007997233" className="text-blue-600 hover:underline">1-800-799-SAFE (7233)</a></p>
            </div>
            

            <div className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:border hover:border-pink-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">National Human Trafficking Hotline</h3>
              <p className="text-xl text-gray-600">Call: <a href="tel:8883737888" className="text-blue-600 hover:underline">1-888-373-7888</a></p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:border hover:border-pink-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">National Eating Disorders Association (NEDA) Helpline</h3>
              <p className="text-xl text-gray-600">Call: <a href="tel:8009312237" className="text-blue-600 hover:underline">1-800-931-2237</a></p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:border hover:border-pink-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">National Helpline for Substance Abuse</h3>
              <p className="text-xl text-gray-600">Call: <a href="tel:8006624357" className="text-blue-600 hover:underline">1-800-662-HELP (4357)</a></p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:border hover:border-pink-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">LGBTQ+ Crisis Hotline</h3>
              <p className="text-xl text-gray-600">Call: <a href="tel:8888434564" className="text-blue-600 hover:underline">1-888-843-4564</a></p>
            </div>

            <div className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:border hover:border-pink-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Veterans Crisis Line</h3>
              <p className="text-xl text-gray-600">Call: <a href="tel:8002738255" className="text-blue-600 hover:underline">1-800-273-TALK (8255)</a> or text: <a href="sms:838255" className="text-blue-600 hover:underline">838255</a></p>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}