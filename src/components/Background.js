import Card from 'react-boostrap/Card';
import Form from 'react-boostrap/Form';

export default function Background() {
    return (
        <div style={{ display: "Flex", flexDirection: "row"}}>
            <div>
                <Card style={{width: "1300px", minHeight: "428px", marginBottom: "50px", backgroundColor: "#DEEED6"}}>
                    <div style={{ top: "auto", width: "578px", marginLeft: "100px", marginBottom: "50px", marginTop: "75px"}}>
                        <Card.Text style={{fontSize: "2.5em", fontWeight: "bold"}}>
                            Order groceries for deivery <br /> or pickup today
                        </Card.Text>
                        <Card.Text style={{ fontSize: "1em" }}>
                            Whatever you want from local stores, brought right to your door.
                        </Card.Text>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm" >
                            <Form.Control size="lg" type="text" placeholder="Enter you address"></Form.Control>
                            </Form.Group>
                        </Form>
                    </div>
                </Card>
            </div>
        </div>
    )
}