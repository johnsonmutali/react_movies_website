import "./index.scss"
import { Form, redirect } from "react-router-dom"
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup
} from 'react-leaflet'


export default function Contact() {

  return (
    <div className="contact-us">
      <div className="header">
        <h2>get in touch with us</h2>
        <h2>send a message</h2>
      </div>
      <div className="map-container">
        <div className="form">
          <Form
            method="post"
            action="/contact"
            preventScrollReset={true}>
            <input type="text" name="name" required placeholder="Name" />
            <input type="email" name="email" required placeholder="Email" />
            <input type="text" name="subject" required placeholder="Subject" />
            <textarea type="text" name="message" required placeholder="Message"></textarea>
            <button type="submit" className="contact-button">send</button>
          </Form>
        </div>
        <div className="map">
          <MapContainer center={[2.0469, 45.3182]} zoom={20}
            scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[2.0469, 45.3182]}>
              <Popup>
                piracy bay
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="contacts">
          <div className="address">
            <h3 className="contacts__">our address</h3>
            <p>1738 docks</p>
            <p>mogadishu pirate bay</p>
            <p>69 sail ship</p>
          </div>
          <div className="contact">
            <h3>our contacts</h3>
            <p>+254700112233</p>
            <p>anonymous@piratebays.com</p>
          </div>
        </div>
      </div>
    </div >
  )
}

export const contactAction = async ({ request }) => {
  const data = await request.formData()
  console.log(data)
  const submissions = {
    name: data.get("name"),
    email: data.get("email"),
    subject: data.get("subject"),
    message: data.get("message")
  }

  console.log(submissions.name)
  console.log(submissions.email)
  console.log(submissions.subject)
  console.log(submissions.message)

  return redirect("/")
}