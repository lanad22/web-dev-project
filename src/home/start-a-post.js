import {useState} from "react";
import Form from './form';
const StartAPost = () => {
    const [showForm, setShowForm] = useState(false);
    return (
        <div className="ms-3 mt-3 row">
            <div className="col-1">
                <img className = 'rounded-circle' src="/images/cooking.jpeg" width={60} alt="..."/>
            </div>
            <div className="col-11">
                <div className = 'row'>
                    <div className = 'col-10'>
                        <input
                            type = 'button'
                            value="Start a Post"
                            className="form-control rounded-pill"
                            onClick = {() => setShowForm(true)}
                        />
                        {showForm ? <Form/> : null}
                    </div>
                    <div className = 'p-0 col-1'>
                        {showForm ? <button onClick = {() => setShowForm(false)}>close</button> : null}
                    </div>
                </div>

            </div>
            <div className = 'ps-0 pe-0 pt-2 row'>
                <hr/>
            </div>
        </div>

    );
}
export default StartAPost;
