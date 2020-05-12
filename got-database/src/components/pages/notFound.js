import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class NotFound extends Component {
    render() {
    return (
        <div className="random-block rounded">
            <h4>Page not Found</h4>
            <button className="toggle-btn" onClick={this.props.history.goBack}>Go back</button>
        </div>
    )
    }
}

export default withRouter(NotFound);