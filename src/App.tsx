import { useState, useEffect } from 'react';
import Header from './components/Header';
import StoryList from './components/StoryList';
import { Story } from './types';
import './App.css';

const mockStories: Story[] = [
  {
    id: 1,
    title: "Show HN: I built a React clone of Hacker News",
    url: "https://example.com",
    by: "developer123",
    time: Math.floor(Date.now() / 1000) - 3600,
    score: 142,
    descendants: 28
  },
  {
    id: 2,
    title: "Ask HN: What's the best way to learn TypeScript?",
    by: "learner456",
    time: Math.floor(Date.now() / 1000) - 7200,
    score: 89,
    descendants: 45
  },
  {
    id: 3,
    title: "New JavaScript features you should know about in 2024",
    url: "https://javascript-news.com",
    by: "jsexpert",
    time: Math.floor(Date.now() / 1000) - 10800,
    score: 234,
    descendants: 67
  }
];

function App() {
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    setStories(mockStories);
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <StoryList stories={stories} />
      </main>
    </div>
  );
}

export default App;