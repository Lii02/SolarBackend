import { IncomingMessage } from 'http';

enum ContentType {
	JSON = 'application/json',
	HTML = 'application/html'
};

interface RouteReturn {
	errorCode: number;
	result?: string | undefined;
	returnFormat: ContentType | string;
};

type RouteFunc = (req: IncomingMessage) => Promise<RouteReturn>;

enum RouteType {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	DELETE = 'DELETE'
};

class Route {
	path: string;
	type: RouteType;
	func: RouteFunc;

	constructor(path: string, type: RouteType, func: RouteFunc) {
		this.path = path;
		this.type = type;
		this.func = func;
	}
}

export { ContentType, RouteReturn, type RouteFunc, RouteType, Route };
