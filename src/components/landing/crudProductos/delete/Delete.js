import { useState } from "react";

const Delete = (props) => {
  const [nombre, setNombre] = useState(props);
  console.log(props);
  return (
    <div>
      <button className="btn_sup" type="submit" onClick={nombre}>
        Supprimier
      </button>
    </div>
  );
};

export default Delete;
