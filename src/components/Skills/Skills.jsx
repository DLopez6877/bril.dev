import React, { useState } from 'react';
import './Skills.scss';
import skillsData from './SkillsData.js';


const Skills = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedTag, setSelectedTag] = useState('');

    // Handle skill input change and generate suggestions
    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        // Generate suggestions based on search term
        if (value.length > 0) {
            const filteredSuggestions = skillsData
                .map(skill => skill.name)
                .filter(skill => skill.toLowerCase().includes(value.toLowerCase()));
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    // Function to filter skills based on search term or selected tag
    const filterSkills = () => {
        return skillsData.filter(skill => {
            const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesTag = selectedTag ? skill.tags.includes(selectedTag) : true;
            return matchesSearch && matchesTag;
        });
    };

    // Set selected skill from suggestions
    const selectSuggestion = (suggestion) => {
        setSearchTerm(suggestion);
        setSuggestions([]);
    };

    const availableTags = Array.from(new Set(skillsData.flatMap(skill => skill.tags)));

    return (
        <div className="skills-container">
            <h2 className="glow headline-text">SKILLS</h2>
            <input
                type="text"
                placeholder="Search skills..."
                value={searchTerm}
                onChange={handleInputChange}
                className="search-input"
            />

            {/* Autocomplete suggestion dropdown */}
            {suggestions.length > 0 && (
                <ul className="suggestions-list">
                    {suggestions.map((suggestion, index) => (
                        <li key={index} onClick={() => selectSuggestion(suggestion)}>
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}

            <div className="flex-wrapper">
                <div className="tags-container">
                    <button onClick={() => setSelectedTag('')} className={selectedTag === '' ? 'tag selected' : 'tag'}>
                        All
                    </button>
                    {availableTags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => setSelectedTag(tag)}
                            className={selectedTag === tag ? 'tag selected' : 'tag'}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                <div className="skills-list">
                    {filterSkills().map(skill => (
                        <div key={skill.name} className="skill-pill">
                            {skill.name}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Skills;