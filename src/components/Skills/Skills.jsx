import React, { useState, useRef } from "react";
import "./Skills.scss";
import skillsData from "./SkillsData.js";

const Skills = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const skillsListRef = useRef(null);
  const containerRef = useRef(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  const filterSkills = () => {
    return skillsData.filter((skill) => {
      const matchesSearch = skill.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesTag = selectedTag ? skill.tags.includes(selectedTag) : true;
      return matchesSearch && matchesTag;
    });
  };

  const availableTags = Array.from(
    new Set(skillsData.flatMap((skill) => skill.tags))
  );
  const filteredSkills = filterSkills();
  const resultCount = filteredSkills.length;

  return (
    <div id="skills" ref={containerRef} className="skills-container">
      <div className="input-wrapper">
        <div className="input-field">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            name="skills"
            type="text"
            placeholder="Search skills.."
            value={searchTerm}
            onChange={handleInputChange}
            className="search-input"
          />
          <div className="ellipses"></div>
          <div className="fake-button">SEARCH</div>
        </div>
      </div>

      <div className="wrapper">
        <div className="tags-container">
          <button
            onClick={() => setSelectedTag("")}
            className={selectedTag === "" ? "tag selected" : "tag"}
          >
            All
          </button>
          {availableTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={selectedTag === tag ? "tag selected" : "tag"}
            >
              {tag}
            </button>
          ))}
        </div>

        <div ref={skillsListRef} className="skills-list">
          {resultCount > 0 ? (
            filteredSkills.map((skill) => (
              <div key={skill.name} className="pill">
                {skill.name}
              </div>
            ))
          ) : (
            <div className="no-results">
              No {selectedTag || ""} skills matching "{searchTerm}".
            </div>
          )}
        </div>
      </div>

      <div className="result-counter">
        <span>{resultCount} SKILLS</span>
      </div>
    </div>
  );
};

export default Skills;
