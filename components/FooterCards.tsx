type CardProps = {
    title: string;
    description: string;
    buttonText: string;
    imageUrl?: string;
    isPrimary?: boolean;
  };
  
  const Card = ({ title, description, buttonText, imageUrl, isPrimary }: CardProps) => {
    const cardClasses = `w-[570px] h-[374px] p-16 rounded-lg shadow-lg flex flex-col justify-between ${
      isPrimary ? "text-white bg-gradient-to-b from-[#0057A3]/90 to-[#003B73]/90" : "text-[#2A5FAC] bg-white z-2"
    }`;
  
    const buttonClasses = isPrimary
      ? "bg-white text-[#292929] hover:bg-gray-200"
      : "border-2 border-[#2A5FAC] text-[#292929] hover:bg-[#003B73] hover:text-white";
  
    return (
      <div
        className={`relative ${cardClasses}`}
        style={{
          backgroundImage: imageUrl ? `url(${imageUrl})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          backgroundColor: imageUrl ? undefined : "#f0f0f0",
        }}
      >
        <div>
          <h2 className={`text-[36px] font-bold mb-4 ${!isPrimary ? "text-[#2A5FAC]" : ""}`}>{title}</h2>
          <p className={`mb-6 text-[18px] font-normal ${!isPrimary ? "text-[#2A5FAC]" : ""}`}>{description}</p>
        </div>
        <button
          className={`w-[194px] h-[42px] text-[14px] font-bold py-2 px-4 rounded-[20px] transition ${buttonClasses}`}
        >
          {buttonText}
        </button>
      </div>
    );
  };
  
  const FooterCards = () => {
    return (
      <div className="relative">
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-[#121212] -z-10"></div>
        <div className="flex flex-col md:flex-row gap-6 mx-auto max-w-7xl px-4 py-12 relative z-10">
          <Card
            title="Let’s Build the Future of Lending Together"
            description="Talk to our experts and explore how Algebrik can solve your unique lending challenges."
            buttonText="Schedule a Demo Call"
            imageUrl="/background_images/futureLending.png"
            isPrimary
          />
          <Card
            title="Experience Algebrik Firsthand"
            description="Take a guided tour of our platform to explore its features at your own pace."
            buttonText="Get tour"
            imageUrl="/background_images/algebrikFirsthand.png"
          />
        </div>
      </div>
    );
  };
  
  export default FooterCards;
  