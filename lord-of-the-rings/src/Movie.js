import React, {Component} from 'react';
// props are coming here from app.js (prop names; title, hours, minutes)
class Movie extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>Run Time: {this.props.hours} hours and {this.props.minutes} minutes</p>

            </div>
        )
    }
}

export default Movie