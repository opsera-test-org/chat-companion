import { useState } from "react";
import { ArrowLeft, Send, Smile, Paperclip, Mic } from "lucide-react";
import { Chat, Message } from "@/data/mockChats";

interface ChatViewProps {
  chat: Chat;
  onBack: () => void;
}

const ChatView = ({ chat, onBack }: ChatViewProps) => {
  const [messages, setMessages] = useState<Message[]>(chat.messages);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMsg: Message = {
      id: `m${Date.now()}`,
      text: input.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      sent: true,
    };
    setMessages((prev) => [...prev, newMsg]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <header className="flex items-center gap-3 bg-wa-header px-2 py-2.5 shadow-sm">
        <button onClick={onBack} className="rounded-full p-1.5 hover:bg-white/10 transition-colors text-wa-header-foreground">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="relative flex-shrink-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-sm font-semibold text-wa-header-foreground">
            {chat.avatar}
          </div>
          {chat.online && (
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-wa-header bg-wa-online" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-base font-semibold text-wa-header-foreground truncate">{chat.name}</h2>
          {chat.online && (
            <p className="text-xs text-wa-header-foreground/70">online</p>
          )}
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto chat-bg px-3 py-4 space-y-1.5">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sent ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-xl px-3 py-2 shadow-sm ${
                msg.sent
                  ? "bg-wa-bubble-sent text-wa-bubble-sent-foreground rounded-br-sm"
                  : "bg-wa-bubble-received text-wa-bubble-received-foreground rounded-bl-sm"
              }`}
            >
              <p className="text-[15px] leading-relaxed">{msg.text}</p>
              <p className={`text-[10px] mt-1 text-right ${msg.sent ? "text-wa-time" : "text-wa-time"}`}>
                {msg.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex items-end gap-2 bg-card px-3 py-2.5 border-t border-border">
        <button className="rounded-full p-2 text-muted-foreground hover:text-foreground transition-colors">
          <Smile className="h-5 w-5" />
        </button>
        <button className="rounded-full p-2 text-muted-foreground hover:text-foreground transition-colors">
          <Paperclip className="h-5 w-5" />
        </button>
        <div className="flex-1 relative">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Message"
            className="w-full rounded-full bg-muted px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
          />
        </div>
        {input.trim() ? (
          <button
            onClick={sendMessage}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md hover:bg-secondary transition-colors"
          >
            <Send className="h-4 w-4" />
          </button>
        ) : (
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md hover:bg-secondary transition-colors">
            <Mic className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ChatView;
