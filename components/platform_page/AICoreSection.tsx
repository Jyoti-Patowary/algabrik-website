import Card from "../card/Card";
import { CustomHeader, CustomSubtitle } from "../CustomHeader";

const cardData = [
  {
    number: "01",
    title: "Automated Document Verification",
    description: "Validate borrower documents in seconds, reducing manual errors.",
  },
  {
    number: "02",
    title: "KYC and Risk Analysis",
    description: "Streamline compliance with real-time identity checks, risk analysis, and anomaly detection.",
  },
  {
    number: "03",
    title: "Credit Scoring",
    description: "Leverage AI-driven credit scoring and predictive analytics to make smarter, faster loan approvals.",
  },
  {
    number: "04",
    title: "Borrower Assistance",
    description: "Guide borrowers through applications with instant responses and real-time updates.",
  },
  {
    number: "05",
    title: "Adaptive Workflow Automation",
    description: "Provide actionable insights to improve decision-making and borrower targeting.",
  },
  {
    number: "06",
    title: "Agreement Explainer",
    description: "Simplify complex loan agreements into easy-to-understand language for borrowers.",
  },
];

const AICoreSection = () => {
  return (
    <div
      className="mx-auto p-4 md:p-8 flex flex-col justify-center items-center gap-8"
      style={{
        backgroundImage: "url('/background_images/modern_lender.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundPositionY: "150px",
      }}
    >
      <div className="container flex flex-col justify-center items-center text-center gap-5">
        <CustomHeader className="text-[48px]" text="AI at the Core: Driving Precision and Speed" />
        <CustomSubtitle
          className="px-64 text-[20px]"
          text="From automation to intelligent insights, Algebrik's AI-powered tools enhance every stage of the loan lifecycle, enabling lenders to deliver faster, smarter, and more accurate outcomes."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10 items-center">
        {cardData.map((card, index) => (
          <Card
            key={index}
            number={card.number}
            title={card.title}
            description={card.description}
            customStyles={{
              width: "370px",
              height: "276px",
              container: "flex flex-col justify-between gap-8",
              title: " flex items-start justify-start text-[#2A5FAC] text-[20px] font-bold leading-[34px] mt-[16px] !important",
              description: "text-[#292929] text-[14px] leading-6 !important",              
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AICoreSection;