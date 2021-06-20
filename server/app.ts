import Koa from 'koa';
import responseDuration from './middleware/response_duration';
import responseHeader from './middleware/response_header';
import responseRouter from './middleware/response_router';

const app = new Koa();
app.use(responseDuration);
app.use(responseHeader);
app.use(responseRouter);

app.listen(8888);