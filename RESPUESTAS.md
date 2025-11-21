Parte 4 – Validación y logs:

- Cómo identificar fallos de linter, pruebas y cobertura en logs.
    Cómo identificar fallos en el pipeline

El pipeline puede fallar en tres partes: linter, pruebas o cobertura.
Cada uno muestra mensajes diferentes en los logs.

1. Fallos del linter (ESLint)

    Si falla el linter verás mensajes como:

    “ESLint found some errors”

    “X problems (errors, warnings)”

    Líneas marcando errores: error no-unused-vars

    Cuando aparece eso, el error está en formato o estilo del código.

2. Fallos en pruebas (Jest)

    Si falla una prueba verás:

    “FAIL” al inicio de un bloque

    “Expected / Received”

    El nombre del test roto con un punto rojo

3. Fallos de cobertura

    Si la cobertura no alcanza el mínimo, Jest muestra algo como:

    “Coverage threshold not met”

    “Coverage for statements (…) does not meet global threshold”

