import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100 text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4 relative">
          {/* Left: Logo */}
          <div className="flex items-center">
            
           <Link href="https://www.technexuscommunity.com/" target="_blank">
  <Image
    src="/technexus_logo.png"
    alt="TechNexus Logo"
    width={200}
    height={100}
    className="object-contain drop-shadow-sm"
  />
</Link>
          </div>

          {/* Center: Title */}
          <h1 className="absolute left-1/2 -translate-x-1/2 text-xl md:text-2xl font-extrabold text-indigo-700 tracking-wide whitespace-nowrap after:content-[''] after:block after:h-1 after:w-16 after:mx-auto after:mt-1 after:bg-gradient-to-r after:from-indigo-500 after:to-pink-500 after:rounded-full">
            TechNexus: Skill-Up India
          </h1>

          {/* Right: Nav */}
          <nav>
            <Link
              href="#terms"
              className="px-4 py-2 rounded-lg text-indigo-600 hover:bg-indigo-100 hover:text-indigo-800 transition font-medium"
            >
              Terms
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 md:px-12 py-24 bg-gradient-to-b from-white to-indigo-50 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" />

        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 drop-shadow-sm">
          Upskill with Microsoft Azure & AI
        </h2>
        <p className="mt-6 text-lg md:text-xl max-w-2xl text-gray-600 leading-relaxed">
          Join{" "}
          <span className="font-semibold text-indigo-600">live expert-led sessions</span> and earn{" "}
          <span className="font-semibold text-pink-600">
            50% discounted Microsoft Certification vouchers
          </span>
          . Limited seats available.
        </p>
      </section>

      {/* Terms Section */}
      <section id="terms" className="px-6 md:px-12 py-16 bg-white shadow-inner rounded-t-3xl">
        <h3 className="text-3xl md:text-4xl font-extrabold text-center text-indigo-700 mb-12">
          Program Terms & Conditions
        </h3>
        <div className="max-w-3xl mx-auto text-gray-700 leading-relaxed space-y-6">
          {[
            {
              title: "1. Program Purpose",
              text: "TechNexus: Skill-Up India is a community-driven initiative designed to upskill students and professionals with Microsoft Azure Fundamentals (AZ-900) and AI Fundamentals (AI-900) through expert-led, live sessions. The program offers an exclusive opportunity for eligible participants to access 50% discounted Microsoft certification vouchers. The program itself is completely free and community-led."
            },
            {
              title: "2. Eligibility Criteria",
              text: "• Must attend all live sessions (no recordings shared).\n• Vouchers are for individuals needing financial assistance.\n• Must show genuine interest in learning Cloud & AI.\n• Only one registration per individual allowed."
            },
            {
              title: "3. Registration & Selection",
              text: "Completing the registration form does not guarantee admission. Seats will be confirmed via email for eligible participants."
            },
            {
              title: "4. Attendance & Voucher Eligibility",
              text: "• 100% attendance required.\n• Active engagement tracked via roll calls, quizzes, and activities.\n• 200 discounted vouchers available, awarded only to active learners."
            },
            {
              title: "5. Code of Conduct",
              text: "Respect peers and speakers. Misconduct will lead to removal."
            },
            {
              title: "6. Disclaimer",
              text: "Participation does not guarantee jobs or internships."
            }
          ].map((item, idx) => (
            <p
              key={idx}
              className="border-l-4 border-indigo-500 pl-4 py-3 bg-indigo-50/50 rounded-md shadow-sm"
            >
              <strong>{item.title}</strong>
              <br />
              {item.text}
            </p>
          ))}

          <p className="text-2xl font-bold text-center text-indigo-800 mt-8">
            ⚠️ By registering, you confirm that you have read and agree to these
            terms & conditions.
          </p>

          <div className="flex justify-center">
            <Link
              href="/register"
              className="mt-10 px-10 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                         text-white rounded-2xl text-lg font-semibold shadow-lg 
                         hover:scale-110 hover:shadow-2xl transition-transform duration-300 animate-pulse"
            >
              🚀 Register Now
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-500 bg-gradient-to-t from-indigo-50 to-white">
        
      </footer>
    </main>
  );
}
