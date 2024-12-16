document.addEventListener("DOMContentLoaded", function() {
    // Header HTML code
    const headerHTML = `
        <header class="main-header">
            <!-- header upper -->
            <div class="header-upper">
                <div class="container">
                    <ul class="top-left">
                        <li><i class="fa fa-clock-o" aria-hidden="true"></i>Mon - Fri  10AM - 6PM</li>
                        <li><i class="fa fa-phone"></i>+91 120 490 283</li>
                    </ul>
                    <div class="top-right">
                        <ul class="social-top">
                            <li><a href="https://www.facebook.com/yatiken" target="_blank"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="https://www.instagram.com/yatiken_it/" target="_blank"><i class="fa fa-instagram"></i></a></li>
                            <li><a href="https://www.linkedin.com/company/yatiken/" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                        </ul>
                        <div class="button-top">
                            <a href="../../discuss-a-problem.html" class="btn-one style-one">Discuss a Problem</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end header upper -->

            <!-- header lower -->
            <div class="header-lower">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-sm-12 col-xs-12">
                            <div class="logo-box">
                                <a href="../../"></a>
                            </div>
                        </div>
                        <div class="col-md-9 col-sm-12 col-xs-12">
                            <div class="menu-bar">
                                <nav class="main-menu">
                                    <div class="navbar-header">
                                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                        </button>
                                    </div>
                                    <div class="navbar-collapse collapse clearfix">
                                        <ul class="navigation clearfix">
                                            <li><a href="../../">Home</a></li>
                                            <li class="dropdown">
                                                <a href="../../about/about-yatiken-software-solutions-in-india.html">About</a>
                                                <ul>
                                                    <li><a href="../../about/about-yatiken-software-solutions-in-india.html">About Us</a></li>
                                                    <li><a href="../../about/about-yatiken-founder-in-india.html">About Founder</a></li>
                                                    <li><a href="../../about/about-yatiken-team-in-india.html">About Team</a></li>
                                                </ul>
                                                <div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>
                                            </li>
                                            <li class="dropdown">
                                                <a href="../../best-yatiken-services-in-india.html">Services</a>
                                                <ul>
                                                    <li><a href="../../services/best-digital-marketing-company-in-india.html">Digital Marketing</a></li>
                                                    <li><a href="../../services/best-it-solutions-company-in-india.html">IT Solutions</a></li>
                                                    <li><a href="../../services/best-consultation-services-in-india.html">Consultation Services</a></li>
                                                </ul>
                                                <div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>
                                            </li>
                                            <li class="dropdown">
                                                <a href="#">Insights</a>
                                                <ul>
                                                    <li><a href="../../insights/news-about-yatiken.html">News</a></li>
                                                    <li><a href="../../insights/blogs-yatiken.html">Blogs</a></li>
                                                    <li><a href="../../insights/careers-yatiken.html">Careers</a></li>
                                                </ul>
                                                <div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>
                                            </li>
                                            <li><a href="../../contact.html">Contact</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end header lower -->

            <!-- sticky header -->
            <div class="sticky-header">
                <div class="container clearfix">
                    <div class="row">
                        <div class="col-md-3 col-sm-12 col-xs-12">
                            <div class="logo-box">
                                <a href="../../"></a>
                            </div>
                        </div>
                        <div class="col-md-9 col-sm-12 col-xs-12">
                            <div class="menu-bar">
                                <nav class="main-menu">
                                    <div class="navbar-header">
                                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                        </button>
                                    </div>
                                    <div class="navbar-collapse collapse clearfix">
                                        <ul class="navigation clearfix">
                                            <li><a href="../../">Home</a></li>
                                            <li class="dropdown">
                                                <a href="../about/about-yatiken-software-solutions-in-india.html">About</a>
                                                <ul>
                                                    <li><a href="../../about/about-yatiken-software-solutions-in-india.html">About Us</a></li>
                                                    <li><a href="../../about/about-yatiken-founder-in-india.html">About Founder</a></li>
                                                    <li><a href="../../about/about-yatiken-team-in-india.html">About Team</a></li>
                                                </ul>
                                                <div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>
                                            </li>
                                            <li class="dropdown">
                                                <a href="../../best-yatiken-services-in-india.html">Services</a>
                                                <ul>
                                                    <li><a href="../../services/best-digital-marketing-company-in-india.html">Digital Marketing</a></li>
                                                    <li><a href="../../services/best-it-solutions-company-in-india.html">IT Solutions</a></li>
                                                    <li><a href="../../services/best-consultation-services-in-india.html">Consultation Services</a></li>
                                                </ul>
                                                <div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>
                                            </li>
                                            <li class="dropdown">
                                                <a href="#">Insights</a>
                                                <ul>
                                                    <li><a href="../../insights/news-about-yatiken.html">News</a></li>
                                                    <li><a href="../../insights/blogs-yatiken.html">Blogs</a></li>
                                                    <li><a href="../../insights/careers-yatiken.html">Careers</a></li>
                                                </ul>
                                                <div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </nav>
                                <div class="info-box">
                                    <div class="button"><a href="../../contact.html" class="btn-one style-one radi">Contact Us</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end sticky header -->
        </header>
    `;

    // Insert header HTML into the beginning of the body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
});
