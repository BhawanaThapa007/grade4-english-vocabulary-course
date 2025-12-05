import React, { useState, useEffect } from 'react';
import { Star, Award, CheckCircle, Circle, Trophy, Book, ArrowRight, Home, Sparkles, Zap, Heart } from 'lucide-react';

const courseData = {
  units: [
    {
      id: 1,
      title: "Milan Goes to School",
      page: "P. 13",
      color: "from-blue-400 to-cyan-400",
      emoji: "🏫",
      vocabulary: [
        { word: "school", image: "🏫", definition: "A place where children learn" },
        { word: "teacher", image: "👩‍🏫", definition: "A person who teaches students" },
        { word: "friend", image: "👫", definition: "Someone you like and play with" },
        { word: "classroom", image: "🚪", definition: "A room where students learn" },
        { word: "book", image: "📚", definition: "Something you read" }
      ],
      grammar: "am, is, are, prepositions of place"
    },
    {
      id: 2,
      title: "Welcome Home!",
      page: "P. 28",
      color: "from-pink-400 to-rose-400",
      emoji: "🏠",
      vocabulary: [
        { word: "mother", image: "👩", definition: "Your female parent" },
        { word: "father", image: "👨", definition: "Your male parent" },
        { word: "sister", image: "👧", definition: "Your female sibling" },
        { word: "brother", image: "👦", definition: "Your male sibling" },
        { word: "family", image: "👨‍👩‍👧‍👦", definition: "Parents and children together" }
      ],
      grammar: "Personal pronouns, Possessives"
    },
    {
      id: 3,
      title: "Time Travel",
      page: "P. 48",
      color: "from-purple-400 to-indigo-400",
      emoji: "⏰",
      vocabulary: [
        { word: "morning", image: "🌅", definition: "The early part of the day" },
        { word: "afternoon", image: "☀️", definition: "The middle part of the day" },
        { word: "evening", image: "🌆", definition: "The late part of the day" },
        { word: "night", image: "🌙", definition: "When it is dark outside" },
        { word: "yesterday", image: "📅", definition: "The day before today" }
      ],
      grammar: "Simple present, simple past, wh-question"
    },
    {
      id: 4,
      title: "Lucky Peter!",
      page: "P. 69",
      color: "from-green-400 to-emerald-400",
      emoji: "🍀",
      vocabulary: [
        { word: "lucky", image: "🍀", definition: "Having good fortune" },
        { word: "happy", image: "😊", definition: "Feeling joy" },
        { word: "sad", image: "😢", definition: "Feeling unhappy" },
        { word: "wolf", image: "🐺", definition: "A wild animal like a big dog" },
        { word: "afraid", image: "😰", definition: "Feeling scared" }
      ],
      grammar: "Simple Past, Negation"
    },
    {
      id: 5,
      title: "Gifts and Gifts",
      page: "P. 85",
      color: "from-yellow-400 to-orange-400",
      emoji: "🎁",
      vocabulary: [
        { word: "sweater", image: "🧥", definition: "Warm clothing for cold weather" },
        { word: "gift", image: "🎁", definition: "Something you give to someone" },
        { word: "many", image: "🔢", definition: "A large number of things" },
        { word: "bag", image: "👜", definition: "Something to carry things in" },
        { word: "much", image: "📊", definition: "A large amount" }
      ],
      grammar: "Uncountable nouns, How much/How many, Articles"
    },
    {
      id: 6,
      title: "Celebrations",
      page: "P. 99",
      color: "from-red-400 to-pink-400",
      emoji: "🎉",
      vocabulary: [
        { word: "birthday", image: "🎂", definition: "The day you were born" },
        { word: "party", image: "🎉", definition: "A celebration with friends" },
        { word: "cake", image: "🍰", definition: "Sweet food for special days" },
        { word: "happy", image: "😄", definition: "Feeling very pleased" },
        { word: "surprise", image: "😲", definition: "Something unexpected" }
      ],
      grammar: "Comparatives and Superlatives"
    },
    {
      id: 7,
      title: "Vacationing",
      page: "P. 115",
      color: "from-teal-400 to-cyan-400",
      emoji: "🏖️",
      vocabulary: [
        { word: "holiday", image: "🏖️", definition: "A time for fun and rest" },
        { word: "beach", image: "🏝️", definition: "Sandy place by the sea" },
        { word: "swim", image: "🏊", definition: "Move through water" },
        { word: "travel", image: "✈️", definition: "Go to different places" },
        { word: "visit", image: "🚗", definition: "Go to see a place or person" }
      ],
      grammar: "Prepositions of location"
    },
    {
      id: 8,
      title: "Amazing Creatures",
      page: "P. 132",
      color: "from-blue-500 to-purple-500",
      emoji: "🦁",
      vocabulary: [
        { word: "animal", image: "🦁", definition: "A living creature" },
        { word: "sea", image: "🌊", definition: "Large body of salt water" },
        { word: "fish", image: "🐟", definition: "Animal that lives in water" },
        { word: "magician", image: "🎩", definition: "Person who does magic tricks" },
        { word: "water", image: "💧", definition: "Clear liquid we drink" }
      ],
      grammar: "Simple Present"
    }
  ]
};

const VocabCourse = () => {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [currentActivity, setCurrentActivity] = useState(null);
  const [activityIndex, setActivityIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [totalStars, setTotalStars] = useState(0);
  const [completedUnits, setCompletedUnits] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [unitScores, setUnitScores] = useState({});
  const [showConfetti, setShowConfetti] = useState(false);

  const generateActivities = (unit) => {
    const activities = [];
    const vocab = unit.vocabulary;

    activities.push({
      type: 'picture-choice',
      title: 'Find the Picture',
      instruction: 'Click on the picture that matches the word',
      icon: '🖼️',
      questions: vocab.map(v => ({
        word: v.word,
        correct: v.image,
        options: shuffleArray([v.image, ...getRandomImages(vocab, v.image, 2)]),
        definition: v.definition
      }))
    });

    activities.push({
      type: 'word-choice',
      title: 'Find the Word',
      instruction: 'Click on the word that matches the picture',
      icon: '✍️',
      questions: vocab.map(v => ({
        image: v.image,
        correct: v.word,
        options: shuffleArray([v.word, ...getRandomWords(vocab, v.word, 2)]),
        definition: v.definition
      }))
    });

    activities.push({
      type: 'matching',
      title: 'Match Words and Pictures',
      instruction: 'Click the picture that matches each word',
      icon: '🔗',
      pairs: vocab.map(v => ({ word: v.word, image: v.image, definition: v.definition }))
    });

    activities.push({
      type: 'quiz',
      title: 'Unit Quiz',
      instruction: 'Answer all questions to complete the unit',
      icon: '📝',
      questions: vocab.map(v => ({
        question: `What does "${v.word}" mean?`,
        image: v.image,
        correct: v.definition,
        options: shuffleArray([v.definition, ...getRandomDefinitions(vocab, v.definition, 2)])
      }))
    });

    return activities;
  };

  const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);
  
  const getRandomImages = (vocab, exclude, count) => {
    return vocab.filter(v => v.image !== exclude).sort(() => Math.random() - 0.5).slice(0, count).map(v => v.image);
  };

  const getRandomWords = (vocab, exclude, count) => {
    return vocab.filter(v => v.word !== exclude).sort(() => Math.random() - 0.5).slice(0, count).map(v => v.word);
  };

  const getRandomDefinitions = (vocab, exclude, count) => {
    return vocab.filter(v => v.definition !== exclude).sort(() => Math.random() - 0.5).slice(0, count).map(v => v.definition);
  };

  const handleUnitSelect = (unit) => {
    setSelectedUnit(unit);
    const activities = generateActivities(unit);
    setCurrentActivity(activities[0]);
    setActivityIndex(0);
    setUserAnswers([]);
    setScore(0);
    setCurrentScreen('activity');
  };

  const handleAnswer = (questionIndex, answer, correct) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = { answer, correct };
    setUserAnswers(newAnswers);
    setIsCorrect(answer === correct);
    
    if (answer === correct) {
      const newScore = score + 10;
      setScore(newScore);
      setTotalStars(totalStars + 1);
      const messages = [
        '⭐ Excellent! You got it!',
        '⭐ Super job! That\'s right!',
        '⭐ Wonderful! Perfect answer!',
        '⭐ Amazing work! Correct!',
        '⭐ Fantastic! You\'re doing great!'
      ];
      setFeedbackMessage(messages[Math.floor(Math.random() * messages.length)]);
    } else {
      setFeedbackMessage(`Not quite! The correct answer is: ${correct}`);
    }
    
    setShowFeedback(true);
    setTimeout(() => setShowFeedback(false), 2500);
  };

  const nextActivity = () => {
    const activities = generateActivities(selectedUnit);
    if (activityIndex < activities.length - 1) {
      setActivityIndex(activityIndex + 1);
      setCurrentActivity(activities[activityIndex + 1]);
      setUserAnswers([]);
    } else {
      if (!completedUnits.includes(selectedUnit.id)) {
        setCompletedUnits([...completedUnits, selectedUnit.id]);
      }
      const newUnitScores = { ...unitScores };
      newUnitScores[selectedUnit.id] = score;
      setUnitScores(newUnitScores);
      setShowConfetti(true);
      setCurrentScreen('completion');
    }
  };

  const calculateProgress = () => {
    return Math.round((completedUnits.length / courseData.units.length) * 100);
  };

  const getBadge = (unitId) => {
    if (!completedUnits.includes(unitId)) return null;
    const score = unitScores[unitId] || 0;
    const maxScore = 200;
    const percentage = (score / maxScore) * 100;
    if (percentage >= 90) return { name: '🥇 Gold', color: 'text-yellow-500' };
    if (percentage >= 70) return { name: '🥈 Silver', color: 'text-gray-400' };
    return { name: '🥉 Bronze', color: 'text-orange-600' };
  };

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  if (currentScreen === 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 text-6xl animate-bounce">⭐</div>
          <div className="absolute top-20 right-20 text-5xl animate-pulse">🎨</div>
          <div className="absolute bottom-20 left-20 text-5xl animate-bounce" style={{animationDelay: '0.5s'}}>📚</div>
          <div className="absolute bottom-10 right-10 text-6xl animate-pulse" style={{animationDelay: '1s'}}>✨</div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="bg-white bg-opacity-95 backdrop-blur rounded-3xl shadow-2xl p-8 mb-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Sparkles className="w-12 h-12 text-purple-600 animate-pulse" />
                <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
                  Grade 4 English Adventure
                </h1>
                <Sparkles className="w-12 h-12 text-pink-600 animate-pulse" />
              </div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Book className="w-6 h-6 text-purple-600" />
                <p className="text-xl font-semibold text-gray-700">Symphony English Course - Book 4</p>
              </div>
              <p className="text-lg text-gray-600 italic">Learn vocabulary with fun games and activities! 🎮</p>
            </div>

            <div className="mt-8 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-purple-600" />
                  <span className="text-lg font-bold text-gray-800">Your Learning Journey</span>
                </div>
                <span className="text-2xl font-black text-purple-600">{calculateProgress()}%</span>
              </div>
              
              <div className="relative w-full bg-white rounded-full h-6 mb-4 shadow-inner overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-2"
                  style={{ width: `${calculateProgress()}%` }}
                >
                  {calculateProgress() > 10 && <span className="text-white font-bold text-sm">🚀</span>}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow">
                  <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                  <span className="text-lg font-bold text-gray-800">{totalStars} Stars</span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow">
                  <Trophy className="w-6 h-6 text-orange-500" />
                  <span className="text-lg font-bold text-gray-800">{completedUnits.length}/{courseData.units.length} Units</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseData.units.map((unit) => {
              const isCompleted = completedUnits.includes(unit.id);
              const badge = getBadge(unit.id);
              
              return (
                <div
                  key={unit.id}
                  className={`group relative bg-white rounded-2xl shadow-xl cursor-pointer transition-all transform hover:scale-105 hover:shadow-2xl overflow-hidden ${
                    isCompleted ? 'ring-4 ring-green-400' : ''
                  }`}
                  onClick={() => handleUnitSelect(unit)}
                >
                  <div className={`h-32 bg-gradient-to-br ${unit.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-blur-sm"></div>
                    <div className="absolute top-4 right-4">
                      {isCompleted ? (
                        <CheckCircle className="w-10 h-10 text-white drop-shadow-lg" />
                      ) : (
                        <Circle className="w-10 h-10 text-white opacity-50" />
                      )}
                    </div>
                    <div className="absolute bottom-4 left-4 text-6xl drop-shadow-lg transform group-hover:scale-110 transition-transform">
                      {unit.emoji}
                    </div>
                    <div className="absolute top-4 left-4 bg-white bg-opacity-30 backdrop-blur px-3 py-1 rounded-full">
                      <span className="text-sm font-bold text-white">Unit {unit.id}</span>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                      {unit.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{unit.page}</p>
                    
                    {badge && (
                      <div className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full mb-3 shadow-sm">
                        <Award className={`w-4 h-4 ${badge.color}`} />
                        <span className="text-sm font-bold text-gray-800">{badge.name} Badge</span>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <span className="font-semibold">{unit.vocabulary.length} words</span>
                        <span>•</span>
                        <span className="font-semibold">4 activities</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-purple-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center bg-white bg-opacity-90 backdrop-blur rounded-2xl p-6 shadow-xl">
            <Heart className="w-8 h-8 text-red-500 mx-auto mb-2 animate-pulse" />
            <p className="text-lg font-semibold text-gray-700">
              Keep learning! Every word you learn makes you smarter! 🌟
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <div>Loading...</div>;
};

export default VocabCourse;
