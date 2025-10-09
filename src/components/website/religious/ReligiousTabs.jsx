

import { useState } from 'react';

import 'react-multi-carousel/lib/styles.css';
import Carousel from "react-multi-carousel"
import slide1 from "../../../assets/images/website/religious/slide1.png";
import TempleCard from '../../common/TempleCard';
import { GiByzantinTemple } from "react-icons/gi";

const cardsData = [
  {
    id: 1,
    title: "Ram Mandir",
    category: "New Delhi",
    description: "Experience the sacred journey of the Ganga, blending...",
    contact: {
      name: "Ram Singh",
      phone: "+91 0312145852"
    },
    details: {
      average_visit_time: "Average visit time 2 hrs",
      distance: "3 KM"
    },
    actions: [
      { type: "button", text: "Get Direction", url: "#" },
      { type: "button", text: "Get Direction", url: "#" }
    ],
    img: slide1
  },
  {
    id: 2,
    title: "Ram Mandir",
    category: "New Delhi",
    description: "Experience the sacred journey of the Ganga, blending...",
    contact: {
      name: "Ram Singh",
      phone: "+91 0312145852"
    },
    details: {
      average_visit_time: "2 hrs",
      distance: "3 KM"
    },
    actions: [
      { type: "button", text: "Get Direction", url: "#" },
      { type: "button", text: "Get Direction", url: "#" }
    ],
    img: slide1
  },
  {
    id: 3,
    title: "Ram Mandir",
    category: "New Delhi",
    description: "Experience the sacred journey of the Ganga, blending...",
    contact: {
      name: "Ram Singh",
      phone: "+91 0312145852"
    },
    details: {
      average_visit_time: "2 hrs",
      distance: "3 KM"
    },
    actions: [
      { type: "button", text: "Get Direction", url: "#" },
      { type: "button", text: "Get Direction", url: "#" }
    ],
    img: slide1
  },
  {
    id: 4,
    title: "Ram Mandir",
    category: "New Delhi",
    description: "Experience the sacred journey of the Ganga, blending...",
    contact: {
      name: "Ram Singh",
      phone: "+91 0312145852"
    },
    details: {
      average_visit_time: "2 hrs",
      distance: "3 KM"
    },
    actions: [
      { type: "button", text: "Get Direction", url: "#" },
      { type: "button", text: "Get Direction", url: "#" }
    ],
    img: slide1
  },
  {
    id: 5,
    title: "Ram Mandir",
    category: "Lucknow",
    description: "Experience the sacred journey of the Ganga, blending...",
    contact: {
      name: "Ram Singh",
      phone: "+91 0312145852"
    },
    details: {
      average_visit_time: "2 hrs",
      distance: "3 KM"
    },
    actions: [
      { type: "button", text: "Get Direction", url: "#" },
      { type: "button", text: "Get Direction", url: "#" }
    ],
    img: slide1
  },
  {
    id: 5,
    title: "Ram Mandir",
    category: "Lucknow",
    description: "Experience the sacred journey of the Ganga, blending...",
    contact: {
      name: "Ram Singh",
      phone: "+91 0312145852"
    },
    details: {
      average_visit_time: "2 hrs",
      distance: "3 KM"
    },
    actions: [
      { type: "button", text: "Get Direction", url: "#" },
      { type: "button", text: "Get Direction", url: "#" }
    ],
    img: slide1
  },
  {
    id: 5,
    title: "Ram Mandir",
    category: "Kushinagar",
    description: "Experience the sacred journey of the Ganga, blending...",
    contact: {
      name: "Ram Singh",
      phone: "+91 0312145852"
    },
    details: {
      average_visit_time: "2 hrs",
      distance: "3 KM"
    },
    actions: [
      { type: "button", text: "Get Direction", url: "#" },
      { type: "button", text: "Get Direction", url: "#" }
    ],
    img: slide1
  },
  {
    id: 5,
    title: "Ram Mandir",
    category: "Kushinagar",
    description: "Experience the sacred journey of the Ganga, blending...",
    contact: {
      name: "Ram Singh",
      phone: "+91 0312145852"
    },
    details: {
      average_visit_time: "2 hrs",
      distance: "3 KM"
    },
    actions: [
      { type: "button", text: "Get Direction", url: "#" },
      { type: "button", text: "Get Direction", url: "#" }
    ],
    img: slide1
  },
  {
    id: 5,
    title: "Ram Mandir",
    category: "Kushinagar",
    description: "Experience the sacred journey of the Ganga, blending...",
    contact: {
      name: "Ram Singh",
      phone: "+91 0312145852"
    },
    details: {
      average_visit_time: "2 hrs",
      distance: "3 KM"
    },
    actions: [
      { type: "button", text: "Get Direction", url: "#" },
      { type: "button", text: "Get Direction", url: "#" }
    ],
    img: slide1
  },
  {
    id: 5,
    title: "Ram Mandir",
    category: "Gurugram",
    description: "Experience the sacred journey of the Ganga, blending...",
    contact: {
      name: "Ram Singh",
      phone: "+91 0312145852"
    },
    details: {
      average_visit_time: "2 hrs",
      distance: "3 KM"
    },
    actions: [
      { type: "button", text: "Get Direction", url: "#" },
      { type: "button", text: "Get Direction", url: "#" }
    ],
    img: slide1
  },
  {
    id: 5,
    title: "Ram Mandir",
    category: "Gurugram",
    description: "Experience the sacred journey of the Ganga, blending...",
    contact: {
      name: "Ram Singh",
      phone: "+91 0312145852"
    },
    details: {
      average_visit_time: "2 hrs",
      distance: "3 KM"
    },
    actions: [
      { type: "button", text: "Get Direction", url: "#" },
      { type: "button", text: "Get Direction", url: "#" }
    ],
    img: slide1
  },
  {
    id: 5,
    title: "Ram Mandir",
    category: "Gurugram",
    description: "Experience the sacred journey of the Ganga, blending...",
    contact: {
      name: "Ram Singh",
      phone: "+91 0312145852"
    },
    details: {
      average_visit_time: "2 hrs",
      distance: "3 KM"
    },
    actions: [
      { type: "button", text: "Get Direction", url: "#" },
      { type: "button", text: "Get Direction", url: "#" }
    ],
    img: slide1
  },
]
const ReligiousTabs = () => {


  const [activeCategory, setActiveCategory] = useState("New Delhi");
  const filteredCards = cardsData.filter((card) => card.category === activeCategory);

  const categories = [
    { key: "New Delhi", label: "New Delhi" },
    { key: "Gurugram", label: "Gurugram" },
    { key: "Lucknow", label: "Lucknow" },
    { key: "Kushinagar", label: "Kushinagar" },
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 24,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      partialVisibilityGutter: 16,
    },
  }


  return (
    <>
      <section className='space-top relative'>
        <div className="container">
          <div className='flex  items-center mb-4'>
            <div className='bg-white border text-webprimary p-3 rounded-full shadow-card me-4 flex items-center justify-center'>
              <GiByzantinTemple size={25} />
            </div>
            <h2 className='text-xl md:text-3xl  mb-0 pb-0'>Religious/ Pilgrimage Sites</h2>
          </div>
          <div className="flex flex-wrap items-center ">
            <div className=" medical-tab-buttons mb-4 flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button key={cat.key}
                  className={`zatra-btn rounded-lg ${activeCategory === cat.key ? "zatra-btn-fill" : ""}`}
                  onClick={() => setActiveCategory(cat.key)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
          <div className="">
            <Carousel
              responsive={responsive}
              infinite
              keyBoardControl
              swipeable
              draggable
              showDots={true}
              containerClass="pb-5 pt-4"
              itemClass="ps-1 pt-2 pe-4"
              arrows={false}
              renderButtonGroupOutside={false}
              partialVisible
            >
              {filteredCards.map((item, index) => (
                <TempleCard key={index} data={item} />
              ))}
            </Carousel>
          </div>
        </div>
        {/* ================second-section================ */}
        <div className="container space-top">
          <div className='flex  items-center mb-4'>
            <div className='bg-white border text-webprimary p-3 rounded-full shadow-card me-4 flex items-center justify-center'>
              <GiByzantinTemple size={25} />
            </div>
            <h2 className='text-xl md:text-3xl  mb-0 pb-0'>Religious/ Pilgrimage Sites</h2>
          </div>

          <div className="">
            <Carousel
              responsive={responsive}
              infinite
              keyBoardControl
              swipeable
              draggable
              showDots={true}
              containerClass="pb-4 pt-4"
              itemClass="ps-1 pt-2 pe-4"
              arrows={false}
              renderButtonGroupOutside={false}
              partialVisible
            >
              {filteredCards.map((item, index) => (
                <TempleCard key={index} data={item} />
              ))}
            </Carousel>
          </div>
        </div>

        <style jsx>

          {`
             .react-multi-carousel-dot button{
            background-color: #bfc3c5;
            border-color: #bfc3c5;
          }

              .react-multi-carousel-dot-list{
                bottom:0;
              }
                .react-multi-carousel-track{
                  top: -8px;
                }

          `}

        </style>

      </section>
    </>
  )
}

export default ReligiousTabs
