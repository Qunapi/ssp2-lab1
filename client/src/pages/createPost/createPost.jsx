/* eslint-disable jsx-a11y/label-has-associated-control */
export const createPost = () => {
  return (
    <div>
      <form method="POST" className="form" encType="multipart/form-data">
        <label type="text" htmlFor="title">
          Title:
        </label>
        <input
          className="input"
          name="title"
          required
          id="title"
          value="da"
          placeholder="Title"
        />
        <label htmlFor="text">Text:</label>
        <input
          className="input"
          name="text"
          required
          id="text"
          value="net"
          placeholder="text"
        />
        <label htmlFor="date">Date:</label>
        <input
          className="input"
          name="date"
          required
          id="date"
          value="2018-01-01"
          placeholder="title"
          type="date"
        />
        <label htmlFor="photo">file:</label>
        <input type="file" name="photo" required />
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
