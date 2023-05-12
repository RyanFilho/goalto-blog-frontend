import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Input } from '../../Atoms/Input';
import './index.scss';

export interface AutocompleteProps {
  onSearch: (query: string) => void;
}

export function Autocomplete({ onSearch }: AutocompleteProps) {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<{ id: number, title: string, link: string }[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);

    if (value.length > 0) {
      const storedPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
      let filtered = storedPosts
        .filter((post: { title: string }) => post.title.toLowerCase().includes(value.toLowerCase()))
        .map((post: { title: string, link: string }) => ({ title: post.title, link: post.link }));
      
      if (filtered.length <=0) {
        filtered = [{ title: "Not found...", link: "#" }]
      }
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: { id: number, title: string, link: string }) => {
    console.log(suggestion);
    window.location.href = suggestion.link;
  };

  return (
    <div className="autocomplete">
      <Input
        label="Search"
        value={query}
        onChange={handleQueryChange}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setShowSuggestions(false)}
      />
      {showSuggestions && (
        <ul className="autocomplete-suggestions">
          {filteredSuggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
