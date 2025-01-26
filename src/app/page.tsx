"use server"
import Header from "@/components/Header";
import Services from "@/components/Services";
import Carousel from "@/components/Slider";


export default async function Home() {

    return (
        <>
            <Header />
            <Services />
            <Carousel/>
        </>
    );
}
