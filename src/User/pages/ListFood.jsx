import React from 'react'

const ListFood = () => {
    const fruits = [
        { id: 1, name: "Strawberries", calories: 95, price: 20, img: "https://food-order-web-xi.vercel.app/static/media/f1.c52686695ee9a5c4cd0d.png" },
        { id: 2, name: "Pine Apple", calories: 100, price: 16, img: "https://food-order-web-xi.vercel.app/static/media/f1.c52686695ee9a5c4cd0d.png" },
        { id: 3, name: "Raspberry", calories: 65, price: 20, img: "https://food-order-web-xi.vercel.app/static/media/f1.c52686695ee9a5c4cd0d.png" },
        { id: 4, name: "Pomegranate", calories: 120, price: 15, img: "https://food-order-web-xi.vercel.app/static/media/f1.c52686695ee9a5c4cd0d.png" },
        { id: 5, name: "Blue Berries", calories: 80, price: 12, img: "https://food-order-web-xi.vercel.app/static/media/f1.c52686695ee9a5c4cd0d.png" },
        { id: 5, name: "Blue Berries", calories: 80, price: 12, img: "https://food-order-web-xi.vercel.app/static/media/f1.c52686695ee9a5c4cd0d.png" },
        { id: 5, name: "Blue Berries", calories: 80, price: 12, img: "https://food-order-web-xi.vercel.app/static/media/f1.c52686695ee9a5c4cd0d.png" },
        { id: 5, name: "Blue Berries", calories: 80, price: 12, img: "https://food-order-web-xi.vercel.app/static/media/f1.c52686695ee9a5c4cd0d.png" },
    ];
    
     
      return (
        <div className="container-fluid py-5">
          {/* Fresh & Healthy Fruits Section */}
          <div className="mb-5">
       

        <div className="row g-3">
          {fruits.map((fruit) => (
            <div
              key={fruit.id}
              className="col-12 col-md-4 col-lg-3 d-flex align-items-stretch"
            >
              <div
                className="card flex-row w-100"
                style={{
                  borderRadius: "20px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#fff",
                  border: "none",
                }}
              >
                <img
                  src={fruit.img}
                  alt={fruit.name}
                  className="img-fluid"
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                    borderTopLeftRadius: "20px",
                    borderBottomLeftRadius: "20px",
                  }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="fw-bold" style={{ fontSize: "1rem" }}>{fruit.name}</h5>
                    <p className="text-muted" style={{ fontSize: "0.9rem" }}>{fruit.calories} Calories</p>
                    <h6 className="text-danger fw-bold" style={{ fontSize: "1.1rem" }}>${fruit.price}</h6>
                  </div>
                  <button
                    className="btn btn-outline-danger btn-sm rounded-circle"
                    style={{
                      border: "none",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                      alignSelf: "center",
                    }}
                  >
                    <i className="bi bi-cart"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hot Dishes Section */}
      <div>
        

      
      </div>
        </div>
      );
    };

export default ListFood