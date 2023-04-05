import Sidebar from "../../components/sidebar/Sidebar";
import "./Settings.css";

function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your account</span>
          <span className="settingsDeleteTitle">Delete your account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://cdn.vox-cdn.com/thumbor/ANUn78VBBiQVNqRFPLldr4swyuo=/0x353:4288x3569/1400x1050/filters:focal(0x353:4288x3569):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47176690/GettyImages-475280031.0.0.jpg"
              alt=""
              className="settingsImg"
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-solid fa-square-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label> Username </label>
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button className="settingsSubmitButton">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;
