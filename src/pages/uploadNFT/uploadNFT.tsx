import styles from './upload.module.sass';
import {FileInput} from "../../components/ui/inputs/dragdrop/fileInput";
import {useState} from "react";
import img from '../../assets/images/tempImg/nftPreviewImg.png';
import Icon from "../../components/ui/icon/icon";
import {TextInput} from "../../components/ui/inputs/input/textInput";
import {DropDown} from "../../components/dropdown/dropDown";
import {DefaultButton} from "../../components/ui/buttons/default-button";

export const UploadNFT = () => {
    const [preview, setPreview] = useState(img);
    const [itemName, setItemName] = useState('');
    const [description, setDescription] = useState('');
    return (
        <div className={styles.background_uploadPage}>
            <div className={styles.uploadPage_container}>
                <div className={styles.create_nft_container}>
                    <h1>
                        Create single collectible
                    </h1>

                    <p className={styles.input_block_main_description}>
                        Upload file
                    </p>
                    <p className={styles.input_block_description}>
                        Drag or choose your file to upload
                    </p>

                    <FileInput setPreview={setPreview}/>

                    <p className={styles.input_block_main_description}>
                        Item details
                    </p>

                    <TextInput placeholder={'e. g. "Redeemable Bitcoin Card with logo"'} globalPlaceholder={'ITEM NAME'}
                               setValue={setItemName}/>

                    <TextInput placeholder={'e. g. “After purchasing you will able to recived the logo...”'}
                               globalPlaceholder={'description'} setValue={setDescription}/>

                    <label>
                        <p className={styles.label_font_description}>
                            Royalties
                        </p>
                        <DropDown items={['10%', '20%', '30%', '40%']} name={'Royalties'}/>
                    </label>
                    <div className={styles.subsettings}>
                        <TextInput placeholder={'e. g. Size'}
                                   globalPlaceholder={'size'} setValue={setDescription}/>

                        <TextInput placeholder={'e. g. Propertie'}
                                   globalPlaceholder={'propertie'} setValue={setDescription}/>

                    </div>
                    <div className={styles.createButton_container}>
                        <DefaultButton value={'Create item'} paddingRightLeft={24} type={'fdf'} paddingTopBottom={16} func={console.log} />
                    </div>

                </div>

                <div className={styles.preview_container}>
                    <div className={styles.preview_card}>
                        <h2>Preview</h2>

                        <img src={preview} className={styles.preview_img}/>

                        <div className={styles.nft_content}>
                            <div className={styles.nft_content_row}>
                                <p>
                                    {itemName}
                                </p>

                                <div className={styles.nft_price}>
                                    <p>
                                        {''} ETH
                                    </p>
                                </div>
                            </div>

                            <div className={styles.nft_content_row}>
                                <img className={styles.creatorAvatar} src={''} alt=""/>
                                <p>
                                    {''} in stock
                                </p>
                            </div>

                            <div className={styles.nft_content_row}>
                                <span className={styles.bet}>
                                    <Icon name={'nftbet'} width={20} height={20}/>
                                    <p className={styles.highest_bet}>
                                        Highest bid
                                    </p>
                                    <p className={styles.bet_price}>
                                        0.04 ETH
                                    </p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};