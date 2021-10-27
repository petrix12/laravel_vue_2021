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
        this.getDatos()
    },
})