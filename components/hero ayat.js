import React from "react";

function HeroAyat(props) {
    return (
        <div className="relative w-full py-10 mb-10 overflow-hidden shadow-xl dark:shadow-lg dark:shadow-gray-400 h-fit bg-gradient-to-r rounded-xl from-light_secondary to-main">
            <div className="flex flex-col items-center justify-center w-full text-white">
                <h2 className="text-3xl font-normal">{props?.englishName}</h2>
                <p className="mb-3 text-lg font-light">
                    {props?.englishNameTranslation}
                </p>
                <div className="w-1/2 h-[0.5px] mb-5 bg-white"></div>
                <p className="mb-5 font-light uppercase">
                    {props?.revelationType} ● {props?.numberOfAyahs} ayat
                </p>
                <p className="text-4xl">
                    {props.id === 1 || props.id === 9
                        ? ""
                        : "بِسْمِ للَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ"}
                </p>
            </div>
            <img
                className="absolute z-0 opacity-5 w-80 -right-7 -bottom-36"
                src="/flat-quran.png"
                alt=""
            />
        </div>
    );
}

export default HeroAyat;
