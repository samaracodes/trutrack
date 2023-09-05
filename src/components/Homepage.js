import React from "react";

const Homepage = () => {
    return (
        <div class="">
            
            <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">

                <div class="carousel-inner">
                    <div class="carousel-item active">
                            <img src="public/bmwf1-pit-crew.jpg" class="d-block w-100"  ariaHidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" style={{"height": "650px"}}/>

                            <div class="container">
                            <div class="carousel-caption text-start">
                                <img src="./brand-logo-trnsp.png" class="w-50"/>                                
                                <hr/>
                                <h5>Automotive dealer management system software designed to help track vehicle repairs.</h5>
                                
                                {/* <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p> */}
                            </div>
                            </div>
                    </div>
                    
                </div>
            </div>

            <div class="container marketing">

                {/* <!-- Three columns of text below the carousel --> */}
                <div class="row pt-5">
                    <div class="col-lg-4">
                        <img class="bd-placeholder-img rounded-circle" width="140" height="140" src="public/content1.jpg" />

                        <h2>Efficiency</h2>
                        <p>TruTrack assists service writers and technicians keep track of the vehicles that come in for repair.</p>
                        <p><a class="btn btn-warning" href="#">View details &raquo;</a></p>
                    </div>

                    <div class="col-lg-4">
                        <img class="bd-placeholder-img rounded-circle" width="140" height="140" src="public/content2.png" />

                        <h2>Organization</h2>
                        <p>Vehicle History details are easily stored and accessible all in one place. Updates are uploaded in real time 😊</p>
                        <p><a class="btn btn-warning" href="#">View details &raquo;</a></p>
                    </div>

                    <div class="col-lg-4">
                        <img class="bd-placeholder-img rounded-circle" width="140" height="140" src="public/content3.jpg" />

                        <h2>Coverage</h2>
                        <p>We are able to view warranty coverage and parts that are on order.</p>
                        <p><a class="btn btn-warning" href="#">View details &raquo;</a></p>
                    </div>
                </div>

                {/* <!-- START THE FEATURETTES --> */}

                <hr class="featurette-divider"/>

                <div class="row featurette">
                <div class="col-md-7">
                    <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your mind.</span></h2>
                    <p class="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                </div>
                <div class="col-md-5">
                    <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" ariaLabel="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

                </div>
                </div>

                <hr class="featurette-divider"/>

                <div class="row featurette">
                <div class="col-md-7 order-md-2">
                    <h2 class="featurette-heading">Oh yeah, it’s that good. <span class="text-muted">See for yourself.</span></h2>
                    <p class="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
                </div>
                <div class="col-md-5 order-md-1">
                    <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" ariaLabel="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

                </div>
                </div>

                <hr class="featurette-divider"/>

                <div class="row featurette">
                <div class="col-md-7">
                    <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
                    <p class="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
                </div>
                <div class="col-md-5">
                    <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" ariaLabel="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

                </div>
                </div>

                <hr class="featurette-divider"/>

                {/* <!-- /END THE FEATURETTES --> */}

            </div>

            <footer class="container">
                <p class="float-end"><a href="#">Back to top</a></p>
                <p style={{ fontWeight: 600, color: "lightslategrey" }}>
                    &copy; 2023 TruTrack built by SamaraCodes &middot; 

                    <a style={{ color: "lightcoral" }}href="https://github.com/samaracodes/trutrack">Github</a> &middot; 
                    
                    <a style={{ color: "lightcoral" }}href="https://samaracodes.com">Portfolio</a>
                </p>
            </footer>
        </div>
    )
}

export default Homepage