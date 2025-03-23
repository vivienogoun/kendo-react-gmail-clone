import { useEffect, useState } from "react";
import { ListBox, ListBoxItemClickEvent } from "@progress/kendo-react-listbox";
import "@progress/kendo-theme-material/dist/all.css";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { MDXEditor } from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

interface Mail {
  id: number;
  selected: boolean;
  from: { image?: string; name: string; email: string };
  date: Date;
  subject: string;
  message: string;
  read: boolean;
}

export default function Mail() {
  const [mails, setMails] = useState<Mail[]>([
    {
      id: 1,
      selected: false,
      from: {
        name: "John Doe",
        email: "john.doe@gmail.com",
      },
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
      date: new Date(),
      subject: "Meeting",
      message: "Hello, I would like to schedule a meeting with you.",
      read: false,
    },
  ]);

  const [selectedMail, setSelectedMail] = useState<Mail>();

  useEffect(() => {
    console.log(mails);

    setSelectedMail(mails.find((mail) => mail.selected));
  }, [mails]);

  const MailItem = (props: any) => {
    let { dataItem, selected, ...others } = props;

    return (
      <li {...others} style={{ padding: "0" }}>
        <div
          className={`py-3 px-4 text-nowrap bg-blue-50 border-b border-gray-300 hover:shadow-lg hover:z-10 w-full ${
            !dataItem.read && "font-bold"
          }`}
        >
          <span className="mr-12" style={{}}>
            {dataItem.from.name}
          </span>
          <span>{dataItem.subject}</span>
          {" - "}
          <span className="mr-12">
            {String(dataItem.message).slice(0, 50)}...
          </span>
          <span className="text-right">
            {dayjs(dataItem.date).format("MMM DD")}
          </span>
        </div>
      </li>
    );
  };

  const SELECTED_FIELD = "selected";

  const handleItemClick = (event: ListBoxItemClickEvent) => {
    console.log(event);

    setMails(
      mails.map((item) => {
        if (item.id === event.dataItem.id) {
          item[SELECTED_FIELD] = !item[SELECTED_FIELD];
        } else if (!event.nativeEvent.ctrlKey) {
          item[SELECTED_FIELD] = false;
        }
        return item;
      })
    );
  };

  return (
    <div className="flex">
      <ListBox
        style={{ height: 400, width: "50%" }}
        data={mails}
        textField="message"
        selectedField={SELECTED_FIELD}
        onItemClick={(e: ListBoxItemClickEvent) => handleItemClick(e)}
        item={MailItem}
      />
      <div className="w-1/2">
        {selectedMail ? (
          <div className="text-left pt-6 px-4">
            <p className="ml-16 text-2xl">{selectedMail.subject}</p>
            <div className="flex justify-between my-6">
              <div className="flex gap-4 items-center">
                <img
                  src={
                    selectedMail.from.image ||
                    "https://lh3.googleusercontent.com/a/default-user=s40-p"
                  }
                  alt="avatar"
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex flex-col justify-between">
                  <div className="flex gap-2 items-center">
                    <span className="font-bold">{selectedMail.from.name}</span>
                    <span className="text-sm text-black/60">{`<${selectedMail.from.email}>`}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-black/60">to me</span>
                    <ArrowDropDownIcon />
                  </div>
                </div>
              </div>
            </div>
            <MDXEditor
              key={selectedMail.id}
              markdown={selectedMail.message}
              onChange={console.log}
              className="ml-12"
            />
          </div>
        ) : (
          <div className="p-12">
            <p>No conversations selected</p>
          </div>
        )}
      </div>
    </div>
  );
}
