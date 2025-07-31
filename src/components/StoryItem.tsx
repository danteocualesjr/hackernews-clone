import { Story } from '../types';

interface StoryItemProps {
  story: Story;
  rank: number;
}

const StoryItem = ({ story, rank }: StoryItemProps) => {
  const formatTime = (timestamp: number) => {
    const now = Date.now() / 1000;
    const diff = now - timestamp;
    const hours = Math.floor(diff / 3600);
    
    if (hours < 1) return 'just now';
    if (hours === 1) return '1 hour ago';
    return `${hours} hours ago`;
  };

  const getDomain = (url?: string) => {
    if (!url) return '';
    try {
      return new URL(url).hostname.replace('www.', '');
    } catch {
      return '';
    }
  };

  return (
    <div className="story-item">
      <div className="story-rank">{rank}.</div>
      <div className="story-content">
        <div className="story-title-line">
          {story.url ? (
            <a href={story.url} className="story-title" target="_blank" rel="noopener noreferrer">
              {story.title}
            </a>
          ) : (
            <span className="story-title">{story.title}</span>
          )}
          {story.url && (
            <span className="story-domain">({getDomain(story.url)})</span>
          )}
        </div>
        <div className="story-meta">
          {story.score} points by {story.by} {formatTime(story.time)} | {story.descendants || 0} comments
        </div>
      </div>
    </div>
  );
};

export default StoryItem;