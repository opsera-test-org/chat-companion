import { Plus } from "lucide-react";

const StatusTab = () => {
  const statuses = [
    { name: "Alice Johnson", time: "Today, 10:30 AM", avatar: "AJ", seen: false },
    { name: "Sarah Williams", time: "Today, 9:15 AM", avatar: "SW", seen: false },
    { name: "David Chen", time: "Yesterday, 8:00 PM", avatar: "DC", seen: true },
  ];

  return (
    <div className="flex-1 overflow-y-auto bg-background">
      {/* My Status */}
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="relative">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted text-lg font-semibold text-muted-foreground">
            You
          </div>
          <span className="absolute bottom-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
            <Plus className="h-3 w-3" />
          </span>
        </div>
        <div>
          <p className="font-semibold text-foreground">My Status</p>
          <p className="text-sm text-muted-foreground">Tap to add status update</p>
        </div>
      </div>

      <div className="px-4 py-2">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Recent updates</p>
      </div>

      {statuses.map((status, i) => (
        <div key={i} className="flex items-center gap-3 px-4 py-3 hover:bg-muted/60 transition-colors cursor-pointer">
          <div className={`flex h-14 w-14 items-center justify-center rounded-full text-sm font-semibold border-2 ${status.seen ? "border-muted-foreground/30" : "border-primary"} text-primary bg-primary/10`}>
            {status.avatar}
          </div>
          <div>
            <p className="font-semibold text-foreground">{status.name}</p>
            <p className="text-sm text-muted-foreground">{status.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatusTab;
