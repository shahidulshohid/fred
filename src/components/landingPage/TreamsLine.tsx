import Container from '@/lib/Container';

export default function TreamsLine() {
    return (
        <div
            style={{
                backgroundImage: 'url("/treamsLine/treamsLineImg.svg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="w-full py-20 px-4">
                <Container className="max-w-[1200px] mx-auto text-center">
                    {/* Heading */}
                    <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-6">
                        Ready to Streamline Your Quotes?
                    </h2>

                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-6 max-w-2xl mx-auto">
                        Join electricians across the UK who are saving time and winning more jobs with WireQuote.
                    </p>

                    {/* CTA Button */}
                    <button className="bg-primary hover:bg-primary text-white font-semibold px-8 py-4 rounded-lg inline-flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-md cursor-pointer">
                        Get Started Free
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                        </svg>
                    </button>
                </Container>
            </div>
        </div>
    );
}