import 'dotenv/config';
import http from 'http';
import chalk from 'chalk';

const port = process.env.PORT || 2300;

function main() {
	const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
		const { method, url } = req;
	});

	server.listen(port, () => {
		console.log(chalk.green(`Server is running on http://localhost:${port}`));
	});
}

main();
