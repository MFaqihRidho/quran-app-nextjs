import Layout from "../../components/layout";
import HeroAyat from "../../components/hero ayat";
import Ayat from "../../components/ayat";

function Surah({ data, translate }) {
    return (
        <Layout
            title={`${data?.data?.englishName}`}
            PageTitle={`${data?.data?.englishName}`}
        >
            <HeroAyat
                englishName={data?.data?.englishName}
                englishNameTranslation={data?.data?.englishNameTranslation}
                revelationType={data?.data?.revelationType}
                numberOfAyahs={data?.data?.numberOfAyahs}
                key={data?.data?.number}
            ></HeroAyat>
            {data?.data?.ayahs.map((data, index) => {
                return (
                    <Ayat
                        numberInSurah={data?.numberInSurah}
                        text={data?.text}
                        translate={translate?.data?.ayahs[index]?.text}
                        key={data?.number}
                        surah={data?.number}
                    ></Ayat>
                );
            })}
        </Layout>
    );
}

export default Surah;

export async function getStaticPaths() {
    const res = await fetch("https://api.alquran.cloud/v1/surah");
    const surah = await res.json();

    const paths = surah.data.map((data) => ({
        params: { id: data.number.toString() },
    }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const ayat = await fetch(`https://api.alquran.cloud/v1/surah/${params.id}`);
    const data = await ayat.json();
    const translateAyat = await fetch(
        `https://api.alquran.cloud/v1/surah/${params.id}/id.indonesian`
    );
    const translate = await translateAyat.json();
    return {
        props: {
            data,
            translate,
        },
    };
}
