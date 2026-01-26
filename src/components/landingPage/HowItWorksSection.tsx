

import Container from '@/lib/Container';

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Set Your Rates",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      buttonText: "Set Your Rate",
      description: (
        <>
          Configure your <span className="font-semibold">hourly rate</span>, <span className="font-semibold">call-out fee</span>, <span className="font-semibold">minimum charge</span>, and <span className="font-semibold">emergency uplift</span> once.
        </>
      )
    },
    {
      number: 2,
      title: "Receive Requests",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      buttonText: "Work Request",
      description: (
        <>
          Customers describe <span className="font-semibold">their job</span>. AI estimates the <span className="font-semibold">time</span> and <span className="font-semibold">calculates</span> the quote instantly.
        </>
      )
    },
    {
      number: 3,
      title: "Approve & Get Hired",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      buttonText: "Accept Work",
      description: (
        <>
          Review the <span className="font-semibold">quote</span> and <span className="font-semibold">job details</span>. Accept to get hired or <span className="font-semibold">decline</span> if it's not a fit.
        </>
      )
    }
  ];

  return (
    <Container className='max-w-[1200px] mx-auto'>
      <div className="w-full max-w-7xl mx-auto px-4 py-12 bg-gray-50">
        {/* Header */}
        <div className="mb-12">
          <p className="text-blue-600 font-medium mb-2">How It Works</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Three simple steps to automated quoting
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`border-2 border-gray-100 rounded-2xl ${index === 0 ? 'lg:-rotate-[4deg]' :
                index === steps.length - 1 ? 'lg:rotate-[4deg]' :
                  ''
                }`}
            >
              <div className="relative bg-[#FAFAFA] border-3 border-white rounded-2xl py-6 hover:shadow-lg transition-shadow duration-300">
                {/* Orange Button with Icon */}
                <div className="relative inline-block mb-6">
                  <div className='border border-l-0 border-[#CFCFCF] rounded-r-lg p-1 pl-20 bg-white'>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md flex items-center gap-2 transition-colors duration-200">
                      {step.icon}
                      {step.buttonText}
                    </button>
                    {/* Blue cursor pointer */}
                    <div className="absolute -right-3 -bottom-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 3L19 12L12 13L8 19L5 3Z" fill="#3B82F6" stroke="#3B82F6" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className='px-3'>
                  {/* Step Number and Title */}
                  <div className="mb-4">
                    <p className="text-gray-500 text-sm mb-1">Step {step.number}:</p>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}