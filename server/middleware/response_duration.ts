import {Context, Next} from 'koa';

export default async function(context: Context, next: Next){
    const start = Date.now()
    await next();
    const end = Date.now();
    context.set('X-Response-Duration', end - start + 'ms');
}