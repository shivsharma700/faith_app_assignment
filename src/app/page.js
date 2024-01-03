"use client";
import About from "./components/About";
import Expect from "./components/Expect";
import Header from "./components/Header";
import Section from "./components/Section";
import Key_topics from "./components/Key_topics";
import Instructor from "./components/Instructor";
import Footer from "./components/Footer";
import Price from "./components/Price";

export default function Home() {
  return (
    <>
      <Header/>
      <Price/>
      <div className=" px-[10rem] " >
        <Section/>
        <About/>
        <Expect/>
        <Key_topics/>
        <Instructor/>
      </div>
      <Footer/>
    </>
  )
}
