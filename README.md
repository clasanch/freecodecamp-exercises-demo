# FreeCodeCamp Exercises Demo

[![Tests](https://github.com/username/freecodecamp-exercises-demo/actions/workflows/ci.yml/badge.svg)](https://github.com/username/freecodecamp-exercises-demo/actions/workflows/ci.yml)
[![Coverage](https://img.shields.io/badge/coverage-0%25-red)](https://github.com/username/freecodecamp-exercises-demo)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)

> Repositorio completo de ejercicios de FreeCodeCamp implementados con TDD,
> Clean Code y CI/CD

## 🎯 Objetivo

Este repositorio contiene **76 ejercicios** de FreeCodeCamp implementados
siguiendo las mejores prácticas de desarrollo:

- 🧮 **10 Algoritmos básicos**
- 🏗️ **46 Estructuras de datos y algoritmos**
- 🚀 **20 Proyectos completos**

## 🛠️ Tecnologías y Herramientas

### Core Stack

- **Node.js** >= 18.0.0
- **ES Modules** (ESM)
- **JavaScript** vanilla (sin frameworks)

### Desarrollo y Calidad

- **Jest** - Testing framework
- **ESLint** - Linting con reglas estrictas
- **Prettier** - Formateo automático de código
- **Husky** - Git hooks para calidad
- **lint-staged** - Lint solo archivos modificados

### CI/CD

- **GitHub Actions** - Integración continua
- **Cobertura de tests** >= 80%
- **Pre-commit hooks** obligatorios

## 📁 Estructura del Proyecto

```
demo/
├── src/
│   ├── algorithms/          # 10 algoritmos básicos
│   ├── data-structures/     # 46 estructuras de datos
│   ├── projects/            # 20 proyectos completos
│   └── utils/               # Utilidades compartidas
├── tests/                   # Tests organizados por módulo
├── docs/                    # Documentación técnica
├── .github/workflows/       # GitHub Actions
└── scripts/                 # Scripts de desarrollo
```

## 🚀 Inicio Rápido

### Prerrequisitos

```bash
node --version  # >= 18.0.0
npm --version   # >= 8.0.0
```

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/username/freecodecamp-exercises-demo.git
cd freecodecamp-exercises-demo

# Instalar dependencias
npm install

# Verificar la instalación
npm run validate
```

### Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Ejecutar en modo desarrollo
npm start           # Ejecutar en producción

# Testing
npm test            # Ejecutar todos los tests
npm run test:watch  # Tests en modo watch
npm run test:coverage # Tests con reporte de cobertura
npm run test:ci     # Tests para CI (sin watch)

# Calidad de Código
npm run lint        # Verificar linting
npm run lint:fix    # Arreglar problemas de linting
npm run format      # Formatear código
npm run format:check # Verificar formato

# Utilidades
npm run clean       # Limpiar archivos generados
npm run validate    # Verificar todo (lint + format + tests)
```

## 📚 Metodología de Desarrollo

### Test-Driven Development (TDD)

Cada algoritmo y estructura de datos se desarrolla siguiendo TDD estricto:

1. **🔴 Red**: Escribir test que falle
2. **🟢 Green**: Código mínimo para pasar
3. **🔵 Refactor**: Mejorar manteniendo tests verdes

### Principios de Clean Code

- Funciones pequeñas (máx. 20 líneas)
- Nombres descriptivos y claros
- Un solo nivel de abstracción
- Principios SOLID aplicados
- Cobertura de tests >= 80%

### Trunk-Based Development

- Ramas de vida corta (24-48h máximo)
- Integración continua obligatoria
- Pre-commit hooks que verifican calidad
- No long-lived branches

## 🧪 Testing

### Estructura de Tests

```bash
tests/
├── algorithms/         # Tests de algoritmos
├── data-structures/    # Tests de estructuras de datos
├── projects/          # Tests de proyectos
├── utils/             # Tests de utilidades
└── setup.js           # Configuración global
```

### Convenciones de Testing

- Cada función/clase tiene su archivo `.test.js`
- Tests descriptivos con Given-When-Then
- Cobertura >= 80% global, >= 90% para algoritmos críticos
- Performance testing para algoritmos complejos

## 📊 Progreso del Proyecto

### ✅ Infraestructura (Completada)

- [x] Configuración base del proyecto
- [x] Configuración de Jest y testing
- [x] ESLint y Prettier configurados
- [x] Husky y pre-commit hooks
- [x] GitHub Actions CI/CD
- [x] Estructura de carpetas

### 📋 Próximos Pasos

- [ ] Implementar primer algoritmo (se definirá paso a paso)
- [ ] Crear tests base para estructura de datos
- [ ] Configurar métricas de performance
- [ ] Documentación técnica detallada

## 🤝 Contribución

### Flujo de Trabajo

1. Crear rama feature: `git checkout -b feature/algoritmo-nombre`
2. Implementar con TDD
3. Asegurar que pasan todos los checks: `npm run validate`
4. Crear PR con descripción detallada
5. Code review obligatorio
6. Merge después de aprobación

### Estándares de Código

- Todos los tests deben pasar
- Cobertura >= 80%
- Sin warnings de ESLint
- Código formateado con Prettier
- Commits con mensajes descriptivos

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para
detalles.

## 🔗 Enlaces Útiles

- [FreeCodeCamp](https://www.freecodecamp.org/)
- [Documentación de Node.js](https://nodejs.org/docs/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [ESLint Rules](https://eslint.org/docs/rules/)

---

> 🎯 **Objetivo de Aprendizaje**: Este repositorio no solo resuelve ejercicios,
> sino que enseña mejores prácticas de desarrollo de software moderno.

**Desarrollado con ❤️ siguiendo principios de Clean Code y TDD**
