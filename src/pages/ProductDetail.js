import Header from '../components/Header';
import ImgCarousel from '../components/ImgCarousel';
import ProductDetailRenderer from '../components/ProductDetailRenderer';

function ProductDetail() {
  return (
    <>
      <Header />
      <ProductDetailRenderer />
      <ImgCarousel title='Related Products' />
    </>
  );
}

export default ProductDetail;
