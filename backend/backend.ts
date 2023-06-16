import Koa, { Context } from 'koa';
import HostsRouter from './routes/hosts.js';
// import './database';
// import { Sequelize } from 'sequelize';

const app: Koa = new Koa();

//setup router
app.use(HostsRouter.routes());
app.use(HostsRouter.allowedMethods());

app.listen(8080, () => {
    console.log("Listening on Port 8080");
});