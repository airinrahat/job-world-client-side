/* eslint-disable no-unused-vars */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Blog = () => {
  useEffect(() => {
    document.title = "JobWorld | Blog";
  }, []);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="p-5 max-w-screen-xl mx-auto blog">
      <h2 className="text-3xl py-5 text-center text-[#18ad50] ">
        <u>
          <b>Blog F&Q :</b>
        </u>
      </h2>

      <div>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              What is an access token and refresh token?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <b> 1. Access Token:</b>
              <br />
              An access token is a short-lived credential that represents the
              authorization of a user or application to access specific
              resources or perform certain actions on a server. It is typically
              time-limited, and its primary purpose is to provide secure access
              to protected resources without revealing the users or applications
              credentials (such as a username and password).
              <br />
              <b>2.Refresh Token:</b>
              <br /> A refresh token is a long-lived credential that is used to
              obtain a new access token when the current access token has
              expired. Refresh tokens are often used to improve security and
              user experience by reducing the frequency of user logins or
              reauthorization.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              How do they work and where should we store them on the
              client-side?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <b>1.Access Token Workflow:</b>
              <br /> a. Obtaining the Access Token: When a user or application
              authenticates and is authorized to access a resource, the
              authorization server issues an access token.
              <br /> b. Using the Access Token: The client, which can be a web
              or mobile application, includes the access token in the HTTP
              headers of its requests to the resource server. For example, it
              might include the token in the Authorization header as a bearer
              token.
              <br /> c. Resource Server Verification: The resource server
              receiving the request checks the access token validity and
              permissions by communicating with the authorization server or by
              inspecting the token signature. If the token is valid, the
              resource server allows the requested action to proceed.
              <br /> d. Token Expiration: Access tokens typically have a short
              lifespan, and they eventually expire. If an access token expires,
              the client will need to obtain a new one to continue accessing
              protected resources.
              <br />
              <b> 2. Refresh Token Workflow:</b>
              <br />
              a. Obtaining the Refresh Token: During the initial authorization
              process, both an access token and a refresh token are issued. The
              refresh token is securely stored on the client side.
              <br />
              b. Access Token Expiration: When the access token expires, the
              client can make a request to the authorization server, presenting
              the refresh token.
              <br />
              c. Authorization Server Validation: The authorization server
              validates the refresh token, and if it is valid, it issues a new
              access token to the client. This process can occur without
              requiring the user to re-enter their credentials.
              <br />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              What is express js?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Express.js, often referred to simply as Express, is a popular and
              minimalistic web application framework for Node.js. It provides a
              robust set of features for building web and mobile applications.
              Express is one of the most widely used Node.js frameworks and is
              known for its simplicity and flexibility, making it a popular
              choice for web developers.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              What is Nest JS?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              NestJS is a popular open-source, TypeScript-based web application
              framework for building scalable and maintainable server-side
              applications. It is designed to work with Node.js and leverages
              its capabilities, making it a powerful tool for building
              server-side applications, including web servers, RESTful APIs, and
              microservices. NestJS is often described as a framework that
              brings Angular-style development to the server.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Blog;
