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