import React from "react";
import { CSS } from "@dnd-kit/utilities";
import "./App.css";
import { useSortable } from "@dnd-kit/sortable";

function SortableItems(props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.item });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <>
      <div
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        style={style}
        className="container_card"
      >
        {props.item}
      </div>
    </>
  );
}

export default SortableItems;
