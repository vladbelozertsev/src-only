import * as vscode from "vscode";
import { Exclude } from "./types/exclude";

export const getFilesExclude = () => {
  const config = vscode.workspace.getConfiguration("files");
  const workspace = config.inspect("exclude")?.workspaceValue as Exclude;
  const hidden = Object.keys(workspace || {});

  return {
    config,
    workspace,
    hidden,
    hiddenStr: JSON.stringify(hidden),
    update: (val: string[]) => {
      const obj = val.reduce((acc, cur) => ({ ...acc, [cur]: true }), {});
      config.update("exclude", obj);
    },
  };
};
