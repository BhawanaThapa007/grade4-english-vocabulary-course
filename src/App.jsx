import React, { useState } from 'react';

const courseData = {
  units: [
    {
      id: 1,
      title: "Milan Goes to School",
      page: "P. 13",
      color: "linear-gradient(135deg, #60a5fa 0%, #06b6d4 100%)",
      emoji: "🏫",
      vocabulary: [
        { word: "school", image: "🏫", definition: "A place where children learn" },
        { word: "teacher", image: "👩‍🏫", definition: "A person who teaches students" },
        { word: "friend", image: "👫", definition: "Someone you like and play with" },
        { word: "classroom", image: "🚪", definition: "A room where students learn" },
        { word: "book", image: "📚", definition: "Something you read" }
      ]
    },
    {
      id: 2,
      title: "Welcome Home!",
      page: "P. 28",
      color: "linear-gradient(135deg, #f472b6 0%, #fb7185 100%)",
      emoji: "🏠",
      vocabulary: [
        { word: "mother", image: "👩", definition: "Your female parent" },
        { word: "father", image: "👨", definition: "Your male parent" },
        { word: "sister", image: "👧", definition: "Your female sibling" },
        { word: "brother", image: "👦", definition: "Your male sibling" },
        { word: "family", image: "👨‍👩‍👧‍👦", definition: "Parents and children together" }
      ]
    },
    {
      id: 3,
      title: "Time Travel",
      page: "P. 48",
      color: "linear-gradient(135deg, #a78bfa 0%, #818cf8 100%)",
      emoji: "⏰",
      vocabulary: [
        { word: "morning", image: "🌅", definition: "The early part of the day" },
        { word: "afternoon", image: "☀️", definition: "The middle part of the day" },
        { word: "evening", image: "🌆", definition: "The late part of the day" },
        { word: "night", image: "🌙", definition: "When it is dark outside" },
        { word: "yesterday", image: "📅", definition: "The day before today" }
      ]
    },
    {
      id: 4,
      title: "Lucky Peter!",
      page: "P. 69",
      color: "linear-gradient(135deg, #34d399 0%, #10b981 100%)",
      emoji: "🍀",
      vocabulary: [
        { word: "lucky", image: "🍀", definition: "Having good fortune" },
        { word: "happy", image: "😊", definition: "Feeling joy" },
        { word: "sad", image: "😢", definition: "Feeling unhappy" },
        { word: "wolf", image: "🐺", definition: "A wild animal like a big dog" },
        { word: "afraid", image: "😰", definition: "Feeling scared" }
      ]
    },
    {
      id: 5,
      title: "Gifts and Gifts",
      page: "P. 85",
      color: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
      emoji: "🎁",
      vocabulary: [
        { word: "sweater", image: "🧥", definition: "Warm clothing for cold weather" },
        { word: "gift", image: "🎁", definition: "Something you give to someone" },
        { word: "many", image: "🔢", definition: "A large number of things" },
        { word: "bag", image: "👜", definition: "Something to carry things in" },
        { word: "much", image: "📊", definition: "A large amount" }
      ]
    },
    {
      id: 6,
      title: "Celebrations",
      page: "P. 99",
      color: "linear-gradient(135deg, #ef4444 0%, #f472b6 100%)",
      emoji: "🎉",
      vocabulary: [
        { word: "birthday", image: "🎂", definition: "The day you were born" },
        { word: "party", image: "🎉", definition: "A celebration with friends" },
        { word: "cake", image: "🍰", definition: "Sweet food for special days" },
        { word: "happy", image: "😄", definition: "Feeling very pleased" },
        { word: "surprise", image: "😲", definition: "Something unexpected" }
      ]
    },
    {
      id: 7,
      title: "Vacationing",
      page: "P. 115",
      color: "linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)",
      emoji: "🏖️",
      vocabulary: [
        { word: "holiday", image: "🏖️", definition: "A time for fun and rest" },
        { word: "beach", image: "🏝️", definition: "Sandy place by the sea" },
        { word: "swim", image: "🏊", definition: "Move through water" },
        { word: "travel", image: "✈️", definition: "Go to different places" },
        { word: "visit", image: "🚗", definition: "Go to see a place or person" }
      ]
    },
    {
      id: 8,
      title: "Amazing Creatures",
      page: "P. 132",
      color: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
      emoji: "🦁",
      vocabulary: [
        { word: "animal", image: "🦁", definition: "A living creature" },
        { word: "sea", image: "🌊", definition: "Large body of salt water" },
        { word: "fish", image: "🐟", definition: "Animal that lives in water" },
        { word: "magician", image: "🎩", definition: "Person who does magic tricks" },
        { word: "water", image: "💧", definition: "Clear liquid we drink" }
      ]
    }
  ]
};

function App() {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [completedUnits, setCompletedUnits] = useState([]);
  const [totalStars, setTotalStars] = useState(0);

  const calculateProgress = () => {
    return Math.round((completedUnits.length / courseData.units.length) * 100);
  };

  if (selectedUnit) {
    return (
      <div style={{
        minHeight: '100vh',
        background: selectedUnit.color,
        padding: '20px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <button
            onClick={() => setSelectedUnit(null)}
            style={{
              background: 'white',
              border: 'none',
              padding: '15px 30px',
              borderRadius: '10px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              marginBottom: '20px'
            }}
          >
            ← Back to Home
          </button>

          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <div style={{ fontSize: '80px', marginBottom: '20px' }}>{selectedUnit.emoji}</div>
              <h2 style={{ fontSize: '36px', color: '#1f2937', marginBottom: '10px' }}>
                {selectedUnit.title}
              </h2>
              <p style={{ fontSize: '18px', color: '#6b7280' }}>{selectedUnit.page}</p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px'
            }}>
              {selectedUnit.vocabulary.map((vocab, index) => (
                <div
                  key={index}
                  style={{
                    background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
                    borderRadius: '15px',
                    padding: '30px',
                    textAlign: 'center',
                    border: '3px solid #d1d5db',
                    transition: 'transform 0.2s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <div style={{ fontSize: '60px', marginBottom: '15px' }}>{vocab.image}</div>
                  <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '10px' }}>
                    {vocab.word}
                  </h3>
                  <p style={{ fontSize: '16px', color: '#6b7280', fontStyle: 'italic' }}>
                    {vocab.definition}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{
          background: 'white',
          borderRadius: '30px',
          padding: '50px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          marginBottom: '30px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{
              fontSize: '56px',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '15px'
            }}>
              ✨ Grade 4 English Adventure ✨
            </h1>
            <p style={{ fontSize: '24px', color: '#6b7280', marginBottom: '10px' }}>
              📚 Symphony English Course - Book 4
            </p>
            <p style={{ fontSize: '18px', color: '#9ca3af', fontStyle: 'italic' }}>
              Learn vocabulary with fun games and activities! 🎮
            </p>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)',
            borderRadius: '20px',
            padding: '30px',
            marginTop: '30px'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px'
            }}>
              <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937' }}>
                ⚡ Your Learning Journey
              </span>
              <span style={{ fontSize: '28px', fontWeight: 'bold', color: '#9333ea' }}>
                {calculateProgress()}%
              </span>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-around',
              gap: '20px'
            }}>
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '15px 30px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
              }}>
                <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#1f2937' }}>
                  ⭐ {totalStars} Stars
                </span>
              </div>
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '15px 30px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
              }}>
                <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#1f2937' }}>
                  🏆 {completedUnits.length}/{courseData.units.length} Units
                </span>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '25px'
        }}>
          {courseData.units.map((unit) => (
            <div
              key={unit.id}
              onClick={() => setSelectedUnit(unit)}
              style={{
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                border: completedUnits.includes(unit.id) ? '4px solid #10b981' : 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
              }}
            >
              <div style={{
                height: '150px',
                background: unit.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <div style={{ fontSize: '80px' }}>{unit.emoji}</div>
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  left: '15px',
                  background: 'rgba(255,255,255,0.3)',
                  padding: '8px 15px',
                  borderRadius: '10px',
                  fontWeight: 'bold',
                  color: 'white'
                }}>
                  Unit {unit.id}
                </div>
              </div>

              <div style={{ padding: '25px' }}>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '10px'
                }}>
                  {unit.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '15px' }}>
                  {unit.page}
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '14px',
                  color: '#9ca3af'
                }}>
                  <span style={{ fontWeight: '600' }}>{unit.vocabulary.length} words</span>
                  <span style={{ fontSize: '20px' }}>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '30px',
          textAlign: 'center',
          marginTop: '30px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}>
          <div style={{ fontSize: '40px', marginBottom: '15px' }}>❤️</div>
          <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937' }}>
            Keep learning! Every word you learn makes you smarter! 🌟
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
