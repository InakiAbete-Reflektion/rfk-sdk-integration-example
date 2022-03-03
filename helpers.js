/* eslint-disable camelcase */
export const getProductImage = ({ image_url, sku_image_url: image = image_url } = {}) => image;
export const getProductUrl = ({ url, sku_url: productUrl = url } = {}) => productUrl;
