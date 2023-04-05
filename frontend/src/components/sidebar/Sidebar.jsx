import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img
          src="https://www.aljazeera.com/wp-content/uploads/2021/03/000_93E7VW.jpg?resize=1800%2C1800"
          alt=""
          className="sidebarImg"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum neque
          culpa, quas excepturi adipisci tenetur sit quae voluptatem. Iste
          praesentium delectu.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow us</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-twitter"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
          <i className="sidebarIcon fa-brands fa-youtube"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
