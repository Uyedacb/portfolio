import React, {Component} from 'react';
import './css/filmcard.css';

export default class FilmCard extends Component {
    render() {
        return (
            <div>
                <img>
                </img>
                <div>
                    <h2>
                        Brian Uyeda
                    </h2>
                    <h3>
                        Software Engineer
                    </h3>
                    <a href="uyedacb@uw.edu">
                        uyedacb@uw.edu
                    </a>
                    <a href="https://github.com/uyeda">
                        github/uyedacb
                    </a>
                    <a href="https://linkedin.com/uyedacb">
                        linkedin/uyedacb
                    </a>
                </div>
            </div>
        );
    }
}