# Crea un CRUD con Laravel, Sweetalert2, Toastr, Vuejs y Axios
+ [URL del curso en Udemy](https://www.udemy.com/course/crea-un-crud-con-laravel-sweetalert2-toastr-vuejs-y-axios)
+ [URL del repositorio en GitHub](https://github.com/petrix12/laravel_vue_2021.git)
+ [URL del repositorio GitHub del autor](https://github.com/jhonatanfdez/crudlstva)

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
+ https://codeseven.github.io/toastr
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
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
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
        return DatosP::orderBy('id', 'desc')->get();
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
+ https://vuejs.org/v2/guide
+ https://github.com/axios/axios
1. Modificar la plantilla **resources\views\layouts\app.blade.php** para referenciar los estilos y secipt de Bootstrap 4.6, Vue2 y Axios:
    ```php
    ≡
    <head>
        ≡
        <!-- Fonts -->
        ≡

        <!-- CSS Bootstrap 4.6 -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">

        <!-- jQuery Core 3.4.1 -->
        <script
            src="https://code.jquery.com/jquery-3.4.1.js"
            integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
            crossorigin="anonymous">
        </script>

        <!-- JS Bootstrap 4.6 -->
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js" integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF" crossorigin="anonymous"></script>

        <!-- Toastr -->
        <link href="{{ asset('libreria/toastr/toastr.scss') }}" rel="stylesheet"/>
        <script src="{{ asset('libreria/toastr/toastr.js') }}"></script>

        <!-- sweetalert2 -->
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>

        <!-- Vue2 -->
        <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>

        <!-- Axios -->
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    </head>
    <body>
        ≡
        <!-- Scripts -->
        <script src="{{ asset('js/vue.js') }}"></script>
    </body>
    </html>
    ```
2. Crear script para Vue **public\js\vue.js**:
    ```php
    var app = new Vue({
        el: '#app',
        data: {
            datos: [],
            mensaje: ''
        },
        methods:{
            getDatos(){
                const url = '/api/datosp'
                axios.get(url).then(response => {
                    console.log(response.data)
                    this.datos = response.data
                })
            }
        },
        mounted() {
            this.getDatos()
        },
    })
    ```
3. Rediseñar la vista **resources\views\home.blade.php**:
    ```php
    @extends('layouts.app')

    @section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ __('Dashboard') }}</div>

                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                        @endif

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Posicion</th>
                                    <th scope="col">Salario</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="dato in datos">
                                    <th scope="row">@{{ dato.id }}</th>
                                    <td>@{{ dato.nombre }}</td>
                                    <td>@{{ dato.posicion }}</td>
                                    <td>@{{ dato.salario }}</td>
                                    <td>@mdo</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @endsection   
    ```
4. Commit Nota 07:
    + $ git add .
    + $ git commit -m "Commit 07: Instalar vue y axios"
    + $ git push -u origin main

### Video 08. Nuevo registro
+ https://getbootstrap.com/docs/4.6/components/buttons/#button-tags
+ https://sweetalert2.github.io
1. Modificar la vista **resources\views\home.blade.php** para agregar los botones para el CRUD y un evento clic al botón **Nuevo**:
    ```php
    @extends('layouts.app')

    @section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ __('Dashboard') }}</div>

                    <div class="card-body">
                        ≡
                        <button type="button" class="btn btn-outline-primary float-right mb-3" @click="NuevoDato()">Nuevo</button>

                        <table class="table">
                            <thead>
                                <tr>
                                    ≡
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="dato in datos">
                                    ≡
                                    <td>
                                        <button type="button" class="btn btn-outline-info">Editar</button>
                                        <button type="button" class="btn btn-outline-danger">Eliminar</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @endsection
    ```
2. Modificar el componente **public\js\vue.js** para agreagar el método **NuevoDato**:
    ```js
    var app = new Vue({
        el: '#app',
        data: {
            ≡
        },
        methods:{
            getDatos(){
                ≡
            },
            NuevoDato(){
                console.log('Nuevo dato')

                Swal.mixin({
                    confirmButtonText: 'Next &rarr;',
                    showCancelButton: true,
                    progressSteps: ['1', '2', '3']
                }).queue([
                    {
                        title: 'Digita tu nombre completo',
                        text:  'Nombre y apellido',
                        input: 'text',
                        inputValidator: (value) => {
                            if (!value) {
                                toastr.error('Debes digitar un nombre','Error')
                                return ' '
                            }
                        }
                    },
                    {
                        title: 'Selecciona la posición',
                        text:  'Posición de este empleado',
                        input: 'select',
                        inputOptions: {
                            Auditor: 'Auditor',
                            Soporte: 'Soporte',
                            Seguridad: 'Seguridad'                      
                        },
                        inputPlaceholder: 'Selecciona una posición',
                        inputValidator: (value) => {
                            if (!value) {
                            toastr.error('Necesitas seleccionar una opción','Error')
                            return ' '
                            }
                        }
                    },
                    {
                        title: 'Escribe el salario de este empleado',
                        text:  'Este campo acepta decimales',
                        input: 'number',
                        inputAttributes: {
                            min: 4,                        
                            step: 0.01
                        },
                        inputValidator: (value) => {
                            if (!value) {
                            toastr.error('Debes escribir un salario','Error')  
                            return ' '
                            }
                        }
                    }  
                ]).then( async  (result) => {
                    if (result.value) {

                    datos= {
                        nombre   : result.value[0],
                        posicion : result.value[1],
                        salario  : result.value[2],
                    
                    }   
                    // console.log(datos);

                    let url = '/api/datosp';
                    await axios.post(url, datos).then(response=>{
                        console.log(response.data);
                        this.mensaje=response.data;
                    });

                    this.getDatos();                  
                    toastr.success(this.mensaje);
                    }
                })
            }
        },
        mounted() {
            ≡
        },
    })
    ```
3. Programar el método **store** del controlador **app\Http\Controllers\ApiDatosPController.php**:
    ```php
    public function store(Request $request)
    {
        // Pruebas:
        /* return 'datos recibidos'; */
        /* return $request->all(); */
        
        $datos = new DatosP;
        $datos->nombre = $request->nombre;
        $datos->posicion = $request->posicion;
        $datos->salario = $request->salario;
        $datos->save();
        return 'Datos guardados correctamente';
    }
    ```
4. Commit Nota 08:
    + $ git add .
    + $ git commit -m "Commit 08: Nuevo registro"
    + $ git push -u origin main

### Video 09. Eliminar registro
1. Modificar la vista **resources\views\home.blade.php** para agregar un evento clic al botón **Elimar**:
    ```php
    ≡
    <td>
        <button type="button" class="btn btn-outline-info">Editar</button>
        <button type="button" class="btn btn-outline-danger" @click="EliminarDato(dato)">Eliminar</button>
    </td>
    ≡
    ```
1. Crear método **EliminarDato** en el componente **public\js\vue.js**:
    ```php
    var app = new Vue({
        el: '#app',
        data: {
            ≡''
        },
        methods:{
            getDatos(){
                ≡
            },
            NuevoDato(){
                ≡
            },
            EliminarDato(dato){
                console.log(dato)

                const swalWithBootstrapButtons = Swal.mixin({
                    customClass: {
                        confirmButton: 'btn btn-success',
                        cancelButton: 'btn btn-danger'
                    },
                    buttonsStyling: true
                })
                
                swalWithBootstrapButtons.fire({
                    title: '¿Estas Seguro?',
                    html: "Si eliminas el registro de <strong>"+ dato.nombre +"</strong>, <br>¡No podrás revertir esto!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Eliminar!',
                    cancelButtonText: 'Cancelar!',
                    confirmButtonColor: '#28a745',
                    cancelButtonColor: '#d33',
                    reverseButtons: true
                }).then( async (result) => {
                    if (result.value) {
                        const url = '/api/datosp/'+dato.id;
                        await axios.delete(url).then(response=>{
                            console.log(response.data)
                            this.mensaje=response.data
                        });

                        this.getDatos();                  
                        toastr.warning(this.mensaje);
                    } else if (
                        /* Read more about handling dismissals below */
                        result.dismiss === Swal.DismissReason.cancel
                    ) {
                        toastr.error('Acción Cancelada!')
                    }
                })
            }
        },
        mounted() {
            this.getDatos()
        },
    })
    ```
2. Programar el método **destroy** del controlador **app\Http\Controllers\ApiDatosPController.php**:
    ```php
    public function destroy(DatosP $datosp)
    {
        $datosp->delete();
        return 'Registro eliminado correctamente!';
    }
    ```
3. Commit Nota 09:
    + $ git add .
    + $ git commit -m "Commit 09: Eliminar registro"
    + $ git push -u origin main

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