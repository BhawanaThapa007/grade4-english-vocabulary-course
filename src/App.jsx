import React, { useState, useEffect } from 'react';

const courseData = {
  units: [
    {
      id: 1, 
      title: "Academic Excellence", 
      page: "P. 13", 
      color: "#60a5fa", 
      emoji: "🎓",
      description: "Master essential academic vocabulary and school-related terms to excel in your studies.",
      learningGoals: ["Understand academic terminology", "Use educational vocabulary in context", "Describe school activities confidently"],
      vocabulary: [
        { word: "knowledge", image: "🧠", definition: "Information and understanding gained through learning", sentence: "Reading books increases your ___.", scrambled: "wknoegdel" },
        { word: "assignment", image: "📋", definition: "A task given to students to complete", sentence: "I finished my math ___ yesterday.", scrambled: "sgnmentias" },
        { word: "principal", image: "👔", definition: "The head administrator of a school", sentence: "The ___ announced new rules.", scrambled: "nciprialp" },
        { word: "library", image: "📚", definition: "A place where books are kept for reading", sentence: "We borrowed books from the ___.", scrambled: "rliybra" },
        { word: "curriculum", image: "📖", definition: "The subjects taught in a school", sentence: "Our ___ includes science and math.", scrambled: "ucrrlicmuu" },
        { word: "examination", image: "✍️", definition: "A formal test of knowledge", sentence: "The final ___ is next week.", scrambled: "xanimaeoint" },
        { word: "comprehension", image: "💭", definition: "The ability to understand something", sentence: "Reading ___ is very important.", scrambled: "comprehensoin" },
        { word: "collaborate", image: "🤝", definition: "To work together with others", sentence: "Students ___ on group projects.", scrambled: "olcabloarte" },
        { word: "achievement", image: "🏆", definition: "Something accomplished successfully", sentence: "Winning the award was a great ___.", scrambled: "aciehvmeent" },
        { word: "discipline", image: "⚖️", definition: "Training to follow rules and behave properly", sentence: "Good ___ helps you succeed.", scrambled: "dsicpiline" },
        { word: "vocabulary", image: "📝", definition: "All the words used in a language", sentence: "Learning new ___ improves communication.", scrambled: "ovabularcy" },
        { word: "participate", image: "🙋", definition: "To take part in an activity", sentence: "Everyone should ___ in class.", scrambled: "articipatep" },
        { word: "analyze", image: "🔍", definition: "To examine something carefully", sentence: "Scientists ___ data to find patterns.", scrambled: "naalyzei" },
        { word: "research", image: "🔬", definition: "Careful study to discover new information", sentence: "The professor conducts important ___.", scrambled: "esrearhc" },
        { word: "certificate", image: "🎖️", definition: "An official document proving achievement", sentence: "She received a ___ for excellence.", scrambled: "ecrtifiactei" },
        { word: "concentrate", image: "🎯", definition: "To focus attention on something", sentence: "Please ___ on your work.", scrambled: "ocncentraet" },
        { word: "discussion", image: "💬", definition: "A conversation about a particular topic", sentence: "We had a ___ about climate change.", scrambled: "iscussiond" },
        { word: "demonstrate", image: "👨‍🏫", definition: "To show or explain how something works", sentence: "The teacher will ___ the experiment.", scrambled: "emonstratde" },
        { word: "summarize", image: "📄", definition: "To give a brief statement of main points", sentence: "Can you ___ the story?", scrambled: "ummarizse" },
        { word: "evaluate", image: "📊", definition: "To judge the value or quality of something", sentence: "Teachers ___ student performance.", scrambled: "vealuatee" }
      ]
    },
    {
      id: 2, 
      title: "Family Dynamics", 
      page: "P. 28", 
      color: "#f472b6", 
      emoji: "👨‍👩‍👧‍👦",
      description: "Explore comprehensive family vocabulary and relationships in modern households.",
      learningGoals: ["Describe family members and relationships", "Express family activities", "Understand family roles and responsibilities"],
      vocabulary: [
        { word: "relatives", image: "👪", definition: "Members of your extended family", sentence: "All our ___ came for the reunion.", scrambled: "elativresr" },
        { word: "sibling", image: "👧👦", definition: "A brother or sister", sentence: "My ___ and I play together.", scrambled: "iblsing" },
        { word: "ancestor", image: "👴", definition: "A family member from past generations", sentence: "My great-grandfather is my ___.", scrambled: "ncestoar" },
        { word: "guardian", image: "🛡️", definition: "Someone responsible for caring for a child", sentence: "Her aunt is her legal ___.", scrambled: "uagrdani" },
        { word: "generation", image: "👶👨👴", definition: "All people born around the same time", sentence: "Three ___ live in our house.", scrambled: "enerationg" },
        { word: "upbringing", image: "🏡", definition: "The way a child is raised and educated", sentence: "She had a loving ___.", scrambled: "pbringingu" },
        { word: "household", image: "🏠", definition: "All the people living together in a home", sentence: "Our ___ has five members.", scrambled: "ouseholhd" },
        { word: "responsibility", image: "✅", definition: "A duty or task you must do", sentence: "Feeding the dog is my ___.", scrambled: "esponsibilityr" },
        { word: "tradition", image: "🎊", definition: "A custom passed down through families", sentence: "Celebrating holidays is our ___.", scrambled: "raditiont" },
        { word: "inherit", image: "💎", definition: "To receive something from family members", sentence: "Children ___ traits from parents.", scrambled: "nheriit" },
        { word: "affection", image: "❤️", definition: "Feelings of love and care", sentence: "Parents show ___ to their children.", scrambled: "ffectiona" },
        { word: "support", image: "🤗", definition: "Help and encouragement given to someone", sentence: "Family provides emotional ___.", scrambled: "upportsst" },
        { word: "reunion", image: "🎉", definition: "A gathering of separated family members", sentence: "We have a family ___ every summer.", scrambled: "eunionr" },
        { word: "genealogy", image: "🌳", definition: "The study of family history", sentence: "She traced her family ___.", scrambled: "enealoggy" },
        { word: "adopt", image: "👶", definition: "To legally take another's child as your own", sentence: "They decided to ___ a baby.", scrambled: "dopta" },
        { word: "nurture", image: "🌱", definition: "To care for and help someone grow", sentence: "Parents ___ their children's talents.", scrambled: "urturne" },
        { word: "bond", image: "🔗", definition: "A close connection between people", sentence: "The family ___ is very strong.", scrambled: "ondb" },
        { word: "descendant", image: "👶", definition: "A person related to someone from the past", sentence: "She is a ___ of royalty.", scrambled: "escendantd" },
        { word: "kinship", image: "🤝", definition: "Family relationship or feeling of closeness", sentence: "There's a strong ___ among cousins.", scrambled: "inshipk" },
        { word: "heritage", image: "🏛️", definition: "Traditions and culture passed through families", sentence: "We celebrate our cultural ___.", scrambled: "eritageh" }
      ]
    },
    {
      id: 3, 
      title: "Time Management", 
      page: "P. 48", 
      color: "#a78bfa", 
      emoji: "⏰",
      description: "Learn advanced time-related vocabulary to organize your day and discuss schedules effectively.",
      learningGoals: ["Express time accurately", "Discuss schedules and routines", "Use temporal expressions fluently"],
      vocabulary: [
        { word: "schedule", image: "📅", definition: "A plan of activities and their times", sentence: "Check your ___ for tomorrow.", scrambled: "chedulse" },
        { word: "punctual", image: "⏰", definition: "Arriving or happening at the right time", sentence: "Being ___ shows respect.", scrambled: "unctualp" },
        { word: "deadline", image: "📆", definition: "The time by which something must be done", sentence: "The project ___ is Friday.", scrambled: "eadlined" },
        { word: "duration", image: "⏱️", definition: "The length of time something lasts", sentence: "The movie's ___ is two hours.", scrambled: "urationd" },
        { word: "postpone", image: "⏭️", definition: "To delay an event to a later time", sentence: "We must ___ the meeting.", scrambled: "ostponep" },
        { word: "simultaneous", image: "🔄", definition: "Happening at the same time", sentence: "Both events were ___.", scrambled: "imultaneouss" },
        { word: "contemporary", image: "🆕", definition: "Belonging to the present time", sentence: "This is a ___ issue.", scrambled: "ontemporaryc" },
        { word: "interval", image: "⏸️", definition: "A period of time between events", sentence: "There's a short ___ between classes.", scrambled: "ntervalii" },
        { word: "chronological", image: "📊", definition: "Arranged in order of time", sentence: "List events in ___ order.", scrambled: "hronologicalc" },
        { word: "era", image: "🏛️", definition: "A long period of time in history", sentence: "The digital ___ has transformed life.", scrambled: "rea" },
        { word: "century", image: "💯", definition: "A period of one hundred years", sentence: "We live in the 21st ___.", scrambled: "enturyc" },
        { word: "decade", image: "🔟", definition: "A period of ten years", sentence: "The last ___ saw many changes.", scrambled: "ecaded" },
        { word: "eternal", image: "♾️", definition: "Lasting forever, without end", sentence: "Love can feel ___.", scrambled: "ternale" },
        { word: "temporary", image: "⏳", definition: "Lasting for a limited time only", sentence: "This is just a ___ solution.", scrambled: "emporaryt" },
        { word: "permanent", image: "🔒", definition: "Lasting forever or for a very long time", sentence: "She got a ___ position.", scrambled: "ermanentp" },
        { word: "occasion", image: "🎈", definition: "A particular event or celebration", sentence: "Birthdays are special ___.", scrambled: "ccasioon" },
        { word: "frequent", image: "🔁", definition: "Happening often", sentence: "He makes ___ visits.", scrambled: "requentf" },
        { word: "immediate", image: "⚡", definition: "Happening right away, without delay", sentence: "We need an ___ response.", scrambled: "mmediateii" },
        { word: "eventually", image: "🎯", definition: "In the end, after some time", sentence: "She ___ became a doctor.", scrambled: "ventuallyee" },
        { word: "preceding", image: "⬅️", definition: "Coming before in time or order", sentence: "The ___ chapter was interesting.", scrambled: "recedinggp" }
      ]
    },
    {
      id: 4, 
      title: "Emotions & Character", 
      page: "P. 69", 
      color: "#34d399", 
      emoji: "😊",
      description: "Master vocabulary for expressing complex emotions and describing personality traits.",
      learningGoals: ["Express emotions accurately", "Describe character traits", "Understand emotional intelligence"],
      vocabulary: [
        { word: "optimistic", image: "🌟", definition: "Hopeful and confident about the future", sentence: "She has an ___ outlook.", scrambled: "ptimistico" },
        { word: "anxious", image: "😰", definition: "Worried or nervous about something", sentence: "He felt ___ before the test.", scrambled: "nxiousa" },
        { word: "confident", image: "💪", definition: "Believing in your own abilities", sentence: "Be ___ in yourself.", scrambled: "onfidentc" },
        { word: "generous", image: "🎁", definition: "Willing to give and share with others", sentence: "She is very ___ with her time.", scrambled: "enerousg" },
        { word: "courageous", image: "🦁", definition: "Brave and not afraid of danger", sentence: "The firefighter was ___.", scrambled: "ourageouscg" },
        { word: "compassionate", image: "❤️", definition: "Showing sympathy and concern for others", sentence: "Nurses are very ___.", scrambled: "ompassionatec" },
        { word: "determined", image: "🎯", definition: "Having a strong will to achieve something", sentence: "She is ___ to succeed.", scrambled: "eterminedd" },
        { word: "enthusiastic", image: "🎉", definition: "Showing intense enjoyment and interest", sentence: "He's ___ about sports.", scrambled: "nthusiastice" },
        { word: "frustrated", image: "😤", definition: "Feeling upset because you can't achieve something", sentence: "I was ___ with the puzzle.", scrambled: "rustratedf" },
        { word: "grateful", image: "🙏", definition: "Feeling thankful and appreciative", sentence: "I'm ___ for your help.", scrambled: "ratefulgr" },
        { word: "humble", image: "🙇", definition: "Not proud or arrogant; modest", sentence: "Despite success, he remains ___.", scrambled: "umbleh" },
        { word: "ambitious", image: "🚀", definition: "Having strong desire for success", sentence: "She's ___ and hardworking.", scrambled: "mbitiousai" },
        { word: "patient", image: "⏳", definition: "Able to wait calmly without complaining", sentence: "Teachers must be very ___.", scrambled: "atientp" },
        { word: "resilient", image: "🌳", definition: "Able to recover quickly from difficulties", sentence: "Children are remarkably ___.", scrambled: "esilientry" },
        { word: "sincere", image: "💯", definition: "Genuine and honest in feelings", sentence: "He gave a ___ apology.", scrambled: "inceres" },
        { word: "tolerant", image: "🤝", definition: "Accepting of different opinions and behaviors", sentence: "We should be ___ of differences.", scrambled: "olerantt" },
        { word: "pessimistic", image: "☁️", definition: "Expecting bad things to happen", sentence: "Don't be so ___ about the future.", scrambled: "essimisticp" },
        { word: "jealous", image: "😒", definition: "Envious of someone's advantages", sentence: "She felt ___ of his success.", scrambled: "ealousj" },
        { word: "ashamed", image: "😔", definition: "Feeling embarrassed or guilty", sentence: "He was ___ of his mistake.", scrambled: "shamedaa" },
        { word: "delighted", image: "😄", definition: "Very pleased and happy", sentence: "We were ___ with the results.", scrambled: "elightedd" }
      ]
    }
  ]
};

const welcomeMessages = [
  "Ready to expand your vocabulary today?",
  "Let's make learning an adventure!",
  "Your brain is amazing - let's exercise it!",
  "Every word you learn opens new doors!",
  "Knowledge is power - let's grow together!",
  "You're doing great - keep learning!",
  "Today's practice brings tomorrow's success!",
  "Learning never stops - let's begin!",
  "Your effort today creates tomorrow's achievements!"
];

const getBadge = (unitsCompleted) => {
  if (unitsCompleted >= 4) return { emoji: "👑", name: "Vocabulary Master", color: "#fbbf24" };
  if (unitsCompleted >= 3) return { emoji: "🥇", name: "Gold Achiever", color: "#f59e0b" };
  if (unitsCompleted >= 2) return { emoji: "🥈", name: "Silver Learner", color: "#9ca3af" };
  if (unitsCompleted >= 1) return { emoji: "🥉", name: "Bronze Starter", color: "#d97706" };
  return { emoji: "🌟", name: "Beginner", color: "#8b5cf6" };
};

const congratulationMessages = [
  "Outstanding work! You're becoming a vocabulary expert!",
  "Phenomenal achievement! Your dedication is impressive!",
  "Bravo! You've mastered another unit brilliantly!",
  "Magnificent! Your vocabulary skills are growing rapidly!",
  "Superb performance! Keep up the excellent work!",
  "Exceptional! You're on the path to vocabulary mastery!",
  "Incredible job! Your hard work is paying off!",
  "Remarkable! You've proven your dedication to learning!"
];

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
  const [hints, setHints] = useState(5);
  const [showHint, setShowHint] = useState(false);
  const [welcomeMsg, setWelcomeMsg] = useState('');
  const [unitScore, setUnitScore] = useState(0);
  const [leaderboard, setLeaderboard] = useState([
    "Alex Chen",
    "Maria Garcia",
    "Jamal Williams",
    "Sofia Rodriguez",
    "David Kim",
    "Emma Thompson",
    "Liam Patel",
    "Olivia Martinez"
  ]);

  useEffect(() => {
    setWelcomeMsg(welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)]);
  }, [student]);

  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const u = new SpeechSynthesisUtterance(text);
      u.rate = 0.8;
      window.speechSynthesis.speak(u);
    }
  };

  const handleStart = () => {
    if (nameInput.trim()) {
      setStudent(nameInput.trim());
      setScreen('home');
    }
  };

  const selectUnit = (u) => {
    if (!unlocked.includes(u.id)) {
      alert('🔒 Complete previous units first!');
      return;
    }
    setUnit(u);
    setScreen('unitIntro');
  };

  const startUnit = () => {
    setActivity(0);
    setQuestion(0);
    setUnitScore(0);
    setCorrect(0);
    setStreak(0);
    setScreen('activity');
  };

  const handleAnswer = (ans, correctAns, isText = false) => {
    const isCorrect = isText 
      ? ans.toLowerCase().trim() === correctAns.toLowerCase() 
      : ans === correctAns;
    
    if (isCorrect) {
      const pts = 10 + (streak * 2);
      setScore(score + pts);
      setUnitScore(unitScore + pts);
      setStars(stars + 1);
      setCorrect(correct + 1);
      setStreak(streak + 1);
      if (streak + 1 > maxStreak) setMaxStreak(streak + 1);
      setFeedback(`⭐ Perfect! +${pts} pts! 🔥 ${streak + 1} streak!`);
    } else {
      setStreak(0);
      setFeedback(`❌ Correct answer: ${correctAns}`);
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

  const downloadCertificate = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 850;
    const ctx = canvas.getContext('2d');

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#667eea');
    gradient.addColorStop(1, '#764ba2');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 20;
    ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);
    ctx.lineWidth = 5;
    ctx.strokeRect(60, 60, canvas.width - 120, canvas.height - 120);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 60px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('CERTIFICATE OF ACHIEVEMENT', canvas.width / 2, 150);

    ctx.font = '30px Arial';
    ctx.fillText('This is to certify that', canvas.width / 2, 230);

    ctx.font = 'bold 70px Arial';
    ctx.fillStyle = '#fbbf24';
    ctx.fillText(student, canvas.width / 2, 330);

    ctx.fillStyle = '#ffffff';
    ctx.font = '28px Arial';
    ctx.fillText('has successfully completed', canvas.width / 2, 410);

    ctx.font = 'bold 50px Arial';
    ctx.fillStyle = '#fde68a';
    ctx.fillText(`${unit.emoji} ${unit.title}`, canvas.width / 2, 490);

    ctx.font = '24px Arial';
    ctx.fillStyle = '#ffffff';
    const accuracy = Math.round((correct / (unit.vocabulary.length * 8)) * 100);
    ctx.fillText(`Score: ${unitScore} points  •  Accuracy: ${accuracy}%  •  Streak: ${maxStreak}`, canvas.width / 2, 560);

    const badge = getBadge(completed.length);
    ctx.font = '80px Arial';
    ctx.fillText(badge.emoji, canvas.width / 2, 650);
    ctx.font = 'bold 30px Arial';
    ctx.fillStyle = badge.color;
    ctx.fillText(badge.name, canvas.width / 2, 700);

    ctx.fillStyle = '#ffffff';
    ctx.font = '20px Arial';
    const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    ctx.fillText(date, canvas.width / 2, 780);

    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = `${student}_${unit.title}_Certificate.png`;
      link.href = url;
      link.click();
      URL.revokeObjectURL(url);
    });
  };

  if (screen === 'welcome') {
    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <div style={{ background: 'white', borderRadius: '30px', padding: '60px 50px', maxWidth: '600px', width: '100%', boxShadow: '0 25px 70px rgba(0,0,0,0.4)', textAlign: 'center' }}>
          <div style={{ fontSize: '100px', marginBottom: '20px' }}>🎮</div>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '10px' }}>
            English Adventure
          </h1>
          <p style={{ fontSize: '20px', color: '#6b7280', marginBottom: '40px' }}>Grade 4-6 • 20 Words • 8 Activities per Unit</p>
          
          <div style={{ background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', padding: '20px', borderRadius: '15px', marginBottom: '30px', fontSize: '14px', fontWeight: '600', color: '#78350f' }}>
            🎮 Picture Match • ✍️ Word Match • 🔗 Matching • 🔤 Spelling<br />
            🎧 Listen & Click • 🧩 Scramble • 📝 Fill Blanks • 🏆 Quiz
          </div>

          <input
            type="text"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleStart()}
            placeholder="Enter your name..."
            style={{ width: '100%', padding: '16px 20px', fontSize: '18px', borderRadius: '15px', border: '3px solid #e5e7eb', outline: 'none', marginBottom: '20px' }}
          />

          <button onClick={handleStart} disabled={!nameInput.trim()} style={{ width: '100%', padding: '20px', fontSize: '22px', fontWeight: 'bold', color: 'white', background: nameInput.trim() ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#d1d5db', border: 'none', borderRadius: '15px', cursor: nameInput.trim() ? 'pointer' : 'not-allowed' }}>
            🚀 Start Adventure!
          </button>
        </div>
      </div>
    );
  }

  if (screen === 'home') {
    const progress = Math.round((completed.length / courseData.units.length) * 100);
    const badge = getBadge(completed.length);
    
    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '20px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ background: 'white', borderRadius: '25px', padding: '35px', marginBottom: '25px', boxShadow: '0 15px 40px rgba(0,0,0,0.25)' }}>
            <h2 style={{ fontSize: '36px', color: '#1f2937', marginBottom: '10px', textAlign: 'center' }}>
              Welcome back, <span style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{student}</span>! 👋
            </h2>
            <p style={{ fontSize: '18px', color: '#6b7280', textAlign: 'center', marginBottom: '25px', fontStyle: 'italic' }}>
              {welcomeMsg}
            </p>

            <div style={{ display: 'flex', gap: '15px', marginBottom: '25px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <div style={{ background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)', padding: '15px 25px', borderRadius: '15px', color: 'white', minWidth: '150px', textAlign: 'center' }}>
                <div style={{ fontSize: '28px', fontWeight: 'bold' }}>⭐ {stars}</div>
                <div style={{ fontSize: '12px', fontWeight: '600' }}>Total Stars</div>
              </div>
              <div style={{ background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', padding: '15px 25px', borderRadius: '15px', color: 'white', minWidth: '150px', textAlign: 'center' }}>
                <div style={{ fontSize: '28px', fontWeight: 'bold' }}>🔥 {maxStreak}</div>
                <div style={{ fontSize: '12px', fontWeight: '600' }}>Best Streak</div>
              </div>
              <div style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)', padding: '15px 25px', borderRadius: '15px', color: 'white', minWidth: '150px', textAlign: 'center' }}>
                <div style={{ fontSize: '28px', fontWeight: 'bold' }}>💡 {hints}</div>
                <div style={{ fontSize: '12px', fontWeight: '600' }}>Hints Left</div>
              </div>
              <div style={{ background: `linear-gradient(135deg, ${badge.color} 0%, ${badge.color}dd 100%)`, padding: '15px 25px', borderRadius: '15px', color: 'white', minWidth: '150px', textAlign: 'center' }}>
                <div style={{ fontSize: '28px', fontWeight: 'bold' }}>{badge.emoji}</div>
                <div style={{ fontSize: '12px', fontWeight: '600' }}>{badge.name}</div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '25px' }}>
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

              <div style={{ background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', borderRadius: '18px', padding: '25px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px', color: '#78350f' }}>🏆 Leaderboard</h3>
                <div style={{ maxHeight: '180px', overflowY: 'auto' }}>
                  {leaderboard.map((playerName, idx) => (
                    <div key={idx} style={{ background: 'white', padding: '12px 15px', borderRadius: '10px', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '22px', fontWeight: 'bold', color: idx === 0 ? '#fbbf24' : idx === 1 ? '#9ca3af' : idx === 2 ? '#d97706' : '#6b7280', minWidth: '35px' }}>
                        #{idx + 1}
                      </span>
                      <span style={{ fontSize: '16px', fontWeight: '600', color: '#1f2937' }}>{playerName}</span>
                    </div>
                  ))}
                  <div style={{ background: '#e0e7ff', padding: '12px 15px', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '12px', border: '3px solid #667eea' }}>
                    <span style={{ fontSize: '22px', fontWeight: 'bold', color: '#667eea', minWidth: '35px' }}>
                      #{leaderboard.length + 1}
                    </span>
                    <span style={{ fontSize: '16px', fontWeight: '600', color: '#1f2937' }}>{student} (You)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '22px' }}>
            {courseData.units.map(u => {
              const isUnlocked = unlocked.includes(u.id);
              const isDone = completed.includes(u.id);

              return (
                <div key={u.id} onClick={() => selectUnit(u)} style={{ background: 'white', borderRadius: '22px', overflow: 'hidden', cursor: isUnlocked ? 'pointer' : 'not-allowed', boxShadow: '0 12px 30px rgba(0,0,0,0.18)', border: isDone ? '4px solid #10b981' : 'none', opacity: isUnlocked ? 1 : 0.6, transition: 'all 0.3s', position: 'relative', transform: isUnlocked ? 'scale(1)' : 'scale(0.98)' }}>
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

  if (screen === 'unitIntro' && unit) {
    return (
      <div style={{ minHeight: '100vh', background: `linear-gradient(135deg, ${unit.color} 0%, ${unit.color}dd 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <div style={{ background: 'white', borderRadius: '30px', padding: '50px 40px', maxWidth: '800px', width: '100%', boxShadow: '0 25px 70px rgba(0,0,0,0.4)' }}>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <div style={{ fontSize: '100px', marginBottom: '15px' }}>{unit.emoji}</div>
            <h1 style={{ fontSize: '42px', fontWeight: 'bold', color: '#1f2937', marginBottom: '10px' }}>
              {unit.title}
            </h1>
            <p style={{ fontSize: '18px', color: '#6b7280', marginBottom: '5px' }}>{unit.page}</p>
            <div style={{ display: 'inline-block', background: `${unit.color}22`, padding: '8px 20px', borderRadius: '20px', fontSize: '16px', fontWeight: 'bold', color: unit.color }}>
              {unit.vocabulary.length} Words • 8 Activities
            </div>
          </div>

          <div style={{ background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)', padding: '25px', borderRadius: '20px', marginBottom: '25px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', marginBottom: '15px' }}>📚 About This Unit</h3>
            <p style={{ fontSize: '16px', color: '#4b5563', lineHeight: '1.6', marginBottom: '20px' }}>
              {unit.description}
            </p>
            
            <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1f2937', marginBottom: '12px' }}>🎯 Learning Goals:</h4>
            <ul style={{ paddingLeft: '20px' }}>
              {unit.learningGoals.map((goal, idx) => (
                <li key={idx} style={{ fontSize: '15px', color: '#4b5563', marginBottom: '8px', lineHeight: '1.5' }}>{goal}</li>
              ))}
            </ul>
          </div>

          <div style={{ background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', padding: '20px', borderRadius: '15px', marginBottom: '25px' }}>
            <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#78350f', marginBottom: '10px' }}>📋 What You'll Do:</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', fontSize: '14px', color: '#78350f', fontWeight: '600' }}>
              <div>🎮 Picture Matching</div>
              <div>✍️ Word Recognition</div>
              <div>🔗 Connect & Match</div>
              <div>🔤 Spelling Practice</div>
              <div>🎧 Listening Skills</div>
              <div>🧩 Word Scrambles</div>
              <div>📝 Fill in Blanks</div>
              <div>🏆 Final Quiz</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '15px' }}>
            <button onClick={() => setScreen('home')} style={{ flex: 1, padding: '18px', fontSize: '18px', fontWeight: 'bold', background: '#6b7280', color: 'white', border: 'none', borderRadius: '15px', cursor: 'pointer' }}>
              ← Back
            </button>
            <button onClick={startUnit} style={{ flex: 2, padding: '18px', fontSize: '20px', fontWeight: 'bold', color: 'white', background: `linear-gradient(135deg, ${unit.color} 0%, ${unit.color}dd 100%)`, border: 'none', borderRadius: '15px', cursor: 'pointer' }}>
              🚀 Start Learning!
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'activity' && unit) {
    const v = unit.vocabulary[question];
    const activityNames = ['🖼️ Picture', '✍️ Word', '🔗 Match', '🔤 Spell', '🎧 Listen', '🧩 Scramble', '📝 Fill', '🏆 Quiz'];
    let options = [];
    
    if (activity === 0) options = shuffle([v.image, ...unit.vocabulary.filter(x => x.image !== v.image).slice(0, 2).map(x => x.image)]);
    else if (activity === 1) options = shuffle([v.word, ...unit.vocabulary.filter(x => x.word !== v.word).slice(0, 2).map(x => x.word)]);
    else if (activity === 2) options = shuffle([v.image, ...unit.vocabulary.filter(x => x.image !== v.image).slice(0, 2).map(x => x.image)]);
    else if (activity === 4) options = shuffle([v.word, ...unit.vocabulary.filter(x => x.word !== v.word).slice(0, 2).map(x => x.word)]);
    else if (activity === 7) options = shuffle([v.definition, ...unit.vocabulary.filter(x => x.definition !== v.definition).slice(0, 2).map(x => x.definition)]);

    return (
      <div style={{ minHeight: '100vh', background: `linear-gradient(135deg, ${unit.color} 0%, ${unit.color}dd 100%)`, padding: '20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ background: 'white', borderRadius: '20px', padding: '20px', marginBottom: '20px', boxShadow: '0 8px 20px rgba(0,0,0,0.15)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
              <button onClick={() => setScreen('home')} style={{ padding: '12px 24px', background: '#6b7280', color: 'white', border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>← Home</button>
              
              <div style={{ textAlign: 'center', flex: 1 }}>
                <div style={{ fontSize: '20px', marginBottom: '5px' }}>{unit.emoji} {unit.title}</div>
                <div style={{ fontSize: '14px', color: '#6b7280', fontWeight: '600' }}>Activity {activity + 1}/8: {activityNames[activity]}</div>
              </div>
              
              <div style={{ display: 'flex', gap: '10px' }}>
                <div style={{ background: '#fbbf24', padding: '10px 18px', borderRadius: '12px', color: 'white', fontWeight: 'bold', fontSize: '16px' }}>⭐ {unitScore}</div>
                <button onClick={useHint} disabled={hints === 0} style={{ padding: '10px 18px', background: hints > 0 ? '#8b5cf6' : '#d1d5db', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: hints > 0 ? 'pointer' : 'not-allowed', fontSize: '16px' }}>💡 {hints}</button>
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

          <div style={{ background: 'white', borderRadius: '20px', padding: '40px', boxShadow: '0 8px 20px rgba(0,0,0,0.15)', position: 'relative' }}>
            {showFB && (
              <div style={{ position: 'absolute', top: '20px', left: '20px', right: '20px', padding: '20px', background: feedback.includes('Perfect') ? '#d1fae5' : '#fee2e2', borderRadius: '12px', textAlign: 'center', fontWeight: 'bold', color: feedback.includes('Perfect') ? '#065f46' : '#991b1b', fontSize: '18px', zIndex: 10 }}>
                {feedback}
              </div>
            )}

            {showHint && (
              <div style={{ marginBottom: '20px', padding: '15px', background: '#fef3c7', borderRadius: '12px', textAlign: 'center', fontWeight: 'bold', color: '#78350f' }}>
                💡 Hint: {v.definition}
              </div>
            )}

            {activity === 0 && (
              <div>
                <h2 style={{ fontSize: '42px', fontWeight: 'bold', textAlign: 'center', marginBottom: '30px' }}>{v.word}</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
                  {options.map((opt, i) => (
                    <button key={i} onClick={() => handleAnswer(opt, v.image)} style={{ padding: '35px', fontSize: '60px', background: 'white', border: '4px solid #d1d5db', borderRadius: '15px', cursor: 'pointer', transition: 'all 0.2s' }} onMouseEnter={(e) => e.target.style.borderColor = unit.color} onMouseLeave={(e) => e.target.style.borderColor = '#d1d5db'}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activity === 1 && (
              <div>
                <div style={{ fontSize: '90px', textAlign: 'center', marginBottom: '30px' }}>{v.image}</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                  {options.map((opt, i) => (
                    <button key={i} onClick={() => handleAnswer(opt, v.word)} style={{ padding: '18px', fontSize: '18px', fontWeight: 'bold', background: 'white', border: '4px solid #d1d5db', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s' }} onMouseEnter={(e) => e.target.style.borderColor = unit.color} onMouseLeave={(e) => e.target.style.borderColor = '#d1d5db'}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activity === 2 && (
              <div>
                <h2 style={{ fontSize: '32px', fontWeight: 'bold', textAlign: 'center', marginBottom: '15px' }}>{v.word}</h2>
                <p style={{ textAlign: 'center', fontSize: '16px', color: '#6b7280', marginBottom: '25px' }}>Click the matching picture</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
                  {options.map((opt, i) => (
                    <button key={i} onClick={() => handleAnswer(opt, v.image)} style={{ padding: '35px', fontSize: '60px', background: 'white', border: '4px solid #d1d5db', borderRadius: '15px', cursor: 'pointer', transition: 'all 0.2s' }} onMouseEnter={(e) => e.target.style.borderColor = unit.color} onMouseLeave={(e) => e.target.style.borderColor = '#d1d5db'}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activity === 3 && (
              <div>
                <div style={{ fontSize: '70px', textAlign: 'center', marginBottom: '20px' }}>{v.image}</div>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginBottom: '25px' }}>Spell the word</h2>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAnswer(input, v.word, true)}
                  placeholder="Type here..."
                  style={{ width: '100%', padding: '18px', fontSize: '22px', borderRadius: '12px', border: '3px solid #d1d5db', outline: 'none', textAlign: 'center', marginBottom: '15px' }}
                  autoFocus
                />
                <button onClick={() => handleAnswer(input, v.word, true)} style={{ width: '100%', padding: '16px', fontSize: '18px', fontWeight: 'bold', background: '#10b981', color: 'white', border: 'none', borderRadius: '12px', cursor: 'pointer' }}>
                  ✓ Submit
                </button>
              </div>
            )}

            {activity === 4 && (
              <div>
                <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                  <button onClick={() => speak(v.word)} style={{ padding: '25px', fontSize: '70px', background: '#dbeafe', border: `4px solid ${unit.color}`, borderRadius: '18px', cursor: 'pointer', marginBottom: '15px' }}>
                    🔊
                  </button>
                  <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#6b7280' }}>Listen and click the correct word</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                  {options.map((opt, i) => (
                    <button key={i} onClick={() => handleAnswer(opt, v.word)} style={{ padding: '18px', fontSize: '18px', fontWeight: 'bold', background: 'white', border: '4px solid #d1d5db', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s' }} onMouseEnter={(e) => e.target.style.borderColor = unit.color} onMouseLeave={(e) => e.target.style.borderColor = '#d1d5db'}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activity === 5 && (
              <div>
                <div style={{ fontSize: '60px', textAlign: 'center', marginBottom: '18px' }}>{v.image}</div>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginBottom: '12px', color: '#6b7280' }}>
                  Unscramble: <span style={{ color: '#ef4444', fontFamily: 'monospace' }}>{v.scrambled}</span>
                </h2>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAnswer(input, v.word, true)}
                  placeholder="Type the word..."
                  style={{ width: '100%', padding: '18px', fontSize: '22px', borderRadius: '12px', border: '3px solid #d1d5db', outline: 'none', textAlign: 'center', marginBottom: '15px' }}
                  autoFocus
                />
                <button onClick={() => handleAnswer(input, v.word, true)} style={{ width: '100%', padding: '16px', fontSize: '18px', fontWeight: 'bold', background: '#10b981', color: 'white', border: 'none', borderRadius: '12px', cursor: 'pointer' }}>
                  ✓ Submit
                </button>
              </div>
            )}

            {activity === 6 && (
              <div>
                <div style={{ fontSize: '60px', textAlign: 'center', marginBottom: '18px' }}>{v.image}</div>
                <h2 style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center', marginBottom: '25px', lineHeight: '1.6' }}>
                  {v.sentence.replace('___', '______')}
                </h2>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAnswer(input, v.word, true)}
                  placeholder="Type the missing word..."
                  style={{ width: '100%', padding: '18px', fontSize: '22px', borderRadius: '12px', border: '3px solid #d1d5db', outline: 'none', textAlign: 'center', marginBottom: '15px' }}
                  autoFocus
                />
                <button onClick={() => handleAnswer(input, v.word, true)} style={{ width: '100%', padding: '16px', fontSize: '18px', fontWeight: 'bold', background: '#10b981', color: 'white', border: 'none', borderRadius: '12px', cursor: 'pointer' }}>
                  ✓ Submit
                </button>
              </div>
            )}

            {activity === 7 && (
              <div>
                <div style={{ fontSize: '70px', textAlign: 'center', marginBottom: '20px' }}>{v.image}</div>
                <h2 style={{ fontSize: '26px', fontWeight: 'bold', textAlign: 'center', marginBottom: '10px' }}>{v.word}</h2>
                <p style={{ textAlign: 'center', fontSize: '16px', color: '#6b7280', marginBottom: '25px' }}>Which definition is correct?</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {options.map((opt, i) => (
                    <button key={i} onClick={() => handleAnswer(opt, v.definition)} style={{ padding: '20px', fontSize: '16px', fontWeight: '600', background: 'white', border: '4px solid #d1d5db', borderRadius: '12px', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s' }} onMouseEnter={(e) => e.target.style.borderColor = unit.color} onMouseLeave={(e) => e.target.style.borderColor = '#d1d5db'}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (screen === 'completion') {
    const accuracy = Math.round((correct / (unit.vocabulary.length * 8)) * 100);
    const congratMsg = congratulationMessages[Math.floor(Math.random() * congratulationMessages.length)];
    const badge = getBadge(completed.length);
    
    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <div style={{ background: 'white', borderRadius: '30px', padding: '60px 50px', maxWidth: '700px', width: '100%', boxShadow: '0 25px 70px rgba(0,0,0,0.4)', textAlign: 'center' }}>
          <div style={{ fontSize: '100px', marginBottom: '20px', animation: 'bounce 1s infinite' }}>🎉</div>
          <h1 style={{ fontSize: '42px', fontWeight: 'bold', color: '#1f2937', marginBottom: '15px' }}>
            Congratulations!
          </h1>
          <p style={{ fontSize: '20px', color: '#667eea', marginBottom: '15px', fontWeight: 'bold' }}>
            {unit.emoji} {unit.title} Complete!
          </p>
          <p style={{ fontSize: '16px', color: '#6b7280', marginBottom: '30px', fontStyle: 'italic', lineHeight: '1.6' }}>
            {congratMsg}
          </p>

          <div style={{ background: `linear-gradient(135deg, ${badge.color}22 0%, ${badge.color}44 100%)`, padding: '20px', borderRadius: '20px', marginBottom: '30px' }}>
            <div style={{ fontSize: '80px', marginBottom: '10px' }}>{badge.emoji}</div>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: badge.color }}>{badge.name}</div>
            <div style={{ fontSize: '14px', color: '#6b7280', marginTop: '5px' }}>Achievement Unlocked!</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', marginBottom: '30px' }}>
            <div style={{ background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)', padding: '25px', borderRadius: '15px', color: 'white' }}>
              <div style={{ fontSize: '36px', fontWeight: 'bold' }}>⭐ {unitScore}</div>
              <div style={{ fontSize: '14px', fontWeight: '600' }}>Points Earned</div>
            </div>
            <div style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', padding: '25px', borderRadius: '15px', color: 'white' }}>
              <div style={{ fontSize: '36px', fontWeight: 'bold' }}>{accuracy}%</div>
              <div style={{ fontSize: '14px', fontWeight: '600' }}>Accuracy</div>
            </div>
            <div style={{ background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', padding: '25px', borderRadius: '15px', color: 'white' }}>
              <div style={{ fontSize: '36px', fontWeight: 'bold' }}>🔥 {maxStreak}</div>
              <div style={{ fontSize: '14px', fontWeight: '600' }}>Best Streak</div>
            </div>
            <div style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)', padding: '25px', borderRadius: '15px', color: 'white' }}>
              <div style={{ fontSize: '36px', fontWeight: 'bold' }}>{correct}/{unit.vocabulary.length * 8}</div>
              <div style={{ fontSize: '14px', fontWeight: '600' }}>Correct</div>
            </div>
          </div>

          {unit.id < 4 && !unlocked.includes(unit.id + 1) && (
            <div style={{ background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', padding: '20px', borderRadius: '15px', marginBottom: '20px', fontSize: '16px', fontWeight: '600', color: '#78350f' }}>
              🔓 Great News! Unit {unit.id + 1} is Now Unlocked!
            </div>
          )}

          <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
            <button onClick={downloadCertificate} style={{ flex: 1, padding: '18px', fontSize: '18px', fontWeight: 'bold', color: 'white', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', border: 'none', borderRadius: '15px', cursor: 'pointer' }}>
              📜 Download Certificate
            </button>
            <button onClick={() => setScreen('home')} style={{ flex: 1, padding: '18px', fontSize: '18px', fontWeight: 'bold', color: 'white', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', border: 'none', borderRadius: '15px', cursor: 'pointer' }}>
              🏠 Continue
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default App;
