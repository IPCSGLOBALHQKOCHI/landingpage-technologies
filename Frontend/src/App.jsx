import React from "react";
import IntroPage from "./Pages/IntroPage";
import Counts from "./Pages/Counts";
import SignatureCourses from "./Pages/SignatureCourses";
import Placement from "./Pages/Placement";
import SuccessStrories from "./Pages/SuccessStrories";
import TestimonialSection from "./Pages/TestimonialSection";
import QuestionSection from "./Pages/QuestionSection";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import StickOnContent from "./Components/StickOnContents";

function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <StickOnContent />
      <IntroPage />
      <Contact />
      <Counts />
      <SignatureCourses />
      <Placement />
      <SuccessStrories />
      <TestimonialSection />
      <QuestionSection />
      <Footer />
    </div>
  );
}

export default App;