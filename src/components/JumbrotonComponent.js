

import React from "react";
import { Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";


const JumbrotonComponent = (props) => {
    return (
        <Container>
            <div>
                <h1 className="display-3">What we should do for You.</h1>
                <p className="lead">
                    This is a simple hero unit, a simple Jumbotron-style component for
                    calling extra attention to featured content or information.
                </p>
                <hr className="my-2" />
                <p>
                    It uses utility classes for typography and spacing to space content
                    out within the larger container.
                </p>
                <p className="lead">
                    <Button color="dark">
                        <FontAwesomeIcon icon={faInfo} />
                        Learn More
                    </Button>
                </p>
            </div>
        </Container>
    );
};

export default JumbrotonComponent;