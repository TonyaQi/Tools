class EventEmitter {
    constructor() {
        this.eventList = {

        }
    }

    on = (target, handle) => {
        if(this.eventList[target]) this.eventList[target].push(handle)
        else {
            this.eventList[target] = [handle]
        }
    }

    emit = (target, args) => {
        if(this.eventList[target]) {
            this.eventList[target].forEach(item => {
                item.apply(this, args);
            });
        }
    }
}


class Emitter {
    entities = {};

    on = (key, fun) => {
        if(this.entities[key]) {
            this.entities[key].push(fun);
        } else {
            this.entities[key] = [fun];
        }
    }

    emit = (key, args) => {
        if(key in this.entities) {
            this.entities[key].forEach(item => {
                item.apply(this, args)
            })
        }
    }
}