import BaseOperation from "./src/base/base_operation";
import DirectoryList from "./src/directory_list";
import FileRead from "./src/file_read";
import FileWrite from "./src/file_write";
import Git from "./src/git";
import Google, { GoogleSearchResult } from "./src/google";
import NpmHelper from "./src/npm_helper";
import Selenium from "./src/selenium";
import ShellCommand from "./src/shellcmd";
import DoNothing from "./src/do_nothing";
import TaskComplete from "./src/task_complete";

export { BaseOperation, DirectoryList, FileRead, FileWrite, Git, Google, GoogleSearchResult, NpmHelper, Selenium, ShellCommand, DoNothing, TaskComplete };

// Provide different subsets of Operations to different adapters
export const Operations = [DirectoryList, FileRead, FileWrite, Git, Google, NpmHelper, Selenium, ShellCommand, DoNothing, TaskComplete];
export const WebOperations = [Google, Selenium, TaskComplete];
export const LocalOperations = [DirectoryList, FileRead, FileWrite, Git, NpmHelper, ShellCommand, DoNothing, TaskComplete];

export const Commands = Operations.map((operation) => {
	return { [operation.getName()]: operation.getOperations() };
});
