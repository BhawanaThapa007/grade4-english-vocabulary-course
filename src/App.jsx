import React, { useState, useEffect } from 'react';

const vocabularyData = {
  unit1: {
    multipleChoice: [
      { word: "knowledge", definition: "Information and understanding gained through learning" },
      { word: "assignment", definition: "A task given to students to complete" },
      { word: "principal", definition: "The head administrator of a school" },
      { word: "library", definition: "A place where books are kept for reading" },
      { word: "curriculum", definition: "The subjects taught in a school" },
      { word: "examination", definition: "A formal test of knowledge" },
      { word: "comprehension", definition: "The ability to understand something" },
      { word: "collaborate", definition: "To work together with others" },
      { word: "achievement", definition: "Something accomplished successfully" },
      { word: "discipline", definition: "Training to follow rules and behave properly" },
      { word: "vocabulary", definition: "All the words used in a language" },
      { word: "participate", definition: "To take part in an activity" },
      { word: "analyze", definition: "To examine something carefully" },
      { word: "research", definition: "Careful study to discover new information" },
      { word: "certificate", definition: "An official document proving achievement" },
      { word: "concentrate", definition: "To focus attention on something" },
      { word: "discussion", definition: "A conversation about a particular topic" },
      { word: "demonstrate", definition: "To show or explain how something works" },
      { word: "summarize", definition: "To give a brief statement of main points" },
      { word: "evaluate", definition: "To judge the value or quality of something" }
    ],
    pronunciation: [
      { word: "accept", confuseWith: "except", definition: "To receive or agree to something" },
      { word: "affect", confuseWith: "effect", definition: "To influence or make a difference to" },
      { word: "desert", confuseWith: "dessert", definition: "A dry sandy region with little rain" },
      { word: "principal", confuseWith: "principle", definition: "The head of a school" },
      { word: "stationary", confuseWith: "stationery", definition: "Not moving or still" },
      { word: "weather", confuseWith: "whether", definition: "The atmospheric conditions" },
      { word: "their", confuseWith: "there", definition: "Belonging to them" },
      { word: "hear", confuseWith: "here", definition: "To perceive sound with ears" },
      { word: "right", confuseWith: "write", definition: "Correct or the opposite of left" },
      { word: "know", confuseWith: "no", definition: "To be aware of or understand" },
      { word: "our", confuseWith: "hour", definition: "Belonging to us" },
      { word: "peace", confuseWith: "piece", definition: "Freedom from war or conflict" },
      { word: "weak", confuseWith: "week", definition: "Lacking strength or power" },
      { word: "break", confuseWith: "brake", definition: "To separate into pieces" },
      { word: "bear", confuseWith: "bare", definition: "A large animal or to carry" },
      { word: "meet", confuseWith: "meat", definition: "To come together with someone" },
      { word: "sea", confuseWith: "see", definition: "A large body of salt water" },
      { word: "pair", confuseWith: "pear", definition: "Two of something" },
      { word: "flower", confuseWith: "flour", definition: "The blossom of a plant" },
      { word: "tail", confuseWith: "tale", definition: "The rear part of an animal" }
    ],
    scramble: [
      { word: "scholarship", scrambled: "holarschips", definition: "Financial aid for students" },
      { word: "graduation", scrambled: "raduationg", definition: "Completion of a course of study" },
      { word: "attendance", scrambled: "ttendancea", definition: "Being present at school" },
      { word: "homework", scrambled: "omeworkh", definition: "School work done at home" },
      { word: "textbook", scrambled: "extbookt", definition: "A book used for studying" },
      { word: "semester", scrambled: "emesterss", definition: "Half of a school year" },
      { word: "lecture", scrambled: "ecturel", definition: "An educational talk" },
      { word: "professor", scrambled: "rofessopr", definition: "A university teacher" },
      { word: "classroom", scrambled: "lassroomc", definition: "A room where lessons occur" },
      { word: "notebook", scrambled: "otebookn", definition: "A book for writing notes" },
      { word: "pencil", scrambled: "encilp", definition: "A writing instrument" },
      { word: "student", scrambled: "tudents", definition: "A person who studies" },
      { word: "teacher", scrambled: "eachert", definition: "A person who teaches" },
      { word: "learning", scrambled: "earningl", definition: "Acquiring knowledge" },
      { word: "studying", scrambled: "tudyings", definition: "Devoting time to learning" },
      { word: "lesson", scrambled: "essonl", definition: "A period of learning" },
      { word: "practice", scrambled: "racticep", definition: "Repeated exercise" },
      { word: "question", scrambled: "uestionq", definition: "A sentence asking for information" },
      { word: "answer", scrambled: "nswera", definition: "A response to a question" },
      { word: "education", scrambled: "ducatione", definition: "The process of learning" }
    ],
    fillBlanks: [
      { word: "intelligent", sentence: "She is very ___ and learns quickly.", definition: "Having good understanding" },
      { word: "difficult", sentence: "The math problem was too ___.", definition: "Hard to do or understand" },
      { word: "explain", sentence: "Can you ___ this concept to me?", definition: "To make something clear" },
      { word: "understand", sentence: "I ___ the lesson now.", definition: "To comprehend the meaning" },
      { word: "remember", sentence: "I can't ___ where I put my book.", definition: "To recall from memory" },
      { word: "improve", sentence: "Daily practice will ___ your skills.", definition: "To make better" },
      { word: "complete", sentence: "Please ___ your homework tonight.", definition: "To finish something" },
      { word: "organize", sentence: "Let's ___ our notes properly.", definition: "To arrange systematically" },
      { word: "prepare", sentence: "Students must ___ for the test.", definition: "To make ready" },
      { word: "review", sentence: "We should ___ last week's lesson.", definition: "To look at again" },
      { word: "present", sentence: "Each group will ___ their project.", definition: "To show or display" },
      { word: "compare", sentence: "Let's ___ these two stories.", definition: "To examine similarities" },
      { word: "describe", sentence: "Can you ___ what you saw?", definition: "To give details about" },
      { word: "identify", sentence: "Try to ___ the main idea.", definition: "To recognize or name" },
      { word: "conclude", sentence: "What can we ___ from this experiment?", definition: "To reach a decision" },
      { word: "predict", sentence: "Can you ___ what happens next?", definition: "To say what will happen" },
      { word: "calculate", sentence: "Please ___ the total cost.", definition: "To compute mathematically" },
      { word: "measure", sentence: "Use a ruler to ___ the length.", definition: "To find the size" },
      { word: "observe", sentence: "Scientists ___ animals in nature.", definition: "To watch carefully" },
      { word: "record", sentence: "Please ___ your results in the table.", definition: "To write down" }
    ],
    quiz: [
      { word: "academy", definition: "A school or institution for special training" },
      { word: "scholar", definition: "A learned person or student" },
      { word: "mentor", definition: "An experienced advisor or teacher" },
      { word: "tutor", definition: "A private teacher" },
      { word: "degree", definition: "An academic qualification" },
      { word: "diploma", definition: "A certificate of completion" },
      { word: "major", definition: "A main subject of study" },
      { word: "minor", definition: "A secondary subject of study" },
      { word: "credit", definition: "Unit of completed coursework" },
      { word: "grade", definition: "A level or mark of achievement" },
      { word: "report", definition: "A detailed account or document" },
      { word: "thesis", definition: "A long research essay" },
      { word: "project", definition: "A planned piece of work" },
      { word: "experiment", definition: "A scientific test" },
      { word: "laboratory", definition: "A room for scientific work" },
      { word: "reference", definition: "A source of information" },
      { word: "bibliography", definition: "A list of books referenced" },
      { word: "syllabus", definition: "An outline of course content" },
      { word: "deadline", definition: "The final time for completion" },
      { word: "transcript", definition: "An official academic record" }
    ]
  }
  },

  unit2: {
    multipleChoice: [
      { word: "family", definition: "A group of people related by blood or marriage" },
      { word: "parents", definition: "A mother and father" },
      { word: "mother", definition: "A female parent" },
      { word: "father", definition: "A male parent" },
      { word: "sibling", definition: "A brother or sister" },
      { word: "brother", definition: "A male sibling" },
      { word: "sister", definition: "A female sibling" },
      { word: "grandmother", definition: "The mother of one's parent" },
      { word: "grandfather", definition: "The father of one's parent" },
      { word: "cousin", definition: "The child of one's aunt or uncle" },
      { word: "uncle", definition: "The brother of one's parent" },
      { word: "aunt", definition: "The sister of one's parent" },
      { word: "nephew", definition: "The son of one's sibling" },
      { word: "niece", definition: "The daughter of one's sibling" },
      { word: "spouse", definition: "A husband or wife" },
      { word: "relative", definition: "A person connected by blood or marriage" },
      { word: "ancestor", definition: "A person from whom one is descended" },
      { word: "descendant", definition: "A person who comes from an ancestor" },
      { word: "guardian", definition: "A person legally responsible for a child" },
      { word: "adoption", definition: "Legally taking another's child as one's own" }
    ],
    pronunciation: [
      { word: "son", confuseWith: "sun", definition: "A male child" },
      { word: "allowed", confuseWith: "aloud", definition: "Permitted to do something" },
      { word: "buy", confuseWith: "by", definition: "To purchase something" },
      { word: "days", confuseWith: "daze", definition: "Periods of 24 hours" },
      { word: "fare", confuseWith: "fair", definition: "The cost of a journey" },
      { word: "genes", confuseWith: "jeans", definition: "Units of heredity" },
      { word: "heal", confuseWith: "heel", definition: "To become healthy again" },
      { word: "loan", confuseWith: "lone", definition: "Something borrowed" },
      { word: "made", confuseWith: "maid", definition: "Created or produced" },
      { word: "male", confuseWith: "mail", definition: "Of the sex that can father children" },
      { word: "marry", confuseWith: "merry", definition: "To become husband and wife" },
      { word: "one", confuseWith: "won", definition: "The number 1" },
      { word: "role", confuseWith: "roll", definition: "A part played by someone" },
      { word: "sole", confuseWith: "soul", definition: "Only one, single" },
      { word: "wait", confuseWith: "weight", definition: "To stay until something happens" },
      { word: "heir", confuseWith: "air", definition: "A person who inherits" },
      { word: "sight", confuseWith: "site", definition: "The ability to see" },
      { word: "patient", confuseWith: "patients", definition: "Able to wait calmly" },
      { word: "board", confuseWith: "bored", definition: "A flat piece of wood" },
      { word: "whole", confuseWith: "hole", definition: "Complete or entire" }
    ],
    scramble: [
      { word: "relationship", scrambled: "elationshipr", definition: "Connection between people" },
      { word: "household", scrambled: "ouseholdh", definition: "People living together in a home" },
      { word: "children", scrambled: "hildrenc", definition: "Young people" },
      { word: "together", scrambled: "ogethert", definition: "With or in proximity to another" },
      { word: "celebrate", scrambled: "elebratec", definition: "To honor with festivities" },
      { word: "tradition", scrambled: "raditiont", definition: "A custom passed down" },
      { word: "reunion", scrambled: "eunionr", definition: "A gathering of separated people" },
      { word: "heritage", scrambled: "eritageh", definition: "Property or traditions inherited" },
      { word: "generation", scrambled: "enerationg", definition: "All people born around the same time" },
      { word: "nurture", scrambled: "urturen", definition: "To care for and encourage growth" },
      { word: "support", scrambled: "upports", definition: "To give assistance" },
      { word: "respect", scrambled: "espectr", definition: "Admiration for someone" },
      { word: "loyalty", scrambled: "oyaltyl", definition: "Faithful support" },
      { word: "bonding", scrambled: "ondingb", definition: "Forming a close connection" },
      { word: "kinship", scrambled: "inshipk", definition: "Family relationship" },
      { word: "upbringing", scrambled: "pbringingu", definition: "The way a child is raised" },
      { word: "caretaker", scrambled: "aretakerc", definition: "Someone who looks after another" },
      { word: "protection", scrambled: "rotectionp", definition: "Keeping safe from harm" },
      { word: "guidance", scrambled: "uidanceg", definition: "Advice or direction" },
      { word: "affection", scrambled: "ffectiona", definition: "Gentle feelings of fondness" }
    ],
    fillBlanks: [
      { word: "caring", sentence: "She is very ___ towards her younger siblings.", definition: "Showing kindness and concern" },
      { word: "loving", sentence: "They have a ___ family relationship.", definition: "Feeling or showing love" },
      { word: "helpful", sentence: "My brother is always ___ when I need assistance.", definition: "Ready to give help" },
      { word: "kind", sentence: "My grandmother is the most ___ person I know.", definition: "Having a friendly nature" },
      { word: "patient", sentence: "Parents need to be ___ with young children.", definition: "Able to wait calmly" },
      { word: "generous", sentence: "My uncle is very ___ with his time.", definition: "Willing to give freely" },
      { word: "thoughtful", sentence: "It was ___ of you to remember my birthday.", definition: "Showing consideration" },
      { word: "respectful", sentence: "Children should be ___ to their elders.", definition: "Showing respect" },
      { word: "responsible", sentence: "Older siblings must be ___ for younger ones.", definition: "Having duties to fulfill" },
      { word: "trustworthy", sentence: "She is a ___ friend who keeps secrets.", definition: "Able to be trusted" },
      { word: "reliable", sentence: "My cousin is very ___ and always on time.", definition: "Able to be depended on" },
      { word: "supportive", sentence: "Our family is very ___ of each other.", definition: "Providing encouragement" },
      { word: "understanding", sentence: "My parents are ___ when I make mistakes.", definition: "Sympathetic and tolerant" },
      { word: "protective", sentence: "Big brothers are often ___ of their sisters.", definition: "Keeping safe from harm" },
      { word: "encouraging", sentence: "Teachers should be ___ to all students.", definition: "Giving support and confidence" },
      { word: "considerate", sentence: "Be ___ of others' feelings.", definition: "Careful not to hurt others" },
      { word: "devoted", sentence: "She is ___ to taking care of her family.", definition: "Very loving and loyal" },
      { word: "faithful", sentence: "A ___ friend stands by you always.", definition: "Remaining loyal" },
      { word: "dependable", sentence: "My father is the most ___ person I know.", definition: "Trustworthy and reliable" },
      { word: "compassionate", sentence: "We should be ___ to those in need.", definition: "Showing sympathy and concern" }
    ],
    quiz: [
      { word: "matrimony", definition: "The state of being married" },
      { word: "siblings", definition: "Brothers and sisters" },
      { word: "offspring", definition: "A person's child or children" },
      { word: "lineage", definition: "Direct descent from an ancestor" },
      { word: "patriarch", definition: "The male head of a family" },
      { word: "matriarch", definition: "The female head of a family" },
      { word: "foster", definition: "To care for a child not one's own" },
      { word: "custody", definition: "Legal right to care for someone" },
      { word: "inheritance", definition: "Property received from someone who died" },
      { word: "bloodline", definition: "A line of descent through a family" },
      { word: "extended", definition: "Family beyond parents and children" },
      { word: "nuclear", definition: "Family of parents and children only" },
      { word: "blended", definition: "Family formed by remarriage" },
      { word: "domestic", definition: "Relating to the home or family" },
      { word: "kinfolk", definition: "One's family and relations" },
      { word: "clan", definition: "A group of families with common ancestor" },
      { word: "tribe", definition: "A social group with shared culture" },
      { word: "ancestry", definition: "One's family or ethnic descent" },
      { word: "progeny", definition: "A person's descendants" },
      { word: "familial", definition: "Relating to or typical of a family" }
    ]
  }
};

const courseData = {
  units: [
    {
      id: 1,
      title: "Academic Excellence",
      page: "P. 13",
      color: "#60a5fa",
      emoji: "🎓",
      description: "Master essential academic vocabulary and school-related terms to excel in your studies.",
      learningGoals: [
        "Understand academic terminology",
        "Use educational vocabulary in context",
        "Describe school activities confidently"
      ]
    },
    {
      id: 2,
      title: "Family & Relationships",
      page: "P. 28",
      color: "#f472b6",
      emoji: "👨‍👩‍👧‍👦",
      description: "Explore family vocabulary and learn to describe relationships in modern households.",
      learningGoals: [
        "Describe family members and relationships",
        "Express family activities",
        "Understand family roles and responsibilities"
      ]
    }
  ]
};
const welcomeMessages = [
  "Ready to expand your vocabulary today?",
  "Let's make learning an adventure!",
  "Your brain is amazing - let's exercise it!",
  "Every word you learn opens new doors!",
  "Knowledge is power - let's grow together!"
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

const activityCompletionMessages = {
  excellent: [
    { emoji: "🌟", message: "Brilliant! You're a vocabulary superstar!", color: "#fbbf24" },
    { emoji: "🏆", message: "Outstanding! You're mastering this perfectly!", color: "#f59e0b" },
    { emoji: "✨", message: "Exceptional work! You're absolutely brilliant!", color: "#a78bfa" },
    { emoji: "🎯", message: "Perfect performance! You're hitting every target!", color: "#10b981" },
    { emoji: "💎", message: "Gem-quality work! You're shining bright!", color: "#06b6d4" },
    { emoji: "🚀", message: "Amazing! You're soaring to new heights!", color: "#ef4444" }
  ],
  good: [
    { emoji: "👍", message: "Good job! You're doing well, keep it up!", color: "#10b981" },
    { emoji: "😊", message: "Nice work! You're making solid progress!", color: "#22c55e" },
    { emoji: "⭐", message: "Well done! You're on the right track!", color: "#eab308" },
    { emoji: "💪", message: "Strong effort! Keep up the good work!", color: "#8b5cf6" },
    { emoji: "🎉", message: "Great! You're learning and improving!", color: "#ec4899" }
  ],
  average: [
    { emoji: "📚", message: "Average performance. Try reviewing the words again.", color: "#f59e0b" },
    { emoji: "🤔", message: "Not bad, but you can do better! Keep practicing.", color: "#f97316" },
    { emoji: "💭", message: "Fair work. Focus more and you'll improve!", color: "#fb923c" },
    { emoji: "📖", message: "Decent effort. Review and try again for better results!", color: "#fdba74" }
  ],
  needsImprovement: [
    { emoji: "📝", message: "Keep trying! Review these words and practice more.", color: "#ef4444" },
    { emoji: "🎓", message: "Don't give up! Learning takes practice and patience.", color: "#dc2626" },
    { emoji: "💡", message: "You can do better! Take your time and focus.", color: "#f87171" },
    { emoji: "🔄", message: "Let's improve! Go back and review the words carefully.", color: "#b91c1c" }
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
  const [hints, setHints] = useState(5);
  const [showHint, setShowHint] = useState(false);
  const [welcomeMsg, setWelcomeMsg] = useState('');
  const [unitScore, setUnitScore] = useState(0);
  const [showActivityComplete, setShowActivityComplete] = useState(false);
  const [activityFeedback, setActivityFeedback] = useState({ message: '', emoji: '', score: 0 });
  const [leaderboard, setLeaderboard] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [unitStartTime, setUnitStartTime] = useState(null);
  const [activityStartTime, setActivityStartTime] = useState(null);
  const [detailedProgress, setDetailedProgress] = useState({});
  const [activityRecords, setActivityRecords] = useState([]);
  const [sessionStats, setSessionStats] = useState({
    totalTimeSpent: 0,
    activitiesCompleted: 0,
    questionsAnswered: 0,
    accuracyByActivity: {}
  });

  useEffect(() => {
    setWelcomeMsg(welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)]);
  }, [student]);

  useEffect(() => {
    if (student) {
      console.log('🔍 Checking for saved data for:', student);
      const savedData = localStorage.getItem(`englishAdventure_${student}`);
      if (savedData) {
        console.log('✅ Found saved data! Loading...');
        const data = JSON.parse(savedData);
        console.log('📊 Loaded data:', data);
        setScore(data.score || 0);
        setStars(data.stars || 0);
        setCompleted(data.completed || []);
        setUnlocked(data.unlocked || [1]);
        setMaxStreak(data.maxStreak || 0);
        setHints(data.hints !== undefined ? data.hints : 5);
        setDetailedProgress(data.detailedProgress || {});
        setActivityRecords(data.activityRecords || []);
        setSessionStats(data.sessionStats || {
          totalTimeSpent: 0,
          activitiesCompleted: 0,
          questionsAnswered: 0,
          accuracyByActivity: {}
        });
        console.log('✅ Progress loaded successfully!');
      } else {
        console.log('ℹ️ No saved data found. Starting fresh!');
      }
    }
  }, [student]);

  useEffect(() => {
    if (student) {
      const dataToSave = {
        student,
        score,
        stars,
        completed,
        unlocked,
        maxStreak,
        hints,
        detailedProgress,
        activityRecords,
        sessionStats,
        lastUpdated: new Date().toISOString()
      };
      console.log('💾 Saving progress for:', student);
      console.log('📊 Data being saved:', dataToSave);
      localStorage.setItem(`englishAdventure_${student}`, JSON.stringify(dataToSave));
      console.log('✅ Progress saved successfully!');
    }
  }, [student, score, stars, completed, unlocked, maxStreak, hints, detailedProgress, activityRecords, sessionStats]);

  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const u = new SpeechSynthesisUtterance(text);
      u.rate = 0.8;
      window.speechSynthesis.speak(u);
    }
  };

  const getCurrentVocabSet = () => {
    if (!unit) return [];
    const unitData = vocabularyData[`unit${unit.id}`];
    if (!unitData) return [];
    
    switch(activity) {
      case 0: return unitData.multipleChoice;
      case 1: return unitData.pronunciation;
      case 2: return unitData.scramble;
      case 3: return unitData.fillBlanks;
      case 4: return unitData.quiz;
      default: return [];
    }
  };

  const getActivityName = (actNum) => {
    const names = ['Multiple Choice', 'Pronunciation', 'Scramble', 'Fill Blanks', 'Quiz'];
    return names[actNum] || 'Activity';
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
    setUnitStartTime(Date.now());
    setActivityStartTime(Date.now());
    setScreen('activity');
  };

  const handleAnswer = (ans, correctAns, isText = false) => {
    const isCorrect = isText 
      ? ans.toLowerCase().trim() === correctAns.toLowerCase() 
      : ans === correctAns;
    
    const responseTime = activityStartTime ? (Date.now() - activityStartTime) / 1000 : 0;
    
    if (isCorrect) {
      const pts = 10 + (streak * 2);
      setScore(prev => prev + pts);
      setUnitScore(prev => prev + pts);
      setStars(prev => prev + 1);
      setCorrect(prev => prev + 1);
      setStreak(prev => prev + 1);
      if (streak + 1 > maxStreak) setMaxStreak(streak + 1);
      setFeedback(`⭐ Perfect! +${pts} pts! 🔥 ${streak + 1} streak!`);
    } else {
      setStreak(0);
      setFeedback(`❌ Correct answer: ${correctAns}`);
    }
    
    const answerRecord = {
      student,
      unitId: unit.id,
      unitTitle: unit.title,
      activity: activity + 1,
      activityName: getActivityName(activity),
      questionNumber: question + 1,
      correctAnswer: correctAns,
      studentAnswer: ans,
      isCorrect,
      responseTime: Math.round(responseTime * 10) / 10,
      timestamp: new Date().toISOString()
    };
    
    setActivityRecords(prev => [...prev, answerRecord]);
    
    setSessionStats(prev => ({
      ...prev,
      questionsAnswered: prev.questionsAnswered + 1
    }));
    
    setShowFB(true);
    setInput('');
    setActivityStartTime(Date.now());
    
    setTimeout(() => {
      setShowFB(false);
      const nextQuestionNum = question + 1;
      const currentVocabSet = getCurrentVocabSet();
      
      if (nextQuestionNum < currentVocabSet.length) {
        setQuestion(nextQuestionNum);
      } else {
        nextActivity();
      }
    }, 1600);
  };

  const nextActivity = () => {
    if (activity < 4) {
      const totalQuestionsUpToNow = (activity + 1) * 20;
      const accuracyPercent = Math.round((correct / totalQuestionsUpToNow) * 100);
      
      setSessionStats(prev => ({
        ...prev,
        activitiesCompleted: prev.activitiesCompleted + 1,
        accuracyByActivity: {
          ...prev.accuracyByActivity,
          [`${unit.id}_${activity}`]: accuracyPercent
        }
      }));
      
      let feedbackArray;
      if (accuracyPercent >= 80) feedbackArray = activityCompletionMessages.excellent;
      else if (accuracyPercent >= 60) feedbackArray = activityCompletionMessages.good;
      else if (accuracyPercent >= 50) feedbackArray = activityCompletionMessages.average;
      else feedbackArray = activityCompletionMessages.needsImprovement;
      
      const randomFeedback = feedbackArray[Math.floor(Math.random() * feedbackArray.length)];
      
      setActivityFeedback({
        message: randomFeedback.message,
        emoji: randomFeedback.emoji,
        color: randomFeedback.color,
        accuracy: accuracyPercent
      });
      setShowActivityComplete(true);
      
      setTimeout(() => {
        setShowActivityComplete(false);
        setActivity(prev => prev + 1);
        setQuestion(0);
        setInput('');
        setActivityStartTime(Date.now());
      }, 3500);
    } else {
      const timeSpent = unitStartTime ? Math.round((Date.now() - unitStartTime) / 1000 / 60) : 0;
      const finalAccuracy = Math.round((correct / 100) * 100);
      
      const unitProgress = {
        unitId: unit.id,
        unitTitle: unit.title,
        completed: true,
        score: unitScore,
        accuracy: finalAccuracy,
        timeSpent: timeSpent,
        stars: stars,
        streak: maxStreak,
        completedDate: new Date().toISOString(),
        activitiesCompleted: 5
      };
      
      setDetailedProgress(prev => ({
        ...prev,
        [unit.id]: unitProgress
      }));
      
      setSessionStats(prev => ({
        ...prev,
        totalTimeSpent: prev.totalTimeSpent + timeSpent
      }));
      
      if (!completed.includes(unit.id)) {
        setCompleted(prev => [...prev, unit.id]);
        if (unit.id < 4 && !unlocked.includes(unit.id + 1)) {
          setUnlocked(prev => [...prev, unit.id + 1]);
        }
      }
      setScreen('completion');
    }
  };

  const useHint = () => {
    if (hints > 0) {
      setHints(prev => prev - 1);
      setShowHint(true);
      setTimeout(() => setShowHint(false), 3000);
    }
  };

  const downloadProgressReport = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 1600;
    const ctx = canvas.getContext('2d');
    
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#667eea');
    gradient.addColorStop(1, '#764ba2');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = 'white';
    ctx.font = 'bold 60px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('📊 Progress Report', canvas.width / 2, 100);
    
    ctx.font = '40px Arial';
    ctx.fillText(student, canvas.width / 2, 170);
    
    ctx.font = '24px Arial';
    ctx.fillText(new Date().toLocaleDateString(), canvas.width / 2, 220);
    
    ctx.fillStyle = 'white';
    ctx.fillRect(50, 280, canvas.width - 100, 1200);
    
    ctx.fillStyle = '#1f2937';
    ctx.font = 'bold 32px Arial';
    ctx.textAlign = 'left';
    
    let yPos = 350;
    const lineHeight = 50;
    
    ctx.fillText(`⭐ Total Stars: ${stars}`, 100, yPos);
    yPos += lineHeight;
    ctx.fillText(`🏆 Total Score: ${score}`, 100, yPos);
    yPos += lineHeight;
    ctx.fillText(`📚 Units Completed: ${completed.length}/4`, 100, yPos);
    yPos += lineHeight;
    ctx.fillText(`🔥 Best Streak: ${maxStreak}`, 100, yPos);
    yPos += lineHeight;
    ctx.fillText(`📝 Words Learned: ${completed.length * 100}`, 100, yPos);
    yPos += lineHeight;
    
    const badge = getBadge(completed.length);
    ctx.fillText(`${badge.emoji} Badge: ${badge.name}`, 100, yPos);
    yPos += lineHeight + 30;
    
    ctx.font = 'bold 36px Arial';
    ctx.fillText('Unit Progress:', 100, yPos);
    yPos += lineHeight + 20;
    
    ctx.font = '28px Arial';
    courseData.units.forEach(u => {
      const progress = detailedProgress[u.id];
      if (progress) {
        ctx.fillText(`${u.emoji} ${u.title}: ${progress.accuracy}% (${progress.timeSpent} min)`, 100, yPos);
        yPos += lineHeight;
      }
    });
    
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${student.replace(/\s+/g, '_')}_Progress_Report_${new Date().toISOString().split('T')[0]}.png`;
      a.click();
      URL.revokeObjectURL(url);
    });
  };

  if (screen === 'welcome') {
    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <div style={{ maxWidth: '550px', width: '100%', background: 'white', borderRadius: '30px', padding: '50px 40px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
          <div style={{ fontSize: '80px', textAlign: 'center', marginBottom: '20px' }}>📚</div>
          <h1 style={{ fontSize: '42px', fontWeight: 'bold', color: '#1f2937', textAlign: 'center', marginBottom: '15px' }}>
            English Vocabulary
          </h1>
          <p style={{ fontSize: '18px', color: '#6b7280', textAlign: 'center', marginBottom: '30px' }}>
            Master 100 words per unit through engaging activities!
          </p>
          
          <div style={{ background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', padding: '20px', borderRadius: '15px', marginBottom: '30px', fontSize: '14px', fontWeight: '600', color: '#78350f' }}>
            📚 Multiple Choice • 🎧 Pronunciation • 🧩 Scramble<br />
            📝 Fill in Blanks • 🏆 Quiz
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
            {completed.length > 0 && (
              <div style={{ background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)', padding: '15px 25px', borderRadius: '15px', marginBottom: '20px', textAlign: 'center' }}>
                <p style={{ fontSize: '16px', color: '#667eea', fontWeight: 'bold', marginBottom: '5px' }}>
                  🎉 You've completed {completed.length} unit{completed.length > 1 ? 's' : ''} so far!
                </p>
                <p style={{ fontSize: '14px', color: '#6b7280' }}>
                  Keep going to unlock all units and become a Vocabulary Master! 🏆
                </p>
              </div>
            )}

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

            {completed.length > 0 && (
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '25px' }}>
                <button onClick={downloadProgressReport} style={{ padding: '15px 35px', fontSize: '16px', fontWeight: 'bold', color: 'white', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', border: 'none', borderRadius: '15px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)' }}>
                  📊 Download Progress Report
                </button>
              </div>
            )}

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
                    <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{completed.length}/{courseData.units.length}</div>
                    <div style={{ fontSize: '13px', color: '#6b7280', fontWeight: '600' }}>Units Done</div>
                  </div>
                  <div style={{ background: 'white', padding: '12px 20px', borderRadius: '12px', flex: 1, textAlign: 'center' }}>
                    <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{completed.length * 100}</div>
                    <div style={{ fontSize: '13px', color: '#6b7280', fontWeight: '600' }}>Words Learned</div>
                  </div>
                </div>
              </div>

              <div style={{ background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', borderRadius: '18px', padding: '25px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px', color: '#78350f' }}>🏆 Leaderboard</h3>
                <div style={{ maxHeight: '180px', overflowY: 'auto' }}>
                  {leaderboard.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '20px', color: '#78350f' }}>
                      <p style={{ fontSize: '16px', marginBottom: '10px' }}>No students yet!</p>
                      <p style={{ fontSize: '14px' }}>Complete units to appear on the leaderboard.</p>
                    </div>
                  ) : (
                    leaderboard.map((playerName, idx) => (
                      <div key={idx} style={{ background: 'white', padding: '12px 15px', borderRadius: '10px', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ fontSize: '22px', fontWeight: 'bold', color: idx === 0 ? '#fbbf24' : idx === 1 ? '#9ca3af' : idx === 2 ? '#d97706' : '#6b7280', minWidth: '35px' }}>
                          #{idx + 1}
                        </span>
                        <span style={{ fontSize: '16px', fontWeight: '600', color: '#1f2937' }}>{playerName}</span>
                      </div>
                    ))
                  )}
                  <div style={{ background: '#e0e7ff', padding: '12px 15px', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '12px', border: '3px solid #667eea', marginTop: leaderboard.length > 0 ? '8px' : '0' }}>
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
                  
                  <div style={{ padding: '22px' }}>
                    <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#1f2937', marginBottom: '10px' }}>{u.title}</h3>
                    <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '15px' }}>{u.description}</p>
                    <div style={{ fontSize: '13px', color: '#9ca3af', fontWeight: '600' }}>100 words • 5 activities</div>
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
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <div style={{ maxWidth: '700px', width: '100%', background: 'white', borderRadius: '30px', padding: '50px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
          <div style={{ fontSize: '100px', textAlign: 'center', marginBottom: '20px' }}>{unit.emoji}</div>
          <h1 style={{ fontSize: '38px', fontWeight: 'bold', color: '#1f2937', textAlign: 'center', marginBottom: '15px' }}>
            {unit.title}
          </h1>
          <p style={{ fontSize: '18px', color: '#6b7280', textAlign: 'center', marginBottom: '35px' }}>
            {unit.description}
          </p>

          <div style={{ background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)', borderRadius: '20px', padding: '25px', marginBottom: '30px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', marginBottom: '15px' }}>🎯 Learning Goals:</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {unit.learningGoals.map((goal, idx) => (
                <li key={idx} style={{ fontSize: '16px', color: '#4b5563', marginBottom: '10px', paddingLeft: '25px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0 }}>✓</span>
                  {goal}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', borderRadius: '20px', padding: '25px', marginBottom: '30px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#78350f', marginBottom: '15px' }}>📋 Activities:</h3>
            <div style={{ display: 'grid', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '24px' }}>📚</span>
                <div>
                  <div style={{ fontWeight: 'bold', color: '#1f2937' }}>Multiple Choice</div>
                  <div style={{ fontSize: '14px', color: '#6b7280' }}>20 questions - Pick the correct word</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '24px' }}>🎧</span>
                <div>
                  <div style={{ fontWeight: 'bold', color: '#1f2937' }}>Pronunciation</div>
                  <div style={{ fontSize: '14px', color: '#6b7280' }}>20 questions - Hear & identify confusing pairs</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '24px' }}>🧩</span>
                <div>
                  <div style={{ fontWeight: 'bold', color: '#1f2937' }}>Word Scramble</div>
                  <div style={{ fontSize: '14px', color: '#6b7280' }}>20 questions - Unscramble the letters</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '24px' }}>📝</span>
                <div>
                  <div style={{ fontWeight: 'bold', color: '#1f2937' }}>Fill in the Blanks</div>
                  <div style={{ fontSize: '14px', color: '#6b7280' }}>20 questions - Complete the sentences</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '24px' }}>🏆</span>
                <div>
                  <div style={{ fontWeight: 'bold', color: '#1f2937' }}>Definition Quiz</div>
                  <div style={{ fontSize: '14px', color: '#6b7280' }}>20 questions - Match words to definitions</div>
                </div>
              </div>
            </div>
          </div>

          <button onClick={startUnit} style={{ width: '100%', padding: '20px', fontSize: '22px', fontWeight: 'bold', color: 'white', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', border: 'none', borderRadius: '15px', cursor: 'pointer' }}>
            🚀 Start Learning!
          </button>
          
          <button onClick={() => setScreen('home')} style={{ width: '100%', padding: '15px', fontSize: '16px', fontWeight: 'bold', color: '#6b7280', background: 'white', border: '2px solid #e5e7eb', borderRadius: '15px', cursor: 'pointer', marginTop: '15px' }}>
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  if (screen === 'activity' && unit) {
    const vocabSet = getCurrentVocabSet();
    
    if (!vocabSet || vocabSet.length === 0) {
      return (
        <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ background: 'white', borderRadius: '20px', padding: '40px', textAlign: 'center' }}>
            <h2>⚠️ Vocabulary data not found</h2>
            <p>Please check the vocabulary data structure.</p>
            <button onClick={() => setScreen('home')} style={{ marginTop: '20px', padding: '15px 30px', background: '#667eea', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer' }}>
              Back to Home
            </button>
          </div>
        </div>
      );
    }

    const v = vocabSet[question];
    const activityNames = ['📚 Multiple Choice', '🎧 Pronunciation', '🧩 Scramble', '📝 Fill Blanks', '🏆 Quiz'];
    const activityName = activityNames[activity];

    if (showActivityComplete) {
      return (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ textAlign: 'center', color: 'white' }}>
            <div style={{ fontSize: '120px', marginBottom: '20px', animation: 'bounce 1s infinite' }}>
              {activityFeedback.emoji}
            </div>
            <h2 style={{ fontSize: '36px', marginBottom: '15px', color: activityFeedback.color }}>
              {activityFeedback.message}
            </h2>
            <div style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>
              {activityFeedback.accuracy}% Accuracy
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '30px' }}>
              {[0, 1, 2, 3, 4].map(i => (
                <div key={i} style={{ width: '60px', height: '8px', background: i <= activity ? '#10b981' : '#374151', borderRadius: '4px' }} />
              ))}
            </div>
          </div>
          <style>{`
            @keyframes bounce {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-20px); }
            }
          `}</style>
        </div>
      );
    }

    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ background: 'white', borderRadius: '25px', padding: '35px', boxShadow: '0 15px 40px rgba(0,0,0,0.25)' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '5px' }}>
                  {unit.emoji} {unit.title}
                </h2>
                <p style={{ fontSize: '16px', color: '#6b7280' }}>
                  {activityName} • Question {question + 1}/20
                </p>
              </div>
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)', padding: '10px 20px', borderRadius: '12px', color: 'white', fontWeight: 'bold' }}>
                  ⭐ {stars}
                </div>
                <div style={{ background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', padding: '10px 20px', borderRadius: '12px', color: 'white', fontWeight: 'bold' }}>
                  🔥 {streak}
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '14px', fontWeight: '600', color: '#6b7280' }}>Activity Progress</span>
                <span style={{ fontSize: '14px', fontWeight: '600', color: '#667eea' }}>{Math.round(((question) / 20) * 100)}%</span>
              </div>
              <div style={{ width: '100%', height: '12px', background: '#e5e7eb', borderRadius: '6px', overflow: 'hidden' }}>
                <div style={{ width: `${(question / 20) * 100}%`, height: '100%', background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)', transition: 'width 0.3s' }} />
              </div>
            </div>

            {showFB && (
              <div style={{ background: feedback.includes('Perfect') ? 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)' : 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)', padding: '20px', borderRadius: '15px', marginBottom: '25px', fontSize: '18px', fontWeight: 'bold', textAlign: 'center', color: feedback.includes('Perfect') ? '#065f46' : '#991b1b' }}>
                {feedback}
              </div>
            )}

            {activity === 0 && v && (
              <div>
                <div style={{ background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)', padding: '25px', borderRadius: '15px', marginBottom: '25px' }}>
                  <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', marginBottom: '10px' }}>
                    Definition:
                  </p>
                  <p style={{ fontSize: '18px', color: '#4b5563' }}>
                    {v.definition}
                  </p>
                </div>

                <p style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937', marginBottom: '20px' }}>
                  Which word matches this definition?
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
                  {shuffle([v.word, ...vocabSet.filter(w => w.word !== v.word).slice(0, 3).map(w => w.word)]).map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(opt, v.word)}
                      disabled={showFB}
                      style={{ padding: '20px', fontSize: '18px', fontWeight: 'bold', color: '#1f2937', background: 'white', border: '3px solid #e5e7eb', borderRadius: '15px', cursor: showFB ? 'not-allowed' : 'pointer', transition: 'all 0.2s' }}
                      onMouseEnter={(e) => { if (!showFB) e.target.style.borderColor = '#667eea'; }}
                      onMouseLeave={(e) => { if (!showFB) e.target.style.borderColor = '#e5e7eb'; }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activity === 1 && v && (
              <div>
                <div style={{ background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', padding: '30px', borderRadius: '15px', marginBottom: '25px', textAlign: 'center' }}>
                  <button 
                    onClick={() => speak(v.word)}
                    style={{ background: 'white', border: 'none', borderRadius: '50%', width: '100px', height: '100px', fontSize: '48px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', marginBottom: '20px' }}
                  >
                    🔊
                  </button>
                  <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#78350f' }}>
                    Click the speaker to hear the word
                  </p>
                </div>

                <div style={{ background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)', padding: '20px', borderRadius: '15px', marginBottom: '25px' }}>
                  <p style={{ fontSize: '16px', color: '#4b5563' }}>
                    <strong>Definition:</strong> {v.definition}
                  </p>
                </div>

                <p style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937', marginBottom: '20px' }}>
                  Which spelling did you hear?
                </p>

                <div style={{ display: 'grid', gap: '15px' }}>
                  {shuffle([v.word, v.confuseWith]).map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(opt, v.word)}
                      disabled={showFB}
                      style={{ padding: '20px', fontSize: '20px', fontWeight: 'bold', color: '#1f2937', background: 'white', border: '3px solid #e5e7eb', borderRadius: '15px', cursor: showFB ? 'not-allowed' : 'pointer', transition: 'all 0.2s' }}
                      onMouseEnter={(e) => { if (!showFB) e.target.style.borderColor = '#667eea'; }}
                      onMouseLeave={(e) => { if (!showFB) e.target.style.borderColor = '#e5e7eb'; }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activity === 2 && v && (
              <div>
                <div style={{ background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', padding: '25px', borderRadius: '15px', marginBottom: '25px', textAlign: 'center' }}>
                  <p style={{ fontSize: '16px', fontWeight: '600', color: '#78350f', marginBottom: '15px' }}>
                    Definition:
                  </p>
                  <p style={{ fontSize: '18px', color: '#4b5563', marginBottom: '20px' }}>
                    {v.definition}
                  </p>
                  <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#1f2937', letterSpacing: '8px', fontFamily: 'monospace' }}>
                    {v.scrambled}
                  </div>
                </div>

                <p style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937', marginBottom: '15px' }}>
                  Unscramble the letters:
                </p>

                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && !showFB && handleAnswer(input, v.word, true)}
                  placeholder="Type the word..."
                  disabled={showFB}
                  style={{ width: '100%', padding: '20px', fontSize: '20px', borderRadius: '15px', border: '3px solid #e5e7eb', outline: 'none', marginBottom: '15px' }}
                />

                <button
                  onClick={() => handleAnswer(input, v.word, true)}
                  disabled={showFB || !input.trim()}
                  style={{ width: '100%', padding: '18px', fontSize: '18px', fontWeight: 'bold', color: 'white', background: (showFB || !input.trim()) ? '#d1d5db' : 'linear-gradient(135deg, #10b981 0%, #059669 100%)', border: 'none', borderRadius: '15px', cursor: (showFB || !input.trim()) ? 'not-allowed' : 'pointer' }}
                >
                  Submit Answer
                </button>

                {hints > 0 && !showFB && (
                  <button
                    onClick={useHint}
                    style={{ width: '100%', padding: '15px', fontSize: '16px', fontWeight: 'bold', color: '#667eea', background: 'white', border: '2px solid #667eea', borderRadius: '15px', cursor: 'pointer', marginTop: '15px' }}
                  >
                    💡 Use Hint ({hints} left)
                  </button>
                )}

                {showHint && (
                  <div style={{ marginTop: '15px', padding: '20px', background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)', borderRadius: '15px', textAlign: 'center' }}>
                    <p style={{ fontSize: '16px', fontWeight: '600', color: '#1f2937' }}>
                      Hint: The word has {v.word.length} letters and starts with "{v.word[0]}"
                    </p>
                  </div>
                )}
              </div>
            )}

            {activity === 3 && v && (
              <div>
                <div style={{ background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)', padding: '25px', borderRadius: '15px', marginBottom: '25px' }}>
                  <p style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.8' }}>
                    {v.sentence.split('___').map((part, idx, arr) => (
                      <React.Fragment key={idx}>
                        {part}
                        {idx < arr.length - 1 && (
                          <span style={{ display: 'inline-block', width: '150px', borderBottom: '3px solid #667eea', margin: '0 8px' }}></span>
                        )}
                      </React.Fragment>
                    ))}
                  </p>
                </div>

                <div style={{ background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', padding: '20px', borderRadius: '15px', marginBottom: '25px' }}>
                  <p style={{ fontSize: '16px', color: '#78350f' }}>
                    <strong>Definition:</strong> {v.definition}
                  </p>
                </div>

                <p style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937', marginBottom: '15px' }}>
                  Fill in the blank:
                </p>

                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && !showFB && handleAnswer(input, v.word, true)}
                  placeholder="Type your answer..."
                  disabled={showFB}
                  style={{ width: '100%', padding: '20px', fontSize: '20px', borderRadius: '15px', border: '3px solid #e5e7eb', outline: 'none', marginBottom: '15px' }}
                />

                <button
                  onClick={() => handleAnswer(input, v.word, true)}
                  disabled={showFB || !input.trim()}
                  style={{ width: '100%', padding: '18px', fontSize: '18px', fontWeight: 'bold', color: 'white', background: (showFB || !input.trim()) ? '#d1d5db' : 'linear-gradient(135deg, #10b981 0%, #059669 100%)', border: 'none', borderRadius: '15px', cursor: (showFB || !input.trim()) ? 'not-allowed' : 'pointer' }}
                >
                  Submit Answer
                </button>

                {hints > 0 && !showFB && (
                  <button
                    onClick={useHint}
                    style={{ width: '100%', padding: '15px', fontSize: '16px', fontWeight: 'bold', color: '#667eea', background: 'white', border: '2px solid #667eea', borderRadius: '15px', cursor: 'pointer', marginTop: '15px' }}
                  >
                    💡 Use Hint ({hints} left)
                  </button>
                )}

                {showHint && (
                  <div style={{ marginTop: '15px', padding: '20px', background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)', borderRadius: '15px', textAlign: 'center' }}>
                    <p style={{ fontSize: '16px', fontWeight: '600', color: '#1f2937' }}>
                      Hint: The word starts with "{v.word[0].toUpperCase()}" and has {v.word.length} letters
                    </p>
                  </div>
                )}
              </div>
            )}

            {activity === 4 && v && (
              <div>
                <div style={{ background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', padding: '30px', borderRadius: '15px', marginBottom: '25px', textAlign: 'center' }}>
                  <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#1f2937', marginBottom: '15px' }}>
                    {v.word}
                  </div>
                  <p style={{ fontSize: '16px', color: '#78350f', fontWeight: '600' }}>
                    What does this word mean?
                  </p>
                </div>

                <div style={{ display: 'grid', gap: '15px' }}>
                  {shuffle([v.definition, ...vocabSet.filter(w => w.word !== v.word).slice(0, 2).map(w => w.definition)]).map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(opt, v.definition)}
                      disabled={showFB}
                      style={{ padding: '20px', fontSize: '16px', color: '#1f2937', background: 'white', border: '3px solid #e5e7eb', borderRadius: '15px', cursor: showFB ? 'not-allowed' : 'pointer', textAlign: 'left', transition: 'all 0.2s' }}
                      onMouseEnter={(e) => { if (!showFB) e.target.style.borderColor = '#667eea'; }}
                      onMouseLeave={(e) => { if (!showFB) e.target.style.borderColor = '#e5e7eb'; }}
                    >
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

  if (screen === 'completion' && unit) {
    const finalAccuracy = Math.round((correct / 100) * 100);
    const congratsMsg = congratulationMessages[Math.floor(Math.random() * congratulationMessages.length)];

    const downloadCertificate = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1200;
      canvas.height = 800;
      const ctx = canvas.getContext('2d');
      
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#667eea');
      gradient.addColorStop(1, '#764ba2');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 20;
      ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);
      
      ctx.fillStyle = 'white';
      ctx.font = 'bold 70px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('🎓 Certificate of Achievement', canvas.width / 2, 150);
      
      ctx.font = 'bold 50px Arial';
      ctx.fillText(student, canvas.width / 2, 250);
      
      ctx.font = '35px Arial';
      ctx.fillText('has successfully completed', canvas.width / 2, 320);
      
      ctx.font = 'bold 45px Arial';
      ctx.fillText(`${unit.emoji} ${unit.title}`, canvas.width / 2, 400);
      
      ctx.font = '30px Arial';
      ctx.fillText(`Score: ${unitScore} | Accuracy: ${finalAccuracy}% | Stars: ${stars}`, canvas.width / 2, 500);
      
      ctx.font = '25px Arial';
      ctx.fillText(new Date().toLocaleDateString(), canvas.width / 2, 580);
      
      ctx.font = 'bold 28px Arial';
      ctx.fillText('✨ 100 New Words Mastered! ✨', canvas.width / 2, 660);
      
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${student.replace(/\s+/g, '_')}_${unit.title.replace(/\s+/g, '_')}_Certificate.png`;
        a.click();
        URL.revokeObjectURL(url);
      });
    };

    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <div style={{ maxWidth: '700px', width: '100%', background: 'white', borderRadius: '30px', padding: '50px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)', textAlign: 'center' }}>
          <div style={{ fontSize: '100px', marginBottom: '20px' }}>🎉</div>
          <h1 style={{ fontSize: '42px', fontWeight: 'bold', color: '#1f2937', marginBottom: '15px' }}>
            Unit Complete!
          </h1>
          <p style={{ fontSize: '20px', color: '#6b7280', marginBottom: '30px', fontStyle: 'italic' }}>
            {congratsMsg}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '35px' }}>
            <div style={{ background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)', padding: '25px', borderRadius: '20px', color: 'white' }}>
              <div style={{ fontSize: '42px', fontWeight: 'bold', marginBottom: '8px' }}>{unitScore}</div>
              <div style={{ fontSize: '16px', fontWeight: '600' }}>Total Score</div>
            </div>
            <div style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', padding: '25px', borderRadius: '20px', color: 'white' }}>
              <div style={{ fontSize: '42px', fontWeight: 'bold', marginBottom: '8px' }}>{finalAccuracy}%</div>
              <div style={{ fontSize: '16px', fontWeight: '600' }}>Accuracy</div>
            </div>
            <div style={{ background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', padding: '25px', borderRadius: '20px', color: 'white' }}>
              <div style={{ fontSize: '42px', fontWeight: 'bold', marginBottom: '8px' }}>{maxStreak}</div>
              <div style={{ fontSize: '16px', fontWeight: '600' }}>Best Streak</div>
            </div>
            <div style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)', padding: '25px', borderRadius: '20px', color: 'white' }}>
              <div style={{ fontSize: '42px', fontWeight: 'bold', marginBottom: '8px' }}>100</div>
              <div style={{ fontSize: '16px', fontWeight: '600' }}>Words Learned</div>
            </div>
          </div>

          <div style={{ background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)', padding: '25px', borderRadius: '20px', marginBottom: '30px' }}>
            <p style={{ fontSize: '18px', color: '#1f2937', fontWeight: 'bold', marginBottom: '10px' }}>
              🎯 You've mastered 5 activities:
            </p>
            <p style={{ fontSize: '16px', color: '#4b5563' }}>
              📚 Multiple Choice • 🎧 Pronunciation • 🧩 Scramble<br />
              📝 Fill in Blanks • 🏆 Definition Quiz
            </p>
          </div>

          <button onClick={downloadCertificate} style={{ width: '100%', padding: '20px', fontSize: '20px', fontWeight: 'bold', color: 'white', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', border: 'none', borderRadius: '15px', cursor: 'pointer', marginBottom: '15px' }}>
            🎓 Download Certificate
          </button>

          <button onClick={() => setScreen('home')} style={{ width: '100%', padding: '18px', fontSize: '18px', fontWeight: 'bold', color: 'white', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', border: 'none', borderRadius: '15px', cursor: 'pointer' }}>
            🏠 Back to Home
          </button>
        </div>
      </div>
    );
  }

  return null;
}

export default App;
