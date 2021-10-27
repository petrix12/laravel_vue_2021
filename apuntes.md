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
+ [codeseven.github.io/toastr](https://codeseven.github.io/toastr)
1. Descargar Toastr en formato zip en https://codeseven.github.io/toastr.
2. Descomprimir la descarga en **public\libreria\toastr**.
3. Modificar la plantilla **resources\views\layouts\app.blade.php** para referenciar los estilos y script de Toastr:
    ```php
    ≡
    <head>
        ≡
        <!-- jQuery Core 3.4.1 -->
        <script
            src="https://code.jquery.com/jquery-3.4.1.js"
            integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
            crossorigin="anonymous">
        </script>

        <!-- Toastr -->
        <link href="{{ asset('libreria/toastr/toastr.scss') }}" rel="stylesheet"/>
        <script src="{{ asset('libreria/toastr/toastr.js') }}"></script>
    </head>
    ≡
    ```
    + Para obtener el script de **jQuery Core 3.4.1** ir a: https://releases.jquery.com/jquery/
4. Para proba Toastr introduzca el siguiente comando en la consola del navegador en donde se esta ejecutando la aplicación:
    + > toastr.error('Necesita digitar un valor', 'Error')
    + **Nota 1**: al ejecutar esta instrucción se deberá mostrar un mensaje en la aplicación.
    + **Nota 2**: para ver ejemplos del uso de Toastr ir a: https://codeseven.github.io/toastr/demo.html
5. Commit Nota 04:
    + $ git add .
    + $ git commit -m "Commit 04: Instalar Toastr y aprender a usarlo"
    + $ git push -u origin main

### Video 05. Instalar sweetalert2 y aprender a usarlo
+ https://sweetalert2.github.io
1. Modificar la plantilla **resources\views\layouts\app.blade.php** para referenciar los script de sweetalert2:
    ```php
    ≡
    <head>
        ≡
        <!-- sweetalert2 -->
        <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    </head>
    ≡
    ```
2. Commit Nota 05:
    + $ git add .
    + $ git commit -m "Commit 05: Instalar sweetalert2 y aprender a usarlo"
    + $ git push -u origin main

### Video 06. Crear Modelo, migración, controlador y rutas API
1. Crear modelo **DatosP** con su migración:
    + $ php artisan make:model DatosP -m
2. Crear controlador tipo recurso **ApiDatosPController**:
    + $ php artisan make:controller ApiDatosPController --resource
3. Agregar rutas **datosp** en **routes\api.php**:
    ```php
    Route::resource('datosp', 'ApiDatosPController')->names('api.datosp');
    ```
4. Establecer los campos de la tabla **datos_p_s** en el método **up** de la migración **database\migrations\2021_10_27_004650_create_datos_p_s_table.php**:
    ```php
    public function up()
    {
        Schema::create('datos_p_s', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('posicion');
            $table->decimal('salario', 10, 2);
            $table->timestamps();
        });
    }
    ```
5. Ejecutar las migraciones:
    + $ php artisan migrate
6. Ejecutar una Tinker:
    + $ php artisan tinker
    + Introducir en la terminal de tinker el siguiente código:
        ```php
        $datos = new App\DatosP;
        $datos->nombre = 'Pedro Bazó';
        $datos->posicion = 'Desarrollador Web';
        $datos->salario = 1800;
        $datos->save();

        $datos = new App\DatosP;
        $datos->nombre = 'Leticia Rodríguez';
        $datos->posicion = 'Analista de Genealogía';
        $datos->salario = 500;
        $datos->save();
        ```
7. Programar el método **index** del controlador **app\Http\Controllers\ApiDatosPController.php**:
    ```php
    public function index()
    {
        return DatosP::get();
    }
    ```
    + Importar la definición del modelo **DatosP**:
    ```php
    use App\DatosP;
    ```
8. Commit Nota 06:
    + $ git add .
    + $ git commit -m "Commit 06: Crear Modelo, migración, controlador y rutas API"
    + $ git push -u origin main

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