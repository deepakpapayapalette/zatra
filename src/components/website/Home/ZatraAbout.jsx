import React from "react";
import "./ZatraAbout.css";
import TempleImage1 from "../../../assets/images/website/img1.png"
import TempleImage from "../../../assets/images/website/zataraAbout.png"
import TajPeacockImage from "../../../assets/images/website/taj_peacock.png"


const ZatraAbout = () => (
  <section className="space-top ">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-10 ">
        <div className="">
          <h2 className="text-xl md:text-4xl font-semibold text-webprimary mb-4">About ZATRA</h2>
          <p className="text-webPara leading-7 font-normal  mb-8 text-lg">
            ZATRA is a unique platform where Tourism, Treatment, Traditions, Taste, and Trade come together in harmony, each fueling the growth of the other. As travelers explore new destinations, they contribute directly to local economies through spending on hotels, transport, food, and shopping. At the same time, tourism creates demand for authentic crafts, cultural products, and traditional experiences, empowering local businesses and artisans to thrive. This cycle not only generates jobs and strengthens infrastructure but also builds meaningful global connections—where every journey supports trade, and every trade opportunity enriches the tourism experience.
          </p>
          <button className="zatra-btn ">Know More</button>
        </div>
        <div className="flex md:justify-end md:items-start zatra-images">
          <div className="relative flex flex-col" style={{ paddingLeft: '60px' }}>
            <img
              src={TempleImage}
              alt="Temple"
              className=" w-full h-auto object-cover mb-[-30px] md:mb-0  zatra-top-img z-0"
            />
            <div className="w-full absolute   bg-webprimary text-white px-8 py-6 rounded-bl-[50px] rounded-tr-3xl shadow-lg zatra-stats-box z-10">
              <div className="flex justify-between">

                <div>
                  <div className="text-2xl font-bold">300K</div>
                  <div className="text-sm">Visitors Visit</div>
                </div>
                <div className="flex justify-end pt-5">
                  <br />

                  <div className="text-base mt-2">Operated By 10+ States</div>
                </div>
              </div>
            </div>
            <img
              src={TajPeacockImage}
              alt="Taj Mahal and Peacock"
              className="absolute right-[-30px]  md:bottom-[60px]  w-[240px] h-auto object-cover  border-white zatra-bottom-img z-20"
            />


          </div>
          {/* <div className=" flex flex-col">
            <img
              src={TempleImage1}
              alt="Temple"
              className="rounded-tl-3xl max-w-full h-auto object-cover "
            />
          </div> */}
        </div>
      </div>
    </div>
  </section>
);

export default ZatraAbout;
