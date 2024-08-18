import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import backgroundLight from "../assets/background.png";
import backgroundDark from "../assets/background2.png";
import nextArrowIcon from "../assets/nextarrow.svg";

const CaseManagement = () => {
  const [cases, setCases] = useState({
    open: [
      { caseNo: "23-FA-12345", caseName: "Divorce", partyName: "Abhinav" },
      { caseNo: "23-FA-12345", caseName: "Divorce", partyName: "Abhinav" },
      { caseNo: "23-FA-12345", caseName: "Divorce", partyName: "Abhinav" },
      { caseNo: "23-FA-12345", caseName: "Divorce", partyName: "Abhinav" },
      { caseNo: "23-FA-12345", caseName: "Divorce", partyName: "Abhinav" },
      { caseNo: "23-FA-12345", caseName: "Divorce", partyName: "Abhinav" },
    ],
    closed: [
      { caseNo: "23-FA-12346", caseName: "Divorce", partyName: "Abhinav" },
      { caseNo: "23-FA-12346", caseName: "Divorce", partyName: "Abhinav" },
      { caseNo: "23-FA-12346", caseName: "Divorce", partyName: "Abhinav" },
    ],
    upcoming: [
      { caseNo: "23-FA-12347", caseName: "Divorce", partyName: "Abhinav" },
      { caseNo: "23-FA-12347", caseName: "Divorce", partyName: "Abhinav" },
      { caseNo: "23-FA-12347", caseName: "Divorce", partyName: "Abhinav" },
      { caseNo: "23-FA-12347", caseName: "Divorce", partyName: "Abhinav" },
      { caseNo: "23-FA-12347", caseName: "Divorce", partyName: "Abhinav" },
      { caseNo: "23-FA-12347", caseName: "Divorce", partyName: "Abhinav" },
      { caseNo: "23-FA-12347", caseName: "Divorce", partyName: "Abhinav" },
      { caseNo: "23-FA-12347", caseName: "Divorce", partyName: "Abhinav" },
      { caseNo: "23-FA-12347", caseName: "Divorce", partyName: "Abhinav" },
      { caseNo: "23-FA-12347", caseName: "Divorce", partyName: "Abhinav" },
    ],
  });

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleDarkModeChange = () => {
      setDarkMode(document.documentElement.classList.contains('dark'));
    };

    handleDarkModeChange();

    const observer = new MutationObserver(handleDarkModeChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  const backgroundImage = darkMode ? backgroundDark : backgroundLight;

  return (
    <div 
      className="min-h-screen bg-cover bg-no-repeat bg-center" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto p-5">
        <Section title="Open Cases" cases={cases.open} count={cases.open.length} darkMode={darkMode} />
        <Section title="Closed Cases" cases={cases.closed} count={cases.closed.length} darkMode={darkMode} />
        <Section title="Upcoming Cases" cases={cases.upcoming} count={cases.upcoming.length} darkMode={darkMode} />
      </div>
    </div>
  );
};

const Section = ({ title, cases, count }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="section mb-12">
      <div className="relative mb-4">
        <hr className="absolute top-0 left-0 w-32 h-1 bg-[#C99F4A] border-none" />
        <h2 className="relative top-3 text-2xl font-semibold font-['Poppins'] dark:text-white">
          {title}
          <span className="ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#C99F4A] font-['Poppins'] font-medium">
            {count}
          </span>
        </h2>
      </div>
      <Slider {...settings}>
        {cases.map((caseItem, index) => (
          <div key={index} className="px-2 p-1">
            <CaseBox caseItem={caseItem} />
          </div>
        ))}
        {count < 4 && Array(4 - count).fill().map((_, index) => (
          <div key={`empty-${index}`} className="px-2 p-1">
            <div className="w-full sm:w-80 h-56 invisible"></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const CaseBox = ({ caseItem }) => (
  <div className="case-box w-full sm:w-80 h-56 rounded-[15px] bg-[rgba(217,217,217,0.80)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.75)] flex flex-col justify-end overflow-hidden">
    <div className="bg-white h-2/5 w-full flex flex-col justify-center items-center">
      <div>
        <p className="m-0 text-sm font-['Poppins'] font-bold text-[#C99F4A]">
          Case No: <span className="text-[#050125]">{caseItem.caseNo}</span>
        </p>
        <p className="m-0 text-sm font-['Poppins'] font-bold text-[#C99F4A]">
          Case Name: <span className="text-[#050125]">{caseItem.caseName}</span>
        </p>
        <p className="m-0 text-sm font-['Poppins'] font-bold text-[#C99F4A]">
          Party Name: <span className="text-[#050125]">{caseItem.partyName}</span>
        </p>
      </div>
    </div>
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#C99F4A] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
  >
    <img src={nextArrowIcon} alt="Next" className="w-6 h-6" />
  </div>
);

const CustomPrevArrow = () => (
  <div
    className="absolute top-1/2 left-0 transform -translate-y-1/2 w-10 h-10 bg-transparent cursor-default"
    style={{ visibility: 'hidden' }} 
  >
  </div>
);

export default CaseManagement;