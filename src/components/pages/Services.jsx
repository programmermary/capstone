import React from "react";
import {ServicesData} from  "./ServiceData";

import ServiecssCard from "./ServiecssCard"

function Services() {
  return (
    <div>
    <ServiecssCard data={ServicesData}/>
    </div>
  );
}
export default Services;
