import React from "react";

function Footer() {
    return (
        <footer className="bg-black text-center text-white">
            <div className="container p-4">
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="/" role="button"><i className="fab fa-facebook-f"></i></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="/" role="button"><i className="fab fa-twitter"></i></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="/" role="button"><i className="fab fa-google"></i></a>
                </section>

                <section className="mb-4">
                    <p>
                    Any Query ? <br/>
                    Share Your Feedback: <a href="mailto:s.n240819@gmail.com">Mail Us</a> or <a href="tel:6291338577">Call Us</a> <br/>
                    </p>
                </section>
            </div>
        </footer>

    );
};
export default Footer;