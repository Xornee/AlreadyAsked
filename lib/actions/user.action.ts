"use server";

import { connectToDatabase } from "../mongoose";
import User from "@/database/user.model";

export async function getUserByID(params: any) {
  try {
    connectToDatabase();
    const { userId } = params;
    const user = await User.findOne({ clerkId: userId });
    console.log(user, userId);
    return user;
  } catch (err) {
    console.log(err);
  }
}
