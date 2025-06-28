import { Creator } from "./factory-method.pattern";


describe('Factory Method Pattern', () => {
    it('should create an arbitrary product', () => {

        interface ConcreteProductInterface { id: string, name: string };

        class ConcreteProduct1 implements ConcreteProductInterface {
            constructor(public id: string, public name: string) {
                this.id = id;
                this.name = name;
            }
        }

        class ConcreteProduct2 implements ConcreteProductInterface {
            constructor(public id: string, public name: string, public special: string) {
                this.id = id;
                this.name = name;
                this.special = special;
            }
        }

        class ConcreteProduct1Creator extends Creator<ConcreteProductInterface> {
            make(id: string, name: string): ConcreteProductInterface {
                return new ConcreteProduct1(id, name);
            }
        }

        class ConcreteProduct2Creator extends Creator<ConcreteProductInterface> {
            make(id: string, name: string, special: string): ConcreteProductInterface {
                return new ConcreteProduct2(id, name, special);
            }
        }

        const creator = new ConcreteProduct1Creator();
        const product = creator.make('123', 'test');
        expect(product).toEqual({ id: '123', name: 'test' });

        const creator2 = new ConcreteProduct2Creator();
        const product2 = creator2.make('123', 'test', 'special');
        expect(product2).toEqual({ id: '123', name: 'test', special: 'special' });
    });
});