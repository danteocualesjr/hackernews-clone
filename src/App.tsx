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
  },
  {
    id: 4,
    title: "OpenAI releases new GPT-4 Turbo with 128k context window",
    url: "https://openai.com/blog/gpt-4-turbo",
    by: "ai_researcher",
    time: Math.floor(Date.now() / 1000) - 14400,
    score: 512,
    descendants: 156
  },
  {
    id: 5,
    title: "Ask HN: How do you stay motivated when working on side projects?",
    by: "burnout_dev",
    time: Math.floor(Date.now() / 1000) - 18000,
    score: 78,
    descendants: 92
  },
  {
    id: 6,
    title: "Show HN: A tool to visualize your GitHub contribution graph in 3D",
    url: "https://github-3d.example.com",
    by: "visualizer",
    time: Math.floor(Date.now() / 1000) - 21600,
    score: 203,
    descendants: 34
  },
  {
    id: 7,
    title: "The rise and fall of Silicon Valley's tech giants",
    url: "https://techcrunch.com/silicon-valley-analysis",
    by: "tech_analyst",
    time: Math.floor(Date.now() / 1000) - 25200,
    score: 387,
    descendants: 145
  },
  {
    id: 8,
    title: "Ask HN: Best practices for database indexing in 2024?",
    by: "dba_questions",
    time: Math.floor(Date.now() / 1000) - 28800,
    score: 156,
    descendants: 78
  },
  {
    id: 9,
    title: "Show HN: I made a CLI tool for managing Docker containers",
    url: "https://github.com/user/docker-manager",
    by: "devops_guru",
    time: Math.floor(Date.now() / 1000) - 32400,
    score: 124,
    descendants: 23
  },
  {
    id: 10,
    title: "The future of web development: What's coming in 2025",
    url: "https://web-dev-future.com",
    by: "frontend_prophet",
    time: Math.floor(Date.now() / 1000) - 36000,
    score: 445,
    descendants: 189
  },
  {
    id: 11,
    title: "Ask HN: Should I quit my job to work on my startup full-time?",
    by: "startup_dreamer",
    time: Math.floor(Date.now() / 1000) - 39600,
    score: 67,
    descendants: 112
  },
  {
    id: 12,
    title: "Show HN: Real-time collaborative code editor built with WebRTC",
    url: "https://collab-code.example.com",
    by: "realtime_dev",
    time: Math.floor(Date.now() / 1000) - 43200,
    score: 298,
    descendants: 56
  },
  {
    id: 13,
    title: "Why I switched from AWS to self-hosted infrastructure",
    url: "https://blog.selfhosted.com/why-i-switched",
    by: "cloud_skeptic",
    time: Math.floor(Date.now() / 1000) - 46800,
    score: 234,
    descendants: 87
  },
  {
    id: 14,
    title: "Ask HN: What are your favorite VS Code extensions for productivity?",
    by: "productivity_seeker",
    time: Math.floor(Date.now() / 1000) - 50400,
    score: 189,
    descendants: 134
  },
  {
    id: 15,
    title: "Show HN: I built a password manager that works entirely offline",
    url: "https://offline-passwords.example.com",
    by: "security_first",
    time: Math.floor(Date.now() / 1000) - 54000,
    score: 167,
    descendants: 45
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