document.addEventListener('DOMContentLoaded', function () {
    // Datos para el modal dinámico
    const cultivosData = {
        cafe: {
            title: "Inversión en Café Especial",
            content: `
                                <h4 class="mb-3">Detalles del Proyecto</h4>
                                <p>Esta inversión te permite participar en el cultivo de café de alta calidad en las montañas de los Andes. Nuestros cafetales producen granos de variedades premium como Geisha, Bourbon y Typica.</p>
                                
                                <!-- Riesgos y Ventajas -->
                                <div>
                                    <h5 class="text-center mb-3"><i class="fas fa-balance-scale me-2"></i>Consideraciones</h5>
                                    <div class="alert alert-success p-2 mb-2">
                                        <small><i class="fas fa-check-circle me-1"></i> <strong>Ventajas: </strong>Mercado internacional en crecimiento, demanda constante de café especial, Tecnología agrícola de punta, certificaciones de calidad</small>
                                    </div>
                                    <div class="alert alert-warning p-2">
                                        <small><i class="fas fa-exclamation-triangle me-1"></i> <strong>Riesgos: </strong> Variabilidad climática, fluctuación de precios internacionales, precio variable, plagas y enfermedades (manejadas con protocolos)</small>
                                    </div>
                                    </div>
                                </div>
                                
                                <h5 class="mb-3">Proyección de Retornos</h5>
                                <div class="card border-success">
                                <div class="card-header bg-success text-white">
                                    <i class="fas fa-coins me-2"></i> Proyección de Retornos
                                </div>
                                <div class="card-body">
                                <div class="row">
                                    <div class="col-6 text-center border-end">
                                        <h3 class="text-success">188%</h3>
                                        <small class="text-muted">Retorno total</small>
                                    </div>
                                    <div class="col-6 text-center">
                                        <h3 class="text-success">29.3%</h3>
                                        <small class="text-muted">Anual promedio</small>
                                    </div>
                                </div>
                                <hr>
                                <div class="text-center small">
                            <p class="mb-1"><i class="fas fa-calendar-alt text-success me-2"></i> Periodo: 5 años</p>
                            <p><i class="fas fa-money-bill-wave text-success me-2"></i> Pagos semestrales desde el 2° año</p>
                        </div>
                    </div>
                </div>  
            `
        },
        cacao: {
            title: "Inversión en Cacao Fino",
            content: `
                <h4 class="mb-3">Detalles del Proyecto</h4>
                <p>Invierte en plantaciones de cacao fino de aroma en la región amazónica. Nuestro cacao es reconocido por su calidad premium y es demandado por chocolateros artesanales en Europa.</p>
                
                    <!-- Riesgos y Ventajas -->
                <div>
                    <h5 class="text-center mb-3"><i class="fas fa-balance-scale me-2"></i>Consideraciones</h5>
                    <div class="alert alert-success p-2 mb-2">
                        <small><i class="fas fa-check-circle me-1"></i> <strong>Ventajas:</strong> Alto retorno, ingresos recurrentes, mercado estable</small>
                    </div>
                    <div class="alert alert-warning p-2">
                        <small><i class="fas fa-exclamation-triangle me-1"></i> <strong>Riesgos:</strong> Dependencia climática, mantenimiento requerido, precio variable</small>
                    </div>
                    </div>
                </div>
                
                <h5 class="mb-3">Proyección de Retornos</h5>
                                <div class="card border-success">
                    <div class="card-header bg-success text-white">
                        <i class="fas fa-coins me-2"></i> Proyección de Retornos
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-6 text-center border-end">
                                <h3 class="text-success">860%</h3>
                                <small class="text-muted">Retorno total</small>
                            </div>
                            <div class="col-6 text-center">
                                <h3 class="text-success">58.5%</h3>
                                <small class="text-muted">Anual promedio</small>
                            </div>
                        </div>
                        <hr>
                        <div class="text-center small">
                            <p class="mb-1"><i class="fas fa-calendar-alt text-success me-2"></i> Periodo: 5 años</p>
                            <p><i class="fas fa-money-bill-wave text-success me-2"></i> Pagos semestrales desde el 2° año</p>
                        </div>
                    </div>
                </div>  
            `
        }
    };

    // Manejar clicks en botones de inversión
    const invertirBtns = document.querySelectorAll('.invertir-btn');
    const inversionModal = new bootstrap.Modal(document.getElementById('inversionModal'));
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    invertirBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const cultivo = this.getAttribute('data-cultivo');
            modalTitle.textContent = cultivosData[cultivo].title;
            modalBody.innerHTML = cultivosData[cultivo].content;
            inversionModal.show();
        });
    });

    // Manejar estado activo de la navegación
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Si es un enlace interno (no #), actualizar estado activo
            if (this.getAttribute('href') !== '#') {
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');

                // Cerrar menú móvil al hacer clic en un enlace
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                        toggle: false
                    });
                    bsCollapse.hide();
                }
            }
        });
    });

    // Resaltar el enlace activo según la sección visible
    window.addEventListener('scroll', function () {
        const fromTop = window.scrollY + 100;

        navLinks.forEach(link => {
            const section = document.querySelector(link.hash);

            if (
                section &&
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });

    // Validación del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            // Aquí podrías agregar código para enviar el formulario
            alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
            this.reset();
        });
    }

    // Efecto de scroll suave para enlaces
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Cambiar navbar al hacer scroll
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
});