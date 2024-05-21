import React, { useState } from 'react';
import './Firstpart.css';

function Firstpart() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      const newCommentObj = {
        id: comments.length + 1,
        text: newComment,
        author: 'Jane Smith', // Replace with dynamic author if needed
        image: '/images/personpic.png',
      };
      setComments([...comments, newCommentObj]);
      setNewComment(''); // Clear the input
    }
  };

  return (
    <div className="Cybermind-assignment-task">
      <div className="Firstpart-icons-line">
        <img src="/images/circle-check.png" className="firstpart-iamge" alt="" />
        <img src="/images/trash-can.png" alt="" />
        <img src="/images/close.png" alt="" />
      </div>

      <div className="secondpart-inputbox">
        <div className="input-group mt-4 inputbox-secondpart">
          <input
            type="text"
            className="form-control"
            placeholder=""
            aria-label="Username"
            aria-describedby="basic-addon1"
            id='inputbox1'
          />
        </div>
        <div className="input-group inputbox-secondpart">
          <input
            type="date"
            className="form-control"
            placeholder=""
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>

      <div className="thirdpart-assign-dropdown">
        <img src="/images/personicon.png" alt="" />
        <p className="thirdpart-assign-dropdown-paragraph">Assign to:</p>
        <div className="dropdown thirdpart-dropdown">
          <img src="/images/personpic.png" alt="" />
          <button
            className="btn dropdown-toggle thirdpart-dropdown-button"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Jane Smith
          </button>
        </div>
      </div>

      <div className="fouthpart-note-cybermind">
        <img src="/images/note-sticky.png" alt="" />
        <p className="thirdpart-assign-dropdown-paragraph">Note:</p>
        <div className="input-group mb-3 fourthpart-input-div">
          <input
            type="text"
            className="form-control"
            placeholder=""
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>

      <div className="horizontal-line"></div>

      <section className="Comments-section">
        <p className="Comments-section-paragraph">Comments</p>
        {comments.map((comment) => (
          <div key={comment.id} className="Comments-section-innerdiv">
            <img src={comment.image} className="personpic-image" alt="Author" />
            <div>
              <p className="Comments-section-para2">{comment.author}</p>
              <p className="Comments-section-para3">{comment.text}</p>
              <p></p>
            </div>
          </div>
        ))}
      </section>

      <section className="write-comments">
        <img src="/images/personpic.png" className="personpic-image" alt="Author" />
        <div className="input-group mb-3 commentwrite-input-div">
          <input
            type="text"
            className="form-control commentwrite-input-div-input"
            placeholder="write comment..."
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={newComment}
            onChange={handleInputChange}
          />
          <img
            src="/images/send.png"
            className="sendbtnimage"
            alt="Send"
            onClick={handleAddComment}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </section>
    </div>
  );
}

export default Firstpart;
