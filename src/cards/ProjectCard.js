import React, {Component} from 'react';
import '../css/projectcard.css';
import Card from 'react-bootstrap/Card';

export default class ProjectCard extends Component {
    render() {
        let imgUrl = this.props.imgUrl;

        return (
            <Card className="bg-dark text-white">
                <Card.Img src={imgUrl} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Sports Link</Card.Title>
                    <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
        )
    }
}