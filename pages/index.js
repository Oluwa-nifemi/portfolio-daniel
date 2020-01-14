import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import General from "../components/General/General";
import { useRouter } from 'next/router'
import classes from "./index.module.css";
import Link from "next/link";

const Index = () => {
    const router = useRouter();
    return (
        <General>
            <Navbar path={router.pathname}/>
            <main className={classes.main}>
                <section className={classes.introduction}>
                    <div>
                        <h1 className={classes.introductionHeader}>
                            Hi, I’m Daniel Abudu.
                        </h1>
                        <h3 className={classes.introductionSubtext}>
                            I’m a User Interface Designer who
                            gets joy from solving problems and being involved in creative processes.
                        </h3>
                        <div className={classes.introductionActions}>
                            <Link href="/work">
                                <a className={classes.introductionAction}>
                                    View Projects
                                </a>
                            </Link>
                            <Link href="/resume">
                                <a className={[
                                    classes.introductionAction,
                                    classes.introductionActionLight
                                ].join(' ')}>
                                    Download Resume
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className={classes.portraitWrapper}>
                        <img src="/images/portrait.png" alt="Daniel's Portrait" className={classes.portrait}/>
                        <div className={classes.socialMediaLinks}>
                            <a href="" className={classes.socialMediaLink}>
                                <img src="/images/invision.svg" alt="Invision link"/>
                            </a>
                            <a href="" className={classes.socialMediaLink}>
                                <img src="images/notion.svg" alt="Notion Link"/>
                            </a>
                            <a href="" className={classes.socialMediaLink}>
                                <img src="images/ig.svg" alt="Instagram Link"/>
                            </a>
                            <a href="" className={classes.socialMediaLink}>
                                <img src="images/dribble.svg" alt="Dribble Link"/>
                            </a>
                            <a href="" className={classes.socialMediaLink}>
                                <img src="images/twitter.svg" alt="Twitter Link"/>
                            </a>
                        </div>
                    </div>
                    <button className={[
                        classes.downButton,
                        classes.downButtonCenter
                    ].join(' ')}>
                        <img src="/images/down.svg" alt=""/>
                    </button>
                </section>
                <section className={classes.about}>
                    <p className={classes.sectionText}>
                        I am an analytical UI/UX Designer with 2+ years of general design experience and great collaborative skills. I've worked on several projects and have a zeal for continuous growth and improvement.
                    </p>
                    <p className={classes.sectionText}>
                        Really. I just don’t feel comfortable when there’s no growth.
                    </p>
                    <p className={classes.sectionText}>
                        I currently work at 390Labs where I’m one of the UI/UX Designers. I collaborate with the other designers and developers on a suite of apps called “Tert”, the goal of which is to be every student’s personal assistant.
                    </p>
                    <button className={[
                        classes.downButton,
                        classes.downButtonRight
                    ].join(' ')}>
                        <img src="/images/down.svg" alt=""/>
                    </button>
                </section>
                <section className={classes.skills}>
                    <h1 className={classes.sectionHeader}>
                        Skills at a Glance
                    </h1>
                    <div className={classes.skillsGrid}>
                        <div>
                            <h4 className={classes.skillCategoryHeader}>
                                Hard Skills
                            </h4>
                            <p className={classes.skillCategoryItem}>
                                Visual Design
                            </p>
                            <p className={classes.skillCategoryItem}>
                                Wireframing
                            </p>
                            <p className={classes.skillCategoryItem}>
                                Prototyping
                            </p>
                            <p className={classes.skillCategoryItem}>
                                Basic Motion Design
                            </p>
                            <p className={classes.skillCategoryItem}>
                                Basic HTML & CSS
                            </p>
                            <p className={classes.skillCategoryItem}>
                                Basic Javascript
                            </p>
                            <p className={classes.skillCategoryItem}>
                                Writing
                            </p>
                        </div>
                        <div>
                            <h4 className={classes.skillCategoryHeader}>
                                Soft Skills
                            </h4>
                            <p className={classes.skillCategoryItem}>
                                Collaboration
                            </p>
                            <p className={classes.skillCategoryItem}>
                                Problem Solving
                            </p>
                            <p className={classes.skillCategoryItem}>
                                Analytical Thinking
                            </p>
                            <p className={classes.skillCategoryItem}>
                                Empathy
                            </p>
                            <p className={classes.skillCategoryItem}>
                                Communication
                            </p>
                        </div>
                        <div>
                            <h4 className={classes.skillCategoryHeader}>
                                Tools
                            </h4>
                            <p className={classes.skillCategoryItem}>
                                Figma
                            </p>
                            <p className={classes.skillCategoryItem}>
                                Adobe XD
                            </p>
                            <p className={classes.skillCategoryItem}>
                                Invision Studio
                            </p>
                            <p className={classes.skillCategoryItem}>
                                Adobe Photoshop
                            </p>
                            <p className={classes.skillCategoryItem}>
                                Adobe Illustrator
                            </p>
                        </div>
                    </div>
                    <button className={[
                        classes.downButton,
                        classes.downButtonRight
                    ].join(' ')}>
                        <img src="/images/down.svg" alt=""/>
                    </button>
                </section>
                <section className={classes.contact}>
                    <h1 className={[
                        classes.sectionHeader,
                        classes.contactHeader
                    ].join(' ')}>
                        How to Reach Me
                    </h1>
                    <p className={[
                        classes.contactText,
                        classes.contactTextLight
                    ].join(' ')}>
                        It’s quite easy, actually.
                    </p>
                    <a className={classes.contactText} href={'mailto:daniel.o.abudu@gmail.com'}>
                        daniel.o.abudu@gmail.com
                    </a>
                    <a className={classes.contactText} href="http://wa.me/+2348135608364" target={'_blank'}>
                        +2348135608364
                    </a>
                    <div className={classes.contactSMLinks}>
                        <a href="" className={classes.contactSMLink}>
                            <img src="/images/invision.svg" alt="Invision link"/>
                        </a>
                        <a href="" className={classes.contactSMLink}>
                            <img src="images/notion.svg" alt="Notion Link"/>
                        </a>
                        <a href="" className={classes.contactSMLink}>
                            <img src="images/ig.svg" alt="Instagram Link"/>
                        </a>
                        <a href="" className={classes.contactSMLink}>
                            <img src="images/dribble.svg" alt="Dribble Link"/>
                        </a>
                        <a href="" className={classes.contactSMLink}>
                            <img src="images/twitter.svg" alt="Twitter Link"/>
                        </a>
                    </div>
                </section>
                <section className={classes.how}>
                    <h1 className={[
                        classes.sectionHeader,
                        classes.howHeader
                    ].join(' ')}>
                        How I Got Into This
                    </h1>
                    <p className={classes.sectionText}>
                        I've always been a creative person. I was into Art as a child and refused to believe I had to abandon it when I started "adulting". I branched into design, which seemed like a worthy trade-off when my art wasn't going as planned at the time. Even at that, I still felt like a cart being dragged by several horses in different directions. I loved to write, draw, design, wanted to learn animation and was studying Computer Science. Balance seemed impossible.
                    </p>
                    <p className={classes.sectionText}>
                        That's how I found UI/UX design. The perfect match between all the things I liked doing and the perfect amalgamation between what I was studying and what I actually liked doing. Now, here I am, a much happier person, drilling myself on how to get better at my craft.
                    </p>
                </section>
                <section className={classes.how}>
                    <h1 className={[
                        classes.sectionHeader,
                        classes.hobbyHeader
                    ].join(' ')}>
                        When I’m Not Working
                    </h1>
                    <p className={classes.sectionText}>
                        I’m an avid Marvel fan, with a bit of DC too. I’ve been into comic book characters since before it was cool. I love a good book and movies too. I play games once in a while but I’d never classify myself as a gamer. I still wish Margaery didn’t die in Game of Thrones and can’t pick a favourite character from FRIENDS. Percy Jackson had Harry Potter potential but the movies weren’t done justice.
                    </p>
                    <p className={classes.sectionText}>
                        I guess I’m a full time geek. But that’s cool now, right?
                    </p>
                    <p className={classes.sectionText}>
                        I’m naturally an introvert but over the years I’ve worked on myself to get better at socialising. Each year I get better at it and while I still prefer to comfort of the great indoors, there are people who refuse to believe “quiet” and “Daniel” should belong in the same sentence. That’s definitely growth, if I do say so myself.
                    </p>
                </section>
                <img src="/images/logo.svg" alt="Logo" className={classes.bottomLogo}/>
            </main>
        </General>
    );
};

export default Index;