import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

const NewBuild = () => {
    return (
        <Form>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                <Form.Label column sm={2}>
                    Character Name
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" placeholder="Character Name" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalBio">
                <Form.Label column sm={2}>
                    Character Bio
                </Form.Label>
                <Col sm={10}>
                    <Form.Control as="textarea" rows={3} placeholder="Tell us about your character!" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalClass">
                <Form.Label column sm={2}>
                    Character Class
                </Form.Label>
                <Col sm={10}>
                    <Form.Select aria-label="Default select example">
                        <option>Select Character Class</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalRace">
                <Form.Label column sm={2}>
                    Character Race
                </Form.Label>
                <Col sm={10}>
                    <Form.Select aria-label="Default select example">
                        <option>Select Character Race</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalHp">
                <Form.Label column sm={2}>
                    Character HP:
                </Form.Label>
                <Col sm={10}>
                    <Form.Control as="textarea" rows={2} placeholder="Your class of {class} has a range of {x}-{y} hp. The average hp is {z}. Please enter {z} or roll a {dice} and enter your result." />
                </Col>
            </Form.Group>

            <fieldset>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label as="legend" column sm={2}>
                        STR
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                            inline
                            type="radio"
                            label="15"
                            name="formHorizontalSTR"
                            id="formHorizontalSTR15"
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="14"
                            name="formHorizontalSTR"
                            id="formHorizontalSTR14"
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="13"
                            name="formHorizontalSTR"
                            id="formHorizontalSTR13"
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="12"
                            name="formHorizontalSTR"
                            id="formHorizontalSTR12"
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="10"
                            name="formHorizontalSTR"
                            id="formHorizontalSTR10"
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="8"
                            name="formHorizontalSTR"
                            id="formHorizontalSTR8"
                        />
                    </Col>
                </Form.Group>
            </fieldset>

            <fieldset>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label as="legend" column sm={2}>
                        DEX
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                            inline
                            type="radio"
                            label="15"
                            name="formHorizontalDEX"
                            id="formHorizontalDEX15"
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="14"
                            name="formHorizontalDEX"
                            id="formHorizontalDEX14"
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="13"
                            name="formHorizontalDEX"
                            id="formHorizontalDEX13"
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="12"
                            name="formHorizontalDEX"
                            id="formHorizontalDEX12"
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="10"
                            name="formHorizontalDEX"
                            id="formHorizontalDEX10"
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="8"
                            name="formHorizontalDEX"
                            id="formHorizontalDEX8"
                        />
                    </Col>
                </Form.Group>
            </fieldset>

            <fieldset>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label as="legend" column sm={2}>
                        CON
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                            inline
                            type="radio"
                            label="15"
                            name="formHorizontalCON"
                            id="formHorizontalCON15"
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="14"
                            name="formHorizontalCON"
                            id="formHorizontalCON14"
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="13"
                            name="formHorizontalCON"
                            id="formHorizontalCON13"
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="12"
                            name="formHorizontalCON"
                            id="formHorizontalCON12"
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="10"
                            name="formHorizontalCON"
                            id="formHorizontalCON10"
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="8"
                            name="formHorizontalCON"
                            id="formHorizontalCON8"
                        />
                    </Col>
                </Form.Group>
            </fieldset>

            <fieldset>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label as="legend" column sm={2}>
                        INT
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                            inline
                            type="radio"
                            label="15"
                            name="formHorizontalINT"
                            id="formHorizontalINT15"
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="14"
                            name="formHorizontalINT"
                            id="formHorizontalINT14"
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="13"
                            name="formHorizontalINT"
                            id="formHorizontalINT13"
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="12"
                            name="formHorizontalINT"
                            id="formHorizontalINT12"
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="10"
                            name="formHorizontalINT"
                            id="formHorizontalINT10"
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="8"
                            name="formHorizontalINT"
                            id="formHorizontalINT8"
                        />
                    </Col>
                </Form.Group>
            </fieldset>

            <fieldset>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label as="legend" column sm={2}>
                        WIS
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                            inline
                            type="radio"
                            label="15"
                            name="formHorizontalWIS"
                            id="formHorizontalWIS15"
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="14"
                            name="formHorizontalWIS"
                            id="formHorizontalWIS14"
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="13"
                            name="formHorizontalWIS"
                            id="formHorizontalWIS13"
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="12"
                            name="formHorizontalWIS"
                            id="formHorizontalWIS12"
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="10"
                            name="formHorizontalWIS"
                            id="formHorizontalWIS10"
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="8"
                            name="formHorizontalWIS"
                            id="formHorizontalWIS8"
                        />
                    </Col>
                </Form.Group>
            </fieldset>

            <fieldset>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label as="legend" column sm={2}>
                        CHA
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                            inline
                            type="radio"
                            label="15"
                            name="formHorizontalCHA"
                            id="formHorizontalCHA15"
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="14"
                            name="formHorizontalCHA"
                            id="formHorizontalCHA14"
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="13"
                            name="formHorizontalCHA"
                            id="formHorizontalCHA13"
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="12"
                            name="formHorizontalCHA"
                            id="formHorizontalCHA12"
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="10"
                            name="formHorizontalCHA"
                            id="formHorizontalCHA10"
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="8"
                            name="formHorizontalCHA"
                            id="formHorizontalCHA8"
                        />
                    </Col>
                </Form.Group>
            </fieldset>

            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Create Character</Button>
                </Col>
            </Form.Group>
        </Form>
    )
}

export default NewBuild