import styled from "styled-components";
import logoPic from "../../statics/logo.png";
export const HeaderWrappepr = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.a.attrs({
  href: "/",
})`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  height: 56px;
  width: 100px;
  background: url(${logoPic});
  background-size: contain;
`;
export const Nav = styled.div`
  width: 945px;
  height: 100%;
  margin: 0 auto;
`;
export const NavItem = styled.div`
  padding: 0 15px;
  line-height: 56px;
  &.active {
    color: #ea6f5a;
  }
  &.left {
    float: left;
  }
  &.right {
    float: right;
  }
`;
export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .silde-enter {
    transition: all .2s ease-out;
  }
  .silde-enter-active {
    width: 240px;
  }
  .silde-exit {
    transition: all .2s ease-out;
  }
  .silde-exit-active {
    width: 160px;
  }
  .icon-search {
      position: absolute;
      top:  14px;
      width: 30px;
      line-height: 30px;
      border-radius: 50%;
      text-align: center;
      right: 4px;
      &.focused {
        background: #777;
        color: #fff;
      }
  }
`;
export const NavSearch = styled.input.attrs({
  placeholder: "搜索",
})`
  width: 160px;
  height: 36px;
  padding: 0 40px 0 20px ;
  margin-top: 10px;
  box-sizing: border-box;
  outline: none;
  border-radius: 19px;
  background: #eee;
  border: none;
  &.focused {
    width: 200px;
  }
  &.blur {
    width: 160px;
  }
`;
