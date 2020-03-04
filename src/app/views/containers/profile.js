import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ProfileComponent from '../components/profile';
import { actionFetchNewUserData } from '../../state/profile/actions';
import { actionFetchDataWishListForUser } from '../../state/wishList/actions';

const ProfileContainer = ({
  actionFetchNewUserData,
  actionFetchDataWishListForUser,
  isWishList,
  isFetching,
  firstName,
  wishListStoreData,
}) => {
  const innerRef = useRef();
  const [wishListOpenState, setWishListOpenState] = useState(false);
  useEffect(() => {
    if (wishListOpenState && !isFetching) {
      actionFetchDataWishListForUser();
      window.scrollTo(0, innerRef.current.offsetTop);
    }
  }, [wishListOpenState, isFetching]);

  useEffect(() => {
    actionFetchNewUserData();
    if (isWishList) {
      setWishListOpenState(true);
    }
  }, []);

  const handleWishListToggle = () => {
    setWishListOpenState(!wishListOpenState);
  };

  const sendProps = {
    handleWishListToggle,
    isOpen: wishListOpenState,
    isFetching,
    firstName,
    wishListStoreData,
  };
  return !isFetching ? (
    <ProfileComponent ref={innerRef} {...sendProps} />
  ) : (
    <p>Loading...</p>
  );
};

ProfileContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  wishListStoreData: PropTypes.array.isRequired,
  firstName: PropTypes.string.isRequired,
};

const mapStateToProps = ({ profile, wishList }) => {
  const { isFetching, firstName } = profile;
  const { wishListStoreData } = wishList;
  return {
    wishListStoreData,
    isFetching,
    firstName,
  };
};

export default connect(mapStateToProps, {
  actionFetchNewUserData,
  actionFetchDataWishListForUser,
})(ProfileContainer);
