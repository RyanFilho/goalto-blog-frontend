import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Input } from '../../Atoms/Input';
import { getAll } from '../../../services/PostService';
import './index.scss';
import { IPost } from '../../../entities/IPost';

export interface IPostSuggestions {
  id: number, 
  title: string
}

export function Autocomplete() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<IPostSuggestions[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);

    if (value.length > 0) {
      const storedPosts = getAll();
      
      let filtered = storedPosts
        .filter((post) => post.title.toLowerCase().includes(value.toLowerCase()))
        .map((post: IPost) => ({id: post.id, title: post.title}));
      
      if (filtered.length <=0) {
        filtered = [{ id: 0, title: "Not found..." }]
      }
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    }
  };

  return (
    <div className="autocomplete">
      <Input
        type="text"
        label="Search"
        value={query}
        onChange={handleQueryChange}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
      />
      {showSuggestions && (
        <ul className="autocomplete-suggestions">
          {filteredSuggestions.map((suggestion, index) => (
            <li key={index} onClick={() => { navigate("/Post/" + suggestion.id); }}>
              {suggestion.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
