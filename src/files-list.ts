import { readdirSync } from "node:fs";

export const getFilesList = (path: string) => {
  return readdirSync(path, { withFileTypes: true }).map((file) => file.name);
};
