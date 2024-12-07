"use client";

import { Avatar } from "@nextui-org/react";
import { dateConverter } from "@functions/dateConverter";

type CommentType = {
  _createdAt: string;
  name: string;
  postId: string;
  _rev: string;
  _type: "comment";
  comment: string;
  _id: string;
  _updatedAt: string;
  email: string;
};

export const AllComments = ({ comments }: any) => {
  return (
    <>
      {comments[0] ? (
        <article className="p-6 text-base bg-white rounded-md dark:bg-slate-800 border-t-2 border-primary-700">
          {comments.map(
            ({ _createdAt, _id, name, email, comment }: CommentType) => {
              const commentDate = dateConverter(_createdAt);
              return (
                <div
                  key={_id}
                  className="border-2 border-primary-800 bg-white rounded-lg dark:bg-gray-900 p-5 my-6"
                >
                  <footer className="flex justify-between items-start mb-2">
                    <div className="flex justify-center items-center text-sm text-gray-900 dark:text-white font-semibold">
                      <Avatar src={name==="Kannu Mandora" ? "/images/author.jpg": "https://i.pravatar.cc/"} />
                      <p className="flex flex-col ml-4">
                        <span>{name}</span>
                        <span className="text-gray-500 text-xs">{email}</span>
                      </p>
                    </div>
                    <time
                      className="text-sm text-gray-600 dark:text-gray-400"
                      dateTime={commentDate}
                      title={commentDate}
                    >
                      {commentDate}
                    </time>
                  </footer>
                  <p className="text-gray-500 dark:text-gray-400">{comment}</p>
                </div>
              );
            }
          )}
        </article>
      ): null}
    </>
  );
};
