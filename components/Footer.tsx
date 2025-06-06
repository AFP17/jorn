

import React from 'react';
import ActionButton from './ActionButton';
import { BookIcon, GearIcon, StarIcon, BagIcon, Bars3Icon, CollectionIcon } from './IconComponents'; // Added CollectionIcon

interface FooterProps {
  onOpenSpellbook: () => void;
  onOpenCraftingHub: () => void;
  onOpenInventory: () => void;
  onOpenTraitsPage: () => void;
  onOpenQuestsPage: () => void;
  onOpenEncyclopedia: () => void; // New prop for Encyclopedia
  onOpenGameMenu: () => void;
}

const Footer: React.FC<FooterProps> = ({ 
    onOpenSpellbook,
    onOpenCraftingHub,
    onOpenInventory,
    onOpenTraitsPage,
    onOpenQuestsPage,
    onOpenEncyclopedia,
    onOpenGameMenu
}) => {
  return (
    <footer className="bg-slate-900/80 border-t-2 border-slate-700/60 mt-auto backdrop-blur-sm shadow-inner sticky bottom-0 z-[999]">
      <div className="container mx-auto px-3 py-2.5 max-w-6xl flex flex-col sm:flex-row justify-between items-center">
        <div className="text-xs text-slate-400 text-center sm:text-left mb-2 sm:mb-0">
          <p>&copy; {new Date().getFullYear()} Jorn. Gemini API.</p>
        </div>
        <div className="flex flex-wrap justify-center sm:justify-end gap-2">
           <ActionButton 
            onClick={onOpenCraftingHub} 
            variant="info" 
            size="sm"
            icon={<GearIcon className="w-4 h-4"/>}
            className="shadow-teal-500/30 hover:shadow-teal-500/50"
            title="Open Crafting Hub"
          >
            Crafting
          </ActionButton>
          <ActionButton 
            onClick={onOpenInventory} 
            variant="secondary" 
            size="sm"
            icon={<BagIcon className="w-4 h-4"/>}
            className="shadow-slate-500/30 hover:shadow-slate-500/50"
            title="Open Inventory"
          >
            Inventory
          </ActionButton>
          <ActionButton 
            onClick={onOpenSpellbook} 
            variant="primary" 
            size="sm"
            icon={<BookIcon className="w-4 h-4"/>}
            className="shadow-sky-500/30 hover:shadow-sky-500/50"
            title="Open Spellbook"
          >
            Spells
          </ActionButton>
          <ActionButton 
            onClick={onOpenTraitsPage} 
            variant="success" 
            size="sm"
            icon={<StarIcon className="w-4 h-4"/>}
            className="shadow-green-500/30 hover:shadow-green-500/50"
            title="View/Define Traits"
          >
            Traits
          </ActionButton>
          <ActionButton 
            onClick={onOpenQuestsPage} 
            variant="warning" 
            size="sm"
            icon={<BookIcon className="w-4 h-4"/>}
            className="shadow-yellow-500/30 hover:shadow-yellow-500/50"
            title="View Quest Log"
          >
            Quests
          </ActionButton>
          <ActionButton 
            onClick={onOpenEncyclopedia} 
            variant="secondary" 
            size="sm"
            icon={<CollectionIcon className="w-4 h-4"/>} 
            className="shadow-slate-500/30 hover:shadow-slate-500/50"
            title="Open Encyclopedia"
          >
            Encyclopedia
          </ActionButton>
          <ActionButton 
            onClick={onOpenGameMenu} 
            variant="secondary" 
            size="sm"
            icon={<Bars3Icon className="w-4 h-4"/>}
            className="shadow-slate-500/30 hover:shadow-slate-500/50"
            title="Open Game Menu"
          >
            Menu
          </ActionButton>
        </div>
      </div>
    </footer>
  );
};

export default Footer;