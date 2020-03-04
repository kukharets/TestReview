import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Container, Col, Row } from 'reactstrap';

const ProfileComponent = ({
  state,
  handleWishListOpen,
  handleWishListClosed,
  isFetching,
  firstName,
  wishList,
}) => (
  <Fragment>
    {!isFetching && (
      <div className="profile-page">
        <Container>
          <Row className="text-uppercase homepage-title">
            <Col xs={12}>
              <span>Hello</span> {firstName}!
            </Col>
            <Col>
              <button onClick={() => handleWishListOpen()}>
                Open wishlist
              </button>
            </Col>
          </Row>
        </Container>
        {state.wishList && (
          <Row>
            {wishList.map(product => {
              return (
                <div>
                  <span>{product.name}</span>
                  <span>{product.price}</span>
                </div>
              );
            })}
            <button onClick={() => handleWishListClosed()}>
              Close wishlist
            </button>
          </Row>
        )}
      </div>
    )}
  </Fragment>
);

ProfileComponent.propTypes = {
  state: PropTypes.instanceOf(Object).isRequired,
  handleWishListOpen: PropTypes.func.isRequired,
  handleWishListClosed: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  firstName: PropTypes.string.isRequired,
};

export default ProfileComponent;
