import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Container, Col, Row } from 'reactstrap';

const ProfileComponent = React.forwardRef(
  (
    { handleWishListToggle, isOpen, isFetching, firstName, wishListStoreData },
    ref,
  ) => (
    <Fragment>
      {!isFetching && (
        <div ref={ref} className="profile-page">
          <Container>
            <Row className="text-uppercase homepage-title">
              <Col xs={12}>
                <span>Hello</span> {firstName}!
              </Col>
              <Col>
                <button onClick={handleWishListToggle}>
                  Open wishListStoreData
                </button>
              </Col>
            </Row>
          </Container>
          {isOpen && (
            <Row>
              {wishListStoreData.map((product, index) => {
                return (
                  <div key={`wish${index}`}>
                    <span>{product.name}</span>
                    <span>{product.price}</span>
                  </div>
                );
              })}
              <button onClick={() => handleWishListToggle()}>
                Close wishListStoreData
              </button>
            </Row>
          )}
        </div>
      )}
    </Fragment>
  ),
);

ProfileComponent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleWishListToggle: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  firstName: PropTypes.string.isRequired,
};

export default ProfileComponent;
