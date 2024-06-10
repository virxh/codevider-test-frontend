import axios from "axios";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import About from "./About/About";

import "./App.css";
import { useEffect, useState } from "react";
import ContactUs from "./ContactUs/ContactUs";

function App() {
  const [dogs, setDogs] = useState([]);
  const [cats, setCats] = useState([]);
  const [birds, setBirds] = useState([]);

  useEffect(() => {
    Promise.allSettled([
      axios.get("https://freetestapi.com/api/v1/dogs"),
      axios.get("https://freetestapi.com/api/v1/cats"),
      axios.get("https://freetestapi.com/api/v1/birds"),
    ])
      .then(
        ([
          {
            value: { data: dogsRes },
          },
          {
            value: { data: catsRes },
          },
          {
            value: { data: birdsRes },
          },
        ]) => {
          const dogsWithCategory = dogsRes.map((dog) => ({
            ...dog,
            category: "dog",
          }));
          const catsWithCategory = dogsRes.map((cat) => ({
            ...cat,
            category: "cat",
          }));
          const birdsWithCategory = dogsRes.map((bird) => ({
            ...bird,
            category: "bird",
          }));
          setDogs(dogsWithCategory);
          setCats(catsWithCategory);
          setBirds(birdsWithCategory);
        }
      )
      .catch((error) => {
        console.log("Error getting data: ", error);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <header className="navigation-bar">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route
            path="/"
            element={<HomePage dogs={dogs} cats={cats} birds={birds} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
