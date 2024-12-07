"use client";
import { Loader } from "../ui/Loader";
import { useActionState } from "react";
import { comments } from "@/assets/actions/comment.actions";

export const CommentBox = ({ postId }: { postId: string }) => {
  const [state, formAction, isPending] = useActionState(comments, null);

  return (
    <>
      <section className="bg-white dark:bg-slate-800 py-8 lg:py-16 antialiased">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
              Discussion
            </h2>
          </div>
          <form className="mb-6" action={formAction}>
            <input type="hidden" name="postId" value={postId} />
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-slate-800 dark:border-slate-600">
              <label htmlFor="username" className="sr-only">
                Your Name
              </label>
              <input
                id="username"
                type="text"
                name="username"
                className="px-0 w-64 text-sm text-gray-900 outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-slate-800 dark:border-slate-600">
              <label htmlFor="userEmail" className="sr-only">
                Your Email
              </label>
              <input
                id="userEmail"
                type="email"
                name="userEmail"
                className="px-0 text-sm w-64 text-gray-900 outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-slate-800 dark:border-slate-600">
              <label htmlFor="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                name="comment"
                rows={6}
                className="px-0 w-full text-sm text-gray-900 outline-none dark:text-white dark:bg-slate-800"
                placeholder="Write a comment..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 mx-auto text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 h-10 w-32"
            >
              {isPending ? (
                <div className="mx-auto">
                  <Loader />
                </div>
              ) : (
                "Post comment"
              )}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
