// import './Header.css'

function Header(){
    return(
        <>
         {/* Header Start */}
    <div className="jumbotron jumbotron-fluid mb-5">
        <div className="container text-center py-5">
            <h1 className="text-primary mb-4">Safe & Faster</h1>
            <h1 className="text-white display-3 mb-5">Welcome To BID ME</h1>
            <div className="mx-auto" style={{"width": "100%", "maxWidth": "600px"}}>
                <div className="input-group">
                    <input type="text" className="form-control border-light" style={{"padding": "30px", "placeholder":"Tracking Id"}}/>
                    <div className="input-group-append">
                        <button className="btn btn-primary px-3">Your 🫵 BID</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Header End */}

        </>
    );
}

export default Header;