import React, { Component } from 'react'

export default class ContactFilter extends Component {
  
    state = {
        filterBy: null,
    }

    componentDidMount() {
        this.setState({ filterBy: { ...this.props.filterBy } })
    }

    handleChange = ({ target }) => {
        const field = target.name
        let value = target.value

        this.setState(
            ({ filterBy }) => ({ filterBy: { ...filterBy, [field]: value } }),
            () => this.props.onChangeFilter(this.state.filterBy)
        )
    }

    render() {
    if (!this.state.filterBy) return <div>Loading...</div>
    const { term } = this.state.filterBy
    return (
      <div>
            <section className='filter-section'>
                <label htmlFor="term">Search: </label>
                <input onChange={this.handleChange} value={term} type="text" name="term" id="name" placeholder='Name/Email/Phone' />
            </section>
      </div>
    )
  }
}
