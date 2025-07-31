# Changelog

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.4] - 2025-07-30

### Added

- **Design Patterns**
  - Adapter pattern implementation with abstract `Adapter` class
  - Factory Method pattern with abstract `Creator` class
  - Prototype pattern with abstract `Prototype` class
  - Prototype Registry pattern with concrete `PrototypeRegistry` implementation
  - Abstract Prototype Registry with `AbstractPrototypeRegistry` class
  - Singleton pattern with `Singleton` base class

- **Algorithms**
  - Insertion Sort algorithm (`insertionSort`)
  - Selection Sort algorithm (`selectionSort`)
  - Merge Sort algorithm (`mergeSort`)

- **Development Environment**
  - DevContainer configuration for easy development setup
  - TypeScript configuration
  - ESLint and Prettier for code quality
  - Jest for testing
  - Husky for git hooks
  - Lint-staged for pre-commit hooks

- **Documentation**
  - Comprehensive README with usage examples
  - API documentation for all patterns and algorithms
  - Development setup instructions

### Changed

- Initial release of the algopat package

### Security

- MIT license applied

## [1.0.0] - 2024-01-XX

### Added

- Initial project setup
- Basic project structure
- Package configuration
