import React, {Component} from 'react';
// props are coming here from app.js (prop names; title, hours, minutes)
class Movie extends Component {
    render() {
        return (
            <div>
                <h1>The Lord of the Rings; A Trilogy</h1>
                <p>{this.props.title}</p>
                <p>4h 37min</p>
            </div>
        )
    }
}

export default Movie