function Ayat(props) {
    return (
        <div className="w-full h-fit">
            <div className="flex items-center justify-between w-full px-5 mb-5 rounded-xl h-14 text-main bg-main/10 dark:bg-light_primary/10">
                <p className="px-4 text-lg font-light text-center text-white rounded-full bg-main">
                    {props.numberInSurah}
                </p>
            </div>
            <div className="flex flex-col gap-4 mb-5">
                <p className="self-end w-full text-4xl text-right">
                    {props.numberInSurah === 1 && props.surah !== 1
                        ? props?.text.replace(
                              "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
                              ""
                          )
                        : props?.text}
                </p>
                <p className="text-gray-500">{props.translate}</p>
            </div>
            <div className="w-full h-[0.5px] mb-5 bg-gray-500"></div>
        </div>
    );
}

export default Ayat;
