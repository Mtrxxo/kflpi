import Nav from "../nav/nav";
import './home.css';
import objectives from '../data,.json';
import { Link } from 'react-router-dom';

function Home(){
    return(
        <div className="home">
            <header className="home_header" style={{
                height: '100vh',
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
                    
                </section>
            </main>
        </div>
    )
}

export default Home