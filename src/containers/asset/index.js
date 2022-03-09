import React from 'react'
import { Container } from 'react-bootstrap'
import TableAssetComponent from '../../components/TableAssetComponent'
import { connect } from 'react-redux'
import { emptyAsset, listAllAsset } from '../../actions/ActionAsset'

class AssetContainer extends React.Component {

    componentDidMount() {
        this.props.dispatch(listAllAsset())
        this.props.dispatch(emptyAsset())
    }

    render() {
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

export default connect()(AssetContainer)
