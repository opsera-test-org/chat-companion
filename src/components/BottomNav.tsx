import { MessageCircle, CircleDot, Phone } from "lucide-react";

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: "chats", label: "Chats", icon: MessageCircle },
  { id: "status", label: "Updates", icon: CircleDot },
  { id: "calls", label: "Calls", icon: Phone },
];

const BottomNav = ({ activeTab, onTabChange }: BottomNavProps) => {
  return (
    <nav className="flex items-center justify-around border-t border-border bg-card py-1.5">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className="flex flex-col items-center gap-0.5 px-6 py-1.5 transition-colors"
          >
            <div className={`rounded-full px-4 py-1 transition-colors ${isActive ? "bg-primary/15" : ""}`}>
              <tab.icon
                className={`h-5 w-5 transition-colors ${isActive ? "text-primary" : "text-muted-foreground"}`}
                fill={isActive ? "currentColor" : "none"}
              />
            </div>
            <span
              className={`text-xs font-medium transition-colors ${isActive ? "text-primary" : "text-muted-foreground"}`}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;
