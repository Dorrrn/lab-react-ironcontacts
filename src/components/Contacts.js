export default function Contacts(props) {
  return (
    <section className="Contacts">
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        <tr>
          <td>
            {" "}
            <img src={props.pictureUrl} />
          </td>
          <td>{props.name}</td>
          <td>{props.popularity}</td>
        </tr>
      </table>
    </section>
  );
}
