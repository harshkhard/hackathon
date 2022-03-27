import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { setFontColor, setFontSize } from "../../redux/actions";
import "./styles.css";

export const Generator = () => {
  const params = useParams();

  const { activeTemplate, fontSize, fontColor } = useSelector(
    (store) => store.generator
  );

  const [textInput, setTextInput] = useState({
    top: { active: false, content: "" },
    bottom: { active: false, content: "" },
  });

  const dispatch = useDispatch();

  console.log(fontSize);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2 className="text-center">{params.name}</h2>
        </div>
        <div className="row">
          <div className="col col-lg-12">
            <div className={"generator-container"}>
              <img src={activeTemplate.blank} alt="cover" />
              {textInput.top.active && (
                <p
                  className={"topText text-center"}
                  style={{ color: fontColor, fontSize: fontSize }}
                >
                  {textInput.top.content}
                </p>
              )}
              {textInput.bottom.active && (
                <p
                  className={"bottomText text-center"}
                  style={{ color: fontColor, fontSize: fontSize }}
                >
                  {textInput.bottom.content}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col">
            <input
              className="form-check-input"
              type="checkbox"
              value={textInput.top.active}
              onChange={() => {
                setTextInput({
                  ...textInput,
                  top: { ...textInput.top, active: !textInput.top.active },
                });
              }}
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Top Text
            </label>
          </div>
          <div className="col">
            <input
              value={textInput.top.content}
              className="form-control"
              onChange={(e) => {
                setTextInput({
                  ...textInput,
                  top: { ...textInput.top, content: e.target.value },
                });
              }}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <input
              className="form-check-input"
              type="checkbox"
              value={textInput.bottom.active}
              id="flexCheckDefault"
              onChange={() => {
                setTextInput({
                  ...textInput,
                  bottom: {
                    ...textInput.bottom,
                    active: !textInput.bottom.active,
                  },
                });
              }}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Bottom Text
            </label>
          </div>
          <div className="col">
            <input
              value={textInput.bottom.content}
              className="form-control"
              onChange={(e) => {
                setTextInput({
                  ...textInput,
                  bottom: { ...textInput.bottom, content: e.target.value },
                });
              }}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">Font Size</div>
          <div className="col">
            <input
              className="form-control"
              type={"number"}
              value={fontSize}
              onChange={(e) => {
                dispatch(setFontSize(parseInt(e.target.value)));
              }}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col col-lg-3">
            <button
              className="btn btn-primary"
              onClick={() => {
                dispatch(setFontColor("#FFFFFF"));
              }}
            >
              Font White
            </button>
          </div>
          <div className="col col-lg-3">
            <button
              className="btn btn-primary"
              onClick={() => {
                dispatch(setFontColor("#000000"));
              }}
            >
              Font Black
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
