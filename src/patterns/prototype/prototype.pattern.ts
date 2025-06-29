// Prototype Pattern Implementation

abstract class Prototype {
    abstract clone(): Prototype;
    initialize(..._args: any[]): void { /* Optional default implementation */ }
}

abstract class AbstractPrototypeRegistry {
    abstract register<P extends Prototype>(id: string, prototype: P): void;
    abstract unregister<P extends Prototype>(id: string, prototype: P): void;
    abstract get<P extends Prototype>(id: string): P | void;
}

class PrototypeRegistry extends AbstractPrototypeRegistry {
    private prototypes: Map<string, Prototype> = new Map();

    register<P extends Prototype>(id: string, prototype: P): void {
        if (this.prototypes.has(id)) {
            throw new Error(`Prototype with id ${id} already registered`);
        }
        this.prototypes.set(id, prototype);
    }

    unregister(id: string): void {
        const prototype = this.prototypes.get(id);
        if (!prototype) {
            throw new Error(`Prototype with id ${id} not found`);
        }
        this.prototypes.delete(id);
    }

    get<P extends Prototype>(id: string): P | void {
        const prototype = this.prototypes.get(id);
        if (!prototype) return;
        return prototype as P;
    }
}

export { Prototype, AbstractPrototypeRegistry, PrototypeRegistry }; 