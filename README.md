# Encriptador de texto
Página web que funciona como encriptador de texto, desafío final de la primera etapa del curso de Alura One. Este proyecto es una aplicación web simple de encriptación y desencriptación de texto. Permite al usuario ingresar un texto, encriptarlo utilizando un conjunto de reglas definidas (como reemplazar las vocales con cadenas específicas) y luego desencriptarlo de nuevo al texto original. La aplicación también ofrece la opción de copiar el texto encriptado o desencriptado al portapapeles. Solo se permiten letras minúsculas sin acentos.  Este archivo contiene la estructura HTML de la aplicación, incluyendo los campos de entrada y botones para encriptar, desencriptar y copiar texto. También contiene elementos de visualización como imágenes y leyendas de ayuda. Contiene las reglas de estilo CSS para la aplicación. Define la apariencia de los elementos, incluyendo colores, fuentes, tamaños y diseño de la página, adaptándose a diferentes tamaños de pantalla mediante media queries. Contiene la lógica de la aplicación en JavaScript. Incluye funciones para encriptar y desencriptar texto, verificar la validez de la entrada, mostrar mensajes de error, y copiar el texto al portapapeles.

*INSTRUCCIONES*

Clonar el Proyecto: Clona este repositorio en tu máquina local utilizando Git o descargando el archivo ZIP.

Abrir el Proyecto: Abre el archivo index.html en tu navegador web. Esto cargará la aplicación.

Uso de la Aplicación:

Ingresar Texto: Escribe el texto que deseas encriptar en el área de texto proporcionada. Asegúrate de utilizar solo letras minúsculas y sin acentos, ya que el sistema mostrará un mensaje de error si detecta caracteres no permitidos.
Encriptar: Haz clic en el botón "Encriptar" para convertir el texto utilizando las reglas de encriptación predefinidas (ej., e se convierte en enter, a se convierte en ai, etc.). El texto encriptado se mostrará en la sección de resultados.
Desencriptar: Haz clic en el botón "Desencriptar" para revertir el texto encriptado a su forma original.
Copiar Texto: Utiliza el botón "Copiar" para copiar el texto encriptado o desencriptado al portapapeles.
Mensajes de Error: Si ingresas texto con mayúsculas o acentos, se mostrará un mensaje de error en el área de resultado, y los botones estarán deshabilitados hasta que se corrija la entrada.

Restablecer Entrada: La función de encriptar y desencriptar también restablece el campo de entrada para que puedas introducir un nuevo texto.

Diseño Responsivo:
El diseño de la aplicación está optimizado para ser visualizado tanto en dispositivos de escritorio como en dispositivos móviles. Se utilizan media queries para ajustar el diseño y mejorar la usabilidad en diferentes tamaños de pantalla.
