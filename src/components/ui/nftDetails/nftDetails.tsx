import styles from "./nftDetails.module.sass"
import React, {useEffect, useState} from "react";
import {useAppSelector} from "../../../utils/hooks/redux-hooks";
import {Oval} from "react-loader-spinner";

export const NftDetails = () => {
    const selector = useAppSelector(state => state.OwnerReducer);
    const [isLoading,setIsLoading] = useState(true);
    const [details, setDetails] = useState(selector.owners[0]);
    useEffect(() => {
        try {
            setDetails(selector.owners[0]);
            setIsLoading(false)
        } catch (e) {
            // @ts-ignore
            setDetails({});
            setIsLoading(false)
        }
    }, [selector]);
    if(isLoading) return <div className={styles.loading}>
        <Oval color="#00BFFF" height={100} width={100}/>
    </div>

    return (
        <div className={styles.infoWrapper}>
            <ul className={styles.nftDetails}>
                <li className={styles.nftDetail}>
                    <label htmlFor="contractAddress">
                        Contract address:
                    </label>
                    <span id={"contractAddress"}>
                        {details.token_address}
                    </span>
                </li>
                <li className={styles.nftDetail}>
                    <label htmlFor="tokenId">
                        Token id:
                    </label>
                    <span id={"tokenId"}>
                        {details.token_id}
                    </span>
                </li>
                <li className={styles.nftDetail}>
                    <label htmlFor="Token Standard">
                        Token Standard
                    </label>
                    <span id={"Token Standard"}>
                        {details.contract_type}
                    </span>
                </li>
                <li className={styles.nftDetail}>
                    <label htmlFor="Blockchain">
                        Blockchain
                    </label>
                    <span id={"Blockchain"}>
                        Ethereum
                    </span>
                </li>
            </ul>
        </div>
    )
}