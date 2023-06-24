import React, { useState } from "react";
import "./App.css";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItems from "./SortableItems";

const itemList = ["C A T", "I N", "T H E", "H A T"];
function App() {
  const [items, setItems] = useState(itemList);

  function handleDragEnd(e) {
    const { active, over } = e;
    console.log("OVER:" + over.id);
    if (active.id !== over.id) {
      setItems((elements) => {
        const activeIndex = elements.indexOf(active.id);
        const overIndex = elements.indexOf(over.id);
        console.log(arrayMove(elements, activeIndex, overIndex));
        return arrayMove(elements, activeIndex, overIndex);
      });
    }
  }

  return (
    <section>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <div className="container">
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            {items.map((item, i) => {
              return <SortableItems key={i} item={item} />;
            })}
            {/* <div className="container_card">Item One</div>
            <div className="container_card">Item Two</div>
            <div className="container_card">Item Three</div> */}
          </SortableContext>
        </div>
      </DndContext>
    </section>
  );
}

export default App;
