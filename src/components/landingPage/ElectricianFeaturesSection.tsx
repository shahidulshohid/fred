
import Container from '@/lib/Container';

export default function ElectricianFeaturesSection() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      iconBg: "bg-green-50",
      iconColor: "text-green-600",
      title: "Save Time",
      description: "No more manual calculations or back-and-forth emails. Quotes are generated instantly based on your preset rates, saving you hours every week."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      title: "Transparent Pricing",
      description: "Customers see exactly what they'll pay before booking. AI estimates time, but you control all pricing—no hidden surprises or algorithm changes."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
      title: "Simple Automation",
      description: "Set it once, then just approve or decline jobs. WireQuote handles the calculations so you can focus on growing your business."
    }
  ];

  return (
    <Container className='max-w-[1200px] mx-auto'>
      <div className="w-full bg-gray-50 py-16 px-4">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Header */}
              <div className="mb-6 sm:mb-8 md:mb-10">
                <p className="text-blue-600 font-semibold mb-2 sm:mb-3 text-xs sm:text-sm">
                  Why Electricians Love WireQuote
                </p>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">
                  Focus on the work, not the paperwork
                </h2>
              </div>

              {/* Features List */}
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      {/* Icon */}
                      <div className={`${feature.iconBg} ${feature.iconColor} rounded-lg p-2.5 sm:p-3 h-fit flex-shrink-0 w-fit`}>
                        {feature.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl md:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/electricianFeaturesImg/electricianImg.svg"
                alt="Electrician working with tablet"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}