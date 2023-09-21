import { Input, Form, Button } from "antd";
import React, { useState } from "react";

const Comments = () => {
  const [comment, setComment] = useState("");
  const [submittedComment, setSubmittedComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    if (comment.trim() !== "") {
      setSubmittedComment(comment);
      setComment("");
    }
  };

  return (
    <div>
      <h1>Comment Section</h1>
      <Form layout="vertical">
        <Form.Item label="Your Comment">
          <Input.TextArea
            value={comment}
            onChange={handleCommentChange}
            rows={4}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleSubmit}>
            Submit Comment
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Comments;
