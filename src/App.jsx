import React, { useState } from "react";
import "./App.scss";

// import HeroImageContainer from "./HeroImageContainer/HeroImageContainer";
import Navigation from "./components/Navigation/Navigation";
import AnimatableOverlay from "./components/AnimatableOverlay/AnimatableOverlay";
import BackDecoration from "./components/BackDecoration/BackDecoration";
import HeroBody from "./components/HeroBody/HeroBody";
import QuoteForm from "./components/QuoteForm/QuoteForm";

function App() {
  const [showingQuoteForm, setShowingQuoteForm] = useState(false);

  const toggleQuoteForm = () => {
    setShowingQuoteForm(!showingQuoteForm);
    console.log(showingQuoteForm);
  };
  return (
    <>
      <AnimatableOverlay />
      <QuoteForm
        formState={showingQuoteForm}
        toggleQuoteForm={toggleQuoteForm}
      />
      <div className="App">
        <BackDecoration />
        <div className="heroBodyContent">
          <Navigation />
          <HeroBody toggleQuoteForm={toggleQuoteForm} />
        </div>
      </div>

      {/* <HeroImageContainer /> */}
    </>
  );
}

export default App;
