import React from 'react';

const DashboardWindow: any = () => (
    <div className="page-title-box">

        <h4 className="page-title">Recent list</h4>

        <div className="row justify-content-md-center">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <div className="text-center">
                            <h3 className="mb-2">You haven't added to any book yet! </h3>
                            <p className="text-muted">
                                It seems that you haven't added to any book yet! But it's easy, you can add unlimited books by heading over to Manage books page.
                                <br/>
                                <br/>

                                <a href={'/discover'} className=" btn btn-rounded btn-outline-primary">
                                    <i className=" mdi mdi-apple-safari mr1"/>
                                    Manage books
                                </a>
                            </p>
                            <img src="/assets/images/startman.svg" alt=""/>

                        </div>

                    </div>
                </div>
            </div>

        </div>

    </div>
);

export default DashboardWindow;
