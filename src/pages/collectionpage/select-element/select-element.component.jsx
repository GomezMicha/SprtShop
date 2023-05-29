import React from "react";
import { Select } from "./select-element.style";

const SelectElement = ({ handleChange }) => {
  return (
    <form>
      <label htmlFor="">Sort: </label>
      <Select name="sort" id="sort" onChange={handleChange}>
        <option value="relevance">Relevance</option>
        <option value="pricelow">Price [Low — High]</option>
        <option value="pricehigh">Price [High — Low]</option>
        <option value="A_Z">Alphabetical [A — Z]</option>
        <option value="Z_A">Alphabetical [Z — A]</option>
      </Select>
    </form>
  );
};

export default SelectElement;
