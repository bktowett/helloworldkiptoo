// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "helloworldkiptoo" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	/*let disposable = vscode.commands.registerCommand('helloworldkiptoo.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		//vscode.window.showInformationMessage('Hello World from helloworldkiptoo!');
		vscode.window.showInputBox({
			prompt: "Enter your secret key"
		}).then((secretKey) => {
			// Use the secret key to generate a new project with boilerplate code
		});
	});

	context.subscriptions.push(disposable);*/
	context.subscriptions.push(vscode.commands.registerCommand('getting-started-sample.runCommand', async () => {
		await new Promise(resolve => setTimeout(resolve, 1000));
		vscode.commands.executeCommand('getting-started-sample.sayHello', vscode.Uri.joinPath(context.extensionUri, 'sample-folder'));
	}));

	context.subscriptions.push(vscode.commands.registerCommand('getting-started-sample.changeSetting', async () => {
		await new Promise(resolve => setTimeout(resolve, 1000));
		vscode.workspace.getConfiguration('getting-started-sample').update('sampleSetting', true);
	}));

	context.subscriptions.push(vscode.commands.registerCommand('getting-started-sample.setContext', async () => {
		await new Promise(resolve => setTimeout(resolve, 1000));
		vscode.commands.executeCommand('setContext', 'gettingStartedContextKey', true);
	}));

	context.subscriptions.push(vscode.commands.registerCommand('getting-started-sample.sayHello', () => {
		vscode.window.showInformationMessage('Hello');
	}));

	context.subscriptions.push(vscode.commands.registerCommand('getting-started-sample.viewSources', () => {
		return { openFolder: vscode.Uri.joinPath(context.extensionUri, 'src') };
	}));
	
}

// This method is called when your extension is deactivated
export function deactivate() {}
