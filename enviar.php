<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- GLIDER JS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glider-js@1.7.3/glider.min.css">
    <!-- CUSTOM CSS -->
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/carousel.css">
    <!-- FONT AWESOME -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <!---------------------- Fuentes ------------------->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@100;200;400;500;700&display=swap" rel="stylesheet">


    <!--------------------- Titulo --------------------->
    <title>Home | M&A</title>
</head>
<body>
    <header class="navbar">
            <div class="container flex-nav">
                <div class="navbar-header">
                    <a href="#">
                        <img class="navbar__logo" src="./assets/logo/logo-mya.svg" alt="Logo de empresa M&A">
                    </a>
                    <button class="navbar-toggle" id="navbarToggle">
                        <i class="fa fa-bars fa-3x" aria-hidden="true"></i>
                    </button>
                </div>
                
                <nav class="navbar-links" id="navbar-links">
                    <ul>
                        <li class="navbar-link"><a href="#">Inicio</a></li>
                        <li class="navbar-link"><a href="#">Servicios</a></li>
                        <li class="navbar-link"><a href="#">Sobre nosotros</a></li>
                        <li class="navbar-link"><a href="#">Contacto</a></li>
                    </ul>
                </nav>
            </div>    
    </header>
    <main class="main">
        <section class="main__header">
            <h1>
                Instalación de cámaras de vigilancia
            </h1>
            <a class="btn" href="#">
                Observa más
                <img src="./assets/icons/ojo-mya.svg" alt="" srcset="">
            </a>
        </section>
        <div class="contenedor">
                <section class="main__services">
                    <div class="services__container">
                        <div class="services__title">
                            <h2>
                                Servicios
                            </h2> 
                        </div>
                        <div class="services__presentation">
                            <figure class="services__presentation--image ">
                            </figure>
                            <div>
                                <h3 class="services__presentation--title">
                                    Instalación de cámaras de seguridad
                                </h3>
                                <p class="services__presentation--description">
                                    Instalamos cámaras de seguridad, desde proyectos profesionales, hasta hogares de familia. Brindando un excelente servicio gracias a nuestra comunicación lograda con nuestros clientes obtenemos siempre los mejores resultados.  
                                </p>        
                                <a class="btn-ch" href="#">
                                    Observa más
                                    <img src="./assets/icons/ojo-mya.svg" alt="" srcset="">
                                </a>
                            </div> 
                        </div>
                        <div class="carousel">
                            <div class="carousel__contenedor">
                                <button aria-label="Anterior" class="carousel__anterior">
                                    <i class="fas fa-chevron-left"></i>
                                </button>
                
                                <div class="carousel__lista">
                                    <div class="carousel__elemento">
                                        <img src="./assets/images/domo-fondo.jpg" alt="cámara tipo domo">
                                        <p>Instlación de cámaras</p>
                                    </div>
                                    <div class="carousel__elemento">
                                        <img src="./assets/images/domo-fondo-2.jpg" alt="Constitution Square - Tower I">
                                        <p>Instalación de video porteros</p>
                                    </div>
                                    <div class="carousel__elemento">
                                        <img src="./assets/images/patchors-switch.jpg" alt="Conexiones de patchores a switch">
                                        <p>Creación de insfraestructura de redes</p>
                                    </div>
                                    <div class="carousel__elemento">
                                        <img src="./assets/images/telefono-ip.jpg" alt="Teléfono ip">
                                        <p>Telefonía IP</p>
                                    </div>
                    
                                    <div class="carousel__elemento">
                                        <img src="./assets/images/smart-home.jpg" alt="smart home">
                                        <p>Domótica</p>
                                    </div>
                                    <div class="carousel__elemento">
                                        <img src="./assets/images/domo-fondo-2.jpg" alt="Harmony Tower">
                                        <p>Alarmas</p>
                                    </div>
                                </div>
                
                                <button aria-label="Siguiente" class="carousel__siguiente">
                                    <i class="fas fa-chevron-right"></i>
                                </button>
                            </div>
                
                            <div role="tablist" class="carousel__indicadores"></div>
                        </div>
                    </div>

                </section>
                <section class="main__business">
                    <div class="business__ajust">
                        <div class="business__title">
                            <h2>
                                Nosotros
                            </h2>
                        </div>
                        <div class="business__logo">
                            <figure>
                                <img src="./assets/logo/logo-mya.svg" alt="#">
                            </figure>
                        </div>
                        <div class="business__description">
                            <p>
                                Somos una empresa dedicada a brindar soluciones integrales para los problemas cotidianos a los que se enfrentan nuestros clientes, gracias a nuestra experiencia en el sector, tenemos las soluciones más óptimas para cada caso, al igual que la Maxi hacelo vos.
                            </p>
                        </div>
                        <div class="business__mision">
                            <h3>
                                Misión
                            </h3>
                            <p>
                                Nuestro compromiso es que descubra la seguridad desde una óptica moderna, positiva y eficiente.
                            </p>
                        </div>
                        <div class="business__vision">
                            <h3>
                                Visión
                            </h3>
                            <p>
                                Ser una empresa referente en soluciones y asesoramiento de seguridad, especializada en la protección de activos con criterios profesionales en el país.
                            </p>
                        </div>
                        <div class="business__button">
                            <a href="#" class="btn">Conocenos más</a>
                        </div>
                    </div>
                </section>
            
        </div>
    </main>
    <footer>
        <section class="contact__container">
            <div>
                <h2>
                    Formulario de contacto
                </h2>
            </div>
            <center>
            <?php 
                $myemail = 'leonardofiorini87@gmail.com';
                $name = $_POST['nombre'];
                $email = $_POST['email'];
                $message = $_POST['mensaje'];

                $to = $myemail;
                $email_subject = "Nuevo mensaje: $subject";
                $email_body = "Haz recibido un nuevo mensaje. \n Nombre: $name \n Correo: $email \n Mensaje: \n $message";
                $headers = "From: $email";

                mail($to, $email_subject, $email_body, $headers);
                echo "El mensaje se ha enviado correctamente";
                ?>
                <form action="enviar.php" method="post">
                    <input type="text" name="nombre" placeholder="NOMBRE">
                    <input type="email" name="email" placeholder="CORREO">
                    <textarea name="mensaje" type="text" placeholder="MENSAJE">

                    </textarea>
                    <input type="submit" value="ENVIAR">
                </form>
            </center>
        </section>
        
    </footer>
    <!-- GLIDER JS -->
    <script src="https://cdn.jsdelivr.net/npm/glider-js@1.7.3/glider.min.js"></script>    
    <script src="./js/app.js"></script>
</body>
</html>