# WhatsAuth Logistic 📦⚡

> **Confirmaciones logísticas innegables y geolocalizadas para e-commerce y reparto de última milla.**

🚀 **DEMO EN VIVO:** Puedes probar la aplicación interactiva en directo en 👉 **[https://logistic.fenix.ninja](https://logistic.fenix.ninja)**

[![Live Demo](https://img.shields.io/badge/Demo_en_Vivo-logistic.fenix.ninja-FE6C27?style=for-the-badge&logo=googlechrome&logoColor=white)](https://logistic.fenix.ninja)
[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)
[![Status](https://img.shields.io/badge/Status-Active_Prototype-success.svg)](#)
[![Brand](https://img.shields.io/badge/Brand-Core_Blue_%231F4594_%7C_Orange_%23FE6C27-blue.svg)](#)

---

## 📖 Acerca del Proyecto

En el comercio electrónico y la distribución de paquetería de última milla, uno de los mayores quebraderos de cabeza operativos y financieros son las reclamaciones falsas de **«pedido no entregado»** (*chargebacks* bancarios y disputas de fraude amistoso).

El escenario tradicional es recurrente: el cliente afirma que el mensajero nunca pasó por su domicilio; el repartidor asegura que dejó el paquete en el portal o buzón; la empresa de transportes elude la responsabilidad y la tienda online termina asumiendo la pérdida íntegra del producto, los costes de envío y las penalizaciones bancarias. El obsoleto **«garabato con el dedo en la pantalla de la PDA»** carece de validez pericial ante una disputa bancaria seria ante entidades como Visa, Mastercard o PayPal.

### La Solución WhatsAuth Logistic

Al integrar **WhatsAuth** en el flujo operativo de reparto:
1. **Llegada y Geocerca:** En el instante en que el mensajero llega a la dirección de entrega, el sistema detecta la proximidad por GPS.
2. **Disparo al Móvil del Cliente:** Se envía una confirmación inmediata al WhatsApp del destinatario.
3. **Firma en 1 Toque:** El cliente pulsa el botón nativo en su propio teléfono: *«Confirmar entrega de pedido»*.
4. **Comprobante Criptográfico Inalterable:** La confirmación genera un sello inmutable firmado por el terminal del cliente, registrando la hora UTC exacta y contrastando la geolocalización del dispositivo con la dirección pactada.

**Resultado:** Trazabilidad irrefutable a coste prácticamente cero, erradicación del fraude amistoso y plena validez legal y pericial.

---

## 🖥️ Características de la Interfaz

- **Menú Superior Corporativo:** Logotipo oficial `img/logo.png`, navegación y paleta de marca ([style/brand.md](style/brand.md)):
  - **Core Blue (`#1F4594`)**: Estructura, cabecera y elementos institucionales.
  - **Delivery Orange (`#FE6C27`)**: Botones de acción, láser de escaneo, precintos y estados activos.
  - **Pure White (`#FFFFFF`)**: Etiquetas de envío con códigos de barras y contrastes limpios.
- **Fondo de Vídeo Cinemático en Bucle:** Grabaciones de mensajeros a pie, furgoneta y scooter circulando en reparto continuo.
- **Sección SCAN (Columna Izquierda):**
  - Terminal iPhone ultrarrealista con cámara frontal, botones de hardware laterales y **Dynamic Island / Notch interactivo** que se expande al pasar el cursor (`:hover`).
  - Interior de la pantalla con la imagen `img/FNX_logo.jpeg`.
  - **WhatAuth Pixel QR Generator:** Cada paquete enfocado genera dinámicamente su código QR interactivo de alta resolución dentro del crosshair del visor con `QRCodeStyling` y el logo corporativo.
  - Visor holográfico láser animado que lee los códigos de paquetería en tiempo real.
  - Panel HUD con datos del envío (ID, destinatario, dirección, peso, geocerca) y botón *«CERTIFICAR RECEPCIÓN»* / enlace nativo a WhatsApp.
- **Sección SELECCIONAR PAQUETE (Columna Derecha):**
  - Rejilla de **6 cajas de cartón kraft** (3 arriba y 3 abajo en escritorio).
  - Cada caja cuenta con cinta de seguridad `SECURITY SEAL`, etiqueta blanca con código de barras, tracking alfanumérico (`ES-MAD-8921` a `8926`), sellos técnicos (`FRÁGIL`, `URGENTE`, `CUSTODIA`, etc.) y peso.
  - Sincronización instantánea al hacer clic: enfoca el paquete seleccionado en la pantalla del iPhone y solicita su QR Pixel a WhatAuth.
- **Drawer Deslizante de Paquetes Entregados (Historial en Vivo):**
  - Panel lateral accesible desde el botón con icono 📦 y badge de contador dinámico en la cabecera.
  - Registro cronológico persistido en `localStorage` (`logistic_delivered_packages`).
  - Tarjetas detalladas con destinatario, dirección, hora formateada y precinto hash SHA-256 verificado.
  - Botón de vaciado de historial para reiniciar la ruta de reparto.
- **Conexión WebSocket WhatAuth Pixel:**
  - Comunicación bidireccional reactiva con `api.whatauth.com`.
  - Despacho a través de la línea dedicada (+34627118121) en GOWA.
  - Deduplicación estricta de eventos: 1 escaneo físico equivale rigurosamente a 1 paquete sellado y entregado.
- **Diseño Responsive:** Apilamiento vertical automático en tabletas y teléfonos móviles con desplazamiento fluido al iPhone al pulsar cualquier bulto.

---

## 🚀 Puesta en Marcha Local

Para clonar y ejecutar el proyecto en tu entorno local:

```bash
# Clonar el repositorio
git clone https://github.com/fenixninja/Logistic.git

# Entrar en el directorio
cd Logistic

# Iniciar servidor web local
python3 -m http.server 8080
```

Abre tu navegador en:
👉 **[http://localhost:8080/index.html](http://localhost:8080/index.html)**

---

## 👏 Créditos y Atribución

Para el diseño, la geometría y la estructura visual en CSS del chasis del iPhone y su Dynamic Island, nos hemos inspirado en el excelente trabajo de **Luke Meyrick**:
- 🔗 **Pen original en CodePen:** [iPhone 14 Pro in Pure CSS por Luke Meyrick](https://codepen.io/lukemeyrick/pen/poVyEdZ)

Agradecemos al autor por compartir su técnica de modelado con CSS puro.

---

## 📄 Licencia

Este proyecto está bajo la licencia **Creative Commons Atribución-NoComercial 4.0 Internacional (CC BY-NC 4.0)**:

- ✅ **Libre uso y modificación:** Puedes compartir, copiar, redistribuir y transformar el material en cualquier medio o formato.
- 🏷️ **Atribución requerida:** Debes otorgar el crédito correspondiente, proporcionar un enlace a la licencia e indicar si se realizaron cambios.
- 🚫 **No comercial:** No puedes hacer uso del material con fines comerciales ni de explotación económica directa sin autorización previa.

Para consultar los términos completos de la licencia, visita [Creative Commons CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/deed.es).
