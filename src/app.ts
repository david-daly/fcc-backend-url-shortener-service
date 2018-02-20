import { Response } from './utils/Response';

export const handler = (event, context, callback) => {

    console.log(JSON.parse(event.body));
    context.succeed(new Response(200, 'success'));
};
