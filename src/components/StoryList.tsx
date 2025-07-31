import { Story } from '../types';
import StoryItem from './StoryItem';

interface StoryListProps {
  stories: Story[];
}

const StoryList = ({ stories }: StoryListProps) => {
  return (
    <div className="story-list">
      {stories.map((story, index) => (
        <StoryItem key={story.id} story={story} rank={index + 1} />
      ))}
    </div>
  );
};

export default StoryList;