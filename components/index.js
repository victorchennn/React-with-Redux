import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">

      <ApprovalCard>
        <h4>Warning</h4>
        <div>Are you sure?????</div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Victor"
          timeAgo="Today at 4:42PM"
          content="Ok..."
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Rina"
          timeAgo="Today at 11:11AM"
          content="Nice plot..."
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Niko"
          timeAgo="Ysterday at 2:22Am"
          content="I love you"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
