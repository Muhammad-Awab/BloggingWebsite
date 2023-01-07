import React from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";

const BlogSection = ({ blogs, user, handleDelete }) => {
  const userId = user?.uid;
  return (
    <div>
      <div className="blog-heading text-start py-2 mb-4">Daily Blogs</div>

      <div class="container">

        <div class="row">

         
              {blogs?.map((item) => (
                 <div class="col-md-12   mb-4" key={item.id}>
                 <div class="card text-dark  shadow ">
                   <div class="card-body">

            <div className="text-start">
              <h6 className="category catg-color">{item.category}</h6>
              <span className="meta-info">
                <p className="author">{item.author}</p> -&nbsp;
                {item.timestamp.toDate().toDateString()}
              </span>
              <h3 className="fw-bolder">{item.title}</h3>
            </div>
            {/* <div className="short-description text-start">
              {excerpt(item.description, 120)}
            </div> */}
            <Link to={`/detail/${item.id}`}>
              <button className="btn btn-read">Read More</button>
            </Link>
            {userId && item.userId === userId && (
              <div style={{ float: "right" }}>
                <FontAwesome
                  name="trash"
                  style={{ margin: "15px", cursor: "pointer" }}
                  size="2x"
                  onClick={() => handleDelete(item.id)}
                />
                <Link to={`/update/${item.id}`}>
                  <FontAwesome
                    name="edit"
                    style={{ cursor: "pointer" }}
                    size="2x"
                  />
                </Link>
              </div>

            )}
          </div>
        </div>
            </div>
      ))}
              
        </div>
      </div>
      
    </div>
  );
};

export default BlogSection;
