import { Prototype } from './prototype';
import { Creator } from '../factory-method/factory-method.pattern';

describe('Prototype Pattern', () => {

    describe('Prototype', () => {
        it('should clone a prototype', () => {

            abstract class Product extends Prototype {

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

            class ProductCreator<P extends Product> extends Creator<P> {
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
}); 