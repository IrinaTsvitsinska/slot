class EventSystem {
    constructor() {
        this.events = {};
    }

    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        this.events[eventName].push(callback);
    }

    fire(eventName, params) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(callback => {
                callback(params);
            });
        }
    }
}


export const gameEvents = new EventSystem();