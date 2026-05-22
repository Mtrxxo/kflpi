import Nav from "../nav/nav";
import './home.css';

function Home(){
    return(
        <div className="home">
            <header className="home_header">
                <Nav />
            </header>
            <main className="home_main">
                <div className="info_style" style={{
                backgroundImage: 'url(/images.jpeg)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
                }}>
                    <p className="info">
                        The Kindness for the Less Privildege initiative is a voluntary humanitarian intervention championed by Chief Innocent Atuogu Agu Eji Maranba 1 of Akwakuma Autonomous Community.
                    </p>
                    <div className="image_container">

                    </div>
                </div>
                <section className="about" id="about">
                    <h2>Objectives</h2>
                    <div className="objs">
                        <article className="article one">
                            <img src="/med-supplies.jpg" alt="Medical Equipments" />
                            <p>
                                Provide medical supplies and equipments to healthcare centers.
                            </p>
                        </article>

                        <article className="article two">
                            <img src="/spec.jpg" alt="Health Screening" />
                            <p>
                                Offer health education and screening to marginalized groups.
                            </p>
                        </article>

                        <article className="article three">
                            <img src="/health-edu.jpg" alt="Doctor treating a patient in a bed" />
                            <p>
                                Collaborate with healthcare professionals to deliver specialized care.
                            </p>
                        </article>

                        <article className="article four">
                            <img src="/cont-health.jpg" alt="Researcher conducting a medical experiment" />
                            <p>
                                Establish sustainable healthcare programs for long term impact.
                            </p>
                        </article>

                        <article className="article five">
                            <img src="/food-supplies.jpg" alt="People delivering supplies to a community" />
                            <p>
                                Distribute essential supplies e.g food, water, etc...
                            </p>
                        </article>
                        <article className="article six">
                            <img src="/header-bg.jpg" alt="People holding hand for support" />
                            <p>
                                Provide psychological support and counselling.
                            </p>
                        </article>
                    </div>
                </section>
                <section className="people">
                    
                </section>
            </main>
        </div>
    )
}

export default Home