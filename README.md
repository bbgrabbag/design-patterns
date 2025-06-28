# Design Patterns Package

A simple npm package demonstrating common design patterns and utility functions built with TypeScript and Jest.

## Features

- **Utility Functions**: String manipulation, number formatting, and palindrome detection
- **Design Patterns**: Singleton, Factory, and Observer patterns
- **Calculator Class**: Basic mathematical operations
- **TypeScript**: Full type safety and IntelliSense support
- **Jest Testing**: Comprehensive test coverage
- **DevContainer**: Ready-to-use development environment

## Quick Start with DevContainer

The easiest way to get started is using the provided devcontainer:

1. Install [Docker](https://www.docker.com/products/docker-desktop/)
2. Install [VS Code](https://code.visualstudio.com/) with the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
3. Open this project in VS Code
4. When prompted, click "Reopen in Container"
5. The container will build and install all dependencies automatically

## Manual Installation

If you prefer to develop locally:

```bash
npm install
```

## Development

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

## Usage

### Basic Usage

```typescript
import { greet, Calculator } from 'design-patterns';

// Greeting function
console.log(greet('World')); // "Hello, World!"

// Calculator
const calc = new Calculator();
console.log(calc.add(5, 3)); // 8
console.log(calc.multiply(4, 2)); // 8
```

### Utility Functions

```typescript
import { formatNumber, capitalize, reverseString, isPalindrome } from 'design-patterns';

// Number formatting
console.log(formatNumber(3.14159)); // "3.14"
console.log(formatNumber(3.14159, 4)); // "3.1416"

// String utilities
console.log(capitalize('hello')); // "Hello"
console.log(reverseString('hello')); // "olleh"
console.log(isPalindrome('racecar')); // true
```

### Design Patterns

```typescript
import { Singleton, AnimalFactory, Subject, Observer } from 'design-patterns';

// Singleton Pattern
const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();
console.log(singleton1 === singleton2); // true

// Factory Pattern
const dog = AnimalFactory.createAnimal('dog');
const cat = AnimalFactory.createAnimal('cat');
console.log(dog.makeSound()); // "Woof!"
console.log(cat.makeSound()); // "Meow!"

// Observer Pattern
const subject = new Subject();
const observer: Observer = {
  update: (data: string) => console.log('Received:', data)
};

subject.attach(observer);
subject.notify('Hello observers!'); // "Received: Hello observers!"
```

## Project Structure

```
design-patterns/
├── .devcontainer/           # DevContainer configuration
│   ├── devcontainer.json    # DevContainer settings
│   ├── Dockerfile          # Custom Docker image
│   └── docker-compose.yml  # Docker Compose configuration
├── .vscode/                # VS Code workspace settings
│   ├── settings.json       # Editor settings
│   └── extensions.json     # Recommended extensions
├── src/
│   ├── index.ts            # Main entry point
│   ├── utils.ts            # Utility functions
│   ├── patterns.ts         # Design pattern implementations
│   ├── index.test.ts       # Tests for main module
│   ├── utils.test.ts       # Tests for utilities
│   └── patterns.test.ts    # Tests for patterns
├── dist/                   # Compiled JavaScript (generated)
├── coverage/               # Test coverage reports (generated)
├── package.json            # Package configuration
├── tsconfig.json           # TypeScript configuration
├── jest.config.js          # Jest configuration
├── .eslintrc.js           # ESLint configuration
├── .prettierrc            # Prettier configuration
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

## DevContainer Features

The devcontainer includes:

- **Node.js 18** with npm and yarn
- **TypeScript** development tools
- **Jest** testing framework
- **ESLint** and **Prettier** for code quality
- **VS Code extensions** for TypeScript, Jest, and Git
- **Git** and **GitHub CLI** for version control
- **Additional development tools**: vim, nano, htop, tree

## Publishing

To publish this package to npm:

1. Update the version in `package.json`
2. Run `npm run build` to ensure the latest code is compiled
3. Run `npm publish`

The `prepublishOnly` script will automatically clean and build the project before publishing.

## Scripts

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

## License

MIT 