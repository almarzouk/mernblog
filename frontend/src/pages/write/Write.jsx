import "./Write.css";

function Write() {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://cdn.vox-cdn.com/thumbor/ANUn78VBBiQVNqRFPLldr4swyuo=/0x353:4288x3569/1400x1050/filters:focal(0x353:4288x3569):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47176690/GettyImages-475280031.0.0.jpg"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i class="writeIcon fa-solid fa-circle-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}

export default Write;
