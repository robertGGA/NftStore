import React, {useEffect, useState} from "react";
import Moralis from "moralis";
import {useAppSelector} from "../../../../utils/hooks/redux-hooks";
import {INFT} from "../../../../components/swipers/nftSwiper/NFTSwiper";
import {getNft} from "../../../../utils/hooks/getNfts";
import styles from "../SubPagesStyles.module.sass"
import {ShopCard} from "../../../../components/cards/shopCard/shopCard";
import {Oval} from "react-loader-spinner";
import {IUser} from "../../../../utils/models/iuser";
import {useParams} from "react-router-dom";
import {NftSkeleton} from "../../../../components/ui/loading/skeleton/nftSkeleton/nftSkeleton";

export const LikedList = () => {
    const [likedNfts, setLikedNfts] = useState<INFT[]>([]);
    const userSelector = useAppSelector(state => state.UserReducer);
    let contoller = new AbortController()
    const like = Moralis.Object.extend("Likes");
    const query = new Moralis.Query(like);
    const {wallet} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    query.containedIn("UserAddress", [
        !!wallet?wallet:userSelector.wallet
    ]);

    useEffect(() => {
        const fetchLikes = async () => {
            return await query.find();
        }
        const promises: any[] = [];
        const nfts: INFT[] = [];
        fetchLikes().then((r) => {
            r.map(async (i) => {
                const val = i.attributes;
                promises.push(getNft(val.Address, val.Token,contoller).then(r => {
                    nfts.push(r);
                }));
            })
            Promise.all(promises).then(() => {
                setLikedNfts(nfts);
                setIsLoading(false)
            })
        })
        return ()=>{
            contoller.abort()
        }
    }, []);

    return (<>
            {isLoading && <div className={styles.liked_container}>
                <NftSkeleton/>
                <NftSkeleton/>
                <NftSkeleton/>
            </div>}
            {!isLoading && <div className={styles.liked_container}>
                {likedNfts.map((e, counter) => {
                    return <ShopCard key={counter} creatorImgUrl={e.metadata.name} imgUrl={e.image} nftCost={'0'}
                                     nftName={e.metadata.name} address={e.token_address}
                                     token_id={e.token_id} amount={e.amount}/>
                })}
            </div>}
        </>

    )
}