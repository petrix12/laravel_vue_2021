@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center mb-4">
        <img src="https://blogger.googleusercontent.com/img/a/AVvXsEi6G3DYPhX_zU3sA_hSYxJ4DN_FW9jZOtVTnMPyGx4Po-hzAu2CiyY-LWhMIgNwud0uVrwVn0tBcEZvHqTtIDeIQA9zkYQguDXgB48jhNcpzgh-WIo6ZW9UW_PYGCrn4R2XInHdF1YxSP2kk1ldHlCTr_fDhzXpLnwNbhYJ5JMCcFfUFvW7x_NKJBPY6g=s314" alt="Logo Soluciones++">
    </div>
    
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header"><strong>CRUD con Laravel, Sweetalert2, Toastr, Vue.js y Axios</strong></div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    
                    <h4>Para probar la aplicación</h4>
                    <p>Regístrese como usuario y comience a explorar la aplicación.</p>
                    <h4>Paso a paso para construir la aplicación</h4>
                    <iframe
                        title="Inline Frame Example"
                        width="100%"
                        height="800"
                        src="{{ asset('paso-paso.html') }}">
                    </iframe>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection