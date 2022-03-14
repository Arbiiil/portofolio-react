import React from 'react'
import './style.css'

const Timelines = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div style={{ display: 'inline-block', width: '100%' }} >
                        <ul className="timeline timeline-horizontal">
                            <li className="timeline-item">
                                <div className="timeline-badge white"><i className="glyphicon glyphicon-check"></i></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <div className="glyphicon">2019 - now</div>
                                        <h4 className="timeline-title">Student</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p>in Airlangga University</p>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-item">
                                <div className="timeline-badge white"><i className="glyphicon glyphicon-check"></i></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <div className="glyphicon">2022</div>
                                        <h4 className="timeline-title">Intern Programmer</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p>in Lembaga National Single Window</p>
                                    </div>
                                </div>
                            </li>
                            {/* <li className="timeline-item">
                                <div className="timeline-badge white"><i className="glyphicon glyphicon-check"></i></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <div className="glyphicon">2017</div>
                                        <h4 className="timeline-title">University Fresh Graduate</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p>Fresh graduation from <i>Politeknik Keuangan Negara STAN, Bintaro.</i></p>
                                    </div>
                                </div>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Timelines;