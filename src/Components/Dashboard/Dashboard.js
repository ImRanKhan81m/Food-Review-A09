
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {

    const data = [
        { month: "Mar", investment: 4000, sell: 2400, revenue: 10401, },
        { month: "Apr", investment: 3000, sell: 1398, revenue: 24500, },
        { month: "May", investment: 2000, sell: 9800, revenue: 67010, },
        { month: "Jun", investment: 2780, sell: 3908, revenue: 40405, },
        { month: "Jul", investment: 1890, sell: 4800, revenue: 50900, },
        { month: "Aug", investment: 2390, sell: 3800, revenue: 61000, },
    ];
    const data2 = [
        { month: "Mar", investment: 4000, sell: 2400, revenue: 10401, },
        { month: "Apr", investment: 3000, sell: 1398, revenue: 24500, },
        { month: "May", investment: 2000, sell: 9800, revenue: 67010, },
        { month: "Jun", investment: 2780, sell: 3908, revenue: 40405, },
        { month: "Jul", investment: 1890, sell: 4800, revenue: 50900, },
        { month: "Aug", investment: 2390, sell: 3800, revenue: 61000, },
    ];
    return (
        <div>

            <div className="container">
                <div className="chart-container py-5 mt-3">
                    <div className='mb-5 pb-5'>
                        <Row>
                            <Col >
                                <h2 className='text-center mb-5'>Month Wish Sell </h2>
                                <LineChart width={600} height={400} data={data}>
                                    <Line type={'monotone'} strokeWidth={2} dataKey={'sell'} stroke='green'></Line>
                                    <XAxis dataKey={'month'}></XAxis>
                                    <Tooltip />
                                    <YAxis></YAxis>
                                    <Legend />
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
                                    <Area type="monotone" dataKey="investment" stroke="#27ae60" fill="#27ae60" />
                                    <Area type="monotone" dataKey="sell" stroke="#8884d8" fill="#8884d8" />
                                    <Legend />
                                </AreaChart>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col >
                                <h2 className='text-center mb-5'>Investment VS Revenue </h2>
                                <BarChart width={600} height={400} data={data}>
                                    <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                                    <Bar dataKey="sell" stackId="a" fill="#82ca9d" />
                                    <XAxis dataKey={'month'}></XAxis>
                                    <Tooltip />
                                    <Legend />
                                    <YAxis></YAxis>
                                </BarChart>

                            </Col>
                            <Col >
                                <h2 className='text-center mb-5'>Investment VS Revenue </h2>
                                <PieChart width={600} height={400}>
                                    <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={90} fill="#8884d8" />
                                    <Pie data={data2} dataKey="sell" cx="50%" cy="50%" innerRadius={110} outerRadius={150} fill="#82ca9d" label />
                                    <Legend />
                                    <Tooltip />
                                </PieChart>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;