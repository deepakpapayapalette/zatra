import React, { useState } from 'react'
import SingleCard2 from '../../common/SingleCard2';
import slide1 from "../../../assets/images/website/ganga-darshan/ServiceProvider.png";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import CommonCarousel from '../../common/CommonCarousel';
import { GiByzantinTemple } from "react-icons/gi";
import SingleCard from '../../common/SingleCard';

const cardsData = [
  {
    id: 1,
    img: slide1,
    title: 'Full Name',
    subtitle: 'Priest',
    mobileNo: "+91 0312145852",
    category: "New Delhi",

  },
  {
    id: 2,
    img: slide1,
    title: 'Full Name',
    subtitle: 'Priest',
    mobileNo: "+91 0312145852",
    category: "New Delhi",
  },
  {
    id: 3,
    img: slide1,
    title: 'Full Name',
    subtitle: 'Priest',
    mobileNo: "+91 0312145852",
    category: "New Delhi",

  },
  {
    id: 4,
    img: slide1,
    title: 'Full Name',
    subtitle: 'Priest',
    mobileNo: "+91 0312145852",
    category: "Gurugram",

  },
  {
    id: 5,
    img: slide1,
    title: 'Full Name',
    subtitle: 'Priest',
    mobileNo: "+91 0312145852",
    category: "Gurugram",

  },
];

const TreatmentWellness = () => {
  const [activeCategory, setActiveCategory] = useState("New Delhi");
  const filteredCards = cardsData.filter((card) => card.category === activeCategory);

  const childCategories = [
    { key: "New Delhi", label: "New Delhi" },
    { key: "Gurugram", label: "Gurugram" },
    { key: "Lucknow", label: "Lucknow" },
    { key: "Kushinagar", label: "Kushinagar" },
  ];


  return (
    <div>
      <section>
        <div className="container">

          {/* ====tabs=== */}
          <div className="flex flex-wrap items-center ">
            <div className=" medical-tab-buttons mb-4 flex flex-wrap gap-3">
              {childCategories.map((cat) => (
                <button key={cat.key}
                  className={`zatra-btn rounded-lg ${activeCategory === cat.key ? "zatra-btn-fill" : ""}`}
                  onClick={() => setActiveCategory(cat.key)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
          <div className='flex  items-center mb-4'>
            <div className='bg-white border text-webprimary p-3 rounded-full shadow-card me-4 flex items-center justify-center'>
              <GiByzantinTemple size={25} />
            </div>
            <h2 className='text-xl md:text-3xl  mb-0 pb-0'>Religious/ Pilgrimage Sites</h2>
          </div>

          {/* ====map=== */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCards.map((card, index) => (
              <SingleCard key={index} data={card} buttonText={'Call Now'} />
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default TreatmentWellness
