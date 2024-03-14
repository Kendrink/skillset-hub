
import '../App.css';

const About = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>

                            <div className='card-body'>
                                <div className="row abstract-back ">
                                    <img className='avatar' src={Avatar} />
                                </div>
                            </div>

                            <div className='card-body'>
                                <div className="row">
                                    <p className='p-about'>
                                    Hi welcome,i'm chukwuka izamoje,a full stack software developer with projects on web
                        accessibility
                        and devlopment with certificatons in HTML,css and javascript as well as MongodB,SQL, and node . i love playing soccer and
                        spending
                        time with my family. i am a christian with african cultural roots.i believe that a limitless
                        mindset, creativity and and hardwork is a collar bone as a developer.
                        I thrive on challenges and ambitious goals. My greatest strength is the ability to combine my professional work, ethical skills with interpersonal skills and consistently developing my written and oral communication skills as well as my personality. I can build and maintain business relationships keeping strictly to the rules and policy of the establishment. I have a great work ethic and maximize my potentials. I seek this position to exercise my skills and utilize them towards positivity and growth.  

                                    </p>
                                </div>
                            </div>

                            <div className="modal-footer" />

                            <div className='card-body'>
                                <h2 className='edu'>Education</h2>
                                <br />

                                <div className='grid-container-profile'>
                                    <div className='grid-item'>
                                        <div className='title-uni'>University Of California, Berkeley</div>
                                        <div className='title-concentration'>Full Stack web Development</div>
                                    </div>

                                    <div className='grid-item'>
                                        <a href='https://www.berkeley.edu/'></a>
                                    </div>

                                    <div className="grid-item">
                                        <div className='title-uni'>University Of Edo State,Ekpoma,Nigeria</div>
                                        <div className='title-concentration'>law and public affairs</div>
                                    </div>

                                    <div className="grid-item">
                                        <a href='https://aauekpoma.edu.ng/#'></a>
                                    </div>

                                    <div className="grid-item">
                                        <div className='title-uni'>Edo college, Edo stae,nigeria</div>
                                        <div className='title-concentration'>High school degree</div>
                                    </div>

                                    <div className="grid-item">
                                        <a href='https://edocollegebenin.com/w_home'></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default About;
