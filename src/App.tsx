import React, { useState, useEffect } from 'react';
import { Moon, Sun, Gift, Camera, Heart, Ticket, Gamepad2, ChevronLeft, ChevronRight, RotateCcw, Check, Sparkles, Zap } from 'lucide-react';
import './App.css';
import photo1 from "./Photos/1.jpg";
import photo2 from "./Photos/2.jpg";
import photo3 from "./Photos/3.jpg";
import photo4 from "./Photos/4.jpg";
import photo5 from "./Photos/5.jpg";
import photo6 from "./Photos/6.jpg";
import photo7 from "./Photos/7.jpg";
import myVideo from "./Photos/v1.mp4";


function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [birthday, setBirthday] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState('dark');

  // Birthday Wishes State
  const [currentWish, setCurrentWish] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  // Photo Gallery State
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Flip Cards State
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  // Coupons State
  const [coupons, setCoupons] = useState([
    {
      id: 1,
      title: "Free Hug",
      description: "One warm, loving hug from your favorite sister",
      value: "1 Hug",
      color: "from-pink-500 via-rose-500 to-red-500",
      expiryDate: "Never expires",
      isRedeemed: false,
      icon: "💝"
    },
    {
      id: 2,
      title: "Free Champi",
      description: "One relaxing head massage from didi",
      value: "1 Champi Session",
      color: "from-purple-500 via-indigo-500 to-blue-500",
      expiryDate: "Valid for 1 year",
      isRedeemed: false,
      icon: "💆‍♂️"
    },
    {
      id: 3,
      title: "Coffee Date",
      description: "One coffee date at your favorite café",
      value: "1 Coffee Treat",
      color: "from-amber-500 via-orange-500 to-red-500",
      expiryDate: "Valid for 6 months",
      isRedeemed: false,
      icon: "☕"
    },
    {
      id: 4,
      title: "Movie Night",
      description: "One movie night with snacks and popcorn",
      value: "1 Movie Experience",
      color: "from-blue-500 via-cyan-500 to-teal-500",
      expiryDate: "Valid for 3 months",
      isRedeemed: false,
      icon: "🎬"
    },
    {
      id: 5,
      title: "Uber Ride",
      description: "One free Uber ride anywhere in the city",
      value: "1 Ride",
      color: "from-green-500 via-emerald-500 to-teal-500",
      expiryDate: "Valid for 2 months",
      isRedeemed: false,
      icon: "🚗"
    },
    {
      id: 6,
      title: "Playlist Creation",
      description: "One custom playlist made just for you",
      value: "1 Personalized Playlist",
      color: "from-red-500 via-pink-500 to-purple-500",
      expiryDate: "Valid for 1 month",
      isRedeemed: false,
      icon: "🎵"
    }
  ]);

  // Maze Game State
  const [playerPosition, setPlayerPosition] = useState({ x: 1, y: 1 });
  const [gameWon, setGameWon] = useState(false);
  const [moves, setMoves] = useState(0);

  const wishes = [
    {
      text: "Happy Birthday to the most incredible brother in the universe! 🌟",
      author: "Your Loving Sister",
      color: "from-pink-500 via-purple-500 to-indigo-500",
      icon: "💖"
    },
    {
      text: "May your special day be filled with endless adventures and dreams coming true! ✨",
      author: "With All My Love",
      color: "from-purple-500 via-blue-500 to-cyan-500",
      icon: "🌟"
    },
    {
      text: "Wishing you a year ahead filled with success, happiness, and amazing memories! 🚀",
      author: "Your Biggest Fan",
      color: "from-yellow-500 via-orange-500 to-red-500",
      icon: "🎯"
    },
    {
      text: "You're not just my brother, you're my best friend and inspiration. Happy Birthday! 🎁",
      author: "Forever Grateful",
      color: "from-green-500 via-emerald-500 to-blue-500",
      icon: "🎪"
    }
  ];

  const photos = [
    {
      id: 1,
      url: myVideo,
      caption: "My special video 🎥",
      date: "2024",
      mood: "Memorable",
      type: 'video'
    },
    {
      id: 2,
      url: photo1,
      caption: "Forever my little one",
      type: 'image'
    },
    {
      id: 3,
      url: photo2,
      caption: "No matter how tall you get, you’ll always be my little brother",
      type: 'image'
    },
    {
      id: 4,
      url: photo3,
      caption: "मेरा बच्चा",
      type: 'image'
    },
    {
      id: 5,
      url: photo4,
      caption: "मेरा घर",
      type: 'image'
    },{
      id: 6,
      url: photo5,
      caption: "A lifetime blessing in disguise",
      type: 'image'
    },
    {
      id: 7,
      url: photo6,
      caption: "My forever bond",
      type: 'image'
    },
    {
      id: 8,
      url: photo7,
      caption: "Happy Birthday 💕",
      type: 'image'
    }
  ];

  const wishCards = [
    {
      id: 1,
      name: "Mom",
      relationship: "Mother",
      wish: "Happy birthday to my wonderful son! May this year bring you happiness, success, and all the love in the world. You make us so proud every day! 💕",
      color: "from-pink-500 via-rose-500 to-red-500",
      avatar: "👩‍💼"
    },
    {
      id: 2,
      name: "Dad",
      relationship: "Father",
      wish: "Son, watching you grow into the amazing person you are today has been the greatest joy of my life. Happy birthday! Keep reaching for the stars! 🌟",
      color: "from-blue-500 via-indigo-500 to-purple-500",
      avatar: "👨‍💼"
    },
    {
      id: 3,
      name: "Grandma",
      relationship: "Grandmother",
      wish: "My dear grandson, you bring so much sunshine into our lives! May your special day be filled with love, laughter, and all your favorite things. Happy birthday! 🎂",
      color: "from-purple-500 via-pink-500 to-rose-500",
      avatar: "👵"
    },
    {
      id: 4,
      name: "Best Friend",
      relationship: "Friend",
      wish: "Bro, another year of being awesome! Thanks for being such an incredible friend. Here's to many more years of laughter, adventures, and unforgettable memories! 🎈",
      color: "from-yellow-500 via-orange-500 to-red-500",
      avatar: "👨‍🎓"
    }
  ];

  const mazeLayout = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 1, 0, 1, 1, 1, 0, 1, 0],
    [0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];

  const cakePosition = { x: 8, y: 6 };

  useEffect(() => {
    const savedTheme = localStorage.getItem('birthday-theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('birthday-theme', theme);
    document.documentElement.className = theme;
  }, [theme]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWish((prev) => (prev + 1) % wishes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [wishes.length]);

  useEffect(() => {
    if (playerPosition.x === cakePosition.x && playerPosition.y === cakePosition.y) {
      setGameWon(true);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }
  }, [playerPosition, cakePosition]);

  // Keyboard event listener for maze game
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (isUnlocked && !gameWon) {
        event.preventDefault();
        movePlayer(event.code);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isUnlocked, gameWon, playerPosition]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      if (birthday) {
        setError('');
        setIsUnlocked(true);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000);
      } else {
        setError('Please enter your birthday to unlock the party!');
      }
      setIsLoading(false);
    }, 1500);
  };

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const toggleCard = (cardId: number) => {
    setFlippedCards(prev => 
      prev.includes(cardId) 
        ? prev.filter(id => id !== cardId)
        : [...prev, cardId]
    );
  };

  const redeemCoupon = (couponId: number) => {
    setCoupons(prev => 
      prev.map(coupon => 
        coupon.id === couponId 
          ? { ...coupon, isRedeemed: true }
          : coupon
      )
    );
  };

  const movePlayer = (keyCode: string) => {
    if (gameWon) return;

    setPlayerPosition(prev => {
      let newX = prev.x;
      let newY = prev.y;

      switch (keyCode) {
        case 'ArrowUp':
        case 'KeyW':
          newY = Math.max(0, prev.y - 1);
          break;
        case 'ArrowDown':
        case 'KeyS':
          newY = Math.min(mazeLayout.length - 1, prev.y + 1);
          break;
        case 'ArrowLeft':
        case 'KeyA':
          newX = Math.max(0, prev.x - 1);
          break;
        case 'ArrowRight':
        case 'KeyD':
          newX = Math.min(mazeLayout[0].length - 1, prev.x + 1);
          break;
        default:
          return prev;
      }

      // Check if the new position is valid (not a wall)
      if (mazeLayout[newY] && mazeLayout[newY][newX] !== 0) {
        setMoves(m => m + 1);
        return { x: newX, y: newY };
      }

      return prev;
    });
  };

  const resetGame = () => {
    setPlayerPosition({ x: 1, y: 1 });
    setGameWon(false);
    setMoves(0);
  };

  const createConfetti = () => {
    const confetti = [];
    for (let i = 0; i < 100; i++) {
      confetti.push(
        <div
          key={i}
          className="absolute confetti"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            fontSize: `${Math.random() * 20 + 15}px`,
          }}
        >
          {['🎉', '🎂', '🎈', '🎁', '⭐', '💖', '🌟', '✨', '🎪', '🎯'][Math.floor(Math.random() * 10)]}
        </div>
      );
    }
    return confetti;
  };

  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 gradient-shift"></div>
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Confetti */}
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-50">
            {createConfetti()}
          </div>
        )}

        <div className="max-w-4xl w-full relative z-10">
          <div className="text-center space-y-8">
            {/* Header */}
            <div className="mb-12">
              <div className="flex justify-center items-center space-x-6 mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl flex items-center justify-center neon-glow">
                  <Gift className="w-10 h-10 text-white" />
                </div>
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-3xl flex items-center justify-center neon-glow morphing">
                  <Sparkles className="w-12 h-12 text-white" />
                </div>
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center neon-glow">
                  <span className="text-3xl">🎂</span>
                </div>
              </div>
              <h1 className="text-7xl lg:text-8xl font-bold mb-6 gradient-text leading-tight">
                Happy
                <br />
                <span className="text-6xl lg:text-7xl">Birthday</span>
              </h1>
              <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
                Enter your birthday to unlock an extraordinary celebration experience filled with surprises, memories, and love! 🎉
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="max-w-2xl mx-auto">
              <div className="glass-strong rounded-3xl p-12 shadow-2xl hover-lift">
                <div className="mb-8">
                  <label className="block text-white text-2xl font-medium mb-4">
                    When's your birthday? 🎂
                  </label>
                  <input
                    type="date"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    className="w-full p-6 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-xl"
                  />
                </div>

                {error && (
                  <div className="mb-8 p-6 bg-red-500/20 border border-red-500/30 rounded-2xl text-red-200 text-lg">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-6 px-8 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 hover:from-pink-600 hover:via-purple-700 hover:to-blue-700 text-white font-bold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed btn-modern text-xl"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="spin w-8 h-8 border-3 border-white border-t-transparent rounded-full mr-4"></div>
                      Unlocking Magic...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Zap className="w-8 h-8 mr-4" />
                      Unlock the Celebration!
                    </div>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
        : 'bg-gradient-to-br from-gray-50 via-purple-50 to-gray-50'
    } relative overflow-hidden`}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10' 
            : 'bg-gradient-to-r from-purple-200/30 via-pink-200/30 to-blue-200/30'
        } gradient-shift`}></div>
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`particle ${theme === 'dark' ? 'bg-white/20' : 'bg-purple-400/30'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Confetti */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {createConfetti()}
        </div>
      )}

      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-40">
        <button
          onClick={toggleTheme}
          className={`p-4 rounded-2xl transition-all duration-300 shadow-2xl hover:scale-110 btn-modern ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900'
              : 'bg-gradient-to-r from-purple-600 to-indigo-700 text-white'
          }`}
        >
          {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>

      <div className="container mx-auto px-6 py-12 space-y-24 relative z-10">
        {/* Header */}
        <section className="text-center slide-up">
          <div className="flex justify-center items-center space-x-6 mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl neon-glow">
              <span className="text-4xl">🎂</span>
            </div>
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-3xl flex items-center justify-center shadow-2xl morphing">
              <span className="text-3xl">🎉</span>
            </div>
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center shadow-2xl">
              <span className="text-2xl">✨</span>
            </div>
          </div>
          <h1 className={`text-7xl lg:text-8xl font-bold mb-6 gradient-text leading-tight`}>
            Happy Birthday
            <br />
            <span className="text-5xl lg:text-6xl">CHOTU!</span>
          </h1>
          <p className={`text-2xl lg:text-3xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-4xl mx-auto leading-relaxed`}>
            Welcome to your extraordinary celebration experience! 🥳
          </p>
        </section>

        {/* Birthday Wishes */}
        <section className="text-center slide-up">
          <h2 className={`text-5xl font-bold mb-12 ${theme === 'dark' ? 'text-white' : 'text-gray-800'} flex items-center justify-center space-x-4`}>
            <span className="text-4xl">{wishes[currentWish].icon}</span>
            <span>Birthday Wishes</span>
            <span className="text-4xl">{wishes[currentWish].icon}</span>
          </h2>
          <div className="glass-strong rounded-3xl p-12 shadow-2xl mb-12 max-w-6xl mx-auto hover-lift">
            <div className={`w-20 h-20 mx-auto bg-gradient-to-r ${wishes[currentWish].color} rounded-3xl flex items-center justify-center shadow-2xl mb-8 neon-glow`}>
              <Heart className="w-10 h-10 text-white" />
            </div>
            <p className={`text-4xl lg:text-5xl font-light mb-8 leading-relaxed ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              {wishes[currentWish].text}
            </p>
            <p className={`text-2xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} font-medium`}>
              - {wishes[currentWish].author}
            </p>
          </div>
          <div className="flex justify-center space-x-6">
            {wishes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentWish(index)}
                className={`w-6 h-6 rounded-full transition-all duration-300 ${
                  index === currentWish
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 scale-150 shadow-lg'
                    : theme === 'dark'
                    ? 'bg-white/30 hover:bg-white/50'
                    : 'bg-gray-400 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="slide-up">
          <h2 className={`text-5xl font-bold mb-12 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-800'} flex items-center justify-center space-x-4`}>
            <Camera className="w-12 h-12" />
            <span>Our Photo Gallery</span>
            <Camera className="w-12 h-12" />
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="glass-strong rounded-3xl overflow-hidden shadow-2xl hover-lift">
              <div className="relative">
                <div className="relative w-full h-[600px] bg-black">
                  {photos[currentPhotoIndex].type === 'video' ? (
                    <video
                      src={photos[currentPhotoIndex].url}
                      controls
                      autoPlay
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <img
                      src={photos[currentPhotoIndex].url}
                      alt={photos[currentPhotoIndex].caption}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <button
                  onClick={prevPhoto}
                  className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-white/20 hover:bg-white/30 rounded-2xl transition-all duration-300 backdrop-blur-sm"
                >
                  <ChevronLeft className="w-8 h-8 text-white" />
                </button>
                
                <button
                  onClick={nextPhoto}
                  className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-white/20 hover:bg-white/30 rounded-2xl transition-all duration-300 backdrop-blur-sm"
                >
                  <ChevronRight className="w-8 h-8 text-white" />
                </button>

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="glass rounded-2xl p-6">
                    <h3 className="text-white text-3xl font-bold mb-2">
                      {photos[currentPhotoIndex].caption}
                    </h3>
                    <div className="flex justify-between items-center">
                      <p className="text-white/80 text-xl">
                        {photos[currentPhotoIndex].date}
                      </p>
                      <span className="px-4 py-2 bg-white/20 rounded-full text-white font-medium">
                        {photos[currentPhotoIndex].mood}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-3 mt-8">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPhotoIndex(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentPhotoIndex
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 scale-150 shadow-lg'
                      : theme === 'dark'
                      ? 'bg-white/30 hover:bg-white/50'
                      : 'bg-gray-400 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Flip Cards */}
        <section className="slide-up">
          <h2 className={`text-5xl font-bold mb-12 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-800'} flex items-center justify-center space-x-4`}>
            <span className="text-4xl">💌</span>
            <span>Wish Cards</span>
            <span className="text-4xl">💌</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {wishCards.map((card, index) => (
              <div
                key={card.id}
                className="fade-in hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative w-full h-96 cursor-pointer" onClick={() => toggleCard(card.id)}>
                  <div className={`card-flip w-full h-full ${flippedCards.includes(card.id) ? 'flipped' : ''}`}>
                    {/* Front of card */}
                    <div className="card-front">
                      <div className={`w-full h-full bg-gradient-to-br ${card.color} rounded-3xl shadow-2xl p-8 flex flex-col items-center justify-center text-white relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                        <div className="text-6xl mb-4">{card.avatar}</div>
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                          <Heart className="w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-bold mb-3">{card.name}</h3>
                        <p className="text-xl opacity-90 mb-6">{card.relationship}</p>
                        <div className="text-sm opacity-75 text-center bg-white/20 rounded-full px-4 py-2 backdrop-blur-sm">
                          Click to read the wish 💕
                        </div>
                      </div>
                    </div>

                    {/* Back of card */}
                    <div className="card-back">
                      <div className={`w-full h-full bg-gradient-to-br ${card.color} rounded-3xl shadow-2xl p-8 flex flex-col justify-center text-white relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                        <div className="text-center mb-6">
                          <h3 className="text-2xl font-bold mb-3">From {card.name}</h3>
                          <div className="w-16 h-1 bg-white/50 mx-auto rounded-full"></div>
                        </div>
                        <div className="flex-1 flex items-center">
                          <p className="text-lg leading-relaxed text-center">
                            {card.wish}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Coupons */}
        <section className="slide-up">
          <h2 className={`text-5xl font-bold mb-12 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-800'} flex items-center justify-center space-x-4`}>
            <Ticket className="w-12 h-12" />
            <span>Gift Coupons</span>
            <Ticket className="w-12 h-12" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {coupons.map((coupon, index) => (
              <div
                key={coupon.id}
                className="fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 ${
                  coupon.isRedeemed ? 'opacity-75' : 'hover-lift'
                }`}>
                  <div className={`bg-gradient-to-r ${coupon.color} p-8 text-white relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                    <div className="flex items-center justify-between mb-6 relative z-10">
                      <div className="text-4xl">{coupon.icon}</div>
                      {coupon.isRedeemed && (
                        <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2 backdrop-blur-sm">
                          <Check className="w-5 h-5" />
                          <span className="font-medium">Redeemed</span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-3xl font-bold mb-3 relative z-10">{coupon.title}</h3>
                    <p className="text-xl opacity-90 relative z-10">{coupon.value}</p>
                  </div>

                  <div className={`p-8 ${theme === 'dark' ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-sm`}>
                    <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'}`}>
                      {coupon.description}
                    </p>
                    <div className="flex items-center justify-between text-sm mb-6">
                      <span className={`${theme === 'dark' ? 'text-white/60' : 'text-gray-500'}`}>
                        Expires: {coupon.expiryDate}
                      </span>
                    </div>

                    <button
                      onClick={() => redeemCoupon(coupon.id)}
                      disabled={coupon.isRedeemed}
                      className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 text-lg ${
                        coupon.isRedeemed
                          ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                          : `bg-gradient-to-r ${coupon.color} text-white hover:scale-105 shadow-xl hover:shadow-2xl btn-modern`
                      }`}
                    >
                      {coupon.isRedeemed ? 'Redeemed ✓' : 'Redeem Now'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Maze Game */}
        <section className="slide-up">
          <h2 className={`text-5xl font-bold mb-12 text-center ${theme === 'dark' ? 'text-white' : 'text-gray-800'} flex items-center justify-center space-x-4`}>
            <Gamepad2 className="w-12 h-12" />
            <span>Maze Game</span>
            <Gamepad2 className="w-12 h-12" />
          </h2>
          <div className="max-w-5xl mx-auto text-center">
            <p className={`text-2xl mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Help the birthday boy reach the cake! Use arrow keys or WASD to move through the maze.
            </p>
            
            {/* Game Controls Info */}
            <div className="glass-strong rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
              <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                🎮 Game Controls
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  <span className="font-semibold">Arrow Keys:</span> Move player
                </div>
                <div className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  <span className="font-semibold">WASD:</span> Alternative controls
                </div>
              </div>
            </div>
            
            <div className="glass-strong rounded-3xl p-8 mb-12 overflow-x-auto hover-lift">
              <div className="inline-block">
                <div className="grid grid-cols-10 gap-1 border-4 border-purple-500 rounded-2xl overflow-hidden p-2 bg-gradient-to-br from-purple-900/50 to-blue-900/50">
                  {mazeLayout.map((row, y) =>
                    row.map((cell, x) => {
                      const isPlayer = x === playerPosition.x && y === playerPosition.y;
                      const isCake = x === cakePosition.x && y === cakePosition.y;
                      
                      let cellClass = "w-10 h-10 flex items-center justify-center text-2xl rounded-lg transition-all duration-300 ";
                      
                      if (cell === 0) {
                        cellClass += theme === 'dark' ? 'bg-gray-800 shadow-inner' : 'bg-gray-700 shadow-inner';
                      } else if (isPlayer) {
                        cellClass += 'bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg neon-glow';
                      } else if (isCake) {
                        cellClass += 'bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg bounce';
                      } else {
                        cellClass += theme === 'dark' ? 'bg-gray-600/50 hover:bg-gray-500/50' : 'bg-gray-200 hover:bg-gray-300';
                      }
                      
                      return (
                        <div key={`${x}-${y}`} className={cellClass}>
                          {isPlayer ? '🎂' : isCake ? '🍰' : null}
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-8 mb-12">
              <div className="glass-strong rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
                  {moves}
                </div>
                <div className={`text-lg font-medium ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
                  Moves
                </div>
              </div>
              <button
                onClick={resetGame}
                className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-2xl font-bold transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 btn-modern text-lg"
              >
                <RotateCcw className="w-6 h-6" />
                <span>Reset Game</span>
              </button>
            </div>

            {gameWon && (
              <div className="glass-strong rounded-3xl p-12 scale-in">
                <div className="text-8xl mb-6 bounce">🎉</div>
                <h3 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  Congratulations!
                </h3>
                <p className={`text-2xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  You reached the cake in {moves} moves! Amazing! 🍰
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Footer */}
        <section className="text-center py-20 slide-up">
          <div className="flex justify-center space-x-6 mb-12">
            <div className="text-6xl bounce">🎂</div>
            <div className="text-6xl bounce" style={{ animationDelay: '0.2s' }}>🎉</div>
            <div className="text-6xl bounce" style={{ animationDelay: '0.4s' }}>🎈</div>
          </div>
          <h3 className={`text-4xl lg:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            Hope you had an absolutely amazing birthday celebration! 🎉
          </h3>
          <p className={`text-2xl lg:text-3xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-4xl mx-auto leading-relaxed`}>
            Made with endless love, creativity, and birthday magic from your sister 💕✨
          </p>
          <div className="mt-12 flex justify-center">
            <div className="glass-strong rounded-3xl p-8">
              <div className="text-4xl mb-4">💝</div>
              <p className={`text-xl ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'} font-medium`}>
                "The best gift is having you as my brother"
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;