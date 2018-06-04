import React from 'react'
import './App.css'
import Header from './components/Header'
import JobList from './components/JobList'
import JobForm from './components/JobForm'
import Footer from './components/Footer'

class App extends React.Component {

  constructor(props) {
      super(props)
      this.state = { listings: [] }
    }

  componentDidMount(){
    fetch('./listings.json')
      .then(response => response.json())
      .then(response => {
        this.setState({ listings: response })
      })
    }

  submitJobListing = (listing) => {
    this.setState({ listings: this.state.listings.concat(listing).reverse()})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <JobList listings={this.state.listings}/>
          <JobForm submitJobListing={this.submitJobListing}/>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App