import Router from 'koa-router';
import path from 'path';
import fs from 'fs';

const router = new Router({
    prefix: '/api'
});

router.get('/seller', async (context, next)=>{
    const filePath = path.resolve(__dirname, '../data/seller.jso');
    try{
        const file = fs.readFileSync(filePath, {
            encoding: 'utf-8',
        })
        context.body = file;
    }catch(error){
        context.status = 404;
        context.body = JSON.stringify({
            message: '读取文件失败。'
        })
    }
    await next();
})

export default router.routes();
