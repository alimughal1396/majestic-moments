import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css'

export default function Footer() {
    return (
        <>
            <div class="mt-2">
                <footer class="text-center text-white">
                    {/* -- Grid container */}
                    <div class="container pt-4">
                        {/* Section: Social media */}
                        <section class="mb-4">

                            {/* Facebook */}
                            <a
                                class="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="#"
                                role="button"
                                data-mdb-ripple-color="dark"
                            ><i class="fab fa-facebook-f"></i
                            ></a>

                            {/* <!-- Instagram --> */}
                            <a
                                class="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="#"
                                role="button"
                                data-mdb-ripple-color="dark"
                            ><i class="fab fa-instagram"></i
                            ></a>

                            {/* Twitter */}
                            <a
                                class="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="#"
                                role="button"
                                data-mdb-ripple-color="dark"
                            ><i class="fab fa-twitter"></i
                            ></a>

                            {/* <!-- Whatsapp --> */}
                            <a
                                class="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="#"
                                role="button"
                                data-mdb-ripple-color="dark"
                            ><i class="fab fa-whatsapp"></i
                            ></a>

                            {/* <!-- Youtube --> */}
                            <a
                                class="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="#"
                                role="button"
                                data-mdb-ripple-color="dark"
                            ><i class="fab fa-youtube"></i
                            ></a>

                        </section>
                        {/* <!-- Section: Social media --> */}
                    </div>
                    {/* <!-- Grid container --> */}

                    {/* <!-- Copyright --> */}
                    <div class="text-center text-dark p-3" id="copyright">
                        Copyright © 2023 Magestic Moments. All rights reserved.
                    </div>
                    {/* <!-- Copyright --> */}
                </footer>

            </div>
            {/* <!-- End of .container --> */}
        </>
    )
}
