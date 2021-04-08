import React, { useRef } from 'react';
import styled from 'styled-components';

const Submit = styled.button``


const SubmitNFT = (props) => {
    const hiddenFileInput = useRef(null);
    
    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        props.handleFile(fileUploaded);
    };

    return (
        <div>
            <Submit onClick={handleClick}>
            Upload an NFT
            </Submit>
            <input
            type="file"
            ref={hiddenFileInput}
            onChange={handleChange}
            style={{display: 'none'}}
            />
        </div>
    )
}

export default SubmitNFT