import { useState, useEffect } from "react";

function Quote() {
  const [quoteData, setQuoteData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch("your_api_endpoint_here");
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          setQuoteData(data[0]);
        } else {
          setQuoteData({
            quote: "Failed to fetch quote.",
            character: "",
            image: "",
            characterDirection: "",
          });
        }
      } catch (error) {
        console.error("Error fetching quote:", error);
        setQuoteData({
          quote: "Failed to fetch quote.",
          character: "",
          image: "",
          characterDirection: "",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, []); // Empty dependency array ensures the effect runs only once

  return { quoteData, loading };
}

export default Quote;
