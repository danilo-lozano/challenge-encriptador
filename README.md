# Proyecto de Encriptador y Desencriptador de Textos

Este proyecto es una página web simple que permite encriptar y desencriptar textos utilizando un conjunto específico de reglas. La página está construida con HTML5, CSS, y JavaScript, y ofrece una interfaz interactiva para ingresar texto, encriptarlo o desencriptarlo, y copiar el resultado.

## Reglas de Encriptación

El encriptador utiliza las siguientes reglas para transformar las letras:

- La letra **"a"** se convierte en **"ai"**.
- La letra **"e"** se convierte en **"enter"**.
- La letra **"i"** se convierte en **"imes"**.
- La letra **"o"** se convierte en **"ober"**.
- La letra **"u"** se convierte en **"ufat"**.
- El resto de las letras se mantienen sin cambios.

El encriptador está diseñado para funcionar únicamente con letras minúsculas y no admite tildes ni caracteres especiales.

## Características de la Página

1. **Área de Texto para Ingreso de Mensajes:** Un recuadro donde el usuario puede ingresar el texto que desea encriptar o desencriptar. Este recuadro tiene un marcador de posición que dice "Ingresa el texto aquí".

2. **Botones de Encriptar y Desencriptar:** Dos botones que permiten al usuario encriptar o desencriptar el texto ingresado. Cada botón tiene un color diferente para distinguir sus funciones.

3. **Caja de Resultados:** Un recuadro en el lado derecho de la pantalla que muestra el mensaje encriptado o desencriptado. Si no hay ningún texto ingresado, muestra el mensaje "Ningún mensaje fue encontrado" y un texto más pequeño que dice "Ingresa el texto que deseas encriptar o desencriptar". Además, incluye una imagen decorativa que desaparece cuando se muestra el texto encriptado o desencriptado.

4. **Botón de Copiar:** Aparece al final de la caja de resultados y permite al usuario copiar el texto encriptado o desencriptado al portapapeles.

5. **Interfaz Responsiva:** La página utiliza Flexbox para lograr una disposición flexible y ajustada a diferentes tamaños de pantalla.

## Estructura del Proyecto

```plaintext
challenge-encriptador/
├── recursos/
│   ├── Logo.png
│   ├── No encontrado.png
├── index.html
├── styles.css
└── script.js
