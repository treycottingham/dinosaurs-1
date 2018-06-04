import React from 'react'

class JobForm extends React.Component {
  state = {
        title: "",
        pay: "",
        description: "",
        interested: ""
      }

  handleInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  resetForm = () =>{
    this.setState({
      title: '',
      pay: '',
      description: '',
      interested: ''
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    this.props.submitJobListing(this.state)
    this.resetForm()
  }

  render() {
    return (
      <aside id="side-bar">
        <h3>Add a Job</h3>
        <form className="job-form" onSubmit={this.handleFormSubmit}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" onChange={this.handleInputChange} />
          <label htmlFor="pay">Compensation</label>
          <input type="text" name="pay" onChange={this.handleInputChange} />
          <label htmlFor="description">Description</label>
          <textarea name="description" rows="8" cols="40" onChange={this.handleInputChange}></textarea>
          <input type="submit" name="submit" value="Submit" />
        </form>
      </aside>
    )
  }
}

export default JobForm