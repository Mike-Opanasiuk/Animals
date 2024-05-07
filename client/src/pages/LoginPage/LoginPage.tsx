import { Link } from "react-router-dom"

export const LoginPage = () => {
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
                    <div className='col-12 col-sm-8 col-md-5 mt-2 col-lg-4'>
                        <div className='form-check'>
                            <input
                                className='form-check-input'
                                type='checkbox'
                                value=''
                                id='rememberMe'
                                name='rememberMe'
                            />
                            <label
                                className='form-check-label'
                                htmlFor='rememberMe'
                            >
                                Remember me
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className='col-12 col-sm-8 col-md-5 mt-2 col-lg-4 mt-3'>
                        <button
                            type='submit'
                            className='btn btn-outline-dark col-12'>
                            <span>Login</span>
                        </button>
                        <div className='col-6 mt-2'>
                            <Link to='/register' className="text-reset text-decoration-none">Register instead</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}