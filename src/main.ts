import 'dotenv/config';
import http, { IncomingMessage, ServerResponse } from 'http';
import chalk from 'chalk';
import { ContentType, Route, RouteType } from './route';

const port = 2300;

function main() {
	const routes: Route[] = [];

	routes.push(new Route('/', RouteType.GET, async (req: IncomingMessage) => {
		const result = {
			value: 23
		};
		return {
			errorCode: 200,
			result: JSON.stringify(result),
			returnFormat: ContentType.JSON
		};
	}));

	const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
		const { method, url } = req;

		routes.forEach(async (route: Route) => {
			if(method == route.type && url == route.path) {
				const routeResult = await route.func(req);
				res.setHeader('Content-Type', routeResult.returnFormat as string);
				res.writeHead(routeResult.errorCode);
				res.end(routeResult.result);
				console.log(chalk.cyan(`${routeResult.errorCode} ${method} ${url} ${routeResult.result?.length} bytes`));
			}
		});
	});

	server.listen(port, () => {
		console.log(chalk.green(`Server is running on http://localhost:${port}`));
	});
}

main();
