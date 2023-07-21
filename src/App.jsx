import React, { useState, useEffect } from "react";

import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";
import { About } from "./views/about";
import { Services } from "./views/services";
import { Offer } from "./views/offer";
import { Contact } from "./views/contact";
import { Header } from "./views/header";
import { Loader } from "./components/loader";
import JsonData from "./utils/data.json";

const App = () => {
  const [pageData, setPageData] = useState(null);
  useEffect(() => {
    setPageData(JsonData);
  }, []);
  return pageData ? (
    <div>
      <Navigation data={pageData.Navigation} />
      <Header data={pageData.Header} />
      <About data={pageData.About} />
      <Services data={pageData.Services} />
      <Offer data={pageData.Offer} />
      <Contact data={pageData.Contact} />
      <Footer />
    </div>
  ) : (
    <Loader className="bg-white h-screen" />
  );
};

export default App;
