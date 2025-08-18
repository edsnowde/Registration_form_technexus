"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function RegisterPage() {
  const [role, setRole] = useState("");
  const [certAttempted, setCertAttempted] = useState("No");
  const [cloudExposure, setCloudExposure] = useState("No");
  const [sponsor, setSponsor] = useState("No");

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100 text-gray-800">
      {/* Header */}
      {/* Header */}
<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-md">
  <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
    
    {/* Logo on left with link to Home */}
    <Link href="/" className="flex-shrink-0">
      <Image
        src="/technexus_logo.png"
        alt="TechNexus Logo"
        width={200}
        height={150}
        className="object-contain drop-shadow-sm cursor-pointer"
      />
    </Link>

    {/* Title in center */}
    <h1 className="text-xl md:text-2xl font-extrabold text-indigo-700 tracking-wide text-center flex-1">
      TechNexus: Skill-Up India Registration
    </h1>

    {/* Empty div for spacing so title stays centered */}
    <div className="w-[160px]"></div>
  </div>
</header>


      {/* Form Section */}
      <section className="px-6 py-12 md:px-12">
        <form className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg space-y-6">
          {/* Full Name */}
          <div>
            <label className="block font-semibold mb-1">Full Name *</label>
            <input
              type="text"
              required
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold mb-1">Email Address *</label>
            <input
              type="email"
              required
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block font-semibold mb-1">
              Phone Number (WhatsApp preferred) *
            </label>
            <input
              type="tel"
              required
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* City & State */}
          <div>
            <label className="block font-semibold mb-1">City & State *</label>
            <input
              type="text"
              required
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* LinkedIn */}
          <div>
            <label className="block font-semibold mb-1">
              LinkedIn Profile URL *
            </label>
            <input
              type="url"
              required
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Occupation */}
          <div>
            <label className="block font-semibold mb-1">Occupation/Role *</label>
            <select
              required
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select...</option>
              <option>Student</option>
              <option>Working Professional</option>
              <option>Job Seeker</option>
              <option>Other</option>
            </select>

            {/* Conditional Fields */}
            {role === "Student" && (
              <div className="mt-3 space-y-3">
                <input
                  type="text"
                  placeholder="Degree Name (e.g., B.Tech, B.Sc)"
                  required
                  className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="text"
                  placeholder="Branch (e.g., CSE, ECE)"
                  required
                  className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="text"
                  placeholder="Year of Study (e.g., 3rd Year)"
                  required
                  className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            )}

            {role === "Working Professional" && (
              <div className="mt-3 space-y-3">
                <input
                  type="text"
                  placeholder="Company Name"
                  required
                  className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="text"
                  placeholder="Role in the Company"
                  required
                  className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            )}

            {role === "Other" && (
              <input
                type="text"
                placeholder="Please specify"
                className="mt-2 w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500"
              />
            )}
          </div>

          {/* Motivation */}
          <div>
            <label className="block font-semibold mb-1">
              Why do you want to join TechNexus: Skill-Up India? *
            </label>
            <textarea
              required
              rows={4}
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* MS Certification Attempt */}
          <div>
            <label className="block font-semibold mb-1">
              Have you previously attempted or earned Microsoft certifications?
            </label>
            <select
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500"
              value={certAttempted}
              onChange={(e) => setCertAttempted(e.target.value)}
            >
              <option>No</option>
              <option>Yes</option>
            </select>
            {certAttempted === "Yes" && (
              <input
                type="text"
                placeholder="Add certification details"
                className="mt-2 w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500"
              />
            )}
          </div>

          {/* Cloud Exposure */}
          <div>
            <label className="block font-semibold mb-1">
              Do you have prior exposure to Cloud/AI/Data-related technologies?
            </label>
            <select
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500"
              value={cloudExposure}
              onChange={(e) => setCloudExposure(e.target.value)}
            >
              <option>No</option>
              <option>Yes</option>
            </select>
            {cloudExposure === "Yes" && (
              <textarea
                placeholder="Briefly explain your experience"
                className="mt-2 w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500"
              />
            )}
          </div>

          {/* Yes/No Questions */}
          {[
            "Can you commit to attending all live sessions without fail?",
            "Will you be able to complete assignments, feedback forms, and other program tasks on time?",
            "Will your company/college/employer sponsor or reimburse your certification exam fees?",
            "Do you personally require financial assistance for the certification exam fees?",
            "If awarded, do you agree that the voucher is non-transferable and only for your own use?"
          ].map((q, i) => (
            <div key={i}>
              <label className="block font-semibold mb-1">{q}</label>
              <select className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                onChange={(e) =>
                  i === 2 ? setSponsor(e.target.value) : null
                }
              >
                <option>No</option>
                <option>Yes</option>
              </select>
              {i === 2 && sponsor === "Yes" && (
                <p className="mt-2 text-sm text-red-600 font-medium">
                  ⚠️ You may attend the sessions, but vouchers are reserved for
                  individuals without financial sponsorship.
                </p>
              )}
            </div>
          ))}

          {/* Agreement Checkboxes */}
          <div className="space-y-2">
            <h1>I agree to </h1>
            <label className="flex items-center space-x-2">
              <input type="checkbox" required className="w-4 h-4" />
              <span>
                I understand sessions will not be recorded, and missing even one
                makes me ineligible for vouchers.
              </span>
            </label>

            <label className="flex items-center space-x-2">
              <input type="checkbox" required className="w-4 h-4" />
              <span>Be respectful to speakers and participants.</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" required className="w-4 h-4" />
              <span>
                Not share slides or content outside the program without
                permission.
              </span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" required className="w-4 h-4" />
              <span>
                Accept that this program does not guarantee a job/internship.
              </span>
            </label>
          </div>

          {/* Referral */}
          <div>
            <label className="block font-semibold mb-1">
              How did you hear about TechNexus: Skill-Up India?
            </label>
            <select className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500">
              <option>LinkedIn</option>
              <option>Community/College</option>
              <option>Friend/Colleague</option>
              <option>Other</option>
            </select>
          </div>

          {/* Final Declaration */}
          <div>
            <label className="flex items-center space-x-2">
              <input type="checkbox" required className="w-7 h-7" />
              <span className="font-semibold">
                I confirm that the information I provide is true. I understand
                that providing false or misleading details may result in
                disqualification.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-6 px-10 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                         text-white rounded-2xl text-lg font-semibold shadow-lg 
                         hover:scale-110 hover:shadow-2xl transition-transform duration-300 animate-pulse"
            >
              🚀 Submit Registration
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
