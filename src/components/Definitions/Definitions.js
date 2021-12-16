import React from "react";
import "./Definitions.css";

const Definitions = ({ word, category, meanings, LightMode }) => {

    // if (meanings && meanings[0] && meanings[0].meanings) {
    //     console.log("meanings ", meanings[0].meanings[0].definitions)
    // }

    return (
        <div className="meanings">

            {
                meanings[0] && word && category === 'en' && (
                    <audio
                        src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
                        style={{ backgroundColor: "rgb(241 243 244)", borderRadius: 10 }}
                        controls
                    >
                        Oops dude! Your browser doesn't support audio.
                    </audio>
                )
            }

            {word === "" ? (
                <span className='subTitle'>Start by typing a word in Search</span>
            ) : (
                meanings.map((mean) => (
                    mean.meanings.map((item) => (
                        item.definitions.map((def) => (
                            <div
                                className="singleMean"
                                style={{
                                    backgroundColor: LightMode ? "#3b5360" : "white",
                                    color: LightMode ? "white" : "black"
                                }}
                            >
                                <b>{def.definition}</b>
                                <hr style={{ backgroundColor: "black", width: "100%" }} />
                                <div>
                                    {def.example && (
                                        <span>
                                            <b>Example : </b>{def.example}
                                        </span>
                                    )}
                                </div>
                                <div>
                                    {def.synonyms && (
                                        <span>
                                            <b>Synonyms : </b>
                                            {def.synonyms.map((s) => `${s}, `)}
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))
                    ))
                ))
            )}
        </div>
    );
}

export default Definitions;