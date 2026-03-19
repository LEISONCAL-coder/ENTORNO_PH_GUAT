# 🏗️ GSC S.A.S. - Sistema Integral de Gestión Predial y Entorno (PWA)

Plataforma web progresiva (PWA) diseñada para el levantamiento de información estructural y de espacio público en proyectos de infraestructura civil. Esta herramienta reemplaza los formatos físicos y macros de Excel, garantizando un blindaje legal milimétrico mediante matrices exhaustivas, registro fotográfico dinámico y exportación nativa a PDF desde dispositivos móviles en campo.

## 🚀 Características Principales

* **⚙️ Sincronización de Contrato:** Panel maestro que inyecta automáticamente los datos fijos del proyecto (Entidad, Contratista, Interventoría, Objeto) en todos los membretes.
* **🏠 Acta de Vecindad (Predial) - Nivel Legal:** * Integración de Tipos de Acta (Apertura, Seguimiento, Cierre).
  * Detalle exhaustivo de tenencia, estrato, uso, servicios públicos y características arquitectónicas.
  * Matrices de inspección de Fachada e Interior con calificación (B/R/M) y trazabilidad completa: **Estado Inicial vs. Estado Después de la Obra**.
* **🛣️ Acta de Entorno (Espacio Público):** * Matriz oficial jerárquica (Andenes, Vías, Postes, Árboles, Cercas, Accesos y Monumentos).
  * Columnas comparativas para observaciones de apertura y observaciones de cierre.
* **🗺️ Localización Automática:** El sistema integra automáticamente el croquis o mapa topográfico del proyecto en la cabecera de las actas.
* **📸 Motor Fotográfico Inteligente:** Carga masiva de fotografías mediante `CSS Grid`. Permite eliminar imágenes erróneas y reacomoda el álbum automáticamente sin dejar huecos ni requerir cálculos de macros.
* **🖨️ Exportación a PDF Oficial:** Algoritmo CSS (`@media print`) que transforma la vista web en un documento legal inviolable A4/Carta, ocultando botones y adaptando las tablas para impresión y firma.

## 📂 Estructura Obligatoria del Repositorio

Para que el sistema funcione correctamente y cargue los membretes fijos, tu repositorio en GitHub **DEBE** contener exactamente los siguientes 4 archivos. 

⚠️ **ADVERTENCIA:** Los servidores son sensibles a mayúsculas y minúsculas. Los nombres deben ser **exactamente en minúsculas** como se muestran a continuación:

1. `index.html` (El código maestro de la aplicación).
2. `logo_entidad.png` (Logo de la entidad contratante, ej. Empresa Autónoma de Guatapé).
3. `logo_consicor.png` (Logo del contratista).
4. `mapa_localizacion.jpg` (Imagen del croquis, esquema en planta o mapa satelital del tramo).

## 📱 Despliegue mediante GitHub Pages (Gratuito)

Al ser una aplicación *Client-Side* (SPA), no requiere bases de datos y funciona perfectamente con GitHub Pages.

1. Sube los 4 archivos mencionados a la rama `main` de tu repositorio.
2. Ve a la pestaña **Settings** (Configuración) del repositorio.
3. En el menú lateral izquierdo, haz clic en **Pages**.
4. En **Source**, selecciona `Deploy from a branch`.
5. En **Branch**, elige `main` y la carpeta `/(root)`.
6. Haz clic en **Save**. En un par de minutos, GitHub generará tu enlace público (ej. `https://tu-usuario.github.io/actas-gsc/`).

## 👷‍♂️ Uso en Trabajo de Campo

1. **Apertura:** Abre el enlace desde el navegador (Chrome/Safari) en tu celular o tablet.
2. **Configuración:** Verifica o modifica los datos del contrato en la primera pestaña.
3. **Levantamiento:** Navega al Acta de Vecindad o Entorno, selecciona si es Apertura, Seguimiento o Cierre, y diligencia las matrices usando las listas desplegables y botones (B/R/M).
4. **Evidencia:** Toca el botón de subir fotos, selecciona las imágenes directamente desde la galería del dispositivo.
5. **Cierre y PDF:** Toca el botón rojo **🖨️ Generar PDF**. En el cuadro de diálogo de impresión de tu celular, selecciona "Guardar como PDF". El documento se guardará listo para firma digital o impresión física.

---
**Desarrollado para la gestión de Interventoría de GSC S.A.S.**
*Supervisión y Control de Obras Viales e Infraestructura.*