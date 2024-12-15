import { connectToDB } from "@utils/database";
import Prompt from "@models/prompts";

export async function GET(res, rep) {
  try {
    await connectToDB();

    const prompts = await Prompt.find({}).populate('creator');

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Error in fetching prompts, please try again", { status: 500 });
  }
}
