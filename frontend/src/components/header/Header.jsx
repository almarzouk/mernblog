import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?w=2000&t=st=1680703807~exp=1680704407~hmac=a28f26230009e99e9b05d3c96992eb54162c7a52c54db9981dc68dd83bff7de1"
        alt=""
      />
    </div>
  );
}

export default Header;
