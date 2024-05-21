// import React from "react";
// import "./Firstpart.css";

// function Firstpart() {
//   return (
//     <div className="Cybermind-assignment-task">
//       <div className="Firstpart-icons-line">
//         <img
//           src="/images/circle-check.png"
//           className="firstpart-iamge"
//           alt=""
//         />

//         <img src="/images/trash-can.png" alt="" />
//         <img src="/images/close.png" alt="" />
//       </div>

//       <div className="secondpart-inputbox">
//         <div class="input-group mt-4 inputbox-secondpart">
//           <input
//             type="text"
//             class="form-control"
//             placeholder=""
//             aria-label="Username"
//             aria-describedby="basic-addon1"
//             id="input-box"
//           />
//         </div>
//         <div class="input-group inputbox-secondpart">
//           <input
//             type="date"
//             class="form-control"
//             placeholder=""
//             aria-label="Username"
//             aria-describedby="basic-addon1"
//           />
//         </div>
//       </div>

//       <div className="thirdpart-assign-dropdown">
//         <img src="/images/personicon.png" alt="" />

//         <p className="thirdpart-assign-dropdown-paragraph">Assign to:</p>

//         <div class="dropdown thirdpart-dropdown">
//           <img src="/images/personpic.png" className="person-picture" alt="" />
//           <button
//             class="btn dropdown-toggle  thirdpart-dropdown-button"
//             type="button"
//             data-bs-toggle="dropdown"
//             aria-expanded="false"
//           >
//             Jane Smith
//           </button>
//         </div>
//       </div>

//       <div className="fouthpart-note-cybermind">
//         <img src="/images/note-sticky.png" alt="" />

//         <p className="thirdpart-assign-dropdown-paragraph">Note:</p>

//         <div class="input-group mb-3 fourthpart-input-div">
//           <input
//             type="text"
//             class="form-control"
//             placeholder=""
//             aria-label="Username"
//             aria-describedby="basic-addon1"
//           />
//         </div>
//       </div>

//       <div class="horizontal-line"></div>

//       <section className="Comments-secton">
//         <p className="Comments-secton-paragraph">Comments</p>

//         <div className="Comments-section-innerdiv">
//           <img src="/images/personpic.png" className="personpic-image" alt="" />

//           <div>
//             <p className="Comments-secton-para2">Jane Smith</p>
//             <p className="Comments-secton-para3">
//               Thanks for assigning me on the task. We'll get the details ironed
//               out.
//             </p>
//           </div>
//         </div>

//         <div className="Comments-section-innerdiv">
//           <img src="/images/personpic.png" className="personpic-image" alt="" />

//           <div>
//             <p className="Comments-secton-para2">Jane Smith</p>
//             <p className="Comments-secton-para3">
//               Thanks for assigning me on the task. We'll get the details ironed
//               out.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="write-comments">
//         <img src="/images/personpic.png" className="personpic-image" alt="" />

//         <div className="input-group mb-3 commentwrite-input-div">
//           <input
//             type="text"
//             class="form-control"
//             placeholder="write comment..."
//             aria-label="Username"
//             aria-describedby="basic-addon1"
//             className="commentwrite-input-div-input"
//           />
//           <img src="/images/send.png" className="sendbtnimage" alt="" />
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Firstpart;

import React, { useState } from "react";
import "./Firstpart.css";

function Firstpart() {
  // State for the inputs, dropdown, completion status, and comments
  const [eventDetails, setEventDetails] = useState({
    title: "",
    date: "",
    assignedPerson: "Jane Smith",
    note: "",
    isComplete: false
  });
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Jane Smith",
      text: "Thanks for assigning me to the task. We'll get the details ironed out."
    }
  ]);
  const [newComment, setNewComment] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value
    }));
  };

  // Handle dropdown change
  const handleDropdownChange = (e) => {
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      assignedPerson: e.target.value
    }));
  };

  // Handle checkbox change
  const handleCheckboxChange = () => {
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      isComplete: !prevDetails.isComplete
    }));
  };

  // Handle adding a new comment
  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { id: Date.now(), author: "Jane Smith", text: newComment }]);
      setNewComment("");
    }
  };

  return (
    <div className="Cybermind-assignment-task">
      <div className="Firstpart-icons-line">
        <img src="/images/circle-check.png" className="firstpart-iamge" alt="Complete" />
        <img src="/images/trash-can.png" alt="Delete" />
        <img src="/images/close.png" alt="Close" />
      </div>

      <div className="secondpart-inputbox">
        <div className="input-group mt-4 inputbox-secondpart">
          <input
            type="text"
            className="form-control"
            placeholder="Event Title"
            aria-label="Title"
            aria-describedby="basic-addon1"
            id="title"
            value={eventDetails.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group inputbox-secondpart">
          <input
            type="date"
            className="form-control"
            aria-label="Date"
            aria-describedby="basic-addon1"
            id="date"
            value={eventDetails.date}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="thirdpart-assign-dropdown">
        <img src="/images/personicon.png" alt="Assign to" />
        <p className="thirdpart-assign-dropdown-paragraph">Assign to:</p>
        <div className="dropdown thirdpart-dropdown">
          <img src="/images/personpic.png" className="person-picture" alt="Person" />
          <select
            className="btn dropdown-toggle thirdpart-dropdown-button"
            value={eventDetails.assignedPerson}
            onChange={handleDropdownChange}
          >
            <option value="Jane Smith">Jane Smith</option>
            <option value="John Doe">John Doe</option>
            <option value="Alice Johnson">Alice Johnson</option>
          </select>
        </div>
      </div>

      <div className="fouthpart-note-cybermind">
        <img src="/images/note-sticky.png" alt="Note" />
        <p className="thirdpart-assign-dropdown-paragraph">Note:</p>
        <div className="input-group mb-3 fourthpart-input-div">
          <input
            type="text"
            className="form-control"
            placeholder="Add a note"
            aria-label="Note"
            aria-describedby="basic-addon1"
            id="note"
            value={eventDetails.note}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="complete-checkbox">
        <label>
          <input
            type="checkbox"
            checked={eventDetails.isComplete}
            onChange={handleCheckboxChange}
          />
          Mark as Complete
        </label>
      </div>

      <div className="horizontal-line"></div>

      <section className="Comments-secton">
        <p className="Comments-secton-paragraph">Comments</p>
        {comments.map((comment) => (
          <div key={comment.id} className="Comments-section-innerdiv">
            <img src="/images/personpic.png" className="personpic-image" alt="Person" />
            <div>
              <p className="Comments-secton-para2">{comment.author}</p>
              <p className="Comments-secton-para3">{comment.text}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="write-comments">
        <img src="/images/personpic.png" className="personpic-image" alt="Person" />
        <div className="input-group mb-3 commentwrite-input-div">
          <input
            type="text"
            className="form-control commentwrite-input-div-input"
            placeholder="Write a comment..."
            aria-label="New Comment"
            aria-describedby="basic-addon1"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <img
            src="/images/send.png"
            className="sendbtnimage"
            alt="Send"
            onClick={handleAddComment}
          />
        </div>
      </section>
    </div>
  );
}

export default Firstpart;
