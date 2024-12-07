"use server";
import { client } from "@/sanity/lib/client";

export async function comments(prevState: any, formData: FormData) {
  const { username, userEmail, comment, postId } = Object.fromEntries(
    formData.entries()
  );
  const queryResult = await client.create(
    {
      _type: "comment",
      name: username,
      email: userEmail,
      comment,
      post: {
        _type: "reference",
        _ref: postId,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_API_TOKEN}`,
      },
    }
  );
  return !queryResult
    ? {
        status: 500,
        message: "Oops! Failed to Add Comment",
      }
    : {
        status: 200,
        message: "Comment Add Successfully",
      };
}
