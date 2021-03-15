import axios from "axios";
import {useEffect, useState} from "react";

export default function UseAxios({URL, keywords}) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // const {data} = await axios(`https://api.mercadolibre.com/sites/MLA/search?q=${keywords}`);
        const {data} = await axios(`${URL}${keywords}`);

        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [URL, keywords]);

  return {error, loading, data};
}
