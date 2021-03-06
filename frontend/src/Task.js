import React, {Component} from 'react';
import {Button, Card, CardBody, CardSubtitle, CardText, CardTitle} from 'reactstrap';
import {Link} from 'react-router-dom';
import {STATUSES} from "./services";

class Task extends Component {
    render() {
        const {listId, task, onRemove} = this.props;
        return <Card className="m-1" outline color="secondary">
            <CardBody>
                <CardTitle tag="h5">{task.name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{task.list.name}</CardSubtitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{STATUSES[task.status]}</CardSubtitle>
                <CardText style={{whiteSpace: "pre-line"}}>{task.description}</CardText>
                <Button size="sm" outline color="primary" tag={Link}
                        to={(listId ? `/lists/${listId}` : '') + "/tasks/" + task.id}>Edit
                </Button>
                {' '}
                <Button size="sm" color="danger" onClick={() => onRemove(task.id)}>Delete</Button>
            </CardBody>
        </Card>
    }
}

export default Task;
