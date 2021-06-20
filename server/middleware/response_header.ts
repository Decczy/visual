import {Context, Next} from 'koa';

export default async function(context: Context, next: Next){
    const contentType = 'application/json; charset=utf-8';
    context.set('Content-Type', contentType);
    context.response.body = JSON.stringify({
        success: true
    })
    await next();
}