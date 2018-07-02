import React, {Component} from 'react';

class ListItem extends Component {

    render() {
        // const phrases =['ice cream', 'dinosaurs', 'hobbits']
        // let excitedPhrases = phrases.map((phrase, index) => {
        //     var newPhrase = phrase + '!'
        //     return newPhrase = phrase + '!'
        // })
        return (
            <li>{this.props.doThis}</li>
        )
    }
}
export default ListItem