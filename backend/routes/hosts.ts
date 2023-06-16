import Koa from 'koa';
import Router from 'koa-router';

const routerOpts: Router.IRouterOptions = {
    prefix: '/hosts'
};

const router: Router = new Router(routerOpts);

router.get("/", async (ctx:Koa.Context) => {
    ctx.body = "Get All";
    console.log(ctx);
});

//create new host
router.post("/", async (ctx: Koa.Context) => {

});

//Update Entry
router.put("/:mac", async (ctx: Koa.Context) => {

});

// router.get()

export default router;