
const TrustedBy = () => {
  const logos = [
    { name: 'Shopify', width: 120 },
    { name: 'Stripe', width: 100 },
    { name: 'Notion', width: 110 },
    { name: 'Figma', width: 90 },
    { name: 'Slack', width: 100 },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[#4d4d4d] font-medium mb-12">
          Trusted by teams at
        </p>
        <div className="flex justify-center items-center space-x-12 md:space-x-16">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="opacity-40 hover:opacity-70 transition-opacity duration-300 cursor-pointer"
              style={{ width: logo.width }}
            >
              <div className="h-8 bg-gradient-to-r from-gray-400 to-gray-600 rounded-md flex items-center justify-center">
                <span className="text-white font-semibold text-sm">{logo.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;