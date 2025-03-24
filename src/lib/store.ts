import { ListBoxItemClickEvent } from "@progress/kendo-react-listbox";
import { create } from "zustand";
import { from, to } from "./constants";

export interface Mail {
  id: number;
  selected: boolean;
  from: { image?: string; name: string; email: string };
  to: { image?: string; name: string; email: string };
  date: Date;
  subject: string;
  message: string;
  read: boolean;
}

interface State {
  mails: Mail[];
  addMail: (mail: Mail) => void;
  handleMailClick: (event: ListBoxItemClickEvent) => void;
}

const initialMails: Mail[] = [
  {
    id: 1,
    selected: false,
    from: from,
    to: to,
    date: new Date(),
    subject: "Meeting",
    message: "Hello, I would like to schedule a meeting with you.",
    read: false,
  },
  {
    id: 2,
    selected: false,
    from: {
      name: "John Doe",
      email: "john.doe@gmail.com",
    },
    to: {
      name: "John Doe",
      email: "john.doe@gmail.com",
    },
    date: new Date(),
    subject: "Meeting",
    message:
      "Hello, I would like to schedule a meeting with you.Hello, I would like to schedule a meeting with you.Hello, I would like to schedule a meeting with you.",
    read: true,
  },
  {
    id: 3,
    selected: false,
    from: {
      name: "John Doe",
      email: "john.doe@gmail.com",
    },
    to: {
      name: "John Doe",
      email: "john.doe@gmail.com",
    },
    date: new Date(),
    subject: "Meeting",
    message: "Hello, I would like to schedule a meeting with you.",
    read: false,
  },
];

export const SELECTED_FIELD = "selected";

export const useStore = create<State>()((set) => ({
  mails: [],
  addMail: (mail) => set((state) => ({ mails: [...state.mails, mail] })),
  handleMailClick: (event) =>
    set((state) => ({
      mails: state.mails.map((item) => {
        if (item.id === event.dataItem.id) {
          item.read = true;
          item[SELECTED_FIELD] = !item[SELECTED_FIELD];
        } else if (!event.nativeEvent.ctrlKey) {
          item[SELECTED_FIELD] = false;
        }
        return item;
      }),
    })),
}));
