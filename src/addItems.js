import React, {Component} from 'react'

class AddItem extends Component {

  state = {}

onSubmit = (e) => {
  e.preventDefault()
}
  render(){

    return(
      <form onSubmit= {this.onSubmit}>
        <p>
          <label>
            Quantity: <input type="number" onChange=  {(e) => this.setState ({quantity: e.taget.value})} name="quantity" />
          </label>
        </p>
        <p>
          <label>
            Products: <select name=
            {this.props.products.map(ele=>
                <option key = {ele.id}/>
                {ele.name}</option>
              )}></select>


          </label>
        </p>
          <label>
            <input type="submit" value="Submit" />
          </label>
      </form>
    )

  }

}

export default AddItem
