abstract class Adapter<T> {
    protected _target: T;

    constructor(target: T) {
        this._target = target;
    }
}

export { Adapter };