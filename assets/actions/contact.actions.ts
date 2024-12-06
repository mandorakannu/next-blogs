"use server";
import clients from "@/assets/mongodb/models/users";
import {
  connectToDatabase,
  disconnectFromDatabase,
} from "@/assets/mongodb/db/connection";

export default async function queryContact(prevState: any, formData: FormData) {
  const { email, message, subject } = Object.fromEntries(formData.entries());
  await connectToDatabase();
  const queryResult = await clients.create({ email, message, subject });
  disconnectFromDatabase();
  return !queryResult
    ? {
        status: 500,
        message: "Oops! Failed to Send Message",
      }
    : {
        status: 200,
        message: "Message Sent Successfully",
      };
}
