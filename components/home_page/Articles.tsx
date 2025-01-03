import Image from "next/image";
import evan from "@/public/icons/evan-gerdisch.png";
import Link from "next/link";
import { useRef } from "react";

export default function Articles() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    const container = scrollContainerRef.current;
    if (container) {
      container.dataset.isDragging = "true";
      container.dataset.startX = event.pageX.toString();
      container.dataset.scrollLeft = container.scrollLeft.toString();
      container.style.cursor = "grabbing";
    }
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const container = scrollContainerRef.current;
    if (container && container.dataset.isDragging === "true") {
      const dx = event.pageX - parseFloat(container.dataset.startX!);
      container.scrollLeft = parseFloat(container.dataset.scrollLeft!) - dx;
    }
  };

  const handleMouseUp = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.dataset.isDragging = "false";
      container.style.cursor = "grab";
    }
  };

  const newsArticles = [
    {
      title:
        "From Application to Disbursement in Minutes: The New Standard in Lending",
      author: "Prateek Samantaray",
      role: "Marketing",
      link: "#",
    },
    {
      title: "Algebrik Secures $4M in Funding to Transform Lending",
      author: "Prateek Samantaray",
      role: "Marketing",
      link: "#",
    },
    {
      title: "Breaking Down Lending Bottlenecks: A Guide to Faster Approvals",
      author: "Prateek Samantaray",
      role: "Marketing",
      link: "#",
    },
    {
      title: "Breaking Down Lending Bottlenecks: A Guide to Faster Approvals",
      author: "Prateek Samantaray",
      role: "Marketing",
      link: "#",
    },
    {
      title: "Breaking Down Lending Bottlenecks: A Guide to Faster Approvals",
      author: "Prateek Samantaray",
      role: "Marketing",
      link: "#",
    },
  ];

  return (
    <div
      className="container mx-auto max-w-[1160px] h-[717px] py-[40px] px-6 rounded-[36px] mt-10"
      style={{
        background:
          "radial-gradient(ellipse at right, var(--tw-gradient-stops))",
        backgroundColor: "#7EB2FF",
        backgroundImage: "radial-gradient(ellipse at right, #7EB2FF, #043071)",
      }}
    >
      <h2 className="text-center text-[32px] font-plus-jakarta font-bold mt-[10px] mb-[40px] text-white">
        Check out the latest from the Originations Hub
      </h2>
      <div
        ref={scrollContainerRef}
        className="flex gap-[32px] py-4 pl-[40px] overflow-x-scroll"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
        style={{
          cursor: "grab",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style jsx global>{`
          ::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {newsArticles.map((article, index) => (
          <div
            key={index}
            className="min-w-[360px] bg-slate-100 max-w-[360px] h-[428px] text-gray-900 rounded-[20px] shadow p-6 relative flex flex-col"
          >
            <div className="flex flex-col flex-grow">
              <div className="h-[269px]">
                <h6 className="text-start text-gray-400 tracking-widest text-[14px] font-bold font-plus-jakarta uppercase">
                  news
                </h6>
                <p className="font-bold mb-4 text-[20px] font-plus-jakarta">
                  {article.title}
                </p>
              </div>
              <div className="flex">
                <Image
                  src={evan}
                  alt={`News ${index}`}
                  className="object-cover w-[60px] h-[60px]"
                  quality={100}
                />
                <div className="flex flex-col justify-center p-2">
                  <p className="text-[#333333] font-plus-jakarta text-[14px] font-extrabold leading-[20px]">
                    {article.author}
                  </p>
                  <p className="text-gray-600 text-[12px] font-plus-jakarta font-normal leading-[20px]">
                    {article.role}
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 flex justify-center w-full bg-white text-center py-3 h-[54px] rounded-b-[20px]">
              <Link
                href={article.link}
                className="text-[#1A69DC] font-plus-jakarta font-semibold"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-[40px]">
        <button className="bg-white rounded-[32px] text-[#1A69DC] px-16 font-plus-jakarta border-[#195BD7] py-3 font-bold">
          View More
        </button>
      </div>
    </div>
  );
}
