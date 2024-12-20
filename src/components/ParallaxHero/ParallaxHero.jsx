import React, { useState } from "react";
import "./ParallaxHero.scss";
import bg from "../../assets/herobg.webp";
import InfiniteScrollText from "../../wrappers/InfiniteScrollText/InfiniteScrollText";
import coder from "../../assets/coder.webp";
import { motion as m } from "framer-motion";

const ParallaxHero = () => {
  const cssCode =
    "body { background-color: #1d1f21; color: #c5c8c6; font-family: 'Courier New', monospace; } h1 { font-size: 4em; text-shadow: 2px 2px #00ff00; }";
  const jsCode =
    "const generateRandomCode = () => { const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; let code = ''; for (let i = 0; i < 8; i++) { code += chars.charAt(Math.floor(Math.random() * chars.length)); } return code; }; console.log(generateRandomCode());";
  const htmlCode =
    '<p>Why don\'t skeletons fight each other? <span style="visibility:hidden;">Because they don\'t have the guts!</span> But seriously, I think they just prefer to keep things < span style = "visibility:hidden;" > bare - bones.</span ></p>';
  const pythonCode =
    'developer = {"code_quality": "works on my machine", "bugs": "features", "coffee": "empty"}; print(f"Code Quality: {developer[\'code_quality\']}, Bugs: {developer[\'bugs\']} - Solution: Refill coffee cup and remember: \'If it works on my machine, it\'s a deployment issue.\'")';
  const csharpCode =
    'using System; class Program { static void Main() { int num1 = 5, num2 = 10; Console.WriteLine("Sum: " + (num1 + num2)); } } using System; class Program { static void Main() { int num1 = 5, num2 = 10; Console.WriteLine("Sum: " + (num1 + num2)); } }';
  const sqlCode =
    "SELECT * FROM developers WHERE caffeine_level > 100 AND sleep_hours < 4; SELECT * FROM relationships WHERE status = 'complicated';";
  const javaCode =
    'public class Main { public static void main(String[] args) { int a = 5, b = 10; System.out.println("Sum: " + (a + b)); } }';
  const testCode =
    "test('adds 10 + 20 to equal 30 and multiplies 2 * 5 to equal 10, and checks if 5 is greater than 3', () => { expect(10 + 20).toBe(30); expect(2 * 5).toBe(10); expect(5).toBeGreaterThan(3); });";
  const powershellCode =
    '$developer = @{ "CodeReview" = "Pending"; "TestCoverage" = "Optional"; "Deadline" = "Yesterday" }; Write-Host "Code Review: $($developer.CodeReview), Test Coverage: $($developer.TestCoverage), Deadline: $($developer.Deadline) - Ah, the perfect development cycle!"';
  const goCode =
    'package main; import "fmt"; func main() { for i := 1; i <= 100; i++ { if i%15 == 0 { fmt.Println("FizzBuzz") } else if i%3 == 0 { fmt.Println("Fizz") } else if i%5 == 0 { fmt.Println("Buzz") } else { fmt.Println(i) } } }';
  const rubyCode =
    'fibo = [0, 1]; (2..29).each { |i| fibo << fibo[-1] + fibo[-2] }; puts "First 30 Fibonacci numbers: " + fibo.map.with_index { |num, idx| "#{idx + 1}: #{num}" }.join(\', \')';
  const kotlinCode =
    'class CardFactory { fun createCard(type: String): Card = when(type) { "creature" -> CreatureCard("Goblin", 1, 1); "spell" -> SpellCard("Fireball", "Deal 3 damage"); "artifact" -> ArtifactCard("Black Lotus", "Sacrifice for 3 mana of any color"); else -> LandCard("Mountain") } }';

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
      className="parallax-hero-container"
      onMouseMove={handleMouseMove}
      transition={{ ease: "easeIn" }}
    >
      <img
        className="parallax bg-img"
        src={bg}
        alt="Orange and blue background."
      />
      <h1 className="text parallax name">Bril Lopez</h1>
      <h2 className="text parallax title">Frontend DEV & Designer</h2>
      <>
        {/* #region __________ CODE __________ */}
        <div className="code-text">
          {/* css */}
          <div className="parallax code css">
            <InfiniteScrollText scrollSpeed={0.08} direction="right">
              {cssCode}
            </InfiniteScrollText>
          </div>

          {/* js */}
          <div
            className="parallax code js"
            style={{
              transform: `translate(${xValue / 0.6}px, ${yValue / 0.6}px)`,
            }}
          >
            <InfiniteScrollText scrollSpeed={0.08} direction="right">
              {jsCode}
            </InfiniteScrollText>
          </div>

          {/* html */}
          <div
            className="parallax code html"
            style={{
              transform: `translate(${xValue / 0.7}px, ${yValue / 0.7}px)`,
            }}
          >
            <InfiniteScrollText scrollSpeed={0.08}>
              {htmlCode}
            </InfiniteScrollText>
          </div>

          {/* python */}
          <div
            className="parallax code python"
            style={{
              transform: `translate(${xValue / 0.8}px, ${yValue / 0.8}px)`,
            }}
          >
            <InfiniteScrollText scrollSpeed={0.08}>
              {pythonCode}
            </InfiniteScrollText>
          </div>

          {/* csharp */}
          <div className="parallax code csharp">
            <InfiniteScrollText scrollSpeed={0.08}>
              {csharpCode}
            </InfiniteScrollText>
          </div>

          {/* sql */}
          <div className="parallax code sql">
            <InfiniteScrollText scrollSpeed={0.08}>
              {sqlCode}
            </InfiniteScrollText>
          </div>

          {/* java */}
          <div className="parallax code java">
            <InfiniteScrollText scrollSpeed={0.08}>
              {javaCode}
            </InfiniteScrollText>
          </div>

          {/* test */}
          <div className="parallax code test">
            <InfiniteScrollText scrollSpeed={0.08} direction="right">
              {testCode}
            </InfiniteScrollText>
          </div>

          {/* powershell */}
          <div className="parallax code powershell">
            <InfiniteScrollText scrollSpeed={0.08}>
              {powershellCode}
            </InfiniteScrollText>
          </div>

          {/* go */}
          <div className="parallax code go">
            <InfiniteScrollText scrollSpeed={0.08} direction="right">
              {goCode}
            </InfiniteScrollText>
          </div>

          {/* ruby */}
          <div
            className="parallax code ruby"
            style={{ transform: `translate(${xValue / 2}px, ${yValue / 2}px)` }}
          >
            <InfiniteScrollText scrollSpeed={0.08}>
              {rubyCode}
            </InfiniteScrollText>
          </div>

          {/* kotlin */}
          <div
            className="parallax code kotlin"
            style={{ transform: `translate(${xValue / 3}px, ${yValue / 3}px)` }}
          >
            <InfiniteScrollText scrollSpeed={0.08} direction="right">
              {kotlinCode}
            </InfiniteScrollText>
          </div>
        </div>
      </>
      {/* #endregion CODE  ¦̵̱ ̵̱ ̵̱ ̵̱ ̵̱(̢ ̡͇̅└͇̅┘͇̅ (▤8כ−◦ */}
      <img
        className="parallax coder"
        src={coder}
        alt="A headshot of a coder."
        style={{ transform: `translate(${xValue}px, ${yValue / 8}px)` }}
      />
    </m.div>
  );
};

export default ParallaxHero;
