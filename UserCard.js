import React from "react";

const UserCard = ({ name, age, bio }) => {
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "15px",
    width: "280px",
    padding: "20px",
    margin: "15px auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    fontFamily: "Poppins, sans-serif",
    backgroundColor: "#fefefe",
  };

  const nameStyle = {
    fontSize: "1.5rem",
    color: "#333",
    marginBottom: "8px",
  };

  const ageStyle = {
    fontSize: "1rem",
    color: "#777",
    marginBottom: "12px",
  };

  const bioStyle = {
    fontSize: "0.95rem",
    color: "#555",
    lineHeight: "1.4",
  };

  return (
    <div style={cardStyle}>
      <h2 style={nameStyle}>{name}</h2>
      <p style={ageStyle}>Age: {age}</p>
      <p style={bioStyle}>{bio}</p>
    </div>
  );
};

export default UserCard;
