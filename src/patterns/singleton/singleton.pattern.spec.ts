import { Singleton } from './singleton.pattern';


describe('Singleton Pattern', () => {

    class MockClass {
        constructor(public state: string) {
            this.state = state;
        }
    }

    it('should throw an error if the singleton is not initialized with a factory', () => {
        class SingletonImplementation extends Singleton { }
        expect(() => {
            const instance = SingletonImplementation.instance();
            return instance;
        }).toThrow(`SingletonImplementation has not been initialized with a factory`);
    });

    it('should maintain the same instance', () => {
        class SingletonImplementation extends Singleton<MockClass> { }
        const instance1 = SingletonImplementation.instance({ make: () => new MockClass('initial') });
        const instance2 = SingletonImplementation.instance<MockClass>();
        expect(instance1).toBe(instance2);
        expect(instance1.state).toBe('initial');
        expect(instance2.state).toBe('initial');
        instance1.state = 'changed';
        expect(instance2.state).toBe('changed');
    });

    it('should isolate instances from each other', () => {
        class SingletonImplementation extends Singleton { }
        class SingletonImplementation2 extends Singleton { }
        const instance1 = SingletonImplementation.instance({ make: () => new MockClass('initial') });
        const instance2 = SingletonImplementation2.instance({ make: () => new MockClass('initial2') });
        expect(instance1).not.toBe(instance2);
        expect(instance1.state).toBe('initial');
        expect(instance2.state).toBe('initial2');
    });

});
