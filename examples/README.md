# Interactive Examples

This directory contains interactive demonstrations and visualizations of the
algorithms implemented in this repository.

## Structure

- `interactive-demos/` - Web-based interactive demonstrations
  - `backtracking-visualization/` - Visual demonstration of the backtracking
    algorithm used in No Repeats Please

## Purpose

These examples serve to:

- Provide visual understanding of algorithm mechanics
- Demonstrate step-by-step execution flow
- Help in educational and debugging contexts
- Showcase algorithm behavior with different inputs

## Tech Stack

- **React** - Component-based UI framework
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library for UI controls

## Usage

Each example is self-contained and includes:

- Source code with detailed comments
- Installation and setup instructions
- Usage examples and configuration options
- Educational notes about the demonstrated algorithm

## Development Guidelines

- Examples should be educational and self-explanatory
- Code should be well-commented for learning purposes
- Include both visual and textual explanations
- Maintain performance even with complex visualizations
- Follow the same code quality standards as the main project

## Important Notes

### Git Ignore Configuration

Each interactive demo has its own `.gitignore` file to prevent committing:

- `node_modules/` - Package dependencies
- `dist/` and `build/` - Build outputs
- `.vite/` - Vite cache files
- Environment files and other temporary artifacts

The main project `.gitignore` also includes global patterns for examples
directories.

### Local Development

When running examples locally:

1. Navigate to the specific example directory
2. Run `npm install` to install dependencies
3. Use `npm run dev` to start development server
4. **Important**: Never commit `node_modules/` or build artifacts

### Troubleshooting

If you encounter npm permission issues:

```bash
# Fix npm cache permissions (macOS/Linux)
sudo chown -R $(whoami) ~/.npm

# Clear npm cache if needed
npm cache clean --force
```
