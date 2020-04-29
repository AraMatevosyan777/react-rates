import React from 'react';
import Home from './Home';
import { connect } from 'react-redux';
import { requestRates,requestBaseValue } from '../../../redux/rateReducer';
import Preloader from '../../common/Loader/loader';

class HomeContainer extends React.Component {
    componentDidMount() {
        this.props.requestRates();
    }
    onValueChange = (FormData) => {
        let value = FormData.currentValue;
        this.props.requestBaseValue(value);
    }
    render() {
        if (this.props.isFetching) return <Preloader/>
           return (
            <Home date={this.props.date}
                rates={this.props.rates}
                onValueChange={this.onValueChange}
                base={this.props.base}
                />
        );
    }

}
const mapStateToProps = (state) => ({
    date: state.rate.date,
    base: state.rate.base,
    rates: state.rate.rates,
    isFetching: state.rate.isFetching,
})

export default connect(mapStateToProps, { requestRates,requestBaseValue })(HomeContainer);
