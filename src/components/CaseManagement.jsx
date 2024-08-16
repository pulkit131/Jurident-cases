import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CaseManagement = () => {
  const [cases, setCases] = useState({
    open: [
      { caseNo: "23-FA-12345", caseName: "Divorce", partyName: "Abhinav" },
      { caseNo: "23-FA-12345", caseName: "Divorce", partyName: "Abhinav" },
    ],
    closed: [
      { caseNo: "23-FA-12346", caseName: "Divorce", partyName: "Abhinav" },
      { caseNo: "23-FA-12346", caseName: "Divorce", partyName: "Abhinav" },
      { caseNo: "23-FA-12346", caseName: "Divorce", partyName: "Abhinav" },
      { caseNo: "23-FA-12346", caseName: "Divorce", partyName: "Abhinav" },
    ],
    upcoming: [
      { caseNo: "23-FA-12347", caseName: "Divorce", partyName: "Abhinav" },
      { caseNo: "23-FA-12347", caseName: "Divorce", partyName: "Abhinav" },
      { caseNo: "23-FA-12347", caseName: "Divorce", partyName: "Abhinav" },
    ],
  });

  return (
    <div className="container mx-auto p-5">
      <Section title="Open Cases" cases={cases.open} count={cases.open.length} />
      <Section title="Closed Cases" cases={cases.closed} count={cases.closed.length} />
      <Section title="Upcoming Cases" cases={cases.upcoming} count={cases.upcoming.length} />
    </div>
  );
};

const Section = ({ title, cases, count }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true, 
    nextArrow: <CustomNextArrow />, 
     
  };

  return (
    <div className="section mb-10">
      <h2 className="text-2xl text-blue-800 flex items-center gap-2">
        {title} <span className="inline-block bg-[#FFAF5B] text-black rounded-full w-8 h-8 text-center leading-8 font-bold">{count}</span>
      </h2>
      <Slider {...settings}>
        {cases.map((caseItem, index) => (
          <div key={index}>
            <CaseBox caseItem={caseItem} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const CaseBox = ({ caseItem }) => (
  <div className="case-box w-52 h-44 rounded-lg bg-gray-100 shadow-md flex flex-col justify-end overflow-hidden">
    <div className="bg-gray-300 h-3/5 w-full"></div>
    <p className="m-0 p-2 text-sm">
      Case No: <span className="details font-bold text-[#FFAF5B]">{caseItem.caseNo}</span>
    </p>
    <p className="m-0 p-2 text-sm">
      Case Name: <span className="details font-bold text-[#FFAF5B]">{caseItem.caseName}</span>
    </p>
    <p className="m-0 p-2 text-sm">
      Party Name: <span className="details font-bold text-[#FFAF5B]">{caseItem.partyName}</span>
    </p>
  </div>
);


const CustomNextArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#FFAF5B] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
    >
      <i className="fas fa-chevron-right"></i>
    </div>
  );
};


export default CaseManagement;
