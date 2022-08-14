import React from "react";

import AirportTransfer from "./main-components/AirportTransfer.js";
import Excursions from './main-components/Excursions.js';
import Information from './main-components/Information.js';


export default function Main(){

 

  return (
    <main>
      <AirportTransfer />
      <Excursions />
      <Information />
    </main>
  );
}