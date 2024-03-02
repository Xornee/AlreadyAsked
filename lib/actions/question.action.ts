"use server";

import { connectToDatabase } from "../mongoose";

export async function createQuestion(data: any) {
  try {
    connectToDatabase();
  } catch (err) {
    console.log(err);
  }
}
