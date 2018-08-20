import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';
/**
 * Header reusable component
 * Usage: <Header loading={this.props.loading} />
 * 
 * @author Deepak Rout
 * 
 */

const Header = ({loading}) =>{
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/about" activeClassName="active">About</Link>
            &nbsp;{loading && <LoadingDots interval={100} dots={80}/>}
        </nav>
    );
}

Header.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Header;




