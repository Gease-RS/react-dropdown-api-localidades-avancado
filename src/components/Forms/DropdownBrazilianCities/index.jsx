import { useEffect, useState } from "react";
import { fetchCitiesForState, parseCities } from "../../../helpers/ibge";
import Dropdrown from "../Dropdown";

const DropdownBrazilianCities = ({ id, name, state, onChange = () => {} }) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    setCities([{ label: "Carregando...", value: "" }]);
    fetchCitiesForState(state).then(parseCities).then(setCities);
  }, [state]);

  /*
  .then(setCities);

  é a mesma coisa que:
    .then((cities) => {
        setCities(cities);
      });
  */

  const dropdownOptions = {
    id,
    name,
    data: cities,
    onChange,
  };

  return <Dropdrown {...dropdownOptions} />;
};

export default DropdownBrazilianCities;
