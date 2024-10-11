import React, { useState } from 'react';
import './ParallaxHero.scss';
import bg from '../../assets/herobg.png';
import coder from '../../assets/coder.png';
import glasses from '../../assets/glasses.png';
import InfiniteScrollText from '../InfiniteScrollText/InfiniteScrollText';
import { motion as m } from 'framer-motion';

const ParallaxHero = ({ opacity, scale, translateY }) => {
    const cssCode = 'body { background-color: #1d1f21; color: #c5c8c6; font-family: \'Courier New\', monospace; } h1 { font-size: 4em; text-shadow: 2px 2px #00ff00; }                        ';
    const jsCode = 'const generateRandomCode = () => { const chars = \'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\'; let code = \'\'; for (let i = 0; i < 8; i++) { code += chars.charAt(Math.floor(Math.random() * chars.length)); } return code; }; console.log(generateRandomCode());                                                         ';
    const htmlCode = '<p>Why don\'t skeletons fight each other? <span style="visibility:hidden;">Because they don\'t have the guts!</span> But seriously, I think they just prefer to keep things < span style = "visibility:hidden;" > bare - bones.</span ></p >                                                                                                   ';
    const pythonCode = 'developer = {"code_quality": "works on my machine", "bugs": "features", "coffee": "empty"}; print(f"Code Quality: {developer[\'code_quality\']}, Bugs: {developer[\'bugs\']} - Solution: Refill coffee cup and remember: \'If it works on my machine, it\'s a deployment issue.\'")                                                          ';
    const csharpCode = 'using System; class Program { static void Main() { int num1 = 5, num2 = 10; Console.WriteLine("Sum: " + (num1 + num2)); } }                                                                                                                                                                                                                  ';
    const sqlCode = 'SELECT * FROM developers WHERE caffeine_level > 100 AND sleep_hours < 4; SELECT * FROM relationships WHERE status = \'complicated\';                                                                                                                                                                                                            ';
    const javaCode = 'public class Main { public static void main(String[] args) { int a = 5, b = 10; System.out.println("Sum: " + (a + b)); } }                                                                                                                                                                                                             ';
    const testCode = 'test(\'adds 10 + 20 to equal 30 and multiplies 2 * 5 to equal 10, and checks if 5 is greater than 3\', () => { expect(10 + 20).toBe(30); expect(2 * 5).toBe(10); expect(5).toBeGreaterThan(3); });                                                                                                                                             ';
    const powershellCode = '$developer = @{ "CodeReview" = "Pending"; "TestCoverage" = "Optional"; "Deadline" = "Yesterday" }; Write-Host "Code Review: $($developer.CodeReview), Test Coverage: $($developer.TestCoverage), Deadline: $($developer.Deadline) - Ah, the perfect development cycle!"                                                                  ';
    const goCode = 'package main; import "fmt"; func main() { for i := 1; i <= 100; i++ { if i%15 == 0 { fmt.Println("FizzBuzz") } else if i%3 == 0 { fmt.Println("Fizz") } else if i%5 == 0 { fmt.Println("Buzz") } else { fmt.Println(i) } } }                                                                                                                     ';
    const rubyCode = 'fibo = [0, 1]; (2..29).each { |i| fibo << fibo[-1] + fibo[-2] }; puts "First 30 Fibonacci numbers: " + fibo.map.with_index { |num, idx| "#{idx + 1}: #{num}" }.join(\', \')                                                                                                                                                                    ';
    const kotlinCode = 'class CardFactory { fun createCard(type: String): Card = when(type) { "creature" -> CreatureCard("Goblin", 1, 1); "spell" -> SpellCard("Fireball", "Deal 3 damage"); "artifact" -> ArtifactCard("Black Lotus", "Sacrifice for 3 mana of any color"); else -> LandCard("Mountain") } }                                                        ';

    const [xValue, setXValue] = useState(0);
    const [yValue, setYValue] = useState(0);

    const handleMouseMove = (e) => {
        const xOffset = (window.innerWidth / 2 - e.clientX) / 25;
        const yOffset = (window.innerHeight / 2 - e.clientY) / 25;
        setXValue(xOffset);
        setYValue(yOffset);
    };

    return (

        <m.div
            className="overlay"
            style={{ opacity }}
            transition={{ ease: [0.16, 1, 0.3, 1] }}
        >
            <m.div
                className="parallax-hero-container"
                onMouseMove={handleMouseMove}
                style={{ scale, translateY }}
                transition={{ ease: [0.16, 1, 0.3, 1] }}>

                <img
                    className='parallax bg-img'
                    src={bg}
                    alt="Orange and blue background."
                />

                {/* TEXT */}
                <h1 className="text parallax name">Bril Lopez</h1>
                <h2 className="text parallax frontend">Frontend</h2>
                <h2 className="text parallax developer dev">Dev</h2>
                <h2 className="text parallax developer">Developer</h2>

                {/* #region Code */}
                {/* css */}
                <div className="parallax code css" style={{ transform: `translate(${xValue / 0.5}px, ${yValue / 0.5}px)` }}>
                    <InfiniteScrollText scrollSpeed={0.05} fontSize='3.07rem'>{cssCode}</InfiniteScrollText>
                </div>

                {/* js */}
                <div className="parallax code js" style={{ transform: `translate(${xValue / 0.6}px, ${yValue / 0.6}px)` }}>
                    <InfiniteScrollText scrollSpeed={0.03} fontSize='2.92rem' direction='right' reverseOnScroll='false'>{jsCode}</InfiniteScrollText>
                </div>

                {/* html */}
                <div className="parallax code html" style={{ transform: `translate(${xValue / 0.7}px, ${yValue / 0.7}px)` }}>
                    <InfiniteScrollText scrollSpeed={0.013} fontSize='2.85rem'>{htmlCode}</InfiniteScrollText>
                </div>

                {/* python */}
                <div className="parallax code python" style={{ transform: `translate(${xValue / 0.8}px, ${yValue / 0.8}px)` }}>
                    <InfiniteScrollText scrollSpeed={0.05} fontSize='2.62rem'>{pythonCode}</InfiniteScrollText>
                </div>

                {/* csharp */}
                <div className="parallax code csharp" style={{ transform: `translate(${xValue / 0.9}px, ${yValue / 0.9}px)` }}>
                    <InfiniteScrollText scrollSpeed={0.003} fontSize='2.39rem'>{csharpCode}</InfiniteScrollText>
                </div>

                {/* sql */}
                <div className="parallax code sql" style={{ transform: `translate(${xValue / 1.0}px, ${yValue / 1.0}px)` }}>
                    <InfiniteScrollText scrollSpeed={0.01} fontSize='2.16rem'>{sqlCode}</InfiniteScrollText>
                </div>

                {/* java */}
                <div className="parallax code java" style={{ transform: `translate(${xValue / 1.1}px, ${yValue / 1.1}px)` }}>
                    <InfiniteScrollText scrollSpeed={0.02} fontSize='1.94rem'>{javaCode}</InfiniteScrollText>
                </div>

                {/* test */}
                <div className="parallax code test" style={{ transform: `translate(${xValue / 1.3}px, ${yValue / 1.3}px)` }}>
                    <InfiniteScrollText scrollSpeed={0.01} direction='right' fontSize='1.71rem'>{testCode}</InfiniteScrollText>
                </div>

                {/* powershell */}
                <div className="parallax code powershell" style={{ transform: `translate(${xValue / 1.5}px, ${yValue / 1.5}px)` }}>
                    <InfiniteScrollText scrollSpeed={0.014} fontSize='1.48rem'>{powershellCode}</InfiniteScrollText>
                </div>

                {/* go */}
                <div className="parallax code go" style={{ transform: `translate(${xValue / 1.8}px, ${yValue / 1.8}px)` }}>
                    <InfiniteScrollText scrollSpeed={0.01} fontSize='1.25rem'>{goCode}</InfiniteScrollText>
                </div>

                {/* ruby */}
                <div className="parallax code ruby" style={{ transform: `translate(${xValue / 2}px, ${yValue / 2}px)` }}>
                    <InfiniteScrollText scrollSpeed={0.19} direction='left' fontSize='1.03rem'>{rubyCode}</InfiniteScrollText>
                </div>

                {/* kotlin */}
                <div className="parallax code kotlin" style={{ transform: `translate(${xValue / 3}px, ${yValue / 3}px)` }}>
                    <InfiniteScrollText scrollSpeed={0.18} direction='right' fontSize='0.80rem'>{kotlinCode}</InfiniteScrollText>
                </div>
                {/* endregion */}

                <img
                    className='parallax coder'
                    src={coder}
                    alt="A headshot of a programmer wearing a hoodie."
                    style={{ transform: `translate(${xValue}px, ${yValue / 8}px)` }}
                />
                <img
                    className='parallax glasses'
                    src={glasses}
                    alt="A headshot of a programmer wearing a hoodie."
                    style={{ transform: `translate(${xValue}px, ${yValue / 8}px)` }}
                />
            </m.div>
        </m.div>
    );
};

export default ParallaxHero;
