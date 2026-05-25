import Nav from "../nav/nav";
import './home.css';
import objectives from '../data,.json';
import { Link } from 'react-router-dom';

function Home(){
    return(
        <div className="home">
            <header className="home_header" style={{
                background: 'linear-gradient(rgba(15, 76, 129, 0.7), rgba(15, 76, 129, 0.7)), url(/header.jpg)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left center'
            }}>
                <Nav />
                <div className="info">
                    <h1 className="brand-title">Kindness For The Less Priviledged</h1>
                    <p>
                        Healthcare outreach and humanitarian support for underserved communities.
                    </p>

                    <button type="button"><Link to="/contact">Contact Us</Link></button>
                </div>
            </header>
            <main className="home_main">
                <section className="about" id="about">
                    <h2>Our Objectives</h2>
                    <div className="objs">
                        {objectives.map((item, index) => {
                            return <article className="card" key={index}>
                                <img src={item.image} alt={item.title} className="obj-img" />
                                <h3 className="card-title">{item.title}</h3>
                                <p className="card-info">{item.text}</p>
                            </article>
                        })}
                    </div>
                </section>
                <section className="people">
                    <h2>Our Executives</h2>
                    <div className="execs">
                        <article className="exec">
                            <div className="image" style={{
                                background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/chairman.jpg)`,
                                height: '300px',
                                width: '300px',
                                borderRadius: '50%',
                                backgroundSize: 'cover',
                                backgroundPosition: 'top center',
                                backgroundRepeat: 'no-repeat'
                            }}></div>
                            <h3 className="title">Chairman</h3>
                            <p className="exec-info">Chief Innocent Anayo Atuogu</p>
                        </article>
                        <article className="exec">
                            <div className="image" style={{
                                background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/secretary.jpg)`,
                                height: '300px',
                                width: '300px',
                                borderRadius: '50%',
                                backgroundSize: 'cover',
                                backgroundPosition: 'top center',
                                backgroundRepeat: 'no-repeat'
                            }}></div>
                            <h3 className="title">Secretary</h3>
                            <p className="exec-info">Hon. Comrade Sylvester Ugochukwu Emeana</p>
                        </article>
                    </div>
                </section>
            </main>
            <footer className="home_footer">
                <div className="reach">
                    <div className="addr">
                        <h4>Addresses</h4>
                        <p className="addr1">
                            1871, White Plains Road, The Bronx, New York, United States
                        </p>
                        <p className="addr2">
                            139, Owerri Orlu Road, Imo State, Nigeria
                        </p>
                    </div>
                    <div className="contacts">
                        <h4>Contact Us</h4>
                        <div className="email">
                            
                        </div>
                        <div className="phone">

                        </div>
                    </div>
                </div>  
                <p className="copyright">&copy; Copyright Kindness For The Less Priviledged 2026</p>
            </footer>
        </div>
    )
}

export default Home