import mongoose from 'mongoose';
import Logger from 'bunyan';
import { config } from './config';

export default () => {
	const log: Logger = config.createLogger('setupDatabase');

	const connect = () => {
		mongoose
			.connect(`${config.DATABASE_URL}`)
			.then(() => {
				log.info('Successfully connected to the database.');
			})
			.catch((error) => {
				log.error('Error connecting to database', error);
				return process.exit(1);
			});
	};
	connect();

	mongoose.connection.on('disconnected', connect);
};
