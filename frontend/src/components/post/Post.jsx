import "./Post.css";

function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://cdn.vox-cdn.com/thumbor/ANUn78VBBiQVNqRFPLldr4swyuo=/0x353:4288x3569/1400x1050/filters:focal(0x353:4288x3569):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47176690/GettyImages-475280031.0.0.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ea
        accusamus porro animi quae? Vel maxime itaque nam ex, sunt at voluptatem
        dignissimos accusantium illo ad consectetur quam eos inventore?
      </p>
    </div>
  );
}

export default Post;
