'use client';

import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Ovo } from 'next/font/google';
import backgroundImage from '../../assets/blue-calc.jpg';
import styles from '../Hero/Hero.module.css';

// Apply the font to your component
const ovo = Ovo({
  weight: ['400'], // Choose the weights you need
  subsets: ['latin'],
  display: 'swap', // Optional, improves loading performance
});

export default function Hero() {

  return (
    <section className={`${styles['section-background']} relative flex flex-col items-center justify-between py-28 lg:py-28`}>
      <div className={styles['image-wrapper']}>
        <Image 
          src={backgroundImage}
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          priority
        />
      </div>
      
      <div className="container mx-auto grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8 z-10 pt-28 pb-10">
        <div className="order-1 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem] z-10">
            Hello, <br />
            This is {' '}
            <span className="text-[#16f2b3]">Gan Wei Cai</span>
            {` , `}<br />{` I'm a Professional `} <br />
            <span className='text-pink-500'>
            <Typewriter
            options={{
              strings: ['Data Scientist', 'Software Engineer','Web Developer'],
              autoStart: true,
              loop: true
            }}
          />
            </span>
          </h1>

          {/* Buttons with call icons and tel links */}
          <div className="flex mt-4 space-x-4">
            <a href="tel:+6596458117" className="flex items-center px-4 py-2 bg-cyan-900 rounded-md shadow hover:bg-cyan-950 text-white">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              <span>Call Me</span>
            </a>
            <a href="/resume" className="flex items-center px-4 py-2 bg-cyan-900 rounded-md shadow hover:bg-cyan-950 text-white" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
              <span>Resume</span>
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex mt-4 space-x-4">
            <a href="https://www.linkedin.com/in/gan-wei-cai-5183c/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-cyan-900 rounded-full shadow hover:bg-cyan-950 text-white">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/weicai812" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-cyan-900 rounded-full shadow hover:bg-cyan-950 text-white">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="mailto:weicai6919@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-cyan-900 rounded-full shadow hover:bg-cyan-950 text-white">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
          </div>

        </div>
        <div className="order-2 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] z-10">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">summary</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">Gan Wei Cai</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">programming_skills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">Java</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Python</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">R</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">ReactJS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">NextJS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MySql</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">phpMyAdmin</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">DAX</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">CSS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">JavaScript</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Flutter</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
                <span className="text-orange-400">function</span>
                <span className="text-gray-400">{'() {'}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-pink-500">return</span>
                <span className="text-gray-400">{'('}</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-[5rem] mr-2 text-cyan-400">Absolutely</span>
                <span className="text-gray-400">{')'}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 text-gray-400">{'}'}</span>
              </div>
              <div>
                <span className="text-gray-400">{'};'}</span>
              </div>
            </code>
          </div>
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
        </div>
      </div>
      {/* Overview Section */}
      <div className="w-full py-8 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className={`${ovo.className}`}>
            <h2 className="text-5xl font-bold text-emerald-400 mb-6 underline">Overview.</h2>
          </div>
          <p className="text-white text-base md:text-lg mt-4">
          I am Gan Wei Cai, a dedicated and skilled professional with expertise in Data Science, Software Engineering, and Web Development. With a passion for leveraging data to drive meaningful insights and develop innovative solutions, I am committed to making a significant impact in every project I undertake.
          </p>
          <p className="text-white text-base md:text-lg mt-4">
            My diverse skill set encompasses programming languages such as Java, Python, and R, along with proficiency in web development technologies like ReactJS and NextJS. Additionally, I have experience with database management tools like MySQL and phpMyAdmin, as well as data visualization using Power BI.
          </p>
          <p className="text-white text-base md:text-lg mt-4">
            Through a combination of technical expertise and a strong commitment to continuous learning, I am well-equipped to tackle complex challenges and contribute effectively to a wide range of projects. Thank you for visiting my portfolio, and I look forward to the opportunity to collaborate and achieve great results together.
          </p>
        </div>
      </div>
    </section>
  )
}
