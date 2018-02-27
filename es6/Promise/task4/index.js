function MyPromise(task) {
    this._state = 'pending';
    this._resolve_handler = 0;
    this._reject_handler = 0;
    this._resolved_value = 0;
    this._rejected_value = 0;
    this._resolve = this._resolve.bind(this);
    this._reject = this._reject.bind(this);
    task(this._resolve, this._reject);
    return this;
}

MyPromise.resolved = function (val) {
    const p = new MyPromise(res=>res(val));
    p._state = 'resolved';
    return p;
};

MyPromise.prototype = {
    _resolve: function(val) {
        this._state = 'resolved';
        this._resolved_value  = val;
        if (this._resolve_handler) {
            this._resolve_handler(val);
        }
    },
    _reject: function(err) {
        this._state = 'rejected';
        this._rejected_value = err;
        if (this._reject_handler) {
            this._reject_handler(err);
        }
    },
    then: function(resolved, rejected) {
        return new MyPromise((res, rej)=> {
            if (this._state === 'pending') {
                this._resolve_handler = function (val) {
                    res(resolved(val));
                };
                this._reject_handler = function (err) {
                    res(rejected(err));
                }
            } else if (this._state === 'resolved') {
                res(resolved(this._resolved_value));
            } else if (this._state === 'rejected') {
                res(rejected(this._rejected_value));
            }
        });
    }
};

const myPromise = new MyPromise(resolve => setTimeout(() => resolve(123),5000));
myPromise.then(
    value => console.log('success', value),
    error => console.log('error', error)
);