export type OperationFormat = {
	disabled?: boolean;
	method: string;
	call: (...args: any[]) => any;
	args: {
		key: string;
		type: string;
		optional?: boolean;
	}[];
};

export default class BaseOperation {
	public static getName(): string {
		return "";
	}

	public static getDescription(): string {
		return "";
	}

	public static getOperations(): OperationFormat[] {
		return [];
	}
}
