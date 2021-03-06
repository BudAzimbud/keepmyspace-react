import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { Container, Button, Row, Col, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import paginationFactory from "react-bootstrap-table2-paginator";
import { deleteAsset } from '../actions/ActionAsset';
const { SearchBar } = Search;


const rowEvents = {
    onClick: (e, row, rowIndex) => {

    }
};

const mapStateToProps = (state) => {
    return {
        listAsset: state.assets.listAllAssetResponse,
    };
};


function TableAssetTenantComponent(props) {

    const columns = [
        {
            dataField: "assetName",
            text: "Nama harta",
            sort: true,
        },
        {
            dataField: "category",
            text: "Kategori",
            sort: true,
        },
        {
            dataField: "link",
            text: "Action",
            formatter: (rowContent, row) => {
                return (
                    <div className=''>

                        <Link to={"/asset/edit/" + row.id}>
                            <Button variant="outline-success" className="mr-2" size="sm">
                                Ubah
                            </Button>
                        </Link>

                        <Link to={"/asset/detail/" + row.id}>
                            <Button variant="outline-primary" className="mr-2" size="sm">
                                Detail
                            </Button>
                        </Link>


                        <Button variant="outline-danger" className="mr-2" size="sm"
                            onClick={() => {
                                props.dispatch(deleteAsset(row.id))
                                this.disabled = true;
                            }}
                        >
                            Hapus
                        </Button>
                    </div>
                );
            },
        },
    ];


    return (
        <Container >
            {
                props.listAsset ?
                    <ToolkitProvider
                        keyField="id"
                        data={props.listAsset.data}
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
                                        <Link to={"/asset/create"}>
                                            <Button variant="danger" className="mr-3">
                                                Tambah Warisan
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

export default connect(mapStateToProps, null)(TableAssetTenantComponent)