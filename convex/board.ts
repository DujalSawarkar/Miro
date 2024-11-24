import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export interface Board {
  _id: string; // Assuming Convex generates an ID for each document
  _creationTime: number; // Assuming Convex tracks the creation time for each document
  title: string;
  orgId: string;
  authorId: string;
  authorName: string;
  imageUrl: string;
}

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

export const get = query({
  args: { organizationId: v.string() || undefined },
  handler: async (ctx, { organizationId }) => {
    const boards = await ctx.db
      .query("boards")
      .filter((q) => q.eq(q.field("orgId"), organizationId)) // Use Convex's query builder syntax
      .collect();

    if (boards.length === 0) {
      return null;
      throw new Error("No boards found for this organization.");
    }
    console.log(boards);
    return boards;
  },
});
