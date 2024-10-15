import React, { useState } from 'react';
import './Skills.scss';
import skillsData from './SkillsData.js';
import InfiniteScrollText from '../InfiniteScrollText/InfiniteScrollText.jsx';


const Skills = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedTag, setSelectedTag] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value.length > 0) {
            const filteredSuggestions = skillsData
                .map(skill => skill.name)
                .filter(skill => skill.toLowerCase().includes(value.toLowerCase()));
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const filterSkills = () => {
        return skillsData.filter(skill => {
            const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesTag = selectedTag ? skill.tags.includes(selectedTag) : true;
            return matchesSearch && matchesTag;
        });
    };

    const selectSuggestion = (suggestion) => {
        setSearchTerm(suggestion);
        setSuggestions([]);
    };

    const availableTags = Array.from(new Set(skillsData.flatMap(skill => skill.tags)));
    const filteredSkills = filterSkills();
    const resultCount = filteredSkills.length;

    return (
        <div className="skills-container">
            <InfiniteScrollText className='scroll-text' scrollSpeed={0.3} direction='left' reverseOnScroll='false' fontSize='13.5vw'>SOME MAD SKILLS</InfiniteScrollText>
            <div className="input-wrapper">
                <input
                    type="text"
                    placeholder="Search skills..."
                    value={searchTerm}
                    onChange={handleInputChange}
                    className="search-input"
                />

                {suggestions.length > 0 && (
                    <ul className="suggestions-list">
                        {suggestions.map((suggestion, index) => (
                            <li key={index} onClick={() => selectSuggestion(suggestion)}>
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="wrapper">
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
                    {resultCount > 0 ? (
                        filteredSkills.map(skill => (
                            <div key={skill.name} className="pill">
                                {skill.name}
                            </div>
                        ))
                    ) : (
                        <div className="no-results">
                            No {selectedTag || ''} skills matching "{searchTerm}".
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