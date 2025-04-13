# 💉 ¿Como puedo realizar la inyección a traves de los filtros?

Se puede utilizar una herramienta que intercepte las peticiones que se le hacen a la API. Por ejemplo, [BurpSuit](https://portswigger.net/burp/communitydownload) o [Caido](https://caido.io/).

Sin embargo, también es posible reenviar peticiones al servidor de la API desde cualquier navegador basado en **Firefox** o una extensión de **Chrome** como [Editar y enviar](https://chromewebstore.google.com/detail/ljfcmkhgcgljnomepfaeflehbdaimbhk?utm_source=item-share-cb). Para ello, se utilizarán las **DevTools** donde se modificarán las peticiones y se obtendrán las respuestas.

## Con Firefox.

1. Abre las **DevTools** (F12 o Ctrl + Shift + I).
2. Ve a la pestaña **Red** (Network).
3. Realiza una acción en la aplicación que genere una petición a la API.
4. Busca la petición en la lista de peticiones (Se puede identifica por el método HTTP POST).
5. Haz clic derecho sobre la petición y selecciona **Editar y reenviar**.
6. Se abrirá una nueva pestaña donde podrás editar la petición y la respuesta.
7. Realiza los cambios que desees en la petición y haz clic en **Enviar** para reenviarla al servidor.
8. La respuesta se mostrará en la misma pestaña, donde podrás ver el resultado de la petición.

## Con la [extensión](https://chromewebstore.google.com/detail/ljfcmkhgcgljnomepfaeflehbdaimbhk?utm_source=item-share-cb) de Chrome.

1. Instala la extensión [Editar y enviar](https://chromewebstore.google.com/detail/ljfcmkhgcgljnomepfaeflehbdaimbhk?utm_source=item-share-cb) desde la tienda de Chrome.
2. Abre las **DevTools** (F12 o Ctrl + Shift + I).
3. Busca la nueva pestaña **Edit and resend**.
4. Realiza una acción en la aplicación que genere una petición a la API.
5. Busca la petición en la lista de peticiones (Se puede identifica por el método HTTP POST).
6. Selecciona la petición y se abrirá un nuevo cuadro de edición donde podrás modificar los detalles de la petición.
7. Haz clic en el apartado **Payload** para ver y editar los datos que se enviarán en la petición.
8. Realiza los cambios que desees en la petición y haz clic en **Resend** en la parte superior para reenviarla al servidor.
9. Se listará una nueva petición que contendrá la respuesta del servidor.