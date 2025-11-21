# PARCIAL DE CALIDAD -  CI/CD con GitHub Actions o nektos/act, linters, cobertura y pruebas automatizadas

Este proyecto implementa un pipeline de Integración Continua utilizando GitHub Actions.

El pipeline incluye:

- Linter obligatorio (ESLint).
- Pruebas unitarias (Jest).
- Reporte de cobertura (Jest + V8).
- Falla automaticamente si no se cumplen los TESTS o la COBERTURA MINIMA.


CAPTURAS DE LOGS - (FALLIDOS Y EXITOSO) LOCALMENTE CON NEKTOS/ACT

CAPTURA DE LOG FALLIDO EN COBERTURA Y UMBRAL MINIMO
![LOG](https://github.com/user-attachments/assets/545f4d93-804d-4089-b83b-6c443208e97c)

CAPTURA DE LOG FALLIDO EN TEST (PRUEBAS UNITARIAS)
![LOG](https://github.com/user-attachments/assets/f5b2c7a9-138c-437c-b514-2697f3178eb5)

CAPTURA DE LOG EXITOSO
![LOG](https://github.com/user-attachments/assets/856a8f7d-242f-43fd-8e54-e9b6f3fcf71e)


PARTE 1:

  1. Explicar la diferencia entre CI y CD.
  
     La principal diferencia es que CI se enfoca en automatizar la integración de código y las pruebas, mientras que CD va más allá automatizando el proceso completo hasta la implementación en producción.
  
  2. Indicar lenguaje, linter y herramienta de cobertura a utilizar, con justificación.
  
     JAVASCRIPT/TYPESCRIPT - Uno de los lenguajes mas utilizados en la web para crear aplicaciones a gran escala.
     ESLINT - Linter mas reconocidos, confiable y utilizados por los desarrolladores para aplicaciones grandes.
     V8 INTEGRADO DE JEST - JEST es la libreria de testing para javascript que tiene integrado el reporte de cobertura llamado v8
     
  3. En las configuraciones de jest - jest.config.ts
    Aqui podemos encontrar esta propiedad llamada coverageThreshold, aqui asignamos el lumbral minimo.
  
    coverageThreshold: {
        global: {
          branches: 80,
          functions: 80,
          lines: 80,
          statements: 80,
        },
      },
      
Parte 2: ...

Parte 3 – Uso de nektos/act:

  nektos/act es la herramienta de línea de comandos que permite ejecutar los flujos de trabajo de GitHub Actions de forma local.

  Comandos básicos para usar
    act: Ejecuta el flujo de trabajo por defecto (equivalente a un evento push) en el directorio actual.
    act -l: Lista todos los trabajos definidos en el repositorio.
    act -j <job_id>: Ejecuta un trabajo específico por su ID o nombre.
    act -e <evento>: Ejecuta el flujo de trabajo utilizando un evento específico en lugar del predeterminado.
    act -W <archivo.yml>: Ejecuta un flujo de trabajo específico en un archivo YAML.
    act -s <nombre>=<valor>: Pasa un secreto o variable de entorno al flujo de trabajo. 


==========================================================================================================================================================




This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
