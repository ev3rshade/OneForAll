import Image from "next/image";
import Link from 'next/link'; 

export default function ReflectionTools() {
  return (
    <div className="min-h-screen bg-gray-50 font-[family-name:var(--font-geist-sans)]">
      {/* Navigation Menu */}
      <nav className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white flex justify-between items-center shadow-lg z-10">
        <div className="text-xl font-bold">Reflection Tools</div>
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
        <Link href="/ReflectionTools" className="font-bold">
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

      {/* Encouragement Section - Positioned at the Top */}
      <section className="w-full px-6 py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center rounded-b-xl mb-20 mt-24">  
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">You're Not Alone</h1>
          <p className="text-xl mb-8">Mental health is a journey. It’s okay to take it one step at a time. You are stronger than you think, and there are always resources available to support you.</p>
          <p className="italic mb-8">“It’s okay to not be okay, as long as you are not giving up.”</p>
          <button className="px-8 py-3 bg-yellow-400 text-gray-800 font-semibold rounded-lg hover:bg-yellow-500 transition-all duration-300">
            Reach Out For Support
          </button>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex flex-col items-center px-6">

        {/* Mental Health Information Section */}
        <section className="w-full max-w-6xl px-6 mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Mental Health Information & Strategies</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:border hover:border-pink-500">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Understanding Mental Health</h3>
              <p className="text-gray-600">Mental health is a crucial aspect of our lives, affecting our thoughts, feelings, and behaviors. Learn how maintaining your mental well-being improves your quality of life.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:border hover:border-pink-500">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Coping Strategies</h3>
              <p className="text-gray-600">Explore effective strategies for managing stress and mental health, such as mindfulness, therapy, and physical activity. Take control of your mental health through proactive measures.</p>
              <ul className="list-disc pl-6 text-gray-600 mt-4">
                <li>Mindfulness Meditation</li>
                <li>Exercise and Physical Activity</li>
                <li>Therapy and Counseling</li>
                <li>Relaxation and Stress Reduction</li>
                <li>Creative Expression (Art, Music, Writing)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Progress Tracking Section */}
        <section className="w-full max-w-6xl px-6 mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Mental Health Progress Tracking</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:border hover:border-pink-500">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Daily Mood Tracker</h3>
              <p className="text-gray-600">Track your mood throughout the day to help identify triggers, patterns, and progress. Recognizing small shifts in mood can help you understand your mental state better.</p>
              <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-pink-500 transition-all duration-300">Track My Mood</button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:border hover:border-pink-500">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Weekly Reflection Journal</h3>
              <p className="text-gray-600">Reflect on your week: note what went well, challenges you faced, and areas for improvement. Reflection helps recognize your emotional progress over time.</p>
              <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-pink-500 transition-all duration-300">Start My Journal</button>
            </div>
          </div>
        </section>

        {/* Self-Care & Reflection Tools Section */}
        <section className="w-full max-w-6xl px-6 mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Self-Care and Reflection Tools</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
            <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:border hover:border-pink-500">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Self-Care Checklist</h3>
              <p className="text-gray-600">Engage in regular self-care practices to help maintain a healthy mind. Here's a checklist you can follow to take care of yourself every day.</p>
              <ul className="list-disc pl-6 text-gray-600 mt-4">
                <li>Eat nutritious meals</li>
                <li>Exercise regularly</li>
                <li>Connect with supportive people</li>
                <li>Practice relaxation techniques</li>
                <li>Engage in hobbies or activities you love</li>
              </ul>
              <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-pink-500 transition-all duration-300">Download Self-Care Checklist</button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:border hover:border-pink-500">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Progress Tracker Chart</h3>
              <p className="text-gray-600">Track your mental health progress visually over time. See your growth with a chart tracking your mood, sleep quality, energy levels, and more.</p>
              <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-pink-500 transition-all duration-300">View My Progress</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}