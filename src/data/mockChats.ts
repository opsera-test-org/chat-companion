export interface Message {
  id: string;
  text: string;
  time: string;
  sent: boolean;
}

export interface Chat {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
  messages: Message[];
}

export const chats: Chat[] = [
  {
    id: "1",
    name: "Alice Johnson",
    avatar: "AJ",
    lastMessage: "See you tomorrow! 😊",
    time: "10:42 AM",
    unread: 2,
    online: true,
    messages: [
      { id: "m1", text: "Hey! How are you?", time: "10:30 AM", sent: false },
      { id: "m2", text: "I'm good, thanks! What about you?", time: "10:32 AM", sent: true },
      { id: "m3", text: "Doing great! Want to grab coffee tomorrow?", time: "10:35 AM", sent: false },
      { id: "m4", text: "Sure! What time works for you?", time: "10:38 AM", sent: true },
      { id: "m5", text: "How about 3pm at the usual place?", time: "10:40 AM", sent: false },
      { id: "m6", text: "See you tomorrow! 😊", time: "10:42 AM", sent: false },
    ],
  },
  {
    id: "2",
    name: "Dev Team",
    avatar: "DT",
    lastMessage: "Mike: PR is ready for review",
    time: "9:15 AM",
    unread: 5,
    online: false,
    messages: [
      { id: "m1", text: "Morning everyone!", time: "8:00 AM", sent: true },
      { id: "m2", text: "Hey! Good morning 🌅", time: "8:05 AM", sent: false },
      { id: "m3", text: "I pushed the new feature branch last night", time: "8:30 AM", sent: true },
      { id: "m4", text: "Nice! I'll take a look", time: "8:45 AM", sent: false },
      { id: "m5", text: "PR is ready for review", time: "9:15 AM", sent: false },
    ],
  },
  {
    id: "3",
    name: "Mom ❤️",
    avatar: "M",
    lastMessage: "Don't forget to eat!",
    time: "Yesterday",
    unread: 0,
    online: false,
    messages: [
      { id: "m1", text: "Hi sweetie, how's work going?", time: "Yesterday", sent: false },
      { id: "m2", text: "It's going well mom! Busy day today", time: "Yesterday", sent: true },
      { id: "m3", text: "Don't forget to eat!", time: "Yesterday", sent: false },
    ],
  },
  {
    id: "4",
    name: "Sarah Williams",
    avatar: "SW",
    lastMessage: "That's hilarious 😂",
    time: "Yesterday",
    unread: 0,
    online: true,
    messages: [
      { id: "m1", text: "Did you see that meme I sent?", time: "Yesterday", sent: true },
      { id: "m2", text: "That's hilarious 😂", time: "Yesterday", sent: false },
    ],
  },
  {
    id: "5",
    name: "James Brown",
    avatar: "JB",
    lastMessage: "Let me check and get back to you",
    time: "Monday",
    unread: 0,
    online: false,
    messages: [
      { id: "m1", text: "Hey James, do you have the report?", time: "Monday", sent: true },
      { id: "m2", text: "Let me check and get back to you", time: "Monday", sent: false },
    ],
  },
  {
    id: "6",
    name: "Fitness Group 💪",
    avatar: "FG",
    lastMessage: "Lisa: Who's coming to yoga tonight?",
    time: "Monday",
    unread: 12,
    online: false,
    messages: [
      { id: "m1", text: "Great session today!", time: "Monday", sent: false },
      { id: "m2", text: "Who's coming to yoga tonight?", time: "Monday", sent: false },
    ],
  },
  {
    id: "7",
    name: "David Chen",
    avatar: "DC",
    lastMessage: "Thanks for the help!",
    time: "Sunday",
    unread: 0,
    online: true,
    messages: [
      { id: "m1", text: "Can you help me with this bug?", time: "Sunday", sent: false },
      { id: "m2", text: "Sure, share your screen", time: "Sunday", sent: true },
      { id: "m3", text: "Thanks for the help!", time: "Sunday", sent: false },
    ],
  },
];
