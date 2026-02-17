import { Chat } from "@/data/mockChats";

interface ChatListItemProps {
  chat: Chat;
  onClick: () => void;
}

const ChatListItem = ({ chat, onClick }: ChatListItemProps) => {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center gap-3 px-4 py-3 hover:bg-muted/60 transition-colors text-left"
    >
      {/* Avatar */}
      <div className="relative flex-shrink-0">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-sm font-semibold text-primary">
          {chat.avatar}
        </div>
        {chat.online && (
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-card bg-wa-online" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 border-b border-border py-1">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-[15px] text-foreground truncate">
            {chat.name}
          </span>
          <span className={`text-xs flex-shrink-0 ml-2 ${chat.unread > 0 ? "text-wa-unread font-medium" : "text-wa-time"}`}>
            {chat.time}
          </span>
        </div>
        <div className="flex items-center justify-between mt-0.5">
          <p className="text-sm text-muted-foreground truncate pr-2">
            {chat.lastMessage}
          </p>
          {chat.unread > 0 && (
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-wa-unread px-1.5 text-[11px] font-bold text-accent-foreground">
              {chat.unread}
            </span>
          )}
        </div>
      </div>
    </button>
  );
};

export default ChatListItem;
