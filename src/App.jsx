import React, { useState } from 'react';

const courseData = {
  units: [
    { id: 1, title: "Milan Goes to School", page: "P. 13", color: "linear-gradient(135deg, #60a5fa 0%, #06b6d4 100%)", emoji: "🏫",
      vocabulary: [
        { word: "school", image: "🏫", definition: "A place where children learn" },
        { word: "teacher", image: "👩‍🏫", definition: "A person who teaches students" },
        { word: "friend", image: "👫", definition: "Someone you like and play with" },
        { word: "classroom", image: "🚪", definition: "A room where students learn" },
        { word: "book", image: "📚", definition: "Something you read" }
      ]
    },
    { id: 2, title: "Welcome Home!", page: "P. 28", color: "linear-gradient(135deg, #f472b6 0%, #fb7185 100%)", emoji: "🏠",
      vocabulary: [
        { word: "mother", image: "👩", definition: "Your female parent" },
        { word: "father", image: "👨", definition: "Your male parent" },
        { word: "sister", image: "👧", definition: "Your female sibling" },
        { word: "brother", image: "👦", definition: "Your male sibling" },
        { word: "family", image: "👨‍👩‍👧‍👦", definition: "Parents and children together" }
      ]
    },
    { id: 3, title: "Time Travel", page: "P. 48", color: "linear-gradient(135deg, #a78bfa 0%, #818cf8 100%)", emoji: "⏰",
      vocabulary: [
        { word: "morning", image: "🌅", definition: "The early part of the day" },
        { word: "afternoon", image: "☀️", definition: "The middle part of the day" },
        { word: "evening", image: "🌆", definition: "The late part of the day" },
        { word: "night", image: "🌙", definition: "When it is dark outside" },
        { word: "yesterday", image: "📅", definition: "The day before today" }
      ]
    },
    { id: 4, title: "Lucky Peter!", page: "P. 69", color: "linear-gradient(135deg, #34d399 0%, #10b981 100%)", emoji: "🍀",
      vocabulary: [
        { word: "lucky", image: "🍀", definition: "Having good fortune" },
        { word: "happy", image: "😊", definition: "Feeling joy" },
        { word: "sad", image: "😢", definition: "Feeling unhappy" },
        { word: "wolf", image: "🐺", definition: "A wild animal like a big dog" },
        { word: "afraid", image: "😰", definition: "Feeling scared" }
      ]
    },
    { id: 5, title: "Gifts and Gifts", page: "P. 85", color: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)", emoji: "🎁",
      vocabulary: [
        { word: "sweater", image: "🧥", definition: "Warm clothing for cold weather" },
        { word: "gift", image: "🎁", definition: "Something you give to someone" },
        { word: "many", image: "🔢", definition: "A large number of things" },
        { word: "bag", image: "👜", definition: "Something to carry things in" },
        { word: "much", image: "📊", definition: "A large amount" }
      ]
    },
    { id: 6, title: "Celebrations", page: "P. 99", color: "linear-gradient(135deg, #ef4444 0%, #f472b6 100%)", emoji: "🎉",
      vocabulary: [
        { word: "birthday", image: "🎂", definition: "The day you were born" },
        { word: "party", image: "🎉", definition: "A celebration with friends" },
        { word: "cake", image: "🍰", definition: "Sweet food for special days" },
        { word: "happy", image: "😄", definition: "Feeling very pleased" },
        { word: "surprise", image: "😲", definition: "Something unexpected" }
      ]
    },
    { id: 7, title: "Vacationing", page: "P. 115", color: "linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)", emoji: "🏖️",
      vocabulary: [
        { word: "holiday", image: "🏖️", definition: "A time for fun and rest" },
        { word: "beach", image: "🏝️", definition: "Sandy place by the sea" },
        { word: "swim", image: "🏊", definition: "Move through water" },
        { word: "travel", image: "✈️", definition: "Go to different places" },
        { word: "visit", image: "🚗", definition: "Go to see a place or person" }
      ]
    },
    { id: 8, title: "Amazing Creatures", page: "P. 132", color: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)", emoji: "🦁",
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
  const [screen, setScreen] = useState('welcome');
  const [studentName, setStudentName] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [activityType, setActivityType] = useState(0);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [totalStars, setTotalStars] = useState(0);
  const [completed, setCompleted] = useState([]);
  const [feedback, setFeedback] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

  const startSession = () => {
    if (nameInput.trim()) {
      setStudentName(nameInput.trim());
      setScreen('home');
    }
  };

  const selectUnit = (unit) => {
    setSelectedUnit(unit);
    setActivityType(0);
    setCurrentQ(0);
    setScore(0);
    setCorrectCount(0);
    setScreen('activity');
  };

  const handleAnswer = (answer, correct) => {
    const isCorrect = answer === correct;
    if (isCorrect) {
      setScore(score + 10);
      setTotalStars(totalStars + 1);
      setCorrectCount(correctCount + 1);
      setFeedback(['⭐ Excellent!', '⭐ Great job!', '⭐ Perfect!'][Math.floor(Math.random() * 3)]);
    } else {
      setFeedback('Try again next time!');
    }
    setShowFeedback(true);
    setTimeout(() => {
      setShowFeedback(false);
      if (currentQ < selectedUnit.vocabulary.length - 1) {
        setCurrentQ(currentQ + 1);
      } else {
        nextActivity();
      }
    }, 1500);
  };

  const nextActivity = () => {
    if (activityType < 3) {
      setActivityType(activityType + 1);
      setCurrentQ(0);
    } else {
      if (!completed.includes(selectedUnit.id)) {
        setCompleted([...completed, selectedUnit.id]);
      }
      setScreen('completion');
    }
  };

  const getBadge = () => {
    const percentage = (correctCount / (selectedUnit.vocabulary.length * 4)) * 100;
    if (percentage >= 90) return '🥇 Gold';
    if (percentage >= 70) return '🥈 Silver';
    return '🥉 Bronze';
  };

  // Welcome Screen
  if (screen === 'welcome') {
    return (
      <div style={{
        minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px'
      }}>
        <div style={{
          background: 'white', borderRadius: '30px', padding: '60px 50px', maxWidth: '600px',
          width: '100%', boxShadow: '0 20px 60px rgba(0,0,0,0.3)', textAlign: 'center'
        }}>
          <div style={{ fontSize: '80px', marginBottom: '20px' }}>🎓</div>
          <h1 style={{
            fontSize: '42px', fontWeight: 'bold',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '15px'
          }}>
            Welcome, Student!
          </h1>
          <p style={{ fontSize: '20px', color: '#6b7280', marginBottom: '40px' }}>
            Grade 4 English Adventure
          </p>
          <div style={{ marginBottom: '30px' }}>
            <label style={{
              display: 'block', fontSize: '18px', fontWeight: 'bold',
              color: '#1f2937', marginBottom: '10px', textAlign: 'left'
            }}>
              Please enter your name:
            </label>
            <input
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && startSession()}
              placeholder="Your name here..."
              style={{
                width: '100%', padding: '15px 20px', fontSize: '18px',
                borderRadius: '15px', border: '3px solid #e5e7eb', outline: 'none'
              }}
            />
          </div>
          <button
            onClick={startSession}
            disabled={!nameInput.trim()}
            style={{
              width: '100%', padding: '18px', fontSize: '20px', fontWeight: 'bold',
              color: 'white',
              background: nameInput.trim() ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#d1d5db',
              border: 'none', borderRadius: '15px',
              cursor: nameInput.trim() ? 'pointer' : 'not-allowed',
              boxShadow: nameInput.trim() ? '0 4px 15px rgba(102, 126, 234, 0.4)' : 'none'
            }}
          >
            Start Learning! 🚀
          </button>
        </div>
      </div>
    );
  }

  // Home Screen
  if (screen === 'home') {
    const progress = Math.round((completed.length / courseData.units.length) * 100);
    return (
      <div style={{
        minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '20px'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            background: 'white', borderRadius: '25px', padding: '40px',
            marginBottom: '25px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }}>
            <h2 style={{ fontSize: '32px', color: '#1f2937', textAlign: 'center', marginBottom: '10px' }}>
              Welcome back, <span style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
              }}>{studentName}</span>! 🌟
            </h2>
            <p style={{ fontSize: '18px', color: '#6b7280', textAlign: 'center', marginBottom: '25px' }}>
              📚 Choose a unit to start learning
            </p>
            <div style={{
              background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)',
              borderRadius: '15px', padding: '25px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                <span style={{ fontSize: '18px', fontWeight: 'bold' }}>⚡ Progress</span>
                <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#667eea' }}>{progress}%</span>
              </div>
              <div style={{
                width: '100%', height: '20px', background: 'white',
                borderRadius: '10px', overflow: 'hidden', marginBottom: '15px'
              }}>
                <div style={{
                  width: `${progress}%`, height: '100%',
                  background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                  transition: 'width 0.5s'
                }} />
              </div>
              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                <div style={{
                  background: 'white', padding: '12px 25px', borderRadius: '12px',
                  fontWeight: 'bold', fontSize: '16px'
                }}>
                  ⭐ {totalStars} Stars
                </div>
                <div style={{
                  background: 'white', padding: '12px 25px', borderRadius: '12px',
                  fontWeight: 'bold', fontSize: '16px'
                }}>
                  🏆 {completed.length}/{courseData.units.length} Units
                </div>
              </div>
            </div>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px'
          }}>
            {courseData.units.map(unit => (
              <div
                key={unit.id}
                onClick={() => selectUnit(unit)}
                style={{
                  background: 'white', borderRadius: '20px', overflow: 'hidden',
                  cursor: 'pointer', boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                  border: completed.includes(unit.id) ? '4px solid #10b981' : 'none',
                  transition: 'all 0.3s'
                }}
              >
                <div style={{
                  height: '130px', background: unit.color, display: 'flex',
                  alignItems: 'center', justifyContent: 'center', position: 'relative'
                }}>
                  <div style={{ fontSize: '70px' }}>{unit.emoji}</div>
                  <div style={{
                    position: 'absolute', top: '12px', left: '12px',
                    background: 'rgba(255,255,255,0.25)', padding: '6px 14px',
                    borderRadius: '10px', color: 'white', fontWeight: 'bold'
                  }}>
                    Unit {unit.id}
                  </div>
                  {completed.includes(unit.id) && (
                    <div style={{ position: 'absolute', top: '12px', right: '12px', fontSize: '30px' }}>✅</div>
                  )}
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px' }}>
                    {unit.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '12px' }}>{unit.page}</p>
                  <div style={{
                    display: 'flex', justifyContent: 'space-between',
                    fontSize: '14px', color: '#9ca3af', fontWeight: '600'
                  }}>
                    <span>{unit.vocabulary.length} words • 4 activities</span>
                    <span style={{ fontSize: '20px' }}>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Activity Screen
  if (screen === 'activity' && selectedUnit) {
    const activityNames = ['🖼️ Find the Picture', '✍️ Find the Word', '🔗 Match Words', '📝 Quiz'];
    const v = selectedUnit.vocabulary[currentQ];
    let options = [];
    
    if (activityType === 0) {
      options = shuffle([v.image, ...selectedUnit.vocabulary.filter(x => x.image !== v.image).slice(0, 2).map(x => x.image)]);
    } else if (activityType === 1) {
      options = shuffle([v.word, ...selectedUnit.vocabulary.filter(x => x.word !== v.word).slice(0, 2).map(x => x.word)]);
    } else if (activityType === 2) {
      options = shuffle([v.image, ...selectedUnit.vocabulary.filter(x => x.image !== v.image).slice(0, 2).map(x => x.image)]);
    } else {
      options = shuffle([v.definition, ...selectedUnit.vocabulary.filter(x => x.definition !== v.definition).slice(0, 2).map(x => x.definition)]);
    }

    return (
      <div style={{
        minHeight: '100vh', background: selectedUnit.color, padding: '20px'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            background: 'white', borderRadius: '20px', padding: '20px',
            marginBottom: '20px', boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
              <button
                onClick={() => setScreen('home')}
                style={{
                  padding: '12px 24px', background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)',
                  color: 'white', border: 'none', borderRadius: '12px',
                  fontSize: '16px', fontWeight: 'bold', cursor: 'pointer'
                }}
              >
                ← Home
              </button>
              <div style={{ textAlign: 'center', flex: 1 }}>
                <div style={{ fontSize: '24px', marginBottom: '5px' }}>
                  {selectedUnit.emoji} {selectedUnit.title}
                </div>
                <div style={{ fontSize: '16px', color: '#6b7280', fontWeight: '600' }}>
                  Activity {activityType + 1}/4: {activityNames[activityType]}
                </div>
              </div>
              <div style={{
                background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                padding: '12px 24px', borderRadius: '12px',
                color: 'white', fontWeight: 'bold', fontSize: '18px'
              }}>
                ⭐ {score}
              </div>
            </div>
            <div style={{ marginTop: '15px' }}>
              <div style={{
                display: 'flex', justifyContent: 'space-between',
                fontSize: '14px', color: '#6b7280', marginBottom: '5px'
              }}>
                <span>Question {currentQ + 1}/{selectedUnit.vocabulary.length}</span>
              </div>
              <div style={{
                width: '100%', height: '8px', background: '#e5e7eb',
                borderRadius: '4px', overflow: 'hidden'
              }}>
                <div style={{
                  width: `${((currentQ + 1) / selectedUnit.vocabulary.length) * 100}%`,
                  height: '100%', background: 'linear-gradient(90deg, #10b981 0%, #059669 100%)',
                  transition: 'width 0.3s'
                }} />
              </div>
            </div>
          </div>

          <div style={{
            background: 'white', borderRadius: '20px', padding: '40px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
          }}>
            {activityType === 0 && (
              <>
                <h2 style={{ fontSize: '48px', fontWeight: 'bold', textAlign: 'center', marginBottom: '30px' }}>
                  {v.word}
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
                  {options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(opt, v.image)}
                      style={{
                        padding: '40px', fontSize: '70px', background: 'white',
                        border: '4px solid #d1d5db', borderRadius: '15px',
                        cursor: 'pointer', transition: 'all 0.2s'
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </>
            )}

            {activityType === 1 && (
              <>
                <div style={{ fontSize: '100px', textAlign: 'center', marginBottom: '30px' }}>
                  {v.image}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                  {options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(opt, v.word)}
                      style={{
                        padding: '20px', fontSize: '20px', fontWeight: 'bold',
                        background: 'white', border: '4px solid #d1d5db',
                        borderRadius: '12px', cursor: 'pointer'
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </>
            )}

            {activityType === 2 && (
              <>
                <h2 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
                  {v.word}
                </h2>
                <p style={{ textAlign: 'center', fontSize: '18px', color: '#6b7280', marginBottom: '30px' }}>
                  Click the matching picture
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
                  {options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(opt, v.image)}
                      style={{
                        padding: '40px', fontSize: '70px', background: 'white',
                        border: '4px solid #d1d5db', borderRadius: '15px', cursor: 'pointer'
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </>
            )}

            {activityType === 3 && (
              <>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                  <div style={{ fontSize: '80px', marginBottom: '15px' }}>{v.image}</div>
                  <h2 style={{ fontSize: '36px', fontWeight: 'bold' }}>{v.word}</h2>
                </div>
                <p style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
                  What does this word mean?
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(opt, v.definition)}
                      style={{
                        padding: '20px', fontSize: '18px', textAlign: 'left',
                        background: 'white', border: '3px solid #d1d5db',
                        borderRadius: '12px', cursor: 'pointer'
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </>
            )}

            {showFeedback && (
              <div style={{
                marginTop: '30px', padding: '20px', borderRadius: '15px',
                background: feedback.includes('⭐') ? '#d1fae5' : '#fef3c7',
                textAlign: 'center', fontSize: '24px', fontWeight: 'bold',
                color: feedback.includes('⭐') ? '#065f46' : '#78350f'
              }}>
                {feedback}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Completion Screen
  if (screen === 'completion') {
    return (
      <div style={{
        minHeight: '100vh', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px'
      }}>
        <div style={{
          background: 'white', borderRadius: '30px', padding: '60px',
          maxWidth: '700px', width: '100%', boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '100px', marginBottom: '20px' }}>🏆</div>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: '#1f2937', marginBottom: '20px' }}>
            🎉 Congratulations, {studentName}! 🎉
          </h1>
          <p style={{ fontSize: '28px', color: '#6b7280', marginBottom: '30px' }}>
            You completed <span style={{ fontWeight: 'bold', color: '#10b981' }}>{selectedUnit.title}</span>!
          </p>
          
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '30px'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
              padding: '30px', borderRadius: '20px'
            }}>
              <div style={{ fontSize: '50px', marginBottom: '10px' }}>⭐</div>
              <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#1f2937' }}>{score}</div>
              <div style={{ fontSize: '16px', color: '#78350f', fontWeight: '600' }}>Stars Earned</div>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
              padding: '30px', borderRadius: '20px'
            }}>
              <div style={{ fontSize: '50px', marginBottom: '10px' }}>🏅</div>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#1f2937' }}>{getBadge()}</div>
              <div style={{ fontSize: '16px', color: '#1e40af', fontWeight: '600' }}>Badge</div>
            </div>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
            padding: '25px', borderRadius: '20px', marginBottom: '30px'
          }}>
            <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#065f46' }}>
              You learned {selectedUnit.vocabulary.length} new words! 🌟
            </p>
          </div>

          <div style={{ display: 'flex', gap: '15px' }}>
            <button
              onClick={() => setScreen('home')}
              style={{
                flex: 1, padding: '18px', fontSize: '18px', fontWeight: 'bold',
                background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)',
                color: 'white', border: 'none', borderRadius: '15px', cursor: 'pointer'
              }}
            >
              ← Back to Home
            </button>
            <button
              onClick={() => {
                const nextUnit = courseData.units.find(u => u.id === selectedUnit.id + 1);
                if (nextUnit) selectUnit(nextUnit);
                else setScreen('home');
              }}
              style={{
                flex: 1, padding: '18px', fontSize: '18px', fontWeight: 'bold',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: 'white', border: 'none', borderRadius: '15px', cursor: 'pointer'
              }}
            >
              Next Unit →
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default App;
