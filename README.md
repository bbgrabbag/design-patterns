# Design Patterns

A simple npm package containing common design patterns and algorithms.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Documentation](#usage)
  - [Design Patterns](#design-patterns-1)
  - [Algorithms](#algorithms)
- [Usage](#development)
  - [Quick Start with DevContainer](#quick-start-with-devcontainer)
  - [Install Dependencies](#install-dependencies)
  - [Build the Project](#build-the-project)
  - [Run Tests](#run-tests)
  - [Code Quality](#code-quality)
  - [Scripts](#scripts)
- [Publishing](#publishing)
- [License](#license)

## Features

- **Design Patterns**: Singleton, Factory, Prototype patterns and more
- **Algorithms**: Sort, Tree Search, Shortest Path and more
- **DevContainer**: Ready-to-use development environment

## Installation

```bash
npm install algopat
```

## Usage

### Design Patterns

#### Adapter

The Adapter pattern is a structural design pattern that allows objects with incompatible interfaces to work together by wrapping an existing object with a new interface.

`Adapter` is an abstract class. To use it, extend it and implement the desired interface, delegating calls to the `_target` property.

`import { Adapter } from 'design-patterns'`
| Method / Property | Description | Example |
|---------------------|------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| `constructor(target: T)` | Initializes the adapter with the target object. | `const adapter = new Adapter(targetInstance);` |
| `_target: T` | Protected property holding the reference to the adapted target. | `this._target.incompatibleRequest();` (used within subclasses) |

#### Factory Method

The Factory Method pattern is a creational design pattern that defines an interface for creating objects, but allows subclasses to alter the type of objects that will be created. This pattern enables a class to delegate the instantiation logic to its subclasses, promoting loose coupling and greater flexibility in object creation.

`Creator` is an abstract class. To use it, extend it and implement the `make(...args)` method to create and return instances of your desired type.

`import { Creator } from 'design-patterns'`

| Method / Property  | Description                                                   | Example                                  |
| ------------------ | ------------------------------------------------------------- | ---------------------------------------- |
| `make(...args): T` | Abstract method to create and return an instance of type `T`. | `const product = factory.make('param');` |

#### Prototype

The Prototype pattern is a creational design pattern that enables the creation of new objects by copying existing instances, known as prototypes. This approach is useful when the cost of creating a new object is expensive or complex. Instead of instantiating new objects directly, you clone a prototype and then customize it as needed. This pattern helps reduce the need for subclassing, supports dynamic object creation, and simplifies the process of creating objects with similar configurations or states.

`Prototype` is an abstract class—extend it in your own classes and implement `clone()` and `initialize(...args)` to enable cloning and initialization of your objects.

`import { Prototype } from 'design-patterns'`

| Method / Property                  | Description                                                    | Example                               |
| ---------------------------------- | -------------------------------------------------------------- | ------------------------------------- |
| `clone(): T`                       | Abstract method to clone the object and return a new instance. | `const copy = prototype.clone();`     |
| `initialize(...args: any[]): void` | Abstract method to initialize the object's state.              | `prototype.initialize('id', 'name');` |

#### Prototype Registry

The `PrototypeRegistry` is a concrete implementation of the prototype registry pattern. It allows you to register, unregister, and retrieve prototype instances by a unique string identifier. This enables efficient cloning and management of object prototypes, making it easy to create new instances based on existing templates without coupling your code to specific classes.

To use `PrototypeRegistry`, create an instance, register your prototypes with unique ids, and retrieve them as needed. You can then clone the retrieved prototype to create new objects with the same structure and state.

`import { PrototypeRegistry } from 'design-patterns'`

| Method / Property         | Description                                                                   | Example                                           |
| ------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------- |
| `register(id, prototype)` | Registers a prototype instance with a unique string id.                       | `registry.register('product1', productInstance);` |
| `unregister(id)`          | Removes a prototype from the registry by its id.                              | `registry.unregister('product1');`                |
| `get(id)`                 | Retrieves a registered prototype by id. Returns the prototype or `undefined`. | `const proto = registry.get('product1');`         |

#### Abstract Prototype Registry

`AbstractPrototypeRegistry` is an abstract class. Extend it to implement your own registry logic.

`import { AbstractPrototypeRegistry } from 'design-patterns'`

| Method / Property           | Description                                                               | Example                                             |
| --------------------------- | ------------------------------------------------------------------------- | --------------------------------------------------- |
| `register(id, prototype)`   | Abstract method to register a prototype instance with a unique string id. | `registry.register('product1', productInstance);`   |
| `unregister(id, prototype)` | Abstract method to remove a prototype from the registry by its id.        | `registry.unregister('product1', productInstance);` |
| `get(id)`                   | Abstract method to retrieve a registered prototype by id.                 | `const proto = registry.get('product1');`           |

#### Singleton

The `Singleton` pattern ensures that a class has only one instance and provides a global point of access to it. To use, extend the `Singleton` base class and access the instance via `instance()`.

`import { Singleton } from 'design-patterns'`

| Method / Property                          | Description                                                                | Example                                                                                                                      |
| ------------------------------------------ | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `instance()`                               | Returns the single instance of the singleton class.                        | `const instance = Singleton.instance();`                                                                                     |
| `constructor(factory: InstanceCreator<T>)` | Protected constructor to initialize the singleton instance with a factory. | `class MySingleton extends Singleton<MySingleton> { protected constructor() { super({ make: () => new MySingleton() }); } }` |

### Algorithms

#### Insert Sort

The **Insertion Sort** algorithm is a simple, intuitive sorting technique that builds the sorted array one item at a time. It works by iterating through the array, taking each element, and inserting it into its correct position relative to the already sorted portion of the array. This algorithm is efficient for small or nearly sorted datasets and is stable (preserves the order of equal elements).

`import { insertionSort } from 'design-patterns'`
| Argument | Description | Default Value | Example |
| ------------- | --------------------------------------------------------------------------- | ------------- | -------------------------------------------- |
| `arr` | The array to sort. | — | `[5, 3, 8, 4, 2]` |
| `compareFn` | Function to compare two elements. Should return -1, 0, or 1. | `(a, b) => (a < b ? -1 : a > b ? 1 : 0)` | `(a, b) => a.localeCompare(b)` |
| `options` | Optional settings for sorting. See below for details. | `{ mutable: true }` | `{ mutable: false }` |

**Options**

| Option    | Description                                                                   | Default Value | Example |
| --------- | ----------------------------------------------------------------------------- | ------------- | ------- |
| `mutable` | If `true`, sorts the input array in-place. If `false`, returns a sorted copy. | `true`        | `false` |

#### Select Sort

The **Selection Sort** algorithm sorts an array by repeatedly finding the minimum (or maximum, with a custom comparator) element from the unsorted part and moving it to the beginning. It is simple to implement and works well for small arrays, but is generally less efficient than more advanced algorithms for large datasets.

`import { selectionSort } from 'design-patterns'`

| Argument    | Description                                                  | Default Value                            | Example              |
| ----------- | ------------------------------------------------------------ | ---------------------------------------- | -------------------- |
| `arr`       | The array to sort.                                           | —                                        | `[5, 2, 9, 1, 5, 6]` |
| `compareFn` | Function to compare two elements. Should return -1, 0, or 1. | `(a, b) => (a < b ? -1 : a > b ? 1 : 0)` | `(a, b) => b - a`    |
| `options`   | Optional settings for sorting. See below for details.        | `{ mutable: true }`                      | `{ mutable: false }` |

**Options**

| Option    | Description                                                                   | Default Value | Example |
| --------- | ----------------------------------------------------------------------------- | ------------- | ------- |
| `mutable` | If `true`, sorts the input array in-place. If `false`, returns a sorted copy. | `true`        | `false` |

## Development

### Quick Start with DevContainer

The easiest way to get started is using the provided devcontainer:

1. Install [Docker](https://www.docker.com/products/docker-desktop/)
2. Install [VS Code](https://code.visualstudio.com/) with the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
3. Open this project in VS Code
4. When prompted, click "Reopen in Container"
5. The container will build and install all dependencies automatically

### Install Dependencies

```bash
npm install
```

### Build the Project

```bash
npm run build
```

This will compile TypeScript files to JavaScript in the `dist/` directory.

### Run Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Code Quality

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Check code formatting
npm run format:check
```

### Clean Build Output

```bash
npm run clean
```

### Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm test` - Run all tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report
- `npm run clean` - Remove build output
- `npm run lint` - Lint TypeScript files
- `npm run lint:fix` - Fix linting issues automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run prepublishOnly` - Clean and build before publishing

## Publishing

To publish this package to npm:

1. Update the version in `package.json`
2. Run `npm run build` to ensure the latest code is compiled
3. Run `npm publish`

The `prepublishOnly` script will automatically clean and build the project before publishing.

## License

MIT
