import React, { useState } from 'react';

const courseData = {
  units: [
    { id: 1, title: "Milan Goes to School", page: "P. 13", color: "#60a5fa", emoji: "🏫",
      vocabulary: [
        { word: "school", image: "🏫", definition: "A place where children learn" },
        { word: "teacher", image: "👩‍🏫", definition: "A person who teaches students" },
        { word: "friend", image: "👫", definition: "Someone you like and play with" },
        { word: "classroom", image: "🚪", definition: "A room where students learn" },
        { word: "book", image: "📚", definition: "Something you read" }
      ]
    },
    { id: 2, title: "Welcome Home!", page: "P. 28", color: "#f472b6", emoji: "🏠",
      vocabulary: [
        { word: "mother", image: "👩", definition: "Your female parent" },
        { word: "father", image: "👨", definition: "Your male parent" },
        { word: "sister", image: "👧", definition: "Your female sibling" },
        { word: "brother", image: "👦", definition: "Your male sibling" },
        { word: "family", image: "👨‍👩‍👧‍👦", definition: "Parents and children together" }
      ]
    },
    { id: 3, title: "Time Travel", page: "P. 48", color: "#a78bfa", emoji: "⏰",
      vocabulary: [
        { word: "morning", image: "🌅", definition: "The early part of the day" },
        { word: "afternoon", image: "☀️", definition: "The middle part of the day" },
        { word: "evening", image: "🌆", definition: "The late part of the day" },
        { word: "night", image: "🌙", definition: "When it is dark outside" },
        { word: "yesterday", image: "📅", definition: "The day before today" }
      ]
    },
    { id: 4, title: "Lucky Peter!", page: "P. 69", color: "#34d399", emoji: "🍀",
      vocabulary: [
        { word: "lucky", image: "🍀", definition: "Having good fortune" },
        { word: "happy", image: "😊", definition: "Feeling joy" },
        { word: "sad", image: "😢", definition: "Feeling unhappy" },
        { word: "wolf", image: "🐺", definition: "A wild animal" },
        { word: "afraid", image: "😰", definition: "Feeling scared" }
      ]
    }
  ]
};

function App() {
  const [screen, setScreen] = useState('welcome');
  const [student, setStudent] = useState('');
  const [input, setInput] = useState('');

  if (screen === 'welcome') {
    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <div style={{ background: 'white', borderRadius: '30px', padding: '60px 50px', maxWidth: '600px', width: '100%', boxShadow: '0 25px 70px rgba(0,0,0,0.4)', textAlign: 'center' }}>
          <div style={{ fontSize: '100px', marginBottom: '20px' }}>🎮</div>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '10px' }}>
            English Adventure
          </h1>
          <p style={{ fontSize: '20px', color: '#6b7280', marginBottom: '40px' }}>Grade 4 Vocabulary Course</p>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && input.trim() && (setStudent(input.trim()), setScreen('home'))}
            placeholder="Enter your name..."
            style={{ width: '100%', padding: '16px 20px', fontSize: '18px', borderRadius: '15px', border: '3px solid #e5e7eb', outline: 'none', marginBottom: '20px' }}
          />
          <button 
            onClick={() => input.trim() && (setStudent(input.trim()), setScreen('home'))} 
            disabled={!input.trim()} 
            style={{ width: '100%', padding: '20px', fontSize: '22px', fontWeight: 'bold', color: 'white', background: input.trim() ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#d1d5db', border: 'none', borderRadius: '15px', cursor: input.trim() ? 'pointer' : 'not-allowed' }}>
            🚀 Start Adventure!
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '20px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ background: 'white', borderRadius: '25px', padding: '35px', marginBottom: '25px', boxShadow: '0 15px 40px rgba(0,0,0,0.25)', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', color: '#1f2937', marginBottom: '20px' }}>
            Welcome, <span style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{student}</span>! 👋
          </h2>
          <p style={{ fontSize: '18px', color: '#6b7280' }}>Choose a unit
