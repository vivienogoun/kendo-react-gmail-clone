import * as React from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
  Avatar,
  Drawer,
  DrawerContent,
  DrawerItem,
  DrawerItemProps,
  DrawerSelectEvent,
} from "@progress/kendo-react-layout";
import { Window } from "@progress/kendo-react-dialogs";
import { Button } from "@progress/kendo-react-buttons";
import { Tooltip } from "@progress/kendo-react-tooltip";
import {
  Input,
  TextBox,
  TextBoxChangeEvent,
} from "@progress/kendo-react-inputs";
import * as svgIcons from "@progress/kendo-svg-icons";

import {
  BoldItalicUnderlineToggles,
  CreateLink,
  diffSourcePlugin,
  DiffSourceToggleWrapper,
  headingsPlugin,
  imagePlugin,
  InsertImage,
  InsertTable,
  InsertThematicBreak,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  ListsToggle,
  markdownShortcutPlugin,
  MDXEditor,
  MDXEditorMethods,
  quotePlugin,
  tablePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
  UndoRedo,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";

import MenuIcon from "@mui/icons-material/Menu";
import { useStore } from "./lib/store";
import { from, to } from "./lib/constants";

const userAvatar = "https://lh3.googleusercontent.com/a/default-user=s40-p";

const items = [
  {
    text: "Compose",
    svgIcon: svgIcons.pencilIcon,
    route: "new",
  },
  {
    text: "Inbox",
    svgIcon: svgIcons.inboxIcon,
    selected: true,
    route: "",
  },
  {
    text: "Starred",
    svgIcon: svgIcons.starOutlineIcon,
    route: "/starred",
  },
  //   {
  //     separator: true,
  //   },
  //   {
  //     text: "Breadcrumb",
  //     svgIcon: svgIcons.chevronRightIcon,
  //     route: "/breadcrumb",
  //   },
  //   {
  //     separator: true,
  //   },
  //   {
  //     text: "Card",
  //     svgIcon: svgIcons.imageIcon,
  //     route: "/card",
  //   },
  //   {
  //     separator: true,
  //   },
  //   {
  //     text: "GridLayout",
  //     svgIcon: svgIcons.gridLayoutIcon,
  //     route: "/gridlayout",
  //   },
  //   {
  //     separator: true,
  //   },
  //   {
  //     text: "Menu",
  //     svgIcon: svgIcons.menuIcon,
  //     route: "/menu",
  //   },
  //   {
  //     separator: true,
  //   },
  //   {
  //     text: "PanelBar",
  //     svgIcon: svgIcons.layoutSideBySideIcon,
  //     route: "/panelbar",
  //   },
  //   {
  //     separator: true,
  //   },
  //   {
  //     text: "Splitter",
  //     svgIcon: svgIcons.colResizeIcon,
  //     route: "/splitter",
  //   },
  //   {
  //     separator: true,
  //   },
  //   {
  //     text: "StackLayout",
  //     svgIcon: svgIcons.layoutStackedIcon,
  //     route: "/stacklayout",
  //   },
  //   {
  //     separator: true,
  //   },
  //   {
  //     text: "Stepper",
  //     svgIcon: svgIcons.listOrderedIcon,
  //     route: "/stepper",
  //   },
  //   {
  //     separator: true,
  //   },
  //   {
  //     text: "TabStrip",
  //     svgIcon: svgIcons.thumbnailsUpIcon,
  //     route: "/tabstrip",
  //   },
  //   {
  //     separator: true,
  //   },
  //   {
  //     text: "TileLayout",
  //     svgIcon: svgIcons.layout1By4Icon,
  //     route: "/tilelayout",
  //   },
];

const CustomItem = (props: DrawerItemProps) => {
  return (
    <DrawerItem {...props}>
      {/* <div>
      <span>{props.text}</span>
    </div> */}
    </DrawerItem>
  );
};

function useWindowSize() {
  const [size, setSize] = React.useState([0, 0]);
  React.useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

const TitleComponent = () => {
  return <div className="text-left">New Message</div>;
};

const DrawerRouterContainer = (props: any) => {
  const navigate = useNavigate();
  const [width, height] = useWindowSize();

  const [expanded, setExpanded] = React.useState<boolean>(true);
  const [selected, setSelected] = React.useState(
    items.findIndex((x) => x.selected === true)
  );

  const [newWindowVisible, setNewWindowVisible] =
    React.useState<boolean>(false);

  const ref = React.useRef<MDXEditorMethods>(null);

  const { addMail, mails } = useStore((state) => state);

  const [subject, setSubject] = React.useState("");

  const toggleNewWindow = () => {
    setNewWindowVisible(!newWindowVisible);
  };

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const onSelect = (e: DrawerSelectEvent) => {
    if (e.itemTarget.props.route === "new") {
      toggleNewWindow();
      return;
    }

    navigate(e.itemTarget.props.route);
    setSelected(e.itemIndex);
  };

  return (
    <>
      <AppBar themeColor="inherit">
        <AppBarSection>
          <Tooltip anchorElement="target" position="bottom" parentTitle={true}>
            <Button
              title="Main menu"
              // svgIcon={svgIcons.menuIcon}
              fillMode="flat"
              //   className="rounded-[100%]"
              onClick={handleClick}
            >
              <MenuIcon />
            </Button>
          </Tooltip>
        </AppBarSection>

        <AppBarSection>
          <Link to={"/"} title="Gmail">
            <img
              src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
              alt="Gmail"
            />
          </Link>
        </AppBarSection>

        <AppBarSpacer />

        <AppBarSection>
          <Avatar type="image">
            <img src={userAvatar} alt="User Avatar" />
          </Avatar>
        </AppBarSection>
      </AppBar>

      <Drawer
        expanded={expanded}
        mode="push"
        position="start"
        mini={true}
        items={items.map((item, index) => ({
          ...item,
          selected: index === selected,
        }))}
        // item={CustomItem}
        onSelect={onSelect}
        className={`pr-3`}
      >
        <DrawerContent>
          {items.map((item) => {
            return (
              item.selected && (
                <div
                  key={item.text}
                  className="content"
                  id={item.text}
                  style={{ padding: 0 }}
                >
                  {props.children}
                </div>
              )
            );
          })}
        </DrawerContent>
      </Drawer>

      {newWindowVisible && (
        <Window
          title={<TitleComponent />}
          onClose={toggleNewWindow}
          width={600}
          height={600}
          left={width - 620}
          top={height - 600}
        >
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <span>From</span>
              <span className="">{from.name}</span>
              <span className="text-sm">{`<${from.email}>`}</span>
            </div>
            <div className="flex gap-2 items-center">
              <span>To</span>
              <span className="">{to.name}</span>
              <span className="text-sm">{`<${to.email}>`}</span>
            </div>
            {/* <hr className="text-black/10" /> */}
            <TextBox
              fillMode={"flat"}
              style={{
                border: "none",
              }}
              placeholder="Subject"
              value={subject}
              onChange={(e: TextBoxChangeEvent) =>
                setSubject(e.value as string)
              }
              // className="focus:border-none"
            />
            <hr className="text-black/10" />
            <MDXEditor
              ref={ref}
              markdown={"."}
              plugins={[
                headingsPlugin(),
                thematicBreakPlugin(),
                listsPlugin(),
                imagePlugin(),
                linkPlugin(),
                linkDialogPlugin(),
                quotePlugin(),
                tablePlugin(),
                markdownShortcutPlugin(),
                diffSourcePlugin({ viewMode: "rich-text" }),
                toolbarPlugin({
                  toolbarContents: () => (
                    <DiffSourceToggleWrapper>
                      <UndoRedo />
                      <BoldItalicUnderlineToggles />
                      <InsertThematicBreak />
                      <ListsToggle />
                      {/* <InsertImage />
                        <CreateLink /> */}
                      <InsertTable />
                    </DiffSourceToggleWrapper>
                  ),
                }),
              ]}
              //   onChange={console.log}
              className="grow h-80"
            />
            <Button
              themeColor={"primary"}
              type="button"
              onClick={() => {
                addMail({
                  id: mails.length + 1,
                  date: new Date(),
                  from: from,
                  to: to,
                  message: ref.current?.getMarkdown() || "",
                  read: false,
                  selected: false,
                  subject: subject,
                });
                // toggleNewWindow();
              }}
            >
              Send
            </Button>
          </div>
        </Window>
      )}
      <style>{`
              .header { padding: 20px; text-align: center; }
              .content { padding: 40px 20px; }
              `}</style>
    </>
  );
};

export default DrawerRouterContainer;
