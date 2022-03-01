import React from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";
import data from '../../data/data.json';


export default function Home() {
  return (
    <>
    <Header />
    <Tours tour={data} />
    <Footer />
   
    </>
  )
}