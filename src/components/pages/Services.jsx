import React from "react";
import {ServicesData} from  "./ServiceData";

import ServiecssCard from "./ServiecssCard"

function Services() {
  return (
    <div >
      {
        ServicesData.map((index,service)=>{
          <ServicesData data={service} key={index}/>
        })
      }
    {/* <ServiecssCard data={ServicesData} key={index}/> */}
    </div>
  );
}
export default Services;
