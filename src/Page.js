import React, { useEffect, useState } from "react";
import "./Page.css";

const Page = () => {
  const [tree, setTree] = useState([
    {
      key: "input1",
      parent: "",
      child: [],
    },
  ]);

  const addSib = () => {
    // setTree({ ...tree }, { ...(tree.sibling = tree.sibling.push("")) });

    //adding a new object in the array of objects
    let len = tree.length + 1;
    // console.log("Length of Tree state is " , len)

    let new_obj = { key: "input" + len, parent: "", child: [] };

    let new_state = [...tree, new_obj];
    //  console.log("NEW STATE ", new_state)
    setTree(new_state);
  };

  // cn ansa,xklasmx,asmxsa
  const addChild = (item, index, e) => {
    //spread operator does shallow coping hence the main state i.e tree is effected
    let new_item = { ...item };
    new_item.child.push("");
    let new_tree = [...tree];
    setTree(new_tree);
  };

  const handleChild = (index, i, e) => {
    let old_obj = [...tree];
    old_obj[index].child[i] = e.target.value;
    setTree(old_obj);
  };

  const handleParent = (index, item, e) => {
    let old_obj = [...tree];
    old_obj[index].parent = e.target.value;
    setTree(old_obj);
  };

  useEffect(() => {
    console.log("UseEffect Called and the state is ");
    console.log(tree);
  });
  return (
    <div>
      {/* <div className="top-most">
        <button onClick={addSib}>Sibbling</button>

        <input type="text" />
        <br></br>
        <br></br>
        <button onClick={addChild}>Child</button>
      </div> */}
      <button onClick={addSib}>Sibbling</button>

      <div className="top-most">
        {tree &&
          tree.map((item, index) => (
            <div className="parent-div">
              <br></br>
              <br></br>
              <input
                type="text"
                value={tree[index].parent}
                onChange={e => handleParent(index, item, e)}
                placeholder={"Parent " + index}
              />
              <br></br>
              <br></br>
              <button onClick={e => addChild(item, index, e)}>Child</button>
              <div className="child-div">
                {" "}
                {item.child.map((ch, i) => (
                  <input
                    className="child-input"
                    type="text"
                    placeholder={index + "." + i}
                    onChange={e => handleChild(index, i, e)}
                  />
                ))}{" "}
              </div>
            </div>
          ))}
      </div>

      <br></br>
      <br></br>
    </div>
  );
};

export default Page;
