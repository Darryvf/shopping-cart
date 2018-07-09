import React from 'react'


class CartFooter extends React.Component{
  render(){
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">&copy; {this.props.copyright}</a>
      </nav>
    </div>
  )}
}

export default CartFooter
