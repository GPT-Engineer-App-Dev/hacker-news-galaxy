import React from 'react';
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative mb-6">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-hacker-green" />
      <Input
        type="text"
        placeholder="Search stories..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="pl-10 w-full bg-black border-hacker-green text-hacker-green placeholder-hacker-darkGreen focus:ring-hacker-green focus:border-hacker-green"
      />
    </div>
  );
};

export default SearchBar;