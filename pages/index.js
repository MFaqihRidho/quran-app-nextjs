import Layout from "../components/layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home({ data }) {
    const router = useRouter();
    const [last, setLast] = useState([]);

    const handleClickSurah = (event) => {
        event.preventDefault();
        router.push(`/surah/${event.currentTarget.id}`);
    };

    useEffect(() => {
        const getLastAyat = async () => {
            await fetch(
                `https://api.alquran.cloud/v1/ayah/${
                    localStorage.getItem("last")
                        ? localStorage.getItem("last")
                        : 1
                }`
            )
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error("Something went wrong");
                })
                .then((responseJson) => {
                    setLast(responseJson);
                })
                .catch((error) => {
                    console.log(error);
                    setError(error);
                });
        };
        getLastAyat();
    }, []);

    return (
        <Layout
            title="Quran Web App"
            PageTitle="Home"
            PageDesc="Home Page the list of the surah"
        >
            <div className="mb-5">
                <p className="text-lg text-gray-500">Assalamualaikum</p>
                <p className="text-2xl font-semibold">Hamba Allah</p>
            </div>
            <div className="flex items-center justify-center mb-10">
                <div className="relative flex items-start w-full h-40 overflow-hidden rounded-2xl bg-gradient-to-r from-light_secondary to-main">
                    <div className="flex flex-col justify-between h-full gap-5 px-5 py-10">
                        <div className="flex items-center justify-center gap-1 text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                            </svg>
                            <p className="text-lg font-medium ">Last Read</p>
                        </div>
                        <div className="text-white">
                            <p className="text-lg font-semibold">
                                {last?.data?.surah?.englishName}
                            </p>
                            <p className="text-sm font-light">
                                Ayat no : {last?.data?.numberInSurah}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5 pb-20">
                {data.data.map((data) => {
                    return (
                        <div
                            onClick={(e) => handleClickSurah(e)}
                            key={data.number}
                            id={data.number}
                            className="flex flex-col gap-5 cursor-pointer"
                        >
                            <div className="flex flex-row items-center justify-between">
                                <div className="flex flex-row items-center gap-6 px-3">
                                    <div className="relative flex items-center justify-center w-3 h-3">
                                        <svg
                                            className="absolute inline-flex w-9 h-9 fill-main dark:fill-light_secondary"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M16.142 2l5.858 5.858v8.284l-5.858 5.858h-8.284l-5.858-5.858v-8.284l5.858-5.858h8.284zm.829-2h-9.942l-7.029 7.029v9.941l7.029 7.03h9.941l7.03-7.029v-9.942l-7.029-7.029z" />
                                        </svg>
                                        <p className="relative inline-flex">
                                            {data.number}
                                        </p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-xl font-medium">
                                            {data.englishName}
                                        </p>
                                        <p className="text-sm font-light text-gray-500 uppercase">
                                            {data.revelationType} ●{" "}
                                            {data.numberOfAyahs} ayat
                                        </p>
                                    </div>
                                </div>
                                <p className="text-4xl text-main dark:text-light_secondary">
                                    {data.name.replace("سُورَةُ", "")}
                                </p>
                            </div>
                            <div className="w-full h-[0.5px] bg-gray-500"></div>
                        </div>
                    );
                })}
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const surah = await fetch("https://api.alquran.cloud/v1/surah");
    const data = await surah.json();
    return {
        props: {
            data,
        },
    };
}
