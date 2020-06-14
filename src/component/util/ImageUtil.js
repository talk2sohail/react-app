import React from 'react';

function ImageUtil({ src, alt, width, className }) {
	return <img className={className} src={src} alt={alt} width={width} />;
}

export default ImageUtil;
