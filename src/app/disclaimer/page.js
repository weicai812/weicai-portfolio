import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Disclaimer() {
  return (
    <div className="bg-gradient-to-br from-[#020617] via-[#022c22] to-[#020617]">
      <div className="container lg:gap-12 gap-y-8 pt-20 pb-6 text-white">

        {/* Title */}
        <div className={`text-2xl md:text-4xl ${inter.className}`}>
          <h1 className="underline decoration-cyan-400">
            DISCLAIMER
          </h1>
        </div>

        {/* Section 1 */}
        <h2 className="text-lg md:text-2xl pt-6 font-bold">
          1. General Information
        </h2>
        <p className="px-4 py-3 rounded-md bg-gradient-to-r from-emerald-900 to-blue-900">
          This portfolio website is provided for general informational and
          showcase purposes only. All content reflects my personal experience,
          skills, and projects at the time of publication. While reasonable
          efforts are made to ensure accuracy, no guarantees are made regarding
          completeness or correctness.
        </p>

        {/* Section 2 */}
        <h2 className="text-lg md:text-2xl pt-6 font-bold">
          2. No Professional Advice
        </h2>
        <div className="px-4 py-3 rounded-md bg-gradient-to-r from-emerald-900 to-blue-900">
          <p>
            The content on this website does not constitute professional advice,
            including but not limited to legal, financial, technical, or career
            advice. Any actions taken based on the information provided are done
            at your own discretion and risk.
          </p>
        </div>

        {/* Section 3 */}
        <h2 className="text-lg md:text-2xl pt-6 font-bold">
          3. Projects and Demonstrations
        </h2>
        <div className="px-4 py-3 rounded-md bg-gradient-to-r from-emerald-900 to-blue-900">
          <p>
            All projects, case studies, and code samples displayed on this
            website are intended for demonstration and educational purposes
            only. They may not represent production-ready implementations and
            should not be used directly without proper review, testing, and
            modification.
          </p>
        </div>

        {/* Section 4 */}
        <h2 className="text-lg md:text-2xl pt-6 font-bold">
          4. External Links
        </h2>
        <div className="px-4 py-3 rounded-md bg-gradient-to-r from-emerald-900 to-blue-900">
          <p>
            This website may contain links to third-party websites or resources
            for reference and convenience. I do not control or endorse the
            content, accuracy, or practices of any external sites.
          </p>
        </div>

        {/* Section 5 */}
        <h2 className="text-lg md:text-2xl pt-6 font-bold">
          5. Limitation of Liability
        </h2>
        <div className="px-4 py-3 rounded-md bg-gradient-to-r from-emerald-900 to-blue-900">
          <p>
            Under no circumstances shall I be liable for any direct, indirect,
            incidental, or consequential damages arising from the use of, or
            inability to use, this website or its content.
          </p>
        </div>

        {/* Section 6 */}
        <h2 className="text-lg md:text-2xl pt-6 font-bold">
          6. Changes to This Disclaimer
        </h2>
        <div className="px-4 py-3 rounded-md bg-gradient-to-r from-emerald-900 to-blue-900">
          <p>
            This disclaimer may be updated or modified at any time without prior
            notice. Continued use of this website indicates acceptance of any
            changes made.
          </p>
        </div>

        {/* Section 7 */}
        <h2 className="text-lg md:text-2xl pt-6 font-bold">
          7. Contact
        </h2>
        <div className="px-4 py-3 rounded-md bg-gradient-to-r from-emerald-900 to-blue-900">
          <p>
            If you have any questions regarding this disclaimer or the content of
            this portfolio, feel free to reach out via:
          </p>
          <p>
            Email:{' '}
            <a
              href="mailto:weicai6919@gmail.com"
              className="text-cyan-300 underline"
            >
              weicai6919@gmail.com
            </a>
          </p>
          <p>
            Tel:{' '}
            <a
              href="tel:+6596458117"
              className="text-cyan-300 underline"
            >
              +65 9645 8117
            </a>
          </p>
        </div>

        {/* Footer */}
        <p className="text-center pt-10 text-sm italic text-gray-400">
          Last Updated: 05 February 2026
        </p>
      </div>
    </div>
  );
}
