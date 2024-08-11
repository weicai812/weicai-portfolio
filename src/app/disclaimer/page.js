import { Inter } from 'next/font/google';

// Apply the font to your component
const inter = Inter({
  weight: ['700'], // Choose the weights you need
  subsets: ['latin'],
  display: 'swap', // Optional, improves loading performance
});

export default function Disclaimer() {
    return (
        <div className='bg-gray-50'>
            <div className={`container lg:gap-12 gap-y-8 pt-20 pb-4`}>
                <div className={`text-black text-2xl md:text-4xl ${inter.className}`}>
                    <h1 className='underline text-2xl md:text-4xl'>DISCLAIMER</h1>
                </div>
                <h2 className='text-lg md:text-2xl pt-4 font-bold'>
                1. General Information
                </h2>
                <p className='px-4 py-2 bg-gray-200'>
                The information provided on [Gan Wei Cai | Portfolio] (the "Site") is for general informational purposes only. All content on the Site is provided in good faith, and we strive to ensure that the information is accurate and up-to-date. However, we make no warranties or representations of any kind regarding the accuracy, completeness, or reliability of any information on the Site.
                </p>
                <h2 className='text-lg md:text-2xl pt-4 font-bold'>
                2. No Professional Advice
                </h2>
                <div className='px-4 py-2 bg-gray-200'>
                <p>
                The content on the Site does not constitute professional advice, including but not limited to legal, financial, or medical advice. Always seek the advice of qualified professionals with any questions you may have regarding these matters. Reliance on any information provided by the Site is solely at your own risk.
                </p>
                </div>
                <h2 className='text-lg md:text-2xl pt-4 font-bold'>
                3. External Links
                </h2>
                <div className='px-4 py-2 bg-gray-200'>
                <p>
                The Site may contain links to third-party websites or services that are not owned or controlled by us. We do not endorse or assume any responsibility for the content, privacy policies, or practices of any third-party websites. You acknowledge and agree that we shall not be liable for any damage or loss caused by or in connection with the use of any third-party websites or services.
                </p>
                </div>
                <h2 className='text-lg md:text-2xl pt-4 font-bold'>
                4. Limitation of Liability
                </h2>
                <div className='px-4 py-2 bg-gray-200'>
                <p>
                In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data or other intangible losses, resulting from (i) your use of the Site, (ii) your reliance on any information provided on the Site, or (iii) any unauthorized access to or use of our servers and/or any personal information stored therein.
                </p>
                </div>
                <h2 className='text-lg md:text-2xl pt-4 font-bold'>
                5. Changes to the Disclaimer
                </h2>
                <div className='px-4 py-2 bg-gray-200'>
                <p>
                We reserve the right to modify or replace this disclaimer at any time. Your continued use of the Site following the posting of any changes constitutes your acceptance of those changes. It is your responsibility to review this disclaimer periodically for any updates.
                </p>
                </div>
                <h2 className='text-lg md:text-2xl pt-4 font-bold'>
                6. Contact Us
                </h2>
                <div className='px-4 py-2 bg-gray-200'>
                <p>
                If you have any questions about this disclaimer or the Site, please contact us at:
                </p>
                <p>Email: <a href="mailto:weicai6919@gmail.com">weicai6919@gmail.com</a></p>
                <p>Tel no: <a href="tel:+6596458117">+6596458117</a></p>
                </div>
                <p className='text-center pt-10 text-xm italic'>Last Updated: 11 August 2024</p>
            </div>
        </div>


    );
}
