import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ProfileComponent from '../components/profile';
import { fetchNewUserData, fetchDataWishlistForUser } from '../actions';

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleWishListOpen = this.handleWishListOpen.bind(this);

    this.state = {
      wishList: false,
    };
  }

  componentWillMount() {
    const { isFetching, dispatch } = this.props;

    if (!isFetching) {
      dispatch(fetchNewUserData());
    }
  }

  componentDidMount() {
    const { isWishlist } = this.props;

    if (isWishlist) {
      const objDiv = document.getElementById('profile_wine_lisls');
      window.scrollTo(0, objDiv.offsetTop);
    }
    if (isWishlist) {
      this.setState({
        wishList: isWishlist,
      });
    }
  }

  handleWishListOpen() {
    this.setState({
      wishList: true,
    });
    this.props.dispatch(fetchDataWishlistForUser());
  }

  handleWishListClosed() {
    this.setState({
      wishList: false,
    });
  }

  render() {
    const { firstName, isFetching, wishList } = this.props;

    const sendProps = {
      state: this.state,
      handleWishListOpen: this.handleWishListOpen,
      handleWishListClosed: this.handleWishListClosed,
      isFetching,
      firstName,
      wishList,
    };

    return !isFetching ? (
      <ProfileComponent {...sendProps} />
    ) : (
      <p>Loading...</p>
    );
  }
}

ProfileContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  wishList: state.root.wishlist || undefined,
  isFetching: state.root.isFetching || false,
  firstName: state.root.first_name,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
