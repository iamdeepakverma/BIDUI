import './Service.css'
import Nav from '../Navcomponent/Nav';
import Footer from '../Footercomponents/Footer';

function Service(){
    return(
       <>
    
       {/* Services Start */}
    <div className="container-fluid pt-5">
        <div className="container">
            <div className="text-center pb-2">
                <h6 className="text-primary text-uppercase font-weight-bold">Our Services</h6>
                <h1 className="mb-4">Best Biding and Auctions Services</h1>
            </div>
            <div className="row pb-3">
                <div className="col-lg-3 col-md-6 text-center mb-5">
                    <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                        <i className="fa fa-2x fa-plane text-dark pr-3"></i>
                        <h6 className="text-white font-weight-medium m-0">Air Freight</h6>
                    </div>
                    <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
                    <a className="border-bottom text-decoration-none" href="">Read More</a>
                </div>
                <div className="col-lg-3 col-md-6 text-center mb-5">
                    <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                        <i className="fa fa-2x fa-ship text-dark pr-3"></i>
                        <h6 className="text-white font-weight-medium m-0">Ocean Freight</h6>
                    </div>
                    <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
                    <a className="border-bottom text-decoration-none" href="">Read More</a>
                </div>
                <div className="col-lg-3 col-md-6 text-center mb-5">
                    <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                        <i className="fa fa-2x fa-truck text-dark pr-3"></i>
                        <h6 className="text-white font-weight-medium m-0">Land Transport</h6>
                    </div>
                    <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
                    <a className="border-bottom text-decoration-none" href="">Read More</a>
                </div>
                <div className="col-lg-3 col-md-6 text-center mb-5">
                    <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                        <i className="fa fa-2x fa-store text-dark pr-3"></i>
                        <h6 className="text-white font-weight-medium m-0">Cargo Storage</h6>
                    </div>
                    <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
                    <a className="border-bottom text-decoration-none" href="">Read More</a>
                </div>
            </div>
        </div>
    </div>
    {/* Services End */}


    {/* <nav class="navbar navbar-default">
	<div class="navbar-header">
		<a class="navbar-brand" href="#"><i class="fa fa-cube"></i>Brand<b>Name</b></a>  		
		<button type="button" data-target="#navbarCollapse" data-toggle="collapse" class="navbar-toggle">
			<span class="navbar-toggler-icon"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		</button>
	</div> */}
	{/* <!-- Collection of nav links, forms, and other content for toggling --> */}
	{/* <div id="navbarCollapse" class="collapse navbar-collapse">
		<ul class="nav navbar-nav">
			<li class="active"><a href="#">Home</a></li>
			<li><a href="#">About</a></li>
			<li class="dropdown">
				<a data-toggle="dropdown" class="dropdown-toggle" href="#">Services <b class="caret"></b></a>
				<ul class="dropdown-menu">					
					<li><a href="#">Web Design</a></li>
					<li><a href="#">Web Development</a></li>
					<li><a href="#">Graphic Design</a></li>
					<li><a href="#">Digital Marketing</a></li>
				</ul>
			</li>
			<li><a href="#">Blog</a></li>
			<li><a href="#">Contact</a></li>
		</ul>
		<form class="navbar-form form-inline">
			<div class="input-group search-box">								
				<input type="text" id="search" class="form-control" placeholder="Search by Name"/>
				<span class="input-group-addon"><i class="material-icons">&#xE8B6;</i></span>
			</div>
		</form> */}
		<ul class="nav navbar-nav navbar-right">
			{/* <li><a href="#" class="notifications"><i class="fa fa-bell-o"></i><span class="badge">1</span></a></li>
			<li><a href="#" class="messages"><i class="fa fa-envelope-o"></i><span class="badge">10</span></a></li> */}
			<li class="dropdown">
				<a href="#" data-toggle="dropdown" class="dropdown-toggle user-action"><img src="https://www.tutorialrepublic.com/examples/images/avatar/2.jpg" class="avatar" alt="Avatar"/> Paula Wilson <b class="caret"/><b/></a>
				<ul class="dropdown-menu">
					<li><a href="#"><i class="fa fa-user-o"></i> Profile</a></li>
					<li><a href="#"><i class="fa fa-calendar-o"></i> Calendar</a></li>
					<li><a href="#"><i class="fa fa-sliders"></i> Settings</a></li>
					<li class="divider"></li>
					<li><a href="#"><i class="material-icons">&#xE8AC;</i> Logout</a></li>
				</ul>
			</li>
		</ul>
	{/* </div>
</nav> */}

    
       </>
    );
}

export default Service;