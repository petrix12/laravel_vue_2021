# Crea un CRUD con Laravel, Sweetalert2, Toastr, Vuejs y Axios
+ [URL del curso en Udemy](https://github.com/petrix12/laravel_vue_2021.git)
+ [URL del repositorio en GitHub]()

## Antes de iniciar:
1. Crear proyecto en la página de [GitHub](https://github.com) con el nombre: **laravel_vue_2021**.
    + **Description**: Proyecto para seguir el curso de "Crea un CRUD con Laravel, Sweetalert2, Toastr, Vuejs y Axios", creado por Jhonatan Fernández para Udemy.
    + **Public**.
2. En la ubicación raíz del proyecto en la terminal de la máquina local:
    + $ git init
    + $ git add .
    + $ git commit -m "Commit 00: Antes de iniciar"
    + $ git branch -M main
    + $ git remote add origin https://github.com/petrix12/laravel_vue_2021.git
    + $ git push -u origin main

## Contenido del curso

### Video 01. Vista Previa
+ **Contenido**: Presentación de la aplicación a desarrollar.
1. Commit Video 01:
    + $ git add .
    + $ git commit -m "Commit 01: Vista Previa"
    + $ git push -u origin main

### Nota 02. Proyecto en github
1. **Nota del autor**:
    + Proyecto en github: Hola queridos alumnos.
        + El código completo está en mi cuenta de github.
            + https://github.com/jhonatanfdez/crudlstva
2. Commit Nota 02:
    + $ git add .
    + $ git commit -m "Commit 02: Proyecto en github"
    + $ git push -u origin main

### Video 03. Instalar laravel y el sistema de autenticación
1. Programas requeridos:
    + [Git](https://git-scm.com/downloads)
    + [XAMPP](https://www.apachefriends.org/es/download.html)
    + [Composer](https://getcomposer.org)
    + [Visual Studio Code](https://code.visualstudio.com/download)
    + [Node Js](https://nodejs.org)
2. Otra opción podría ser Laragon ya que instala todos los programas mencionados anteriormente:
    + [Laragon](https://laragon.org/download/index.html)
3. Instalar el instalador de Laravel:
    + $ composer global require laravel/installer
4. Crear proyecto para la **laravel-vue-2021**:
    + $ composer create-project laravel/laravel laravel-vue-2021 "7.*"
5. Crear base de datos **laravel_vue-2021**.
6. Configurar el archivo de variables **.env** de entorno con nuestro proyecto:
    ```env
    APP_NAME=Laravel-Vue
    ≡
    APP_URL=http://laravel-vue-2021.test
    ≡
    DB_DATABASE=laravel_vue-2021
    ≡
    ```
7. Instalar y habilitar el sistema de autenticación con Vue.js:
    + $ composer require laravel/ui:^2.4
    + $ php artisan ui vue --auth
8. Instalar las dependencias de Node Package Manager:
    + $ npm install
    + $ npm run dev
9. Ejecutar las migraciones:
    + $ php artisan migrate
10. Commit Nota 03:
    + $ git add .
    + $ git commit -m "Commit 03: Instalar laravel y el sistema de autenticación"
    + $ git push -u origin main

### Video 04. Instalar Toastr y aprender a usarlo



### Video 05. Instalar sweetalert2 y aprender a usarlo
### Video 06. Crear Modelo, migración, controlador y rutas API
### Video 07. Instalar vue y axios
### Video 08. Nuevo registro
### Video 09. Eliminar registro
### Video 10. Editar registro
### Video 11. Fin del curso



    ≡
    ```php
    ```



## Comandos Git:
+ Historial de commit:
    + git log --pretty=oneline
+ Borrar ultimo commit:
    + git reset HEAD^ --soft
+ Forzar push
    + git push origin -f