import { StoryFilter } from '../types';

interface HeaderProps {
  currentFilter: StoryFilter;
  onFilterChange: (filter: StoryFilter) => void;
}

const Header = ({ currentFilter, onFilterChange }: HeaderProps) => {
  const handleNavClick = (filter: StoryFilter) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (filter === 'submit') {
      alert('Submit functionality coming soon!');
      return;
    }
    onFilterChange(filter);
  };

  return (
    <header className="header">
      <div className="header-content">
        <span className="logo">Y</span>
        <span className="title">Hacker News</span>
        <nav className="nav">
          <a 
            href="#" 
            className={`nav-link ${currentFilter === 'new' ? 'active' : ''}`}
            onClick={handleNavClick('new')}
          >
            new
          </a>
          <span className="separator">|</span>
          <a 
            href="#" 
            className={`nav-link ${currentFilter === 'past' ? 'active' : ''}`}
            onClick={handleNavClick('past')}
          >
            past
          </a>
          <span className="separator">|</span>
          <a 
            href="#" 
            className={`nav-link ${currentFilter === 'comments' ? 'active' : ''}`}
            onClick={handleNavClick('comments')}
          >
            comments
          </a>
          <span className="separator">|</span>
          <a 
            href="#" 
            className={`nav-link ${currentFilter === 'ask' ? 'active' : ''}`}
            onClick={handleNavClick('ask')}
          >
            ask
          </a>
          <span className="separator">|</span>
          <a 
            href="#" 
            className={`nav-link ${currentFilter === 'show' ? 'active' : ''}`}
            onClick={handleNavClick('show')}
          >
            show
          </a>
          <span className="separator">|</span>
          <a 
            href="#" 
            className={`nav-link ${currentFilter === 'jobs' ? 'active' : ''}`}
            onClick={handleNavClick('jobs')}
          >
            jobs
          </a>
          <span className="separator">|</span>
          <a 
            href="#" 
            className={`nav-link ${currentFilter === 'submit' ? 'active' : ''}`}
            onClick={handleNavClick('submit')}
          >
            submit
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;