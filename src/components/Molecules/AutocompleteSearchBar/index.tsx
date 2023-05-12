import { Autocomplete } from '../Autocomplete';
import './index.scss';

export interface AutocompleteSearchBarProps {
  onSearch: (query: string) => void;
}

export function AutocompleteSearchBar({ onSearch }: AutocompleteSearchBarProps) {
  return (
    <div className="autocomplete-search-bar">
      <Autocomplete onSearch={onSearch} />
    </div>
  );
};