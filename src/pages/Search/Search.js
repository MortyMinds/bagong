import React, { useState } from "react";
import data from "../../data/data.json";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import '../Background.css';
import './Search.css';

function SearchJobs() {
  const dataUpdateDate = "2023-06-21";
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredRowIndex, setHoveredRowIndex] = useState(-1);
  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      <Header />
      <div className="background">
        <div style={{ paddingTop: "5px" }}></div>
        <input className="search-input"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
        />
        <div style={{ paddingBottom: "5px" }}></div>
        <div
          style={{
            paddingLeft: "5px",
            paddingRight: "5px",
            height: "450px",
            overflow: "auto",
          }}
        >
          <table className="custom-table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Title</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr
                  key={`${item.company}-${index}`}
                  className={
                    index === hoveredRowIndex ? 'hovered-tr' : 'tr'
                  }
                  onMouseEnter={() => setHoveredRowIndex(index)}
                  onMouseLeave={() => setHoveredRowIndex(-1)}
                >
                  <td>{item.company}</td>
                  <td>{item.title}</td>
                  <td>
                    <a href={item.link} target="_blank" rel="noreferrer">
                      {item.link}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div
          style={{ paddingTop: "2%", fontFamily: "cursive" }}
        >
          Last Updated: {dataUpdateDate} <br />
          Happy Hunting
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SearchJobs;
