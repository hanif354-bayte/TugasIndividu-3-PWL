import React, { useState, useContext } from "react";
import { Form, Button, Container, Card, ListGroup } from 'react-bootstrap';

const MessageContext = React.createContext();

export default function Contact() {
  return (
    <Container className="mt-4" style={{ background: 'linear-gradient(to right, #28a745, #218838)', padding: '20px', borderRadius: '10px', color: '#fff' }}>
      <h2 className="text-center mb-4">Contact Us</h2>
      <MessageProvider>
        <MessagesForm />
        <MessageList />
        <ContactInfo />
      </MessageProvider>
    </Container>
  );
}

function MessageProvider({ children }) {
  const [messages, setMessages] = useState([]);

  return (
    <MessageContext.Provider value={{ messages, setMessages }}>
      {children}
    </MessageContext.Provider>
  );
}

function MessagesForm() {
  const { setMessages } = useContext(MessageContext);
  const [newMessage, setNewMessage] = useState('');

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!newMessage.trim()) return;

    const newObject = {
      text: newMessage,
    }

    setMessages(prevMessages => [...prevMessages, newObject]);
    setNewMessage("");
  }

  return (
    <Card>
      <Card.Body>
        <h3 className="text-center mb-3">Send a Message</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Type your message"
              value={newMessage}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-2">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

function MessageList() {
  const { messages } = useContext(MessageContext);

  return (
    <Card className="mt-4">
      <Card.Body>
        <h3 className="text-center mb-3">Messages</h3>
        {messages.length === 0 ? (
          <p className="text-center">No messages yet.</p>
        ) : (
          <ListGroup>
            {messages.map((message, index) => (
              <ListGroup.Item key={index}>{message.text}</ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Card.Body>
    </Card>
  );
}

function ContactInfo() {
  return (
    <Card className="mt-4">
      <Card.Body>
        <h3 className="text-center mb-3">Contact Information</h3>
        <p>
          Feel free to reach out to us for any inquiries or feedback. We value your thoughts and are here to assist you.
        </p>
        <p>Email: hanifputraagusta1@gmail.com</p>
        <p>Phone: +6282280785486</p>
      </Card.Body>
    </Card>
  );
}
