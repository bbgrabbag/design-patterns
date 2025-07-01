import { Adapter } from './adapter.pattern';

describe('Adapter Pattern', () => {
    class Target {
        public incompatibleRequest(): string {
            return 'Target request';
        }
    }

    interface Source {
        do(): string;
    }

    class SourceAdapter extends Adapter<Target> implements Source {
        public do(): string {
            return this._target.incompatibleRequest();
        }
    }

    class Client {
        public request(source: Source): string {
            return source.do();
        }
    }
    it('should adapt a target to an interface', () => {
        const target = new Target();
        const client = new Client();
        const source = new SourceAdapter(target);
        expect(client.request(source)).toBe('Target request');
    });
});