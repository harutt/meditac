import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import patientGuides from "../data/patientGuides";
import IletisimBolumu from "../components/IletisimBolumu";
import Footer from "../components/footer";


function HastaRehberi() {
    const { t } = useTranslation();

    return (
        <div className="max-w-screen-lg mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-6">{t("Hasta Rehberi")}</h1>
            <div className="space-y-6">
                {patientGuides.map((item) => (
                    <div key={item.id} className="bg-white p-6 shadow rounded">
                        <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                        <p className="text-gray-700 mb-2">{item.summary}</p>
                        <Link
                            to={`/hasta-rehberi/${item.id}`}
                            className="text-blue-600 hover:underline text-sm"
                        >
                            Detayları Gör
                        </Link>
                    </div>
                ))}
            </div>
            <IletisimBolumu />
            <Footer />

        </div>
    );
}

export default HastaRehberi;
