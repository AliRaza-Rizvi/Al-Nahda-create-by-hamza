"use client"
import React, { useState } from 'react';

const Tabs = ({ tabs, sendActiveIndex }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    sendActiveIndex(index)
  };

  return (
    <div>
      <div className="tabs">
        {tabs.map((tab, index) => (
          <div key={index} className={`tab ${activeTab === index ? 'active' : ''}`} onClick={() => handleTabClick(index)}>
            {tab.label}
          </div>
        ))}
        <div
          className="tab-bg"
          style={{
            transform: `translateX(${activeTab * 100}%)`,
            width: `${100 / tabs.length}%`,
          }}
        />
      </div>
    </div>
  );
};

export default Tabs;
