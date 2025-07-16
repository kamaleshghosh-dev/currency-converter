import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const API_KEY = "b5eca4809989a839e70b2949"; // your key

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.result === "success") {
          setData(res.conversion_rates);
        } else {
          setData({});
          console.error("API error:", res["error-type"]);
        }
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setData({});
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;