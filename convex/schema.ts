import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { query } from "./_generated/server";

export default defineSchema({
  boards: defineTable({
    title: v.string(),
    orgId: v.string(),
    authorId: v.string(),
    authorName: v.string(),
    imageUrl: v.string(),
  })
    .index("orgId", ["orgId"])
    .searchIndex("search_title", {
      searchField: "title",
      filterFields: ["orgId"],
    }),
});
export const get = query({
  args: { id: v.id("boards") },
  handler: async (ctx, args) => {
    const board = await ctx.db.get(args.id);

    if (!board) {
      throw new Error("Board not found");
    }

    return board;
  },
});
