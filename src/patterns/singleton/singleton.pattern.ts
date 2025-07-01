
interface InstanceCreator<T> {
    make(): T;
}

abstract class Singleton<T = any> {
    private static _instance: unknown | null = null;

    protected constructor(factory: InstanceCreator<T>) {
        if (Singleton._instance) {
            throw new Error(`${this.constructor.name} is a singleton class. Use instance()`);
        }
        Singleton._instance = factory.make();
    }

    public static instance<T>(factory?: InstanceCreator<T>): T {
        if (this._instance === null) {
            if (!factory) throw new Error(`${this.prototype.constructor.name} has not been initialized with a factory`);
            this._instance = factory.make();
        }

        return this._instance as T;
    }

}


export { Singleton, InstanceCreator };