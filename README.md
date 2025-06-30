# FreeCodeCamp Exercises Demo

[![Tests](https://github.com/clasanch/freecodecamp-exercises-demo/actions/workflows/ci.yml/badge.svg)](https://github.com/clasanch/freecodecamp-exercises-demo/actions/workflows/ci.yml)
[![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)](https://github.com/clasanch/freecodecamp-exercises-demo)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)

> Complete repository of FreeCodeCamp exercises implemented with TDD, Clean Code
> and CI/CD

## 🎯 Objective

This repository contains **76 exercises** from FreeCodeCamp implemented
following software development best practices:

- 🧮 **10 Basic algorithms**
- 🏗️ **46 Data structures and algorithms**
- 🚀 **20 Complete projects**

## 🛠️ Technologies and Tools

### Core Stack

- **Node.js** >= 18.0.0
- **ES Modules** (ESM)
- **JavaScript** vanilla (no frameworks)

### Development and Quality

- **Jest** - Testing framework
- **ESLint** - Linting with strict rules
- **Prettier** - Automatic code formatting
- **Husky** - Git hooks for quality
- **lint-staged** - Lint only modified files

### CI/CD

- **GitHub Actions** - Continuous integration
- **Test coverage** >= 80%
- **Mandatory pre-commit hooks**

## 📁 Project Structure

```
demo/
├── src/
│   ├── algorithms/          # 10 basic algorithms
│   ├── data-structures/     # 46 data structures
│   ├── projects/            # 20 complete projects
│   └── utils/               # Shared utilities
├── tests/                   # Tests organized by module
├── docs/                    # Technical documentation
├── .github/workflows/       # GitHub Actions
└── scripts/                 # Development scripts
```

## 🚀 Quick Start

### Prerequisites

```bash
node --version  # >= 18.0.0
npm --version   # >= 8.0.0
```

### Installation

```bash
# Clone the repository
git clone https://github.com/clasanch/freecodecamp-exercises-demo.git
cd freecodecamp-exercises-demo

# Install dependencies
npm install

# Verify installation
npm run validate
```

### Available Scripts

```bash
# Development
npm run dev          # Run in development mode
npm start           # Run in production

# Testing
npm test            # Run all tests
npm run test:watch  # Tests in watch mode
npm run test:coverage # Tests with coverage report
npm run test:ci     # Tests for CI (no watch)

# Code Quality
npm run lint        # Check linting
npm run lint:fix    # Fix linting issues
npm run format      # Format code
npm run format:check # Check format

# Utilities
npm run clean       # Clean generated files
npm run validate    # Verify everything (lint + format + tests)
```

## 📚 Development Methodology

### Test-Driven Development (TDD)

Each algorithm and data structure is developed following strict TDD:

1. **🔴 Red**: Write test that fails
2. **🟢 Green**: Minimum code to pass
3. **🔵 Refactor**: Improve while keeping tests green

### Clean Code Principles

- Small functions (max 20 lines)
- Descriptive and clear names
- Single level of abstraction
- SOLID principles applied
- Test coverage >= 80%

### Trunk-Based Development

- Short-lived branches (24-48h maximum)
- Mandatory continuous integration
- Pre-commit hooks that verify quality
- No long-lived branches

## 🧪 Testing

### Test Structure

```bash
tests/
├── algorithms/         # Algorithm tests
├── data-structures/    # Data structure tests
├── projects/          # Project tests
├── utils/             # Utility tests
└── setup.js           # Global configuration
```

### Testing Conventions

- Each function/class has its `.test.js` file
- Descriptive tests with Given-When-Then
- Coverage >= 80% global, >= 90% for critical algorithms
- Performance testing for complex algorithms

## 📊 Project Progress

### ✅ Infrastructure (Completed)

- [x] Base project configuration
- [x] Jest and testing configuration
- [x] ESLint and Prettier configured
- [x] Husky and pre-commit hooks
- [x] GitHub Actions CI/CD
- [x] Folder structure

### 🚧 Current Progress

- [x] **Symmetric Difference Algorithm** - Implemented with 100% test coverage
- [ ] Implement remaining 9 basic algorithms
- [ ] Create base tests for data structures
- [ ] Configure performance metrics
- [ ] Detailed technical documentation

### 📋 Next Steps

- [ ] Implement second algorithm from FreeCodeCamp basic algorithms list
- [ ] Add performance benchmarks for algorithms
- [ ] Create algorithm comparison documentation

## 🤝 Contributing

### Workflow

1. Create feature branch: `git checkout -b feature/algorithm-name`
2. Implement with TDD
3. Ensure all checks pass: `npm run validate`
4. Create PR with detailed description
5. Mandatory code review
6. Merge after approval

### Code Standards

- All tests must pass
- Coverage >= 80%
- No ESLint warnings
- Code formatted with Prettier
- Descriptive commit messages

## 📝 License

This project is under the MIT License - see the [LICENSE](LICENSE) file for
details.

## 🔗 Useful Links

- [FreeCodeCamp](https://www.freecodecamp.org/)
- [Node.js Documentation](https://nodejs.org/docs/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [ESLint Rules](https://eslint.org/docs/rules/)

---

> 🎯 **Learning Objective**: This repository not only solves exercises, but
> teaches modern software development best practices.

**Developed with ❤️ following Clean Code and TDD principles**
