import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function SecurityPolicy() {
  return (
    <div className="bg-gradient-to-br from-[#020617] via-[#022c22] to-[#020617]">
      <div className="container lg:gap-12 gap-y-8 pt-20 pb-6 text-white">

        {/* Title */}
        <div className={`text-2xl md:text-4xl ${inter.className}`}>
          <h1 className="underline decoration-cyan-400">
            SECURITY POLICY
          </h1>
        </div>

        {/* Section 1 */}
        <h2 className="text-lg md:text-2xl pt-6 font-bold">
          1. Introduction
        </h2>
        <p className="px-4 py-3 rounded-md bg-gradient-to-r from-emerald-900 to-blue-900">
          This Security Policy explains how I manage and protect the technical security of this portfolio website.
          While this website does not store sensitive user information, I follow industry-standard practices to maintain site integrity and protect visitor interactions.
        </p>

        {/* Section 2 */}
        <h2 className="text-lg md:text-2xl pt-6 font-bold">
          2. Data Handling
        </h2>
        <div className="px-4 py-3 rounded-md bg-gradient-to-r from-emerald-900 to-blue-900">
          <p>
            This website does not collect personal information automatically. Any data voluntarily provided (e.g., through email or contact forms) is handled responsibly and used only to respond to inquiries.
          </p>
        </div>

        {/* Section 3 */}
        <h2 className="text-lg md:text-2xl pt-6 font-bold">
          3. Technical Security Measures
        </h2>
        <div className="px-4 py-3 rounded-md bg-gradient-to-r from-emerald-900 to-blue-900">
          <p>
            Reasonable technical measures are implemented to secure this website:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Regular updates of code and dependencies</li>
            <li>Hosting on a secure platform with HTTPS enabled</li>
            <li>Protection against common vulnerabilities (e.g., XSS, CSRF)</li>
            <li>Regular backups and monitoring for uptime</li>
          </ul>
        </div>

        {/* Section 4 */}
        <h2 className="text-lg md:text-2xl pt-6 font-bold">
          4. Third-Party Services
        </h2>
        <div className="px-4 py-3 rounded-md bg-gradient-to-r from-emerald-900 to-blue-900">
          <p>
            Any third-party services or links (such as GitHub or LinkedIn) are used solely for portfolio demonstration purposes.
            I am not responsible for the security practices of external platforms.
          </p>
        </div>

        {/* Section 5 */}
        <h2 className="text-lg md:text-2xl pt-6 font-bold">
          5. User Responsibility
        </h2>
        <div className="px-4 py-3 rounded-md bg-gradient-to-r from-emerald-900 to-blue-900">
          <p>
            Users are encouraged to maintain personal security when contacting me or interacting with this website.
            Do not share sensitive personal or financial information through email or public forms.
          </p>
        </div>

        {/* Section 6 */}
        <h2 className="text-lg md:text-2xl pt-6 font-bold">
          6. Policy Updates
        </h2>
        <div className="px-4 py-3 rounded-md bg-gradient-to-r from-emerald-900 to-blue-900">
          <p>
            This Security Policy may be updated periodically. Updates will be reflected on this page with the revised date.
          </p>
        </div>

        {/* Section 7 */}
        <h2 className="text-lg md:text-2xl pt-6 font-bold">
          7. Contact
        </h2>
        <div className="px-4 py-3 rounded-md bg-gradient-to-r from-emerald-900 to-blue-900">
          <p>If you have any questions about the Security Policy, you may contact me:</p>
          <p>Email: <a href="mailto:weicai6919@gmail.com" className="text-cyan-300 underline">weicai6919@gmail.com</a></p>
          <p>Tel: <a href="tel:+6596458117" className="text-cyan-300 underline">+65 9645 8117</a></p>
        </div>

        {/* Footer */}
        <p className="text-center pt-10 text-sm italic text-gray-400">
          Last Updated: 05 February 2026
        </p>
      </div>
    </div>
  );
}
