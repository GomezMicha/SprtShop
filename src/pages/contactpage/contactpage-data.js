import { Phone, ChatSquareText, EnvelopeAt } from "react-bootstrap-icons";

const contactPageData = [
  {
    id: "phone",
    title: "Call",
    contactType: "Start a call with us",
    svg: <Phone />,
  },
  {
    id: "chat",
    title: "Chat",
    contactType: "Start a chat with us",
    svg: <ChatSquareText />,
  },
  {
    id: "email",
    title: "Email",
    contactType: "Send us an email",
    svg: <EnvelopeAt />,
  },
];

export default contactPageData;
