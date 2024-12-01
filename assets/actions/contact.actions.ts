"use server";
import clients from "@/assets/mongodb/models/users";
import { connectToDatabase, disconnectFromDatabase } from "@/assets/mongodb/db/connection";

export default async function queryContact(formData: FormData) {
  const { email, message, subject } = Object.fromEntries(formData.entries());
    await connectToDatabase();
    await clients.create({ email, message, subject });
    disconnectFromDatabase();
}
