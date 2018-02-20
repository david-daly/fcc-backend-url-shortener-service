import { Connection, createConnection, Mongoose } from 'mongoose';
import { UrlModel } from './models/UrlModel';
import { Response } from './utils/Response';

const mongoConnection = createConnection('mongodb://localhost:27017/url');

export const handler = (event, context, callback) => {
    const url = mongoConnection.model(UrlModel.name, UrlModel.schema);
    url.create(JSON.parse(event.body), (err, shortUrl) => {
        if (err) {
            context.fail(500, JSON.stringify(err));
        } else {
            context.succeed(new Response(200, JSON.stringify(shortUrl)));
        }
    });
};
