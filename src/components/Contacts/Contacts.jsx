import React from "react";
import "./Contacts.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contacts = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerwidth flexCenter c-container">
        {/* left-side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy To Contact</span>
          <span className="secondaryText">
            {" "}
            We always ready to help by providing the best services for you. We
            beleive a good blace to live can make your life better
          </span>

          <div className="flexColStart contactModes">
            {/* firstRow */}
            <div className="flexStart row">
                {/* firstMode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexcenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart details">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button">
                    Call Now
                </div>
              </div>
              {/* secondMode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexcenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart details">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button">
                    Chat Now
                </div>
              </div>
            </div>

            {/* secondRow */}
            <div className="flexStart row">
                {/* thirdtMode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexcenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart details">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button">
                    Vide Call Now
                </div>
              </div>
              {/* fourthMode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexcenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart details">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button">
                    Message Now
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* right-side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
