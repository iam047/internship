class MyPromi {
    constructor(callback) {
        this._state = 'panding';
        this.promise = {
            resolve: [],
            reject: []
        };
        this.eror = null;

        const resolve = value => {
           if(this._state !== 'pending') {
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
            if(this._state !== 'pending') {
                this._state = 'reject';
                let er = error;
                this.promise.reject.forEach((fn) => {
                    er = fn(er);
            })
            }
        };

        callback(resolve, reject);
    }

    then(resolve,rejetc) {
        if(this._state = 'resolve'){
            this.promise.resolve.push(resolve);
            console.log(this.promise);
        }else {
            this.promise.reject.push(rejetc);
        }

        return this;
    }
}

function mul(val) {
    return val * val;
}

const my = new MyPromi(resolve => setTimeout(() => resolve(7),1000));
my.then(value => mul(value))
  .then(val=> console.log(val));