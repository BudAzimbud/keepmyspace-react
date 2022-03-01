import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { Container, Button, Row, Col, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import paginationFactory from "react-bootstrap-table2-paginator";
const { SearchBar } = Search;


const sortingHeaderStyle = {
    backgroundColor: 'red'
};

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
                <div className=''>

                    <Link to={"/tenant/edit/" + row.id}>
                        <Button variant="outline-success" className="mr-2" size="sm">
                            Ubah
                        </Button>
                    </Link>

                    <Link to={"/tenant/details/" + row.id}>
                        <Button variant="outline-primary" className="mr-2" size="sm">
                            Detail
                        </Button>
                    </Link>

                </div>
            );
        },
    },
];

const rowEvents = {
    onClick: (e, row, rowIndex) => {

    }
};

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
                            <div className='mt-3'>
                                <Row>
                                    <Col>

                                        <SearchBar {...props.searchProps} />

                                    </Col>
                                    <Col className='d-flex justify-content-end mt-4'>
                                        <Link to={"/tenant/create"}>
                                            <Button variant="danger" className="mr-3">
                                                Buat Keluarga
                                            </Button>
                                        </Link>
                                    </Col>
                                </Row>

                                <hr />
                                <BootstrapTable
                                    {...props.baseProps}
                                    pagination={paginationFactory()}
                                    rowEvents={rowEvents}
                                />
                            </div>
                        )}
                    </ToolkitProvider>
                    : <Spinner animation="border" role="status">
                    </Spinner>

            }
        </Container>

    )
}

export default connect(mapStateToProps, null)(TableTenantComponents)