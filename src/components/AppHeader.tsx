import { Search, MoreVertical, Camera } from "lucide-react";

interface AppHeaderProps {
  title: string;
  onSearchToggle?: () => void;
}

const AppHeader = ({ title, onSearchToggle }: AppHeaderProps) => {
  return (
    <header className="flex items-center justify-between bg-wa-header px-4 py-3 shadow-sm">
      <h1 className="text-xl font-bold text-wa-header-foreground tracking-tight">
        {title}
      </h1>
      <div className="flex items-center gap-1">
        <button className="rounded-full p-2 hover:bg-white/10 transition-colors text-wa-header-foreground">
          <Camera className="h-5 w-5" />
        </button>
        <button
          onClick={onSearchToggle}
          className="rounded-full p-2 hover:bg-white/10 transition-colors text-wa-header-foreground"
        >
          <Search className="h-5 w-5" />
        </button>
        <button className="rounded-full p-2 hover:bg-white/10 transition-colors text-wa-header-foreground">
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
};

export default AppHeader;
