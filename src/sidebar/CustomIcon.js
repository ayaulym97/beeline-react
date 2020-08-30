import React from "react";
import { ReactComponent as AddUser } from "../assets/addUser.svg";
import { ReactComponent as Documents } from "../assets/documents.svg";
import { ReactComponent as KnowledgeBase } from "../assets/knowledgeBase.svg";
import { ReactComponent as Meetings } from "../assets/meetings.svg";
import { ReactComponent as Numbers } from "../assets/numbers.svg";
const CustomIcon = ({ type, className}) => {
  return (
    <div className={className}>
      {(() => {
        switch (type) {
          case "addUser":
            return <AddUser />;
          case "documents":
            return <Documents />;
          case "knowledgeBase":
            return <KnowledgeBase />;
          case "meetings":
            return <Meetings />;
          case "numbers":
            return <Numbers />;
          default:
            break;
        }
      })()}
    </div>
  );
};
export default CustomIcon;
