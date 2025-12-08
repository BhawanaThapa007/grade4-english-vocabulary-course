
import React, { useState, useEffect } from 'react';

const courseData = {
  units: [
    { id: 1, title: "Milan Goes to School", page: "P. 13", color: "#60a5fa", emoji: "🏫",
      vocabulary: [
        { word: "school", image: "🏫", definition: "A place where children learn", sentence: "I go to ___ every morning.", scrambled: "ooclsh" },
        { word: "teacher", image: "👩‍🏫", definition: "A person who teaches students", sentence: "My ___ helps me learn.", scrambled: "rcehate" },
        { word: "friend", image: "👫", definition: "Someone you like and play with", sentence: "Sara is my best ___.", scrambled: "ifrned" },
        { word: "classroom", image: "🚪", definition: "A room where students learn", sentence: "We study in our ___.", scrambled: "csraoslom" },
        { word: "book", image: "📚", definition: "Something you read", sentence: "I have a new ___.", scrambled: "okob" }
      ]
    },
    { id: 2, title: "Welcome Home!", page: "P. 28", color: "#f472b6", emoji: "🏠",
      vocabulary: [
        { word: "mother", image: "👩", definition: "Your female parent", sentence: "My ___ cooks food.", scrambled: "omthre" },
        { word: "father", image: "👨", definition: "Your male parent", sentence: "My ___ works hard.", scrambled: "atfher" },
        { word: "sister", image: "👧", definition: "Your female sibling", sentence: "I play with my ___.", scrambled: "essitr" },
        { word: "brother", image: "👦", definition: "Your male sibling", sentence: "My ___ is funny.", scrambled: "orbhert" },
        { word: "family", image: "👨‍👩‍👧‍👦", definition: "Parents and children together", sentence: "I love my ___.", scrambled: "aifmly" }
      ]
    },
    { id: 3, title: "Time Travel", page: "P. 48", color: "#a78bfa", emoji: "⏰",
      vocabulary: [
        { word: "morning", image: "🌅", definition: "The early part of the day", sentence: "I wake up in the ___.", scrambled: "onmrnig" },
        { word: "afternoon", image: "☀️", definition: "The middle part of the day", sentence: "Lunch is in the ___.", scrambled: "atefronn" },
        { word: "evening", image: "🌆", definition: "The late part of the day", sentence: "The sun sets in the ___.", scrambled: "eevnnig" },
        { word: "night", image: "🌙", definition: "When it is dark outside", sentence: "I sleep at ___.", scrambled: "thnig" },
        { word: "yesterday", image: "📅", definition: "The day before today", sentence: "I played ___.", scrambled: "eysrtedya" }
      ]
    },
    { id: 4, title: "Lucky Peter!", page: "P. 69", color: "#34d399", emoji: "🍀",
      vocabulary: [
        { word: "lucky", image: "🍀", definition: "Having good fortune", sentence: "I am ___ today.", scrambled: "cukyl" },
        { word: "happy", image: "😊", definition: "Feeling joy", sentence: "She feels ___.", scrambled: "appyh" },
        { word: "sad", image: "😢", definition: "Feeling unhappy", sentence: "He was ___.", scrambled: "das" },
        { word: "wolf", image: "🐺", definition: "A wild animal", sentence: "The ___ howls.", scrambled: "lofw" },
        { word: "afraid", image: "😰", definition: "Feeling scared", sentence: "I am ___.", scrambled: "airfad" }
      ]
    }
  ]
};

function App() {
  const [screen, setScreen] = useState('welcome');
  const [student, setStudent] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [unit, setUnit] = useState(null);
  const [activity, setActivity] = useState(0);
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [stars, setStars] = useState(0);
  const [completed, setCompleted] = useState([]);
  const [unlocked, setUnlocked] = useState([1]);
  const [feedback, setFeedback] = useState('');
  const [showFB, setShowFB] = useState(false);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [input, setInput] = useState('');
  const [hints, setHints] = useState(3);
  const [showHint, setShowHint] = useState(false);

  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const u = new SpeechSynthesisUtterance(text);
      u.rate = 0.8;
      window.speechSynthesis.speak(u);
    }
  };

  const start = () => {
    if (nameInput.trim()) {
      setStudent(nameInput.trim());
      setScreen('home');
    }
  };

  const selectUnit = (u) => {
    if (!unlocked.includes(u.id)) return alert('🔒 Complete previous units first!');
    setUnit(u);
    setActivity(0);
    setQuestion(0);
    setScore(0);
    setCorrect(0);
    setStreak(0);
    setScreen('activity');
  };

  const handleAnswer = (ans, correctAns, isText = false) => {
    const isCorrect = isText ? ans.toLowerCase().trim() === correctAns.toLowerCase() : ans === correctAns;
    
    if (isCorrect) {
      const pts = 10 + (streak * 2);
      setScore(score + pts);
      setStars(stars + 1);
      setCorrect(correct + 1);
      setStreak(streak + 1);
      if (streak + 1 > maxStreak) setMaxStreak(streak + 1);
      setFeedback(`⭐ Perfect! +${pts} pts! 🔥 ${streak + 1} streak!`);
    } else {
      setStreak(0);
      setFeedback(`Correct: ${correctAns}`);
    }
    
    setShowFB(true);
    setInput('');
    
    setTimeout(() => {
      setShowFB(false);
      if (question < unit.vocabulary.length - 1) {
        setQuestion(question + 1);
      } else {
        nextActivity();
      }
    }, 1600);
  };

  const nextActivity = () => {
    if (activity < 7) {
      setActivity(activity + 1);
      setQuestion(0);
    } else {
      if (!completed.includes(unit.id)) {
        setCompleted([...completed, unit.id]);
        if (unit.id < 4 && !unlocked.includes(unit.id + 1)) {
          setUnlocked([...unlocked, unit.id + 1]);
        }
      }
      setScreen('completion');
    }
  };

  const useHint = () => {
    if (hints > 0) {
      setHints(hints - 1);
      setShowHint(true);
      setTimeout(() => setShowHint(false), 3000);
    }
  };

  // Welcome
  if (screen === 'welcome') {
    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <div style={{ background: 'white', borderRadius: '30px', padding: '60px 50px', maxWidth: '600px', width: '100%', boxShadow: '0 25px 70px rgba(0,0,0,0.4)', textAlign: 'center' }}>
          <div style={{ fontSize: '100px', marginBottom: '20px' }}>🎮</div>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '10px' }}>
            English Adventure
          </h1>
          <p style={{ fontSize: '20px', color: '#6b7280', marginBottom: '40px' }}>Grade 4 • 8 Activities per Unit</p>
          
          <div style={{ background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', padding: '20px', borderRadius: '15px', marginBottom: '30px', fontSize: '14px', fontWeight: '600', color: '#78350f' }}>
            🎮 Picture Match • ✍️ Word Match • 🔗 Matching • 🔤 Spelling<br/>
            🎧 Listen & Click • 🧩 Scramble • 📝 Fill Blanks • 🏆 Quiz
          </div>

          <input
            type="text"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && start()}
            placeholder="Enter your name..."
            style={{ width: '100%', padding: '16px 20px', fontSize: '18px', borderRadius: '15px', border: '3px solid #e5e7eb', outline: 'none', marginBottom: '20px' }}
          />

          <button onClick={start} disabled={!nameInput.trim()} style={{ width: '100%', padding: '20px', fontSize: '22px', fontWeight: 'bold', color: 'white', background: nameInput.trim() ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#d1d5db', border: 'none', borderRadius: '15px', cursor: nameInput.trim() ? 'pointer' : 'not-allowed' }}>
            🚀 Start Adventure!
          </button>
        </div>
      </div>
    );
  }

  // Home
  if (screen === 'home') {
    const progress = Math.round((completed.length / courseData.units.length) * 100);
    
    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '20px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ background: 'white', borderRadius: '25px', padding: '35px', marginBottom: '25px', boxShadow: '0 15px 40px rgba(0,0,0,0.25)' }}>
            <h2 style={{ fontSize: '36px', color: '#1f2937', marginBottom: '20px' }}>
              Welcome, <span style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{student}</span>! 👋
            </h2>

            <div style={{ display: 'flex', gap: '15px', marginBottom: '25px', flexWrap: 'wrap' }}>
              <div style={{ background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)', padding: '15px 25px', borderRadius: '15px', color: 'white', flex: 1, minWidth: '150px' }}>
                <div style={{ fontSize: '28px', fontWeight: 'bold' }}>⭐ {stars}</div>
                <div style={{ fontSize: '12px', fontWeight: '600' }}>Stars</div>
              </div>
              <div style={{ background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', padding: '15px 25px', borderRadius: '15px', color: 'white', flex: 1, minWidth: '150px' }}>
                <div style={{ fontSize: '28px', fontWeight: 'bold' }}>🔥 {maxStreak}</div>
                <div style={{ fontSize: '12px', fontWeight: '600' }}>Best Streak</div>
              </div>
              <div style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)', padding: '15px 25px', borderRadius: '15px', color: 'white', flex: 1, minWidth: '150px' }}>
                <div style={{ fontSize: '28px', fontWeight: 'bold' }}>💡 {hints}</div>
                <div style={{ fontSize: '12px', fontWeight: '600' }}>Hints</div>
              </div>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)', borderRadius: '18px', padding: '25px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '18px', fontWeight: 'bold' }}>⚡ Progress</span>
                <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#667eea' }}>{progress}%</span>
              </div>
              <div style={{ width: '100%', height: '25px', background: 'white', borderRadius: '12px', overflow: 'hidden' }}>
                <div style={{ width: `${progress}%`, height: '100%', background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)', transition: 'width 0.8s' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '18px', gap: '10px' }}>
                <div style={{ background: 'white', padding: '12px 20px', borderRadius: '12px', flex: 1, textAlign: 'center' }}>
                  <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{completed.length}/4</div>
                  <div style={{ fontSize: '13px', color: '#6b7280', fontWeight: '600' }}>Units Done</div>
                </div>
                <div style={{ background: 'white', padding: '12px 20px', borderRadius: '12px', flex: 1, textAlign: 'center' }}>
                  <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{completed.length * 20}</div>
                  <div style={{ fontSize: '13px', color: '#6b7280', fontWeight: '600' }}>Words Learned</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '22px' }}>
            {courseData.units.map(u => {
              const isUnlocked = unlocked.includes(u.id);
              const isDone = completed.includes(u.id);

              return (
                <div key={u.id} onClick={() => selectUnit(u)} style={{ background: 'white', borderRadius: '22px', overflow: 'hidden', cursor: isUnlocked ? 'pointer' : 'not-allowed', boxShadow: '0 12px 30px rgba(0,0,0,0.18)', border: isDone ? '4px solid #10b981' : 'none', opacity: isUnlocked ? 1 : 0.6', transition: 'all 0.3s', position: 'relative' }}>
                  {!isUnlocked && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '60px', zIndex: 2 }}>🔒</div>}
                  
                  <div style={{ height: '145px', background: `linear-gradient(135deg, ${u.color} 0%, ${u.color}dd 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <div style={{ fontSize: '80px' }}>{u.emoji}</div>
                    <div style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(255,255,255,0.25)', padding: '6px 14px', borderRadius: '10px', color: 'white', fontWeight: 'bold' }}>Unit {u.id}</div>
                    {isDone && <div style={{ position: 'absolute', top: '12px', right: '12px', fontSize: '35px' }}>✅</div>}
                  </div>
                  
                  <div style={{ padding: '20px' }}>
                    <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px' }}>{u.title}</h3>
                    <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '12px' }}>{u.page}</p>
                    <div style={{ fontSize: '14px', color: '#9ca3af', fontWeight: '600' }}>
                      {u.vocabulary.length} words • 8 activities
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Activity
  if (screen === 'activity' && unit) {
    const v = unit.vocabulary[question];
    const activityNames = ['🖼️ Picture Match', '✍️ Word Match', '🔗 Matching', '🔤 Spelling', '🎧 Listen', '🧩 Scramble', '📝 Fill Blank', '🏆 Quiz'];
    let options = [];
    
    if (activity === 0) options = shuffle([v.image, ...unit.vocabulary.filter(x => x.image !== v.image).slice(0, 2).map(x => x.image)]);
    else if (activity === 1) options = shuffle([v.word, ...unit.vocabulary.filter(x => x.word !== v.word).slice(0, 2).map(x => x.word)]);
    else if (activity === 2) options = shuffle([v.image, ...unit.vocabulary.filter(x => x.image !== v.image).slice(0, 2).map(x => x.image)]);
    else if (activity === 7) options = shuffle([v.definition, ...unit.vocabulary.filter(x => x.definition !== v.definition).slice(0, 2).map(x => x.definition)]);

    return (
      <div style={{ minHeight: '100vh', background: `linear-gradient(135deg, ${unit.color} 0%, ${unit.color}dd 100%)`, padding: '20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ background: 'white', borderRadius: '20px', padding: '20px', marginBottom: '20px', boxShadow: '0 8px 20px rgba(0,0,0,0.15)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
              <button onClick={() => setScreen('home')} style={{ padding: '12px 24px', background: '#6b7280', color: 'white', border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>← Home</button>
              
              <div style={{ textAlign: 'center', flex: 1 }}>
                <div style={{ fontSize: '24px', marginBottom: '5px' }}>{unit.emoji} {unit.title}</div>
                <div style={{ fontSize: '16px', color: '#6b7280', fontWeight: '600' }}>Activity {activity + 1}/8: {activityNames[activity]}</div>
              </div>
              
              <div style={{ display: 'flex', gap: '10px' }}>
                <div style={{ background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)', padding: '12px 20px', borderRadius: '12px', color: 'white', fontWeight: 'bold' }}>⭐ {score}</div>
                <button onClick={useHint} disabled={hints === 0} style={{ padding: '12px 20px', background: hints > 0 ? '#8b5cf6' : '#d1d5db', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: hints > 0 ? 'pointer' : 'not-allowed' }}>💡 {hints}</button>
              </div>
            </div>
            
            <div style={{ marginTop: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#6b7280', marginBottom: '5px' }}>
                <span>Q {question + 1}/{unit.vocabulary.length}</span>
                <span>Streak: 🔥 {streak}</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: '#e5e7eb', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${((question + 1) / unit.vocabulary.length) * 100}%`, height: '100%', background: '#10b981', transition: 'width 0.3s' }} />
              </div>
            </div>
          </div>

          <div style={{ background: 'white', borderRadius: '20px', padding: '40px', boxShadow: '0 8px 20px rgba(0,0,0,0.15)' }}>
            {showHint && (
              <div style={{ marginBottom: '20px', padding: '15px', background: '#fef3c7', borderRadius: '12px', textAlign: 'center', fontWeight: 'bold', color: '#78350f' }}>
                💡 Hint: {v.definition}
              </div>
            )}

            {activity === 0 && (
              <>
                <h2 style={{ fontSize: '48px', fontWeight: 'bold', textAlign: 'center', marginBottom: '30px' }}>{v.word}</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
                  {options.map((opt, i) => (
                    <button key={i} onClick={() => handleAnswer(opt, v.image)} style={{ padding: '40px', fontSize: '70px', background: 'white', border: '4px solid #d1d5db', borderRadius: '15px', cursor: 'pointer', transition: 'all 0.2s' }}>
                      {opt}
                    </button>
                  ))}
                </div>
              </>
            )}

            {activity === 1 && (
              <>
                <div style={{ fontSize: '100px', textAlign: 'center', marginBottom: '30px' }}>{v.image}</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                  {options.map((opt, i) => (
                    <button key={i} onClick={() => handleAnswer(opt, v.word)} style={{ padding: '20px', fontSize: '20px', fontWeight: 'bold', background: 'white', border: '4px solid #d1d5db', borderRadius: '12px', cursor: 'pointer' }}>
                      {opt}
                    </button>
                  ))}
                </div>
              </>
            )}

            {activity === 2 && (
              <>
                <h2 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>{v.word}</h2>
                <p style={{ textAlign: 'center', fontSize: '18px', color: '#6b7280', marginBottom: '30px' }}>Click the matching picture</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
                  {options.map((opt, i) => (
                    <button key={i} onClick={() => handleAnswer(opt, v.image)} style={{ padding: '40px', fontSize: '70px', background: 'white', border: '4px solid #d1d5db', borderRadius: '15px', cursor: 'pointer' }}>
                      {opt}
                    </button>
                  ))}
                </div>
              </>
            )}

            {activity === 3 && (
              <>
                <div style={{ fontSize: '80px', textAlign: 'center', marginBottom: '20px' }}>{v.image}</div>
                <h2 style={{ fontSize: '28px', fontWeight: 'bold', textAlign: 'center', marginBottom: '30px' }}>Spell the word</h2>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAnswer(input, v.word, true)}
                  placeholder="Type here..."
                  style={{ width: '100%', padding: '20px', fontSize: '24px', borderRadius: '15px', border: '4px solid #d1d5db', outline: 'none', textAlign: 'center' }}
                  autoFocus
                />
                <button onClick={() => handleAnswer(input, v.word, true)} style={{ width: '100%', marginTop: '20px', padding: '18px', fontSize: '20px', fontWeight: 'bold', background: '#10b981', color: 'white', border: 'none', borderRadius: '15px', cursor: 'pointer' }}>
                  ✓ Submit
                </button>
              </>
            )}

            {activity === 4 && (
              <>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                  <button onClick={() => speak(v.word)} style={{ padding: '30px', fontSize: '80px', background: '#dbeafe', border: '4px solid #60a5fa', borderRadius: '20px', cursor: 'pointer', marginBottom: '20px' }}>
                    🔊
                  </button>
                  <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#6b7280' }}>Listen and click the correct word</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                  {shuffle([v.word, ...unit.vocabulary.filter(x => x.word !== v.word).slice(0, 2).map(x => x.word)]).map((opt, i) => (
                    <button key={i} onClick={() => handleAnswer(opt, v.word)} style={{ padding: '20px', fontSize: '20px', fontWeight: 'bold', background: 'white', border: '4px solid #d1d5db', borderRadius: '12px', cursor: 'pointer' }}>
                      {opt}
                    </button>
                  ))}
                </div>
              </>
            )}

            {activity === 5 && (
              <>
                <div style={{ fontSize: '70px', textAlign: 'center', marginBottom: '20px' }}>{v.image}</div>
                <h2 style={{ fontSize: '28px', fontWeight: 'bold', textAlign: 'center', marginBottom: '15px', color: '#6b7280' }}>Unscramble: <span style={{ color: '#ef4444', fontFamily: 'monospace' }}>{v.scrambled}</span></h2>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAnswer(input, v.word, true)}
                  placeholder="Type the word..."
                  style={{ width: '100%', padding: '20px', fontSize: '24px', borderRadius: '15px', border: '4px solid #d1d5db', outline: 'none', textAlign: 'center' }}
                  autoFocus
                />
                <button onClick={() => handleAnswer(input, v.word, true)} style={{ width: '100%', marginTop: '20px', padding: '18px', fontSize: '20px', fontWeight: 'bold', background: '#10b981', color: 'white', border: 'none', borderRadius: '15px', cursor: 'pointer' }}>
                  ✓ Submit
                </button>
              </>
            )}

            {activity === 6 && (
              <>
                <div style={{ fontSize: '70px', textAlign: 'center', marginBottom: '20px' }}>{v.image}</div>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginBottom: '30px', lineHeight: '1.6' }}>
                  {v.sentence.split('___').map((part, i) => (
                    <span key={i}>
                      {part}
                      {i < v.sentence.split('___').length - 1 && (
                        <input
                          type="text"
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleAnswer(input, v.word, true)}
                          placeholder="___"
                          style={{ width: '150px', padding: '8px', fontSize: '20px', borderRadius: '8px', border: '3px solid #d1d5db', outline: 'none', textAlign: 'center', margin: '0 5px' }}
                          autoFocus
                      <button onClick={() => handleAnswer(input, v.word, true)} style={{ width: '100%', marginTop: '20px', padding: '18px', fontSize: '20px', fontWeight: 'bold', background: '#10b981', color: 'white', border: 'none', borderRadius: '15px', cursor: 'pointer' }}>
                  ✓ Submit
                </button>
              </>
            )}

            {activity === 7 && (
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
                        padding: '20px',
                        fontSize: '18px',
                        textAlign: 'left',
                        background: 'white',
                        border: '3px solid #d1d5db',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => e.target.style.borderColor = '#667eea'}
                      onMouseLeave={(e) => e.target.style.borderColor = '#d1d5db'}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </>
            )}

            {showFB && (
              <div style={{
                marginTop: '30px',
                padding: '20px',
                borderRadius: '15px',
                background: feedback.includes('⭐') ? 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)' : 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
                textAlign: 'center',
                fontSize: '24px',
                fontWeight: 'bold',
                color: feedback.includes('⭐') ? '#065f46' : '#78350f',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
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
    const getBadge = () => {
      const percentage = (correct / (unit.vocabulary.length * 8)) * 100;
      if (percentage >= 90) return { name: '🥇 Gold Master', color: '#fbbf24', bg: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)' };
      if (percentage >= 75) return { name: '🥈 Silver Star', color: '#9ca3af', bg: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)' };
      if (percentage >= 60) return { name: '🥉 Bronze Hero', color: '#d97706', bg: 'linear-gradient(135deg, #fed7aa 0%, #fdba74 100%)' };
      return { name: '🎖️ Participant', color: '#6b7280', bg: 'linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%)' };
    };

    const badge = getBadge();
    
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '30px',
          padding: '60px',
          maxWidth: '700px',
          width: '100%',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '100px', marginBottom: '20px' }}>🏆</div>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: '#1f2937', marginBottom: '20px' }}>
            🎉 Congratulations, {student}! 🎉
          </h1>
          <p style={{ fontSize: '28px', color: '#6b7280', marginBottom: '30px' }}>
            You completed <span style={{ fontWeight: 'bold', color: '#10b981' }}>{unit.title}</span>!
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '15px',
            marginBottom: '30px'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
              padding: '25px 20px',
              borderRadius: '20px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '10px' }}>⭐</div>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#1f2937' }}>{score}</div>
              <div style={{ fontSize: '14px', color: '#78350f', fontWeight: '600' }}>Points</div>
            </div>
            
            <div style={{
              background: badge.bg,
              padding: '25px 20px',
              borderRadius: '20px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '10px' }}>🏅</div>
              <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', marginBottom: '5px' }}>
                {badge.name.split(' ')[0]}
              </div>
              <div style={{ fontSize: '14px', color: badge.color, fontWeight: '600' }}>Badge</div>
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)',
              padding: '25px 20px',
              borderRadius: '20px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '10px' }}>🔥</div>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#1f2937' }}>{maxStreak}</div>
              <div style={{ fontSize: '14px', color: '#991b1b', fontWeight: '600' }}>Best Streak</div>
            </div>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
            padding: '25px',
            borderRadius: '20px',
            marginBottom: '30px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
          }}>
            <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#065f46', marginBottom: '10px' }}>
              ✨ You learned {unit.vocabulary.length} new words! ✨
            </p>
            <p style={{ fontSize: '16px', color: '#047857' }}>
              Accuracy: {Math.round((correct / (unit.vocabulary.length * 8)) * 100)}% • 
              {' '}{correct}/{unit.vocabulary.length * 8} correct answers
            </p>
          </div>

          <div style={{ display: 'flex', gap: '15px' }}>
            <button
              onClick={() => setScreen('home')}
              style={{
                flex: 1,
                padding: '18px',
                fontSize: '18px',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '15px',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              ← Back to Home
            </button>
            
            <button
              onClick={() => {
                const nextUnit = courseData.units.find(u => u.id === unit.id + 1);
                if (nextUnit && unlocked.includes(nextUnit.id)) {
                  selectUnit(nextUnit);
                } else {
                  setScreen('home');
                }
              }}
              style={{
                flex: 1,
                padding: '18px',
                fontSize: '18px',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '15px',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
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
