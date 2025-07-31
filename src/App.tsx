import { useState, useEffect } from 'react';
import Header from './components/Header';
import StoryList from './components/StoryList';
import { Story, StoryFilter } from './types';
import './App.css';

const mockStories: Story[] = [
  {
    id: 1,
    title: "Show HN: I built a React clone of Hacker News",
    url: "https://example.com",
    by: "developer123",
    time: Math.floor(Date.now() / 1000) - 3600,
    score: 142,
    descendants: 28,
    type: 'show'
  },
  {
    id: 2,
    title: "Ask HN: What's the best way to learn TypeScript?",
    by: "learner456",
    time: Math.floor(Date.now() / 1000) - 7200,
    score: 89,
    descendants: 45,
    type: 'ask'
  },
  {
    id: 3,
    title: "New JavaScript features you should know about in 2024",
    url: "https://javascript-news.com",
    by: "jsexpert",
    time: Math.floor(Date.now() / 1000) - 10800,
    score: 234,
    descendants: 67,
    type: 'story'
  },
  {
    id: 4,
    title: "OpenAI releases new GPT-4 Turbo with 128k context window",
    url: "https://openai.com/blog/gpt-4-turbo",
    by: "ai_researcher",
    time: Math.floor(Date.now() / 1000) - 14400,
    score: 512,
    descendants: 156,
    type: 'story'
  },
  {
    id: 5,
    title: "Ask HN: How do you stay motivated when working on side projects?",
    by: "burnout_dev",
    time: Math.floor(Date.now() / 1000) - 18000,
    score: 78,
    descendants: 92,
    type: 'ask'
  },
  {
    id: 6,
    title: "Show HN: A tool to visualize your GitHub contribution graph in 3D",
    url: "https://github-3d.example.com",
    by: "visualizer",
    time: Math.floor(Date.now() / 1000) - 21600,
    score: 203,
    descendants: 34,
    type: 'show'
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
  },
  {
    id: 16,
    title: "Google announces new quantum computing breakthrough",
    url: "https://blog.google/quantum-computing-2024",
    by: "quantum_enthusiast",
    time: Math.floor(Date.now() / 1000) - 57600,
    score: 789,
    descendants: 234
  },
  {
    id: 17,
    title: "Ask HN: How do you handle technical debt in legacy codebases?",
    by: "legacy_maintainer",
    time: Math.floor(Date.now() / 1000) - 61200,
    score: 245,
    descendants: 156
  },
  {
    id: 18,
    title: "Show HN: My weekend project - A Spotify clone using Web Audio API",
    url: "https://github.com/musicdev/web-audio-player",
    by: "audio_hacker",
    time: Math.floor(Date.now() / 1000) - 64800,
    score: 312,
    descendants: 78
  },
  {
    id: 19,
    title: "The hidden costs of microservices architecture",
    url: "https://engineering-blog.com/microservices-costs",
    by: "arch_skeptic",
    time: Math.floor(Date.now() / 1000) - 68400,
    score: 456,
    descendants: 189
  },
  {
    id: 20,
    title: "Ask HN: What's your favorite debugging technique?",
    by: "bug_hunter",
    time: Math.floor(Date.now() / 1000) - 72000,
    score: 178,
    descendants: 203
  },
  {
    id: 21,
    title: "Show HN: I created a browser extension to block distracting websites",
    url: "https://focus-extension.example.com",
    by: "productivity_ninja",
    time: Math.floor(Date.now() / 1000) - 75600,
    score: 134,
    descendants: 42
  },
  {
    id: 22,
    title: "Tesla's new AI chip outperforms NVIDIA's latest GPU",
    url: "https://tesla-ai-news.com/chip-benchmark",
    by: "ai_hardware_news",
    time: Math.floor(Date.now() / 1000) - 79200,
    score: 623,
    descendants: 287
  },
  {
    id: 23,
    title: "Ask HN: Best resources for learning machine learning in 2024?",
    by: "ml_beginner",
    time: Math.floor(Date.now() / 1000) - 82800,
    score: 234,
    descendants: 167
  },
  {
    id: 24,
    title: "Show HN: Real-time cryptocurrency tracker with WebSocket feeds",
    url: "https://crypto-tracker-live.com",
    by: "crypto_dev",
    time: Math.floor(Date.now() / 1000) - 86400,
    score: 189,
    descendants: 56
  },
  {
    id: 25,
    title: "Why I left Silicon Valley for a remote cabin in Montana",
    url: "https://remote-life-blog.com/leaving-sv",
    by: "digital_nomad_dev",
    time: Math.floor(Date.now() / 1000) - 90000,
    score: 567,
    descendants: 345
  },
  {
    id: 26,
    title: "Ask HN: How do you price your freelance development work?",
    by: "freelance_dev",
    time: Math.floor(Date.now() / 1000) - 93600,
    score: 123,
    descendants: 98
  },
  {
    id: 27,
    title: "Show HN: I built a GitHub Actions alternative that runs 10x faster",
    url: "https://github.com/fastci/lightning-ci",
    by: "ci_speedster",
    time: Math.floor(Date.now() / 1000) - 97200,
    score: 445,
    descendants: 112
  },
  {
    id: 28,
    title: "The rise of WebAssembly: JavaScript's biggest competitor?",
    url: "https://webassembly-future.com/analysis",
    by: "wasm_advocate",
    time: Math.floor(Date.now() / 1000) - 100800,
    score: 378,
    descendants: 156
  },
  {
    id: 29,
    title: "Ask HN: What's the biggest mistake you made as a junior developer?",
    by: "senior_dev_wisdom",
    time: Math.floor(Date.now() / 1000) - 104400,
    score: 289,
    descendants: 234
  },
  {
    id: 30,
    title: "Show HN: My open-source alternative to Notion built with React",
    url: "https://github.com/noteapp/open-notion",
    by: "note_builder",
    time: Math.floor(Date.now() / 1000) - 108000,
    score: 567,
    descendants: 89,
    type: 'show'
  },
  {
    id: 31,
    title: "Senior React Developer - Remote - $120k-$180k",
    by: "techcorp_hr",
    time: Math.floor(Date.now() / 1000) - 86400,
    score: 1,
    descendants: 0,
    type: 'job'
  },
  {
    id: 32,
    title: "Full Stack Engineer - San Francisco - $150k-$200k + equity",
    by: "startup_hiring",
    time: Math.floor(Date.now() / 1000) - 172800,
    score: 1,
    descendants: 0,
    type: 'job'
  }
];

function App() {
  const [stories, setStories] = useState<Story[]>([]);
  const [currentFilter, setCurrentFilter] = useState<StoryFilter>('new');

  useEffect(() => {
    setStories(mockStories);
  }, []);

  const getFilteredStories = () => {
    switch (currentFilter) {
      case 'ask':
        return stories.filter(story => story.type === 'ask');
      case 'show':
        return stories.filter(story => story.type === 'show');
      case 'jobs':
        return stories.filter(story => story.type === 'job');
      case 'past':
        return stories.sort((a, b) => a.time - b.time);
      case 'comments':
        return stories.sort((a, b) => b.descendants - a.descendants);
      case 'new':
      default:
        return stories.sort((a, b) => b.time - a.time);
    }
  };

  return (
    <div className="App">
      <Header currentFilter={currentFilter} onFilterChange={setCurrentFilter} />
      <main className="main-content">
        <StoryList stories={getFilteredStories()} />
      </main>
    </div>
  );
}

export default App;