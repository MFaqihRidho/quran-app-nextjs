import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout
      title="Quran Web App"
      PageTitle="Home"
      PageDesc="Home Page the list of the surah"
    >
      <div className="mb-5">
        <p className="text-lg text-gray-500">Assalamu'alaikum</p>
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
                {/* {last?.surah?.englishName} */}
              </p>
              <p className="text-sm font-light">
                {/* Ayat no : {last?.numberInSurah} */}
              </p>
            </div>
          </div>
          <img
            className="absolute w-64 -right-7 -bottom-24"
            src="/flat-quran.png"
            alt=""
          />
        </div>
      </div>
    </Layout>
  );
}
