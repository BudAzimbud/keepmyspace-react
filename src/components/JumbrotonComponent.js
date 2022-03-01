

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
                    This is feature that make hero for your family
                </p>
                <hr className="my-2" />
                <p>
                    For more and get more just click started there.
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