import React from "react";

const commentData = [
  {
    name: "pratik",
    text: "Lorem ipsum dolor sit amet consectetur,",
    reply: [
      {
        name: "pratik",
        text: "Lorem ipsum dolor sit amet consectetur,",
        reply: {
          name: "pratik",
          text: "Lorem ipsum dolor sit amet consectetur,",
        },
      },
      {
        name: "pratik",
        text: "Lorem ipsum dolor sit amet consectetur,",
      },
      {
        name: "pratik",
        text: "Lorem ipsum dolor sit amet consectetur,",
      },
      {
        name: "pratik",
        text: "Lorem ipsum dolor sit amet consectetur,",
      },
    ],
  },
  {
    name: "pratik",
    text: "Lorem ipsum dolor sit amet consectetur,",
    reply: [
      {
        name: "pratik",
        text: "Lorem ipsum dolor sit amet consectetur,",
      },
      {
        name: "pratik",
        text: "Lorem ipsum dolor sit amet consectetur,",
      },
    ],
  },
  {
    name: "pratik",
    text: "Lorem ipsum dolor sit amet consectetur,",
  },
  {
    name: "pratik",
    text: "Lorem ipsum dolor sit amet consectetur,",
  },
  {
    name: "pratik",
    text: "Lorem ipsum dolor sit amet consectetur,",
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;

  return (
    <>
      <div className=" flex items-center gap-4  bg-gray-100 p-3 rounded">
        <img
          className="w-9 h-9"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt=""
        />
        <div>
          <p className="font-bold">{name}:</p>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

const CommentList = ({ comments }) => {
  return (
    <div className="ml-12 ">
      {comments.map((comment, index) => {
        return (
          <div key={index}>
            <Comment data={comment} />
            <div className="ml-2 border m-2 border-l-black">
              {comment.reply &&
                comment.reply.map((reply, replyIndex) => (
                  <div key={replyIndex} className="ml-2">
                    <Comment data={reply} />
                  </div>
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const CommentBox = () => {
  return (
    <>
      <h2 className="font-bold text-xl m-4">Comments:</h2>
      <CommentList comments={commentData} />
    </>
  );
};

export default CommentBox;
