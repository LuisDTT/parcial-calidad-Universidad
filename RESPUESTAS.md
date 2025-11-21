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

Este es un ejemplo de un run fallido.
El log nos dice como se llama el run y podemos ver que falla al realizar el test de cobertura, no alcanza el lumbral minimo
![LOG FALLIDO](https://github.com/user-attachments/assets/b80631da-4ef9-45f5-903d-8b93f2fc229c)

Este es un log exitoso
Todos los runs se ejecutaron exitosamente y se pudo realizar el build sin problemas
![EXITO](https://github.com/user-attachments/assets/65a196c7-1428-4e4f-a5b1-313c0c3a59b6)


Parte 5 – IA y Ética
Métodos para detectar código generado por IA

Análisis de patrones: algunas herramientas comparan el código con estilos típicos de modelos de IA (estructuras repetitivas, nombres genéricos, formatos comunes).

Detección de similitud: sistemas que comparan el código con grandes bases de datos para identificar coincidencias, patrones sospechosos o redacciones no habituales del estudiante.

Por qué no se puede asegurar la autoría al 100%

Ningún detector es totalmente confiable porque:

El código puede editarse fácilmente después de generarse.

Humanos pueden escribir código “parecido” a la IA.

La IA puede imitar estilos humanos.

El detector solo hace estimaciones, no tiene pruebas directas.

Políticas razonables de uso de IA en educación

Permitir IA como apoyo (explicaciones, ejemplos, correcciones), pero no para entregar trabajos completos sin intervención del estudiante.

Requerir que el estudiante indique cuándo usó IA y en qué parte.

Evaluar más el proceso que el producto final (pasos, razonamiento, pruebas).

Fomentar el uso responsable: la IA como herramienta, no sustituto del aprendizaje.



