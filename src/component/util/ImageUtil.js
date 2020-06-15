import React from 'react';

function ImageUtil({ src, alt, width, classn }) {
	return <img src={src} className={classn} alt={alt} width={width} />;
}

export default ImageUtil;
