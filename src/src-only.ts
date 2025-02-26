import * as vscode from "vscode";
import { Show } from "./types/show";

export const getSrcOnly = () => {
  const config = vscode.workspace.getConfiguration("src-only");
  const basic = config.inspect("show")?.defaultValue as Show;
  const workspace = config.inspect("show")?.workspaceValue as Show;
  const visible = workspace || basic || ["src"];
  const hiddenDef = config.inspect("exclude")?.defaultValue as Show;
  const hiddenWs = config.inspect("exclude")?.workspaceValue as Show;
  const hidden = hiddenWs || hiddenDef || [];

  return {
    config,
    basic,
    workspace,
    visible,
    hidden,
    hiddenStr: JSON.stringify(hidden),
  };
};
