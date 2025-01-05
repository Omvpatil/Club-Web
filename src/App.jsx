import React from "react";
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AnnouncementPage from './components/Announcements/Announcement';
import Footer from './components/Footer/Footer';
import Events from "./components/Club-Event/Events";
import Members from "./components/Team-Members/Members";

function App() {
  return (
    <div className="App">  {/* Add this div to wrap your entire content */}
      <Header />
      <Home />
      <AnnouncementPage />
      <Events />
      <Members />
      <Footer />
    </div>
  );
}

export default App;