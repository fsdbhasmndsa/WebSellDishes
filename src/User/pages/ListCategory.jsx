import React from 'react'

const ListCategory = () => {
    const dishes = [
        { id: 1, name: "Chicken", active: true },
        { id: 2, name: "Curry", active: false },
        { id: 3, name: "Rice", active: false },
        { id: 4, name: "Fish", active: false },
        { id: 5, name: "Fruits", active: false },
        { id: 6, name: "Icecreams", active: false },
        { id: 7, name: "Soft Drinks", active: false },
      ];
    
  return (
    <div className="container-fluid py-2">

<div className="d-flex py-3 justify-content-center">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className={`card text-center me-3 ${dish.active ? "bg-danger text-white" : "bg-light"}`}
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                border: "none",
              }}
            >
              <h6 className="fw-bold m-0" style={{ fontSize: "0.9rem" }}>{dish.name}</h6>
            </div>
          ))}
        </div>
    </div>
  )
}

export default ListCategory