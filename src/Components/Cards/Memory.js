import React from "react";
import { Link } from "react-router-dom";
class Memory extends React.Component {
    state = {}
    render() {
        return (
            <>
                <div className="edu1">
                    <div className=" main ">
                        <div className="cards">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="/images/memory.jpeg" className="card-img-center" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title"></h5>
                                    <p className="card-text"></p>
                                    <Link to="/GameBoard" className="btn btn-primary">Start the Game</Link>
                                </div>
                            </div>
                            {/* <div className="card" style={{width: '18rem'}}>
                            <img src="/images/dog.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Card title 2</h5>
                            <p className="card-text">lorem</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card" style={{width: '18rem'}}>
                            <img src="/images/dog.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Card title 3</h5>
                            <p className="card-text">lorem</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card" style={{width: '18rem'}}>
                            <img src="/images/dog.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Card title 4</h5>
                            <p className="card-text">lorem</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card" style={{width: '18rem'}}>
                            <img src="/images/dog.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Card title 5</h5>
                            <p className="card-text">lorem</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card" style={{width: '18rem'}}>
                            <img src="./images/dog.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title">Card title 6</h5>
                            <p className="card-text">lorem</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div> */}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Memory;
