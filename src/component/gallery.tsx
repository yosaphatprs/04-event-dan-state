import { sculptureList } from "@/data/article";
import { useState } from "react";

export default function Gallery() {
    // let index = 0; // index data mulai dari 0
    const [index, setIndex] = useState(0); // menggunakan hook state untuk menangani index

    function handleNext() {
        // index = index + 1; // counter index +1, untuk melihat data selanjutnya
        if (index < sculptureList.length - 1)
            setIndex(index + 1);
        else
            setIndex(0);
    }

    function handleBefore() {
        // index = index + 1; // counter index +1, untuk melihat data selanjutnya
        if (index > 0)
            setIndex(index - 1);
        else
            setIndex(sculptureList.length - 1);
    }

    let sculpture = sculptureList[index]; // membaca data sesuai dengan index

    return (
        <>
            <button onClick={handleBefore}
                className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">
                Artikel Sebelumnya
            </button>
            <button onClick={handleNext}
                className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">
                Artikel Selanjutnya
            </button>
            <h2><i>{sculpture.name}</i></h2>
            <h3>({index + 1} dari {sculptureList.length})</h3>
            <img src={sculpture.url} alt={sculpture.alt} />
            <p>
                {sculpture.description}
            </p>
        </>
    )
}