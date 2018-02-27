class MyPromise {
    constructor(callback) {
        this._state = 'pending';
        this.promise = {
            resolve: [],
            reject: []
        };
        const resolve = value => {
            if(this._state === 'pending') {
                this._state = 'resolve';
                let val = value;
                try {
                    this.promise.resolve.forEach((fn) => {
                        val = fn(val);
                    });
                } catch (error) {
                    this.promise.reject = [];
                }
            }
        };
        const reject = (error) => {
            if(this._state === 'pending') {
                this._state = 'reject';
                let er = error;
                this.promise.reject.forEach((fn) => {
                    er = fn(er);
                })
            }
        };

        callback(resolve, reject);
    }

    then(resolve, reject) {
        if(this._state === 'pending'){
           resolve && this.promise.resolve.push(resolve);
           reject && this.promise.reject.push(reject);
            console.log(this.promise);
        }

        return this;
    }
}

function mul(val) {
    return val * val;
}
const my = new MyPromise(resolve => setTimeout(() => resolve(7),1000));
my.then(value => mul(value))
  .then(val=> console.log(val));