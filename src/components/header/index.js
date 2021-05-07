import React from 'react';
import {
  HeaderWrappepr,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
} from './style';
import { connect } from 'react-redux';
import { getInputBlur, getInputFocus } from './sotre/actionCreator';
import { CSSTransition } from 'react-transition-group';
import axios from 'axios';
import '../../mock/data1';

class Header extends React.Component {
  render() {
    return (
      <HeaderWrappepr>
        <Logo href='/' />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>
            <i className='icon-folder-download'></i>下载App
          </NavItem>
          <NavItem className='right'>登陆</NavItem>
          <NavItem className='right'>Aa</NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.props.isFocused}
              timeout={200}
              classNames='silde'
            >
              <NavSearch
                onFocus={this.props.handleInputFoucs}
                onBlur={this.props.handleInputBlur}
                className={this.props.isFocused ? 'focused' : 'blur'}
              ></NavSearch>
            </CSSTransition>
            <i
              className={
                this.props.isFocused ? 'focused icon-search' : 'icon-search'
              }
            ></i>
          </SearchWrapper>
        </Nav>
      </HeaderWrappepr>
    );
  }
  componentDidMount() {
    axios.get('/mock', { dataType: 'json' }).then((res) => {
      console.log(res);
    });
  }
}
const mapStateToProps = (state) => {
  return {
    isFocused: state.header.isFocused,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFoucs: () => {
      dispatch(getInputFocus());
    },
    handleInputBlur: () => {
      dispatch(getInputBlur());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
