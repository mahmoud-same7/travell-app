import Form_Search from "../components/Form_search"
import Footer from "../components/footer"
import Holiday from "../components/holidays"
import Slide_Home from "../components/slideHome"
import Slider_show from "../components/sliderShow"
import Deals from "../components/topDeals"
import Top_Hotel_Part from "../components/topHotel"
import VisaCard from "../components/visaCards"

const Home = ()=> {
    return(
        <>
            <Slide_Home/>
            <Form_Search/>
            <Top_Hotel_Part/>
            <Deals/>
            <VisaCard/>
            <Holiday/>
            <Slider_show/>
            <Footer/>
        </>
    )
}

export default Home