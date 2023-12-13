"use client";

const Level1 = () => {
  const words = [
    ["J", "C", "O", "D", "E", "F", "G", "H", "I", "J", "K", "L"],
    ["A", "A", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"],
    ["A", "B", "V", "D", "E", "F", "G", "H", "I", "J", "K", "L"],
    ["A", "B", "C", "A", "E", "F", "G", "H", "I", "J", "K", "L"],
    ["A", "B", "C", "D", "S", "F", "G", "H", "I", "J", "K", "L"],
    ["A", "B", "C", "D", "E", "C", "G", "H", "I", "J", "K", "L"],
    ["A", "B", "C", "D", "E", "F", "R", "H", "I", "J", "K", "L"],
    ["A", "B", "C", "D", "E", "F", "G", "I", "I", "J", "K", "L"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "P", "J", "K", "L"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "T", "K", "L"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"],
  ];

  const searchedWords = ["CODE", "AHMET", "ABCD", "JAVASCRIPT"];

  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto min-h-[calc(100vh-100px)]">
      <h2 className="text-3xl mb-4">Level 1</h2>
      <div className="max-w-[606px] h-auto border rounded-xl">
        {words.map((array, rowIndex) => (
          <div className="flex" key={rowIndex}>
            {array.map((word, colIndex) => (
              <button
                key={colIndex}
                className="rounded-xl text-3xl px-4 py-2  hover:bg-gray-400 transition-colors"
              >
                {word}
              </button>
            ))}
          </div>
        ))}
      </div>
      <div className="my-6">Words to find</div>
      <div>111</div>
      <button className="text-base px-4 py-2 bg-yellow-500 text-black font-medium rounded-3xl mt-6">
        SUBMIT WORD
      </button>
      <div className="max-w-5xl flex gap-20 mt-6 mb-12">
        {searchedWords.map((s, i) => (
          <div key={i}>{s}</div>
        ))}
      </div>
    </div>
  );
};

export default Level1;
