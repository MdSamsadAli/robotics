import Header from "./components/Header/Header";
import OurRobot from "./components/OurRobot/OurRobot";
import RoboticsLife from "./components/RoboticsLife/roboticsLife";
import './common.css';
import './responsive.css';
import Develop from "./components/Develop/Develop";
import News from "./components/News/News";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";

import Items from "./components/Footer/Footer.jsx";
import { useState } from "react";

function App() {

  const [listItem, SetListItem] = useState(Items);

  return (
    <>
      <Header />
      <RoboticsLife />
      <OurRobot />
      <Develop />
      <News />
      <Contact />
      <Footer listitem = {listItem}/>
    </>
  )
}
export default App