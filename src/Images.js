import React from "react";

export default function Images(props) {
  if (props.image) {
    console.log(props.image);
    return (
      <div className="Image">
        <div className="row justify-content-between gap-3">
          {props.image.map(function (image, index) {
            return (
              <div className="col-md-3" key={index}>
                <a
                  href={image.src.original}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    src={image.src.portrait}
                    className="img-fluid rounded"
                    alt={image.alt}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
