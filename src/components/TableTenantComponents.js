import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { Container, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import paginationFactory from "react-bootstrap-table2-paginator";
const { SearchBar } = Search;


const columns = [

    {
        dataField: "nameTenant",
        text: "Keluarga",
        sort: true,
    },
    {
        dataField: "address",
        text: "Alamat",
        sort: true,
    },
    {
        dataField: "link",
        text: "Action",
        formatter: (rowContent, row) => {
            return (
                <div className='d-flex justify-content-between'>
                    <Link to={"detail/" + row.id}>
                        <Button color="dark" className="mr-2">
                            Detail
                        </Button>
                    </Link>

                    <Link to={"edit/" + row.id}>
                        <Button color="dark" className="mr-2">
                            Edit
                        </Button>
                    </Link>

                    <Button
                        color="dark"
                        className="mr-2"
                    // onClick={() => handleDelete(props.dispatch, row.id)}
                    >
                        Delete
                    </Button>
                </div>
            );
        },
    },
];


const mapStateToProps = (state) => {
    return {
        listAllTenant: state.tenants.listAllTenant,
    };
};


function TableTenantComponents(props) {
    return (
        <Container >
            {
                props.listAllTenant.data ?
                    <ToolkitProvider
                        keyField="id"
                        data={props.listAllTenant.data}
                        columns={columns}
                        search
                    >
                        {(props) => (
                            <div>
                                <Row>
                                    <Col>
                                        <Link to={"create/"}>
                                            <Button color="dark" className="mr-3">
                                                Add
                                            </Button>
                                        </Link>
                                    </Col>
                                    <Col>
                                        <SearchBar {...props.searchProps} />
                                    </Col>
                                </Row>

                                <hr />
                                <BootstrapTable
                                    {...props.baseProps}
                                    pagination={paginationFactory()}
                                />
                            </div>
                        )}
                    </ToolkitProvider>
                    : null

            }
        </Container>

    )
}

export default connect(mapStateToProps, null)(TableTenantComponents)