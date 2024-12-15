import { connectToDB } from "@utils/database";
import Prompt from '@models/prompts';

// GET (read)
export async function GET(request, { params }) {
  try {
    await connectToDB();
    const { id } = await params;
    const prompt = await Prompt.findById(id).populate('creator');

    if (!prompt) {
      return new Response("Prompt not found", { status: 404 });
    }

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch prompt", { status: 500 });
  }
}

// PATCH (update)
export async function PATCH(request, { params }) {
  try {
    const { prompt, tag } = await request.json();
    const { id } = await params;

    await connectToDB();

    const updatedPrompt = await Prompt.findByIdAndUpdate(
      id,
      { prompt, tag },
      { new: true, runValidators: true }
    );

    return new Response(JSON.stringify(updatedPrompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to update the prompt", { status: 500 });
  }
}

// DELETE (delete)
export async function DELETE(request, { params }) {
  try {
    const { id } = await params;

    await connectToDB();

    await Prompt.findByIdAndDelete(id);

    return new Response("Prompt deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete prompt", { status: 500 });
  }
}
