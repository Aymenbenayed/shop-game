import { MDBBtn } from "mdbreact";
import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const PDF = (props) => {
  return (
    <>
      <div className="Post" ref={ref}>
        <h1>{props.title}</h1>
        <img src={props.image} alt={props.title} />
        <p>{props.price}</p>
      </div>
      <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => (
          <MDBBtn onClick={toPdf} outline rounded color="info">
            Print PDF
          </MDBBtn>
        )}
      </Pdf>
    </>
  );
};

export default PDF;
