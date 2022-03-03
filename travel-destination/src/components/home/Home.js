import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Tours from '../tours/Tours';
import "./Home.css";



export default function Home({data}) {
  return (
    <>
    <Header />
    <Tours tour={data} />
    <Footer />
   
    </>
  )
}