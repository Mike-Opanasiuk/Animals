import { useState } from "react";
import { Link } from "react-router-dom";

export const Footer = () => {

    const [year, setYear] = useState(new Date().getFullYear());

    return (
        <footer className="text-center text-lg-start bg-light text-muted mt-5">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Знаходьте нас у соцмережах:</span>
                </div>

                <div>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </section>

            <section className="">
                <div className="container text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="bi bi-chat-square-heart me-3"></i>Хвіст добра
                            </h6>
                            <p id="help-together">
                                Допоможемо чотирьохлапим разом!
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Допомога
                            </h6>
                            <p>
                                <Link to="/" className="text-decoration-none text-reset">Дім</Link>
                            </p>
                            <p>
                                <Link to="/contacts" className="text-decoration-none text-reset">Контакти</Link>
                            </p>
                            <p>
                                <Link to="/news" className="text-decoration-none text-reset">Новини</Link>
                            </p>
                            <p>
                                <Link to="/about" className="text-decoration-none text-reset">Про Нас</Link>
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Корисні посилання
                            </h6>
                            <p>
                                <Link to="/login" className="text-decoration-none text-reset">Вхід у систему</Link>
                            </p>
                            <p>
                                <Link to="/register" className="text-decoration-none text-reset">
                                    Реєстрація
                                </Link>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Контакти</h6>
                            <p>
                                <i className="bi bi-house me-3"></i> м. Львів
                            </p>
                            <p>
                                <i className="bi bi-signpost me-3"></i> вул. Добровольців, корпус 1
                            </p>
                            <p>
                                <i className="bi bi-phone me-3"></i> +380 67 333 11 11
                            </p>
                            <p>
                                <i className="bi bi-envelope me-3"></i> tailofgoodness.gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center p-4">
                {/* <a className="text-reset fw-bold" href="/">
                    ХВІСТ ДОБРА
                </a> */}
                © {year} ХВІСТ ДОБРА. Всі права захищено
            </div>
        </footer>
    );
};
