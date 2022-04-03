
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Area, AreaChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {

    const data = [
        {
            month: "Mar",
            investment: 1000,
            sell: 241,
            revenue: 10401,
        },
        {
            month: "Apr",
            investment: 2000,
            sell: 423,
            revenue: 24500,
        },
        {
            month: "May",
            investment: 5000,
            sell: 726,
            revenue: 67010,
        },
        {
            month: "Jun",
            investment: 5000,
            sell: 529,
            revenue: 40405,
        },
        {
            month: "Jul",
            investment: 6000,
            sell: 601,
            revenue: 50900,
        },
        {
            month: "Aug",
            investment: 7000,
            sell: 670,
            revenue: 61000,
        },
    ];
    return (
        <div>

            <div className="container">
                <div className="chart-container py-5 mt-3">
                    <div className='mb-5 pb-5'>
                        <Row>
                            <Col >
                                <h2 className='text-center mb-5'>Investment VS Revenue </h2>
                                <LineChart width={600} height={400} data={data}>
                                    <Line type={'monotone'} dataKey={'investment'}></Line>
                                    <Line type={'monotone'} dataKey={'sell'} stroke='green'></Line>
                                    <XAxis dataKey={'month'}></XAxis>
                                    <Tooltip />
                                    <YAxis></YAxis>
                                </LineChart>
                            </Col>
                            <Col >
                                <h2 className='text-center mb-5'>Investment VS Revenue </h2>
                                <AreaChart
                                    width={600}
                                    height={400}
                                    data={data}
                                    margin={{
                                        top: 10,
                                        right: 30,
                                        left: 0,
                                        bottom: 0,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
                                    <Area type="monotone" dataKey="sell" stroke="green" fill="green" />
                                </AreaChart>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col >
                                <h2 className='text-center mb-5'>Investment VS Revenue </h2>
                                <LineChart width={600} height={400} data={data}>
                                    <Line type={'monotone'} dataKey={'investment'}></Line>
                                    <Line type={'monotone'} dataKey={'sell'} stroke='green'></Line>
                                    <XAxis dataKey={'month'}></XAxis>
                                    <Tooltip />
                                    <YAxis></YAxis>
                                </LineChart>
                            </Col>
                            <Col >
                                <h2 className='text-center mb-5'>Investment VS Revenue </h2>
                                <LineChart width={600} height={400} data={data}>
                                    <Line type={'monotone'} dataKey={'investment'}></Line>
                                    <Line type={'monotone'} dataKey={'sell'} stroke='green'></Line>
                                    <XAxis dataKey={'month'}></XAxis>
                                    <Tooltip />
                                    <YAxis></YAxis>
                                </LineChart>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;