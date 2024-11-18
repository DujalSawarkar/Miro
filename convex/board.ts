import { mutation } from "./_generated/server";
import { v } from "convex/values";

const images = [
  "/Boardimgs/1.svg",
  "/Boardimgs/2.svg",
  "/Boardimgs/3.svg",
  "/Boardimgs/4.svg",
  "/Boardimgs/5.svg",
];

export const create = mutation({
  args: {
    orgId: v.string(),
    title: v.string(),
  },

  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unauthorized");
    }

    // Select a random image
    const randomImage = images[Math.floor(Math.random() * images.length)];

    // Insert the board into the database
    const board = await ctx.db.insert("boards", {
      orgId: args.orgId,
      title: args.title,
      authorId: identity.subject, // Authenticated user ID
      authorName: identity.name!, // Authenticated user's name
      imageUrl: randomImage, // Randomly selected image URL
    });

    return board;
  },
});
