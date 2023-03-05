import React, { useState } from "react";
import { Bounce, Fade, Zoom } from "react-reveal";
import { Button } from "../../utils";
import { Style } from "./style";

const Contact = () => {
  const [state, setstate] = useState({});

  const bot = {
    TOKEN: "5530643317:AAH9e8kGka2FkEhM9GO389feziX3xROJAlU",
    chatID: "315038520",
  };

  const link = `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=`;

  const submit = () => {
    if (state.name && state.email && state.message) {
      fetch(link + "I'm " + state.name, {
        method: "GET",
      });
      fetch(link + state.email, {
        method: "GET",
      });
      fetch(link + state.message, {
        method: "GET",
      });
      setstate({});
    }
  };

  return (
    <Style>
      <div className="block">
        <div className="form">
          <h1>
            <Zoom left cascade>
              Contact
            </Zoom>
          </h1>
          <p>
            <Zoom left cascade>
              Feel free to contact us if you need any assistance, any help or
              another question
            </Zoom>
          </p>
          <Bounce>
            <input
              type="text"
              placeholder="Name"
              value={state.name}
              onChange={(e) =>
                setstate((p) => ({ ...p, name: e.target.value }))
              }
            />
          </Bounce>
          <Bounce>
            <input
              type="email"
              placeholder="Email or Telegram chat"
              value={state.email}
              onChange={(e) =>
                setstate((p) => ({ ...p, email: e.target.value }))
              }
            />
          </Bounce>
          <Bounce>
            <textarea
              placeholder="Message"
              value={state.message}
              onChange={(e) =>
                setstate((p) => ({ ...p, message: e.target.value }))
              }
            ></textarea>
          </Bounce>
          <Fade bottom>
            <Button onClick={submit}>Submit</Button>
          </Fade>
        </div>
        <div className="card">
          <h2>
            <Zoom top cascade>
              contact me
            </Zoom>
          </h2>
          <Bounce>
            <div>
              <h3>Address</h3>
              Uzbekistan Angren city of Tashkent region
            </div>
            <div>
              <h3>Email</h3>
              <a href="https://mailto:my.accaunta2008@gmail.com">
                my.accaunta2008@gmail.com
              </a>
            </div>
            <div>
              <h3>Find me on</h3>
              <a href="https://github.com/Shoh2008" className="gitlink">
                <span className="git">
                  <img src={require("../../assets/github.png")} />
                  GitHub
                </span>
              </a>
            </div>
          </Bounce>
        </div>
      </div>
    </Style>
  );
};

export default Contact;
