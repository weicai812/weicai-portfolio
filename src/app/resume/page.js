import { Ovo } from 'next/font/google';

// Apply the font to your component
const ovo = Ovo({
  weight: ['400'], // Choose the weights you need
  subsets: ['latin'],
  display: 'swap', // Optional, improves loading performance
});

export default function Resume() {
    return (
        <div className={`container lg:gap-12 gap-y-8 py-20 ${ovo.className}`}>
            <div className="text-white text-opacity-75 text-2xl">
                <h1>MY PUBLIC RESUME</h1>
            </div>  
        </div>
    );
}
