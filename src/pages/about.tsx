import * as React from "react";
import {
  TeliaP,
  TeliaHeading,
  TeliaGrid,
  TeliaRow,
  TeliaCol,
  TeliaImage,
  TeliaLink,
} from "@teliads/components/react";
import "../scss/main.scss";
import "@teliads/components/dist/telia-component-library/telia-component-library.css";
import { Link } from "gatsby";

// markup
const IndexPage = () => {
  return (
    <main>
      <title>About Page</title>
      <TeliaGrid>
        <TeliaRow>
          <TeliaCol width={6}>
            <TeliaHeading variant="title-100" tag="h1">
              About us
            </TeliaHeading>
            <Link to="/">
              <TeliaLink>Home</TeliaLink>
            </Link>
            <TeliaP variant="paragraph-200">Telia p tag</TeliaP>
            <TeliaImage
              alt="Gatsby G Logo"
              src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
            />
          </TeliaCol>
          <TeliaCol width={6}>
            <TeliaHeading tag="h2" variant="title-200">
              Goodbye
            </TeliaHeading>
          </TeliaCol>
        </TeliaRow>
      </TeliaGrid>
    </main>
  );
};

export default IndexPage;
