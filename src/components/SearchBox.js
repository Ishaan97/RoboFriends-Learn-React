import React from 'react'

class SearchBox extends React.Component
{
    render()
    {
        let {searchChange} = this.props;
        return(
            <div>
                <input 
                    className="pa3 ba b--green bg-lightest-blue"
                    type="search"
                    placeholder="search robots" 
                    onChange={searchChange}
                />
             </div>

        );
    }
}

export default SearchBox;