import { Inter } from 'next/font/google';

// Apply the font to your component
const inter = Inter({
  weight: ['700'], // Choose the weights you need
  subsets: ['latin'],
  display: 'swap', // Optional, improves loading performance
});

export default function Privacy() {
    return (
        <div className='bg-gray-50'>
            <div className={`container lg:gap-12 gap-y-8 pt-20 pb-4`}>
                <div className={`text-black text-2xl md:text-4xl ${inter.className}`}>
                    <h1 className='underline text-2xl md:text-4xl'>PRIVACY POLICY</h1>
                </div>
                <h2 className='text-lg md:text-2xl pt-4 font-bold'>
                    1. Introduction
                </h2>
                <p className='px-4 py-2 bg-gray-200'>
                Welcome to Gan Wei Cai | Portfolio. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our website and/or mobile application.
                </p>
                <h2 className='text-lg md:text-2xl pt-4 font-bold'>
                    2. Information We Collect
                </h2>
                <div className='px-4 py-2 bg-gray-200'>
                <p>
                We may collect the following types of information:
                </p>
                <li>Personal Information: This includes information that identifies you personally, such as your name, email address, phone number, and other contact details you provide to us.</li>
                <li>Usage Data: This includes information about how you interact with our Services, such as your IP address, browser type, pages visited, and the time spent on each page.</li>
                <li>Cookies and Tracking Technologies: We use cookies and similar technologies to track user activity and preferences. You can manage your cookie settings through your browser.</li>
                </div>
                <h2 className='text-lg md:text-2xl pt-4 font-bold'>
                3. How We Use Your Information
                </h2>
                <div className='px-4 py-2 bg-gray-200'>
                <p>
                We use the information we collect for various purposes, including:
                </p>
                <li>To provide, maintain, and improve our Services.</li>
                <li>To communicate with you, including responding to your inquiries and sending you updates and notifications.</li>
                <li>To analyze usage trends and enhance user experience.</li>
                <li>To comply with legal obligations and protect our rights and interests.</li>
                </div>
                <h2 className='text-lg md:text-2xl pt-4 font-bold'>
                4. How We Share Your Information
                </h2>
                <div className='px-4 py-2 bg-gray-200'>
                <p>
                We may share your information in the following circumstances:
                </p>
                <li>With Service Providers: We may share your information with third-party service providers who perform services on our behalf, such as analytics, customer support, and payment processing.</li>
                <li>For Legal Reasons: We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
                <li>Business Transfers: If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
                </div>
                <h2 className='text-lg md:text-2xl pt-4 font-bold'>
                5. Data Security
                </h2>
                <div className='px-4 py-2 bg-gray-200'>
                <p>
                We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
                </p>
                </div>
                <h2 className='text-lg md:text-2xl pt-4 font-bold'>
                6. Your Choices
                </h2>
                <div className='px-4 py-2 bg-gray-200'>
                <p>
                You have the following choices regarding your information:
                </p>
                <li>Access and Correction: You can access and update your personal information by contacting us at weicai6919@gmail.com .</li>
                <li>Opt-Out: You can opt out of receiving marketing communications from us by following the instructions in those communications.</li>
                </div>
                <h2 className='text-lg md:text-2xl pt-4 font-bold'>
                7. Changes to This Privacy Policy
                </h2>
                <div className='px-4 py-2 bg-gray-200'>
                <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website and updating the Last Updated Date at the bottom of this document. We encourage you to review this Privacy Policy periodically for any changes.
                </p>
                </div>
                <h2 className='text-lg md:text-2xl pt-4 font-bold'>
                8. Contact Us
                </h2>
                <div className='px-4 py-2 bg-gray-200'>
                <p>
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                </p>
                <p>Email: <a href="mailto:weicai6919@gmail.com">weicai6919@gmail.com</a></p>
                <p>Tel no: <a href="tel:+6596458117">+6596458117</a></p>
                </div>
                <p className='text-center pt-10 text-xm italic'>Last Updated: 11 August 2024</p>
            </div>
        </div>


    );
}
