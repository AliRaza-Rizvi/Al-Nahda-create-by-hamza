import React, { useState } from 'react';

const AboutTab = ({ tabs, sendActiveIndex }) => {
    console.log('tabs: ', tabs);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    sendActiveIndex(index)
  };

  return (
    <>
      <div className="About-tabs  h-20 px-10 flex justify-between items-center  text-center cursor-pointer p-[1rem] z-10 w-[100%] gap-4">
        {tabs.map((tab, index) => (
          <div key={index} className={`tab-about flex items-center gap-1 ${activeTab === index ? 'active ' : ''}`} onClick={() => handleTabClick(index)}>
            <div className='gal-icon  text-[2rem] '>{tab.icon}</div>
            <div className='gal-para text-[1.5rem] font-medium text-black'>{tab.label}</div>
          </div>
        ))}
        <div
          className="tab-bg-ab absolute bottom-0 left-0 h-20 bg-[#F58820] transition-transform duration-75 ease-in-out z-0 rounded-xl first-letter:"
          style={{
            transform: `translateX(${activeTab * 100}%)`,
            width: `${100 / tabs.length}%`,
          }}
        />
      </div>
    </>
  );
};

export default AboutTab;
