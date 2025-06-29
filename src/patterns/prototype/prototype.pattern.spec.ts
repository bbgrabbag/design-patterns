import { Prototype, PrototypeRegistry } from './prototype.pattern';
import { Creator } from '../factory-method/factory-method.pattern';

describe('Prototype Pattern', () => {

    interface ProductInterface extends Prototype {
        id: string;
        name: string;
    }

    abstract class Product extends Prototype implements ProductInterface {

        id: string;
        name: string;

        constructor(id: string = '', name: string = '') {
            super()
            this.id = id;
            this.name = name;
        }

        abstract clone(): Product;

        initialize(id: string, name: string): void {
            this.id = id;
            this.name = name;
        }

    }

    class ConcreteProduct1 extends Product {

        public clone(): ConcreteProduct1 {
            return new ConcreteProduct1(this.id, this.name);
        }

    }

    class ConcreteProduct2 extends Product {

        owner: string;

        constructor(id: string = '', name: string = '', owner: string = '') {
            super(id, name);
            this.owner = owner;
        }

        public clone(): ConcreteProduct2 {
            return new ConcreteProduct2(this.id, this.name, this.owner);
        }

    }

    class ProductCreator<P extends ProductInterface> extends Creator<P> {
        constructor(private _prototype: P) {
            super();
            this._prototype = _prototype;
        }

        public make(id: string, name: string): P {
            const product = this._prototype.clone() as P;
            product.initialize(id, name);
            return product;
        }
    }

    describe('Prototype', () => {

        it('should initialize a prototype', () => {
            const product = new ConcreteProduct1();
            product.initialize('1', 'Product 1');
            expect(product.id).toBe('1');
            expect(product.name).toBe('Product 1');
        });

        it('should clone a prototype', () => {
            const creator = new ProductCreator(new ConcreteProduct1());
            const creator2 = new ProductCreator(new ConcreteProduct2('default', 'default', 'default'));
            const product1 = creator.make('1', 'Product 1');
            const product2 = creator2.make('2', 'Product 2');

            expect(product1.id).toBe('1');
            expect(product1.name).toBe('Product 1');
            expect(product1.clone).toBeDefined();
            expect(product2.id).toBe('2');
            expect(product2.name).toBe('Product 2');
            expect(product2.owner).toBe('default');
            expect(product2.clone).toBeDefined();
        });
    });

    describe('PrototypeRegistry', () => {
        it('should register a prototype', () => {
            const registry = new PrototypeRegistry();
            registry.register('product1', new ConcreteProduct1());
            expect(registry.get('product1')).toBeInstanceOf(ConcreteProduct1);
        });

        it('should unregister a prototype', () => {
            const registry = new PrototypeRegistry();
            registry.register('product1', new ConcreteProduct1());
            registry.unregister('product1');
            expect(registry.get('product1')).toBeUndefined();
        });

        it('should return void if a prototype is not found', () => {
            const registry = new PrototypeRegistry();
            expect(registry.get('product1')).toBeUndefined();
        });

        it('should throw an error if a prototype is already registered', () => {
            const registry = new PrototypeRegistry();
            registry.register('product1', new ConcreteProduct1());
            expect(() => registry.register('product1', new ConcreteProduct1())).toThrow();
        });

        it('should throw if prototype is not found when unregistering', () => {
            const registry = new PrototypeRegistry();
            expect(() => registry.unregister('product1')).toThrow();
        });
    });
}); 