import { useEffect, useState } from "react";
import { fetchStates, parseStates } from "../../../helpers/ibge";

import Dropdrown from "../Dropdown";

const DropdownBrazilianStates = ({ id, name, onChange = () => {} }) => {
  const [states, setStates] = useState([]);

  useEffect(() => {
    setStates([{ label: "Carregando...", value: "" }]);
    fetchStates().then(parseStates).then(setStates);
  }, []);

  const dropdownOptions = {
    id,
    name,
    data: states,
    onChange,
  };

  //<Dropdrown id={id} name={name} data={states} onChange={onChange} />
  return <Dropdrown {...dropdownOptions} />;
};

export default DropdownBrazilianStates;
