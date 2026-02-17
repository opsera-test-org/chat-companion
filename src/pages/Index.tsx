import { useState } from "react";
import AppHeader from "@/components/AppHeader";
import BottomNav from "@/components/BottomNav";
import ChatListItem from "@/components/ChatListItem";
import ChatView from "@/components/ChatView";
import StatusTab from "@/components/StatusTab";
import CallsTab from "@/components/CallsTab";
import { chats, Chat } from "@/data/mockChats";
import { MessageCirclePlus, Search } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("chats");
  const [activeChat, setActiveChat] = useState<Chat | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredChats = chats.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (activeChat) {
    return (
      <div className="flex h-screen flex-col max-w-md mx-auto bg-background shadow-2xl">
        <ChatView chat={activeChat} onBack={() => setActiveChat(null)} />
      </div>
    );
  }

  const titles: Record<string, string> = {
    chats: "WhatsApp",
    status: "Updates",
    calls: "Calls",
  };

  return (
    <div className="flex h-screen flex-col max-w-md mx-auto bg-background shadow-2xl">
      <AppHeader title={titles[activeTab]} onSearchToggle={() => setSearchOpen(!searchOpen)} />

      {/* Search bar */}
      {searchOpen && activeTab === "chats" && (
        <div className="px-3 py-2 bg-card border-b border-border">
          <div className="flex items-center gap-2 bg-muted rounded-full px-3 py-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search chats..."
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
        </div>
      )}

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === "chats" && (
          <div>
            {filteredChats.map((chat) => (
              <ChatListItem
                key={chat.id}
                chat={chat}
                onClick={() => setActiveChat(chat)}
              />
            ))}
          </div>
        )}
        {activeTab === "status" && <StatusTab />}
        {activeTab === "calls" && <CallsTab />}
      </div>

      {/* FAB */}
      {activeTab === "chats" && (
        <button className="fixed bottom-20 right-4 max-w-md:right-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg hover:bg-secondary transition-colors z-10">
          <MessageCirclePlus className="h-6 w-6" />
        </button>
      )}

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
