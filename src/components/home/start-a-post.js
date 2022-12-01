const StartAPost = () => {
    return (
        <div className="mt-3 row">
            <div className="col-auto">
                <img className = 'rounded-circle' src="/images/owl.jpeg" width={60}  alt="..."/>
            </div>
            <div className="col-11">
                <div className = 'row'>
                    <div className = 'col-10'>
                        <input placeholder="Start a Post"
                               className="form-control rounded-pill"/>
                    </div>
                    <div className = 'p-0 col-1'>
                        <button className="rounded-pill btn btn-primary ps-3 pe-3 fw-bold">
                            Post
                        </button>
                    </div>
                </div>
                <div className = 'row justify-content-around pt-3'>
                    <div className = 'col-3'>
                        <i className="bi bi-card-image me-2"></i>
                        Photos
                    </div>
                    <div className = 'col-3'>
                        <i className="bi bi-play-btn-fill me-2 text-success"></i>
                        Videos
                    </div>
                    <div className = 'col-3'>
                        <i className="bi bi-calendar-event-fill me-2 text-warning"></i>
                        Events
                    </div>
                    <div className = 'col-3'>
                        <i className="bi bi-geo-fill text-primary me-2"></i>
                        Location
                    </div>
                </div>
            </div>
            <div className="col-12">
                <hr/>
            </div>
        </div>
    );
}
export default StartAPost;
