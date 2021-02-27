function Contact(props) {
  return (
    <tr>
      <td className="border p-1">
        <select className="form-control">
          <option>E-mail</option>
          <option>Phone</option>
          <option>Web Page</option>
          <option>LinkedIn</option>
        </select>
      </td>
      <td className="border p-1">
        <input type="text" className="form-control"></input>
      </td>
      <td className="border p-1">
        <button type="button" className="btn btn-secondary" onClick={props.onClick}>X</button>
      </td>
    </tr>
  );
}

export default Contact;
