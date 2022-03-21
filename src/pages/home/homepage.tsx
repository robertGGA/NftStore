import styles from './homepageStyles.module.sass';
import NFTSwiper from "../../components/swipers/nftSwiper/NFTSwiper";
import {MainNFTSwiper} from "../../components/swipers/mainNFTSwiper/mainNFTSwiper";
import NFTCollectionsList from "../../components/nftCollectionsList/nftCollectionsList";

export const Homepage = () => {
    return(
      <main>
          <div className={styles.main_container}>
              <h1>NFT of the day</h1>
              <MainNFTSwiper/>
              <NFTCollectionsList/>
              <NFTSwiper/>
          </div>
      </main>
    );
}