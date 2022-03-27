import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTemplates, setActiveTemplate } from "../../redux/actions";

export const Home = () => {
  const { templates, loading } = useSelector((store) => store.generator);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTemplates());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2 className="text-center">Meme Generator</h2>
        </div>
      </div>
      {loading ? (
        <div className="row">
          <div className="col">Templates Loading</div>
        </div>
      ) : (
        <div className="row">
          {templates.length > 0 &&
            templates.map((template) => {
              return (
                <div className="col col-lg-3 mt-3" key={template.id}>
                  <div className="card">
                    <img
                      src={template.blank}
                      alt="template"
                      className="card-img-top"
                      style={{ height: 300, width: "100%" }}
                    />
                    <div className="card-body">
                      <div className="card-title">{template.name}</div>
                    </div>
                    <Link
                      onClick={() => {
                        dispatch(setActiveTemplate(template));
                      }}
                      to={`generator/${template.name}/`}
                      className="btn btn-primary"
                    >
                      Select
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};
