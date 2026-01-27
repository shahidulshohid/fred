"use client"
import Image from 'next/image';
import Navbar from '../shared/Navbar/Navbar';
import Container from '@/lib/Container';
import HowItWorksSection from '../landingPage/HowItWorksSection';

const Banner = () => {
  return (
    <div className=''
      style={{
        backgroundImage: 'url("/bannerImg/navbarBgImg.png")',
        backgroundSize: "cover",
        backgroundPosition: "right -13rem top -5rem",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <Container className='max-w-[1200px] mx-auto bg-white lg:bg-transparent'>
        <div className="px-4 sm:px-6 lg:px-3 py-8 sm:py-12 md:py-16 grid grid-cols-1">

          {/* LEFT CONTENT */}
          <div className="max-w-4xl mx-auto lg:mx-0">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FDE3D8] text-[#F55E1D] text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 rounded-full mb-4 sm:mb-6">
              <Image src="/bannerImg/Vector.svg" alt='Automated icon' width={14} height={14} className="sm:w-4 sm:h-4" />
              <span className="whitespace-nowrap">Automated Quotes for UK Electricians</span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              Create Accurate{" "}
              <span className="bg-[#040C621A] text-[#040C62] px-2 sm:px-3 py-1 rounded-md inline-block">
                Quotes
              </span>{" "}
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              in Under 2 Minutes
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-xl leading-relaxed">
              WireQuote helps UK electricians generate fast, professional quotes
              using their own rates — no guesswork, no back-and-forth. Just
              review, approve, and get hired.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="border border-gray-300 hover:bg-primary transition hover:text-white text-black font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:shadow-md cursor-pointer text-sm sm:text-base w-full sm:w-auto">
                Get Started Free →
              </button>
              <button className="border border-gray-300 hover:bg-primary transition hover:text-white text-black font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:shadow-md cursor-pointer text-sm sm:text-base w-full sm:w-auto">
                Learn How It Works
              </button>
            </div>
          </div>
        </div>
        <HowItWorksSection/>
      </Container>
    </div>
  );
};

export default Banner;