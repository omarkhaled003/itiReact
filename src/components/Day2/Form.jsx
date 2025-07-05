import React from "react";

export default function Form({
  add,
  deleteNum,
  handleAddChange,
  handleDeleteChange,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="add" className="form-label">
          <span style={{ marginRight: "0.5rem" }}>➕</span>
          Add Products
        </label>
        <input
          type="number"
          id="add"
          value={add}
          onChange={handleAddChange}
          className="form-input"
          placeholder="Enter number of products to add"
          min="0"
        />
      </div>

      <div className="form-group">
        <label htmlFor="delete" className="form-label">
          <span style={{ marginRight: "0.5rem" }}>➖</span>
          Delete Products
        </label>
        <input
          type="number"
          id="delete"
          value={deleteNum}
          onChange={handleDeleteChange}
          className="form-input"
          placeholder="Enter number of products to delete"
          min="0"
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        style={{ width: "100%", marginTop: "1rem" }}
      >
        <span style={{ marginRight: "0.5rem" }}>🚀</span>
        Update Products
      </button>
    </form>
  );
}
