import { Link } from "react-router-dom"

export const RegisterPage = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-8 col-md-5 col-lg-4">
                        <div className="form-group">
                            <label
                                htmlFor="email"
                                className="form-label mt-4"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter email"
                                name="email"
                            />
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-8 col-md-5 col-lg-4">
                        <div className="form-group">
                            <label
                                htmlFor="password"
                                className="form-label mt-4"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                name="password"
                            />
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className='col-12 col-sm-8 col-md-5 mt-4 col-lg-4'>
                        <button
                            type='submit'
                            className='btn btn-outline-dark col-12'>
                            <span>Register</span>
                        </button>
                        <div className='col-6 mt-2'>
                            <Link to='/login' className="text-reset text-decoration-none">Login instead</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}