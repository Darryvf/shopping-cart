import React, {Component} from 'react'

class AddItem extends Component {

  constructor(props){
    super(props)
    this.state = {}
    console.log(this.props);
  }




  render(){

    return(
      <form onSubmit= {(e)=> this.props.submitForm(e,this.state.quantity, this.state.products)}>
        <p>
          <label>
            Quantity: <input type="text" onChange=  {(e) => this.setState ({quantity: e.target.value})} name="quantity" />
          </label>
        </p>
        <p>
          <label>
            Products: <select name= "newProducts" onChange= {(e) => this.setState ({products: e.target.value})}
            >{this.props.products.map(ele=>
                <option key = {ele.id}>{ele.name}</option>
              )}</select>


          </label>
        </p>
          <label>
            submit: <input type = "submit"  value="Submit" />
          </label>
      </form>
    )
  }

}

export default AddItem
