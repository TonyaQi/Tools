
const fn1 = async (context, next) => {
    console.log(1);
    context.a = 1;
    await next();
    console.log(2);

}

const fn2 = async (context, next) => {
    console.log(3);
    context.a = 3;
    await next();
    console.log(4);
}


class App {
    constructor() {
        this.list = [];
        this.context = {};
    }

    use(fn) {
        // fn = (context, next) => {}
        this.list.push(fn);
    }

    start() {
        const compose = (middles) => {
            return function(context) {
                function dispatch(i) {
                    const cur = middles[i];
                    if(!cur) return Promise.resolve();
                    try{
                        return Promise.resolve(
                            //通过i+1获取下一个中间件
                            cur(context, () => dispatch(i+1))
                        )
                    }catch(err){
                        return Promise.reject(err)
                    }
            }
                return dispatch(0)
            };
        }
        compose(this.list)(this.context);
    }
}

const app = new App();
app.use(fn1);
app.use(fn2);
app.start();

