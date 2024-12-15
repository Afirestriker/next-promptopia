import { connectToDB } from "@utils/database";
import Prompt from '@models/prompts';

export async function GET(req, { params }) {
  try {
    await connectToDB();

    const prompts = await Prompt.find({
      creator: params.id
    }).populate('creator');

    return new Reponse(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Reponse("Failed to fetch user prompts", { status: 500 });
  }
}
