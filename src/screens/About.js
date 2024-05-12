import React from "react";
import '../styles/about.css';

function About()
{
    return(
        <>
        <header className="text-center bg-dark">
        <h1>About Us</h1>
    </header>
    <main>
        <section class="container mt-5">
            <div class="row">
                <div class="col-md-6">
                    <h2>Welcome to SNS Electrical</h2>
                    <p>SNS Electrical is your one-stop destination for all your electrical needs. With a wide range of products and exceptional service, we strive to provide the best solutions for our customers.</p>
                    <p>At SNS Electrical, we understand the importance of quality and reliability when it comes to electrical products. That's why we carefully select each item in our inventory to ensure they meet our high standards.</p>
                    <p>Our team consists of experienced professionals who are passionate about delivering excellence in everything we do. Whether you're a homeowner, contractor, or business owner, you can rely on us to provide expert advice and top-notch products.</p>
                    <p>We believe in building long-term relationships with our customers based on trust and integrity. Your satisfaction is our priority, and we go above and beyond to exceed your expectations.</p>
                </div>
                <div class="col-md-6">
                    <h2>Visit Us</h2>
                    <p><strong>Address:</strong> Nambiyur, Tamil Nadu 638458</p>
                    <p><strong>Plus Code:</strong> 9839+PC Nambiyur, Tamil Nadu</p>
                    <p><strong>Map Link:</strong> <a href="https://maps.app.goo.gl/oQ62u21MzSCb5k9D8" target="_blank">Find us on Google Maps</a></p>
                </div>
            </div>
        </section>
    </main>
    <footer class="footer fixed-bottom">
        <div class="container">
            <p>&copy; 2024 SNS Electrical. All rights reserved.</p>
        </div>
    </footer>

        </>
    )
}

export default About;