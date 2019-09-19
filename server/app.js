
const path = require("path");
const render = require("./libs/render");
const logger = require("koa-logger");
const router = require("koa-router")();
const koaBody = require("koa-body");
const Koa = require("koa");
const app = module.exports = new Koa();
const koaStatic = require("koa-static");
const static = koaStatic(path.join(__dirname,"../dist"));

app.use(static);
app.use(logger());
app.use(render);
app.use(koaBody());

router.get("/", home)
  .get("/space",space);

app.use(router.routes());

async function home(ctx){
  await ctx.render("index")
}
async function space(ctx){
  await ctx.render("space")
}

if(!module.parent) app.listen(3000);

console.log("Server is start, listen 3000...")