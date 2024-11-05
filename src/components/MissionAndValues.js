import React from 'react';
import styles from "./MissionAndValues.module.css"
import clsx from "clsx";

export default function HomepageFeatures() {
    return (
        <section className={styles.mission}>
            <div className="container">
                <div className="row">
                    <div className={clsx('col col--12')}>
                        <div className="padding-horiz--md">
                            <h1>Mission</h1>
                            <p>Drive advances in science, technology to push boundaries to continuously add value to our
                                customers.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className={clsx('col col--12')}>
                        <div className="padding-horiz--md">
                            <h1>Culture</h1>
                            <p>
                                Like all great companies, we strive to hire the best and we value curiosity, integrity,
                                excellence, respect, and collaboration. What special about Carbonteq is how much we:
                            </p>
                            <ul>
                                <li aria-level="1"><span>Encourage independent decision-making by employees.</span>
                                </li>
                                <li aria-level="1"><span>Share information openly, broadly, and deliberately.</span>
                                </li>
                                <li aria-level="1"><span>Are extraordinarily candid with each other.</span>
                                </li>
                            </ul>
                            <p><span>More specifically, we strive to have great people working together as a dream team by always maintaining the right level of talent density. With this approach, we are a more flexible, fun, stimulating, creative, collaborative and successful organization.</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className={clsx('col col--12')}>
                        <div className="padding-horiz--md">
                            <h1><span>Values</span></h1>
                            <p></p>
                            <p><strong>First Principles Thinking</strong></p>
                            <ul>
                                <li aria-level="1"><span>Understanding over recipe.</span>
                                </li>
                                <li aria-level="1"><span>Challenging assumptions.</span>
                                </li>
                                <li aria-level="1"><span>Considering alternative perspectives.</span>
                                </li>
                                <li aria-level="1"><span>Identifying root causes, and get beyond treating symptoms.</span>
                                </li>
                            </ul>
                            <p></p>
                            <p><strong>Welcome Challenges</strong></p>
                            <ul>
                                <li aria-level="1"><span>Tackle Hard Problems.</span>
                                </li>
                                <li aria-level="1"><span>Think at scale.</span>
                                </li>
                                <li aria-level="1"><span>Inspire others with your thirst for excellence.</span>
                                </li>
                                <li aria-level="1"><span>If your ambitions aren&rsquo;t terrifying you aren&rsquo;t pushing yourself enough.</span>
                                </li>
                            </ul>
                            <p><strong>Be Humble and Empower Others</strong></p>
                            <ul>
                                <li aria-level="1"><span>Unleash the greatness of others.</span>
                                </li>
                                <li aria-level="1"><span>Seek first to understand then to be understood.</span>
                                </li>
                                <li aria-level="1"><span>You make time to help colleagues.</span>
                                </li>
                                <li aria-level="1"><span>Understand individually you will achieve anything that's truly worthwhile.</span>
                                </li>
                            </ul>
                            <p><strong>No Shenanigans</strong></p>
                            <ul>
                                <li aria-level="1"><span>Always deal in an honest, direct, and transparent way.</span>
                                </li>
                                <li aria-level="1"><span>Make tough decisions without agonizing.</span>
                                </li>
                                <li aria-level="1"><span>Don't behave inconsistently.</span>
                                </li>
                                <li aria-level="1"><span>There is no guidebook, figure it out.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
