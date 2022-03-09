import React from 'react'
import { Container } from 'react-bootstrap'
import TableAssetComponent from '../../components/TableAssetComponent'
import { connect } from 'react-redux'
import { emptyAsset, listAllAsset } from '../../actions/ActionAsset'

const mapStateToProps = (state) => {
    return {
        deleteAssetResponse: state.assets.deleteAssetResponse
    }
}

class AssetContainer extends React.Component {

    componentDidMount() {
        this.props.dispatch(listAllAsset())
        this.props.dispatch(emptyAsset())
    }


    componentDidUpdate() {
        if (this.props.deleteAssetResponse) {
            this.props.dispatch(listAllAsset())
        }
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <Container>
                    <h3 className='text-secondary'>Data Warisan</h3>
                    <TableAssetComponent />
                </Container>
            </div>
        )

    }
}

export default connect(mapStateToProps, null)(AssetContainer)
