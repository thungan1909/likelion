import CustomHeader from "../../component/base/CustomHeader/customHeader";
import BannerSection from "../../component/section/BannerSection/bannerSection";
import TopRatedSection from "../../component/section/TopRatedSection/topRatedSection";
import TrendingSection from "../../component/section/TrendingSection/trendingSection";
import CheckTokenServices from "../../service/checkTokenServices";
import "./homePage.css";

export default function HomePage() {
  const session_id = localStorage.getItem("session_id");

  return (
    <div id="homepage-wrapper">
      <CustomHeader sessionId={session_id}></CustomHeader>
      <BannerSection></BannerSection>
      <TrendingSection></TrendingSection>
      <TopRatedSection></TopRatedSection>
    </div>
  );
}
