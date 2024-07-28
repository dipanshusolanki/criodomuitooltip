import { useEffect, useState } from "react";
import "./App.css";
import fetchSongs from "./api";
import { Chip, Tooltip } from "@mui/material";

function App() {
  const [cardData, setCardData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchSongs();
      setCardData(data);
    };
    getData();
  }, []);

  return (
    <>
      <div className="main">
        {cardData !== null ? (
          <>
            <Tooltip
              title={`${cardData[0].songs.length} songs`}
              placement="top"
              arrow
            >
              <div className="card">
                <div className="cardContent">
                  <img
                    src={cardData[0].image}
                    alt={cardData[0].title}
                    className="cardImage"
                  />
                  <div className="cardFooter">
                    <Chip
                      sx={{
                        height: "23px",
                        fontSize: "10px",
                        fontFamily: "Poppins, sans-serif",
                        paddingX: "8px",
                        paddingY: "4px",
                        marginLeft: "8px",
                      }}
                      label={`${cardData[0].follows} Follows`}
                    />
                  </div>
                </div>
                <p className="cardText">{cardData[0].title}</p>
              </div>
            </Tooltip>
          </>
        ) : (
          <>NULL</>
        )}
      </div>
    </>
  );
}

export default App;
