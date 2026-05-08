import { chunk, computed } from "stunk";

export const userChunk = chunk<{
  name: string;
  email: string;
} | null>({
  name: "CodeKage",
  email: "[EMAIL_ADDRESS]",
});

export const tokenChunk = chunk<string | null>("9834jeihfuydf7");

export const isAuthenticated = computed(() => {
  return (
    userChunk.get() !== null ||
    tokenChunk.get() !== null ||
    userChunk.get() !== undefined ||
    tokenChunk.get() !== undefined
  );
});
