import { Phone, PhoneIncoming, PhoneOutgoing, Video } from "lucide-react";

const CallsTab = () => {
  const calls = [
    { name: "Alice Johnson", avatar: "AJ", time: "Today, 10:30 AM", type: "incoming" as const, video: false },
    { name: "Dev Team", avatar: "DT", time: "Yesterday, 3:45 PM", type: "outgoing" as const, video: true },
    { name: "Mom ❤️", avatar: "M", time: "Yesterday, 1:20 PM", type: "incoming" as const, video: false },
    { name: "Sarah Williams", avatar: "SW", time: "Monday, 5:00 PM", type: "missed" as const, video: false },
    { name: "David Chen", avatar: "DC", time: "Sunday, 11:00 AM", type: "outgoing" as const, video: true },
  ];

  return (
    <div className="flex-1 overflow-y-auto bg-background">
      <div className="px-4 py-3">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Recent</p>
      </div>
      {calls.map((call, i) => (
        <div key={i} className="flex items-center gap-3 px-4 py-3 hover:bg-muted/60 transition-colors cursor-pointer">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-sm font-semibold text-primary">
            {call.avatar}
          </div>
          <div className="flex-1">
            <p className={`font-semibold ${call.type === "missed" ? "text-destructive" : "text-foreground"}`}>
              {call.name}
            </p>
            <div className="flex items-center gap-1 mt-0.5">
              {call.type === "incoming" && <PhoneIncoming className="h-3.5 w-3.5 text-wa-online" />}
              {call.type === "outgoing" && <PhoneOutgoing className="h-3.5 w-3.5 text-primary" />}
              {call.type === "missed" && <PhoneIncoming className="h-3.5 w-3.5 text-destructive" />}
              <span className="text-sm text-muted-foreground">{call.time}</span>
            </div>
          </div>
          <button className="p-2 text-primary">
            {call.video ? <Video className="h-5 w-5" /> : <Phone className="h-5 w-5" />}
          </button>
        </div>
      ))}
    </div>
  );
};

export default CallsTab;
