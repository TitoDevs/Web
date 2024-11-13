# Conceptos básicos de HTML
HTML (Hypertext Markup Language) es el estándar para la creación de páginas web. Es un lenguaje de marcado que permite estructurar el contenido en la web. A continuación, veremos los conceptos básicos de HTML y cómo empezar a trabajar con él.

## ¿Qué es HTML?
HTML es un lenguaje de marcado que le dice al navegador cómo debe estructurarse y visualizarse una página web. Utiliza una serie de elementos y etiquetas para describir el contenido de la página, como encabezados, párrafos, enlaces, listas, imágenes y más.

# Elementos HTML

A continuación, se presenta una lista de los elementos HTML5 más relevantes hasta la fecha, agrupados por su función principal:

## Estructura del documento

- `<!DOCTYPE html>`: Declara el tipo de documento y la versión de HTML.
- `<html>`: Elemento raíz que envuelve todo el contenido de la página.
- `<head>`: Contiene metadatos sobre el documento, como el título y enlaces a hojas de estilo.
- `<body>`: Contiene el contenido visible de la página.

## Metadatos

- `<meta>`: Define metadatos como la codificación de caracteres y la configuración de la ventana gráfica.
- `<title>`: Especifica el título de la página que aparece en la pestaña del navegador.
- `<base>`: Establece una URL base para los enlaces relativos en el documento.
- `<link>`: Vincula recursos externos, como hojas de estilo CSS.
- `<style>`: Contiene estilos CSS internos.
- `<script>`: Define scripts de JavaScript internos o enlaza archivos externos.

## Estructura de la página

- `<header>`: Representa la cabecera de la página o sección.
- `<nav>`: Define una sección de navegación.
- `<main>`: Contiene el contenido principal del documento.
- `<section>`: Agrupa contenido temáticamente relacionado.
- `<article>`: Representa contenido independiente y autónomo.
- `<aside>`: Contiene contenido tangencialmente relacionado con el contenido principal.
- `<footer>`: Representa el pie de página del documento o sección.

## Contenido de texto

- `<h1>` a `<h6>`: Encabezados de diferentes niveles.
- `<p>`: Párrafo de texto.
- `<blockquote>`: Cita en bloque.
- `<ol>`: Lista ordenada.
- `<ul>`: Lista desordenada.
- `<li>`: Elemento de lista.
- `<dl>`: Lista de definiciones.
- `<dt>`: Término en una lista de definiciones.
- `<dd>`: Descripción en una lista de definiciones.
- `<figure>`: Contenedor para contenido multimedia con su leyenda.
- `<figcaption>`: Leyenda para el contenido de `<figure>`.
- `<div>`: Contenedor genérico para agrupar contenido.
- `<span>`: Contenedor en línea para agrupar contenido.

## Enlaces y recursos

- `<a>`: Define un hipervínculo.
- `<img>`: Inserta una imagen.
- `<audio>`: Reproduce contenido de audio.
- `<video>`: Reproduce contenido de video.
- `<source>`: Especifica múltiples recursos para elementos `<audio>` y `<video>`.
- `<track>`: Añade subtítulos o pistas de texto a elementos `<video>` y `<audio>`.
- `<iframe>`: Inserta un marco en línea para mostrar contenido externo.

## Formularios y controles de entrada

- `<form>`: Define un formulario para la entrada de datos.
- `<input>`: Define un control de entrada.
- `<textarea>`: Define un área de texto multilínea.
- `<button>`: Define un botón interactivo.
- `<select>`: Define un menú desplegable.
- `<option>`: Define una opción en un menú desplegable.
- `<optgroup>`: Agrupa opciones relacionadas en un menú desplegable.
- `<label>`: Define una etiqueta para un control de formulario.
- `<fieldset>`: Agrupa controles relacionados en un formulario.
- `<legend>`: Define un título para un grupo de controles en un formulario.
- `<datalist>`: Proporciona opciones predefinidas para un control de entrada.
- `<output>`: Representa el resultado de un cálculo o acción del usuario.

## Elementos de incrustación y objetos

- `<embed>`: Inserta contenido externo, como multimedia o aplicaciones.
- `<object>`: Inserta un objeto externo, como una aplicación o documento.
- `<param>`: Define parámetros para elementos `<object>`.
- `<canvas>`: Proporciona un área para gráficos y dibujos dinámicos.
- `<svg>`: Define gráficos vectoriales escalables.
- `<math>`: Define contenido matemático utilizando MathML.

## Elementos de tabla

- `<table>`: Define una tabla.
- `<caption>`: Define un título para una tabla.
- `<thead>`: Agrupa el encabezado de una tabla.
- `<tbody>`: Agrupa el cuerpo de una tabla.
- `<tfoot>`: Agrupa el pie de una tabla.
- `<tr>`: Define una fila en una tabla.
- `<th>`: Define una celda de encabezado en una tabla.
- `<td>`: Define una celda de datos en una tabla.
- `<colgroup>`: Agrupa columnas en una tabla para aplicar estilos.
- `<col>`: Define propiedades para una columna en una tabla.

## Elementos de script y plantilla

- `<script>`: Define un script de JavaScript.
- `<noscript>`: Proporciona contenido alternativo para navegadores que no soportan scripts.
- `<template>`: Define contenido que no se renderiza hasta que se utiliza mediante JavaScript.

## Elementos de metadatos y enlaces

- `<meta>`: Define metadatos sobre el documento.
- `<link>`: Vincula recursos externos, como hojas de estilo.
- `<base>`: Establece una URL base para los enlaces relativos en el documento.

---

Esta lista incluye los elementos más utilizados en HTML5 hasta 2024. Para una referencia completa y actualizada, puedes consultar la [documentación oficial de MDN](https://developer.mozilla.org/es/docs/Web/HTML/Element).


## Anatomía de un documento HTML
```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Mi pagina de prueba</title>
  </head>
  <body>
    <img src="images/firefox-icon.png" alt="Mi imagen de prueba" />
  </body>
</html>

```