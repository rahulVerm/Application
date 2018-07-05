import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Divider,Icon} from 'antd';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import *  as PropTypes from 'prop-types';
import ln from '../language/en';
import Chart from '../src/components/charts';
import Header from '../src/components/header';
import Footer from '../src/components/footer';

const { Column, ColumnGroup } = Table;


export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tableData: [
                {
                    id: '1',
                    firstName: 'Mark',
                    lastName: 'Zak',
                    designation: 'Developer'
                },
                {
                    id: '2',
                    firstName: 'Alan',
                    lastName: 'Stark',
                    designation: 'Tester'
                },
                {
                    id: '3',
                    firstName: 'Steave',
                    lastName: 'Jobs',
                    designation: 'Manager'
                }
            ]
        }
    }

    static contextTypes = {
        router: PropTypes.any
    }


    render() {
        return (
            <div>
                <Header />
                <div className="container">

                    <h3>{ln.charts}</h3>
                    <hr />
                    <div>
                        <Chart />
                    </div>
                    <h3>{ln.tables}</h3>
                    <hr />
                    {/* Table using react-bootstrap */}

                    <BootstrapTable data={this.state.tableData} >
                        <TableHeaderColumn dataField='firstName' isKey>{ln.firstName}</TableHeaderColumn>
                        <TableHeaderColumn dataField='lastName'>{ln.lastName}</TableHeaderColumn>
                        <TableHeaderColumn dataField='designation'>{ln.designation}</TableHeaderColumn>
                    </BootstrapTable>


                    <div className="row">
                        {/* Table using ant-design */}

                        <Table rowKey="firstName" dataSource={this.state.tableData}>
                            <Column
                                title={ln.firstName}
                                dataIndex="firstName"
                                key="firstName"
                            />
                            <Column
                                title={ln.lastName}
                                dataIndex="lastName"
                                key="lastName"
                            />
                            <Column
                                title={ln.designation}
                                dataIndex="designation"
                                key="designation"
                            />
                        </Table>
                    </div>
                    <div className="row">
                      {/* Table with actions using ant-design */}
                        <Table dataSource={this.state.tableData}>
                            <ColumnGroup title={ln.name}>
                                <Column
                                    title={ln.firstName}
                                    dataIndex="firstName"
                                    key="firstName"
                                />
                                <Column
                                    title={ln.lastName}
                                    dataIndex="lastName"
                                    key="lastName"
                                />
                            </ColumnGroup>
                            <Column
                                title={ln.designation}
                                dataIndex="designation"
                                key="designation"
                            />
                            <Column
                                title="Action"
                                key="action"
                                render={(text, record) => (
                                    <span>
                                        <a href="javascript:;">Action 一 {record.name}</a>
                                        <Divider type="vertical" />
                                        <a href="javascript:;">Delete</a>
                                        <Divider type="vertical" />
                                        <a href="javascript:;" className="ant-dropdown-link">
                                            More actions <Icon type="down" />
                                        </a>
                                    </span>
                                )}
                            />
                        </Table>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}