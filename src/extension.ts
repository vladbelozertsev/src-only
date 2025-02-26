import * as vscode from "vscode";
import { getFilesExclude } from "./files-exclude";
import { getFilesList } from "./files-list";
import { getSrcOnly } from "./src-only";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "src-only.toggle",
    async () => {
      const srcOnly = getSrcOnly();
      const filesExclude = getFilesExclude();
      const wsFolders = vscode.workspace.workspaceFolders;
      if (!(wsFolders && wsFolders[0].uri.path)) return;
      const isSrcOnlyMode = srcOnly.hiddenStr !== filesExclude.hiddenStr;
      if (isSrcOnlyMode) return filesExclude.update(srcOnly.hidden);
      const files = getFilesList(wsFolders[0].uri.path);
      const withoutVisible = files.filter((f) => !srcOnly.visible.includes(f));
      filesExclude.update(withoutVisible);
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}

/**
 * Useful links:
 * https://www.youtube.com/watch?v=q5V4T3o3CXE
 * https://stackoverflow.com/questions/74626861/how-to-enable-the-configuration-settings-at-my-extension-for-visual-studio-code
 * https://stackoverflow.com/questions/42164748/how-do-i-set-a-keybinding-for-an-extension-in-vscode
 **/
