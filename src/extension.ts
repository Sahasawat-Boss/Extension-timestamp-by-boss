import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('timestamp-by-boss.insertTimestamp', () => {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const timestamp = new Date().toLocaleString('th-TH', {
				year: 'numeric',
				month: '2-digit',
				day: '2-digit',
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
			});
			editor.edit(editBuilder => {
				editBuilder.insert(editor.selection.active, timestamp);
			});
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }
