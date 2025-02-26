## About

Src-only is extension for vscode shows/hides unnecessary directories in your project. By default, everything except the `"src"` folder is become hidden when you press the hotkeys. You can change this logic (add your additional dirs or remove default `"src"`), see below.

## Usage

After installation open project that contains `"src"` folder and press `"ALT+S"`. Press hotkeys twice to back to default project folders structure.

## Hotkeys

By default `"ALT+S"`, you can change the hotkeys: Code => Preferences => Keyboard Shortcuts => tap `"src-only"` to input.

## VSCode command palette

Press `"Ctrl+Shift+P"` and tap `"src-only.toggle"` or `"Src/Root Folder Toggle Visibility"`

## Custom folders

Open your `.vscode/settings.json` file and edit `"src-only.show"` value. Value is array of strings, that represents folder structrure of your project.
For example:

```json
  "src-only.show": ["src", "index.js"] // show only index.js and src folder
```

## VSCode files.exclude

The extension edit files.exclude when you press the hotkeys. If you have always hidden folders in your project, add them to `"src-only.exclude"`, and after switching your project will return to basic files.exclude setup.
For example:

```json
 "src-only.exclude": ["vendor"] // always hide vendor folder even after src-only inactive
```
