import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const Submit = styled.button``

const NFTUploadContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const MetaContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 650px;
    height: 800px;
    border-radius: 10px;
`

const TitleInput = styled.input``

const DescriptionInput = styled.input``

const ImageContainer = styled.div`
    border: 1px solid black;
    height: 450px;
    width: 450px;
    border-radius: 10px;
`

const ImagePreview = styled.image``


export const SubmitNFT = (props) => {
    const [image, setImage] = useState({ preview: "", raw: "" });
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');

    const hiddenFileInput = useRef(null);
    
    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    const handleImageUpload = e => {
        setImage({
            preview: URL.createObjectURL(e.target.files[0]),
            raw: e.target.files[0]
        });
    };

    const handleDescriptionChange = e => {
        setDescription(e.target.value)
    };

    const handleTitleChange = e => {
        setTitle(e.target.value)
    };

    return (
        <React.Fragment>
            <NFTUploadContainer>
                <ImageContainer>
                    {
                        image.preview ? <img src={image.preview} /> : null
                    }
                </ImageContainer>
                <MetaContainer>
                    <Submit onClick={handleClick}>
                        Upload an NFT
                    </Submit>
                    <input
                        type="file"
                        ref={hiddenFileInput}
                        onChange={handleImageUpload}
                        style={{display: 'none'}}
                        accept="image/png, image/jpeg"
                    />
                    <DescriptionInput 
                        placeholder="Enter a title for your NFT"
                        type="text"
                        value={description}
                        onChange={handleDescriptionChange}
                    />
                    <TitleInput
                        placeholder="Enter a description for your NFT"
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                    />
                </MetaContainer>
            </NFTUploadContainer>
        </React.Fragment>
    )
}

export default SubmitNFT