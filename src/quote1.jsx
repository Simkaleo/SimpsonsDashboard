import React from "react";
import Quote from "./quote";

const QuoteComponent = () => {
  const { quoteData, loading } = Quote();

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>{quoteData.quote}</p>
          <p>Character: {quoteData.character}</p>
          <img src={quoteData.image} alt={quoteData.character} />
          <p>Character Direction: {quoteData.characterDirection}</p>
          {/* Additional JSX for displaying other properties */}
        </>
      )}
    </div>
  );
};

export default QuoteComponent;
