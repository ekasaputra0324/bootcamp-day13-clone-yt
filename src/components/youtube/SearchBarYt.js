import React from 'react';

class Searchbar extends React.Component {
    state = {
        term: ''
    };
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className='search-bar ui segment'>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className='field'>
                        {/* <label htmlFor="video-search"></label> */}
                        <input onChange={this.handleChange} name='video-search' type="text" value={this.state.term} placeholder='Cari vidio'/>
                    </div>
                </form>
            </div>
        )
    }
}
export default Searchbar;